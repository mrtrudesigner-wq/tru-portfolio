#!/usr/bin/env python3
"""
Automated Daily Google Analytics Reporter for Nguyễn Công Trứ Portfolio
Sends intelligent, actionable design insights to Telegram at 21:00 (UTC+7).
Silent mode: Exits without sending any message if there are 0 visitors today.
"""

import os
import sys
import json
import datetime
import requests

def main():
    property_id = os.environ.get('GA_PROPERTY_ID', '447155326')
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '9211189986:AAFaVUSVjZEvXH9tmgqnJBQF3DPha849jEI')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '8079649476')
    sa_key_raw = os.environ.get('GA_SERVICE_ACCOUNT_KEY')

    if not sa_key_raw:
        print("ERROR: GA_SERVICE_ACCOUNT_KEY environment variable is missing.")
        sys.exit(1)

    try:
        if os.path.exists(sa_key_raw):
            with open(sa_key_raw, 'r', encoding='utf-8') as f:
                sa_info = json.load(f)
        else:
            sa_info = json.loads(sa_key_raw)
    except Exception as e:
        print(f"ERROR: Failed to parse GA_SERVICE_ACCOUNT_KEY: {e}")
        sys.exit(1)

    from google.oauth2 import service_account
    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        DateRange,
        Dimension,
        Metric,
        RunReportRequest,
        FilterExpression,
        Filter
    )

    credentials = service_account.Credentials.from_service_account_info(sa_info)
    client = BetaAnalyticsDataClient(credentials=credentials)

    # Date range: today (Option to pass DATE_RANGE=yesterday or 7daysAgo for manual tests)
    date_preset = os.environ.get('GA_DATE_PRESET', 'today')
    date_ranges = [DateRange(start_date=date_preset, end_date="today")]

    # 1. Overview Metrics
    overview_req = RunReportRequest(
        property=f"properties/{property_id}",
        date_ranges=date_ranges,
        metrics=[
            Metric(name="activeUsers"),
            Metric(name="screenPageViews"),
            Metric(name="userEngagementDuration"),
            Metric(name="sessions")
        ]
    )
    overview_resp = client.run_report(overview_req)

    active_users = 0
    page_views = 0
    engagement_duration = 0
    sessions = 0

    if overview_resp.rows:
        row = overview_resp.rows[0]
        active_users = int(row.metric_values[0].value or 0)
        page_views = int(row.metric_values[1].value or 0)
        engagement_duration = float(row.metric_values[2].value or 0)
        sessions = int(row.metric_values[3].value or 0)

    # SILENT MODE CHECK: If zero visitors, exit cleanly without sending message
    if active_users == 0 and page_views == 0:
        print("Silent mode: Zero visitors recorded today. No Telegram message sent.")
        sys.exit(0)

    # 2. Page Breakdown
    pages_req = RunReportRequest(
        property=f"properties/{property_id}",
        date_ranges=date_ranges,
        dimensions=[Dimension(name="pagePath")],
        metrics=[Metric(name="screenPageViews"), Metric(name="activeUsers")],
        limit=10
    )
    pages_resp = client.run_report(pages_req)
    pages_list = []
    case_views = {"yen": 0, "iq_myth": 0, "momo": 0, "home": 0}
    for row in pages_resp.rows:
        path = row.dimension_values[0].value
        views = int(row.metric_values[0].value or 0)
        pages_list.append((path, views))
        if 'yen' in path:
            case_views["yen"] += views
        elif 'iq-myth' in path:
            case_views["iq_myth"] += views
        elif 'momo' in path:
            case_views["momo"] += views
        elif path in ['/', '/index.html']:
            case_views["home"] += views

    # 3. Traffic Sources
    sources_req = RunReportRequest(
        property=f"properties/{property_id}",
        date_ranges=date_ranges,
        dimensions=[Dimension(name="sessionSource"), Dimension(name="sessionMedium")],
        metrics=[Metric(name="activeUsers")],
        limit=5
    )
    sources_resp = client.run_report(sources_req)
    sources_list = []
    for row in sources_resp.rows:
        src = row.dimension_values[0].value
        med = row.dimension_values[1].value
        users = int(row.metric_values[0].value or 0)
        src_label = src if med in ['(none)', '(not set)'] else f"{src} ({med})"
        sources_list.append((src_label, users))

    # 4. Device Categories
    device_req = RunReportRequest(
        property=f"properties/{property_id}",
        date_ranges=date_ranges,
        dimensions=[Dimension(name="deviceCategory")],
        metrics=[Metric(name="activeUsers")]
    )
    device_resp = client.run_report(device_req)
    device_counts = {}
    for row in device_resp.rows:
        cat = row.dimension_values[0].value.capitalize()
        users = int(row.metric_values[0].value or 0)
        device_counts[cat] = users

    # 5. Conversion Events (Copy Email)
    events_req = RunReportRequest(
        property=f"properties/{property_id}",
        date_ranges=date_ranges,
        dimensions=[Dimension(name="eventName")],
        metrics=[Metric(name="eventCount")]
    )
    events_resp = client.run_report(events_req)
    copy_email_count = 0
    for row in events_resp.rows:
        ename = row.dimension_values[0].value
        cnt = int(row.metric_values[0].value or 0)
        if ename == 'copy_email':
            copy_email_count += cnt

    # 6. Geography (Cities)
    geo_req = RunReportRequest(
        property=f"properties/{property_id}",
        date_ranges=date_ranges,
        dimensions=[Dimension(name="city"), Dimension(name="country")],
        metrics=[Metric(name="activeUsers")],
        limit=5
    )
    geo_resp = client.run_report(geo_req)
    geo_list = []
    for row in geo_resp.rows:
        city = row.dimension_values[0].value
        country = row.dimension_values[1].value
        users = int(row.metric_values[0].value or 0)
        if city not in ['(not set)', '']:
            geo_list.append(f"{city}, {country} ({users})")
        else:
            geo_list.append(f"{country} ({users})")

    # Format Avg Engagement Time
    avg_sec = round(engagement_duration / max(active_users, 1))
    mins = avg_sec // 60
    secs = avg_sec % 60
    avg_time_str = f"{mins}m {secs:02d}s" if mins > 0 else f"{secs}s"

    # BUILD AUTOMATED INSIGHTS
    insights = []
    if copy_email_count > 0:
        insights.append(
            f"🎯 <b>Tín hiệu tuyển dụng cao:</b> Có <b>{copy_email_count} lượt sao chép email</b>! "
            f"Ai đó đang chuẩn bị gửi thư phỏng vấn hoặc trao đổi dự án. Hãy kiểm tra hòm thư <code>mr.tru.designer@gmail.com</code>."
        )

    # Top Case Study
    top_case = None
    if case_views["yen"] > 0 or case_views["iq_myth"] > 0 or case_views["momo"] > 0:
        sorted_cases = sorted([
            ("Yên (Aging-Tech)", case_views["yen"]),
            ("IQ Myth (EdTech)", case_views["iq_myth"]),
            ("MoMo Transfer (FinTech)", case_views["momo"])
        ], key=lambda x: x[1], reverse=True)
        top_name, top_cnt = sorted_cases[0]
        if top_cnt > 0:
            insights.append(
                f"📖 <b>Dự án gây chú ý nhất:</b> Case study <b>{top_name}</b> dẫn đầu với {top_cnt} lượt xem. "
                f"Dự án này đang tạo ấn tượng mạnh về năng lực Product Craft."
            )

    # Reading depth
    if avg_sec >= 90:
        insights.append(f"🔥 <b>Thời gian đọc sâu:</b> Trung bình {avg_time_str}/người. Người xem thực sự dừng lại đọc giải pháp thiết kế chứ không chỉ lướt qua.")
    elif avg_sec >= 30:
        insights.append(f"⏱ <b>Thời gian đọc:</b> Đạt {avg_time_str}/người, người xem có duyệt qua các nội dung chính.")
    else:
        insights.append("⚡️ <b>Lướt nhanh:</b> Thời gian xem khá ngắn (<30s), người xem chủ yếu lướt trang đầu.")

    # Device context
    desktop_cnt = device_counts.get("Desktop", 0)
    mobile_cnt = device_counts.get("Mobile", 0)
    total_dev = desktop_cnt + mobile_cnt
    if total_dev > 0:
        pct_desktop = round(desktop_cnt / total_dev * 100)
        if pct_desktop >= 60:
            insights.append("💻 <b>Bối cảnh:</b> Phần lớn truy cập từ Desktop — Nhà tuyển dụng / Design Lead đang ngồi tại máy tính văn phòng xem xét hồ sơ.")
        elif pct_desktop <= 40:
            insights.append("📱 <b>Bối cảnh:</b> Phần lớn truy cập từ Mobile — Người xem đang lướt mạng xã hội hoặc mở link trên điện thoại.")

    # BUILD TELEGRAM MESSAGE
    today_vn = (datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=7)).strftime("%d/%m/%Y")

    lines = [
        f"📊 <b>BÁO CÁO PHÂN TÍCH TRUY CẬP // TRỨ PORTFOLIO</b>",
        f"🗓 <i>Ngày: {today_vn} (Tổng kết 21:00)</i>",
        "",
        "<b>1. 👥 SỐ LIỆU TỔNG QUAN</b>",
        f"• Khách truy cập: <b>{active_users}</b> người",
        f"• Lượt xem trang: <b>{page_views}</b> lượt (TB {round(page_views / max(active_users, 1), 1)} trang/người)",
        f"• Thời gian đọc TB: <b>{avg_time_str}</b>",
        f"• Tương tác chuyển đổi: <b>{copy_email_count}</b> lượt copy email 🎯" if copy_email_count > 0 else "• Tương tác chuyển đổi: 0 lượt copy email",
        "",
        "<b>2. 📂 DỰ ÁN & TRANG XEM NHIỀU NHẤT</b>"
    ]

    for ppath, pviews in pages_list[:4]:
        label = ppath
        if ppath in ['/', '/index.html']:
            label = "Trang chủ (index.html)"
        elif 'yen' in ppath:
            label = "Yên — Aging-Tech (yen.html)"
        elif 'iq-myth' in ppath:
            label = "IQ Myth — EdTech (iq-myth.html)"
        elif 'momo' in ppath:
            label = "MoMo Transfer (momo.html)"
        lines.append(f"• {label}: <b>{pviews}</b> lượt xem")

    if sources_list:
        lines.append("")
        lines.append("<b>3. 🌍 NGUỒN TRUY CẬP</b>")
        for src, cnt in sources_list[:3]:
            lines.append(f"• {src}: <b>{cnt}</b> người")

    if geo_list:
        lines.append(f"• Địa điểm: {', '.join(geo_list[:3])}")

    dev_str = " | ".join([f"{k}: {v}" for k, v in device_counts.items()])
    if dev_str:
        lines.append(f"• Thiết bị: {dev_str}")

    if insights:
        lines.append("")
        lines.append("────────────────────────────")
        lines.append("<b>💡 NHẬN ĐỊNH & GỢI Ý CỦA BOT:</b>")
        for ins in insights:
            lines.append(f"• {ins}")

    lines.append("")
    lines.append("🔗 <a href='https://mrtrudesigner.vercel.app'>https://mrtrudesigner.vercel.app</a>")

    message_text = "\n".join(lines)

    # Send to Telegram
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": message_text,
        "parse_mode": "HTML",
        "disable_web_page_preview": True
    }
    resp = requests.post(url, json=payload, timeout=10)
    if resp.status_code == 200:
        print("Successfully delivered analytics report to Telegram!")
    else:
        print(f"Failed to send to Telegram: {resp.status_code} - {resp.text}")
        sys.exit(1)

if __name__ == '__main__':
    main()
