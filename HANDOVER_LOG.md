# TÀI LIỆU BÀN GIAO DỰ ÁN PORTFOLIO — NGUYỄN CÔNG TRỨ (TRÚ)
> **Mục đích:** Dành cho AI tiếp quản (ChatGPT / Claude / Gemini) để hiểu trọn vẹn ngữ cảnh dự án, kiến trúc kỹ thuật, quy tắc nội dung, tình trạng triển khai và tiếp tục phát triển không bị sai lệch.

---

## 1. THÔNG TIN CHỦ THỂ & NGUYÊN TẮC ĐỊNH VỊ (STRICT PERSONA)

* **Họ và tên:** Nguyễn Công Trứ (Trú)
* **Chức danh định vị:** **Product Designer · UI/UX Designer**
* **Kinh nghiệm làm việc thực tế:**
  * **07/2024 – Nay:** Product / UI/UX Designer tại **Marchi Lab** (SaaS, E-commerce, EdTech & Web3).
  * **06/2023 – 06/2024:** UI/UX Designer tại **HIVELAB VINA** (Hệ sinh thái Samsung & Naver, tiêu chuẩn Apple HIG & Material Design).
* **Học vấn:** Cử nhân Thiết kế Đồ họa — ĐH Sư phạm Nghệ thuật Trung Ương (NUAE) (2018 – 2024).
* **Kênh liên hệ:**
  * Website chính thức: `https://mrtrudesigner.vercel.app`
  * Email: `mr.tru.designer@gmail.com`
  * SĐT: `+84 357 458 457` (Hà Nội, Việt Nam)
  * GitHub: `https://github.com/mrtrudesigner-wq/tru-portfolio.git`

> [!CAUTION]
> ### CÁC NGUYÊN TẮC CẤM KỴ (ZERO TOLERANCE RULES):
> 1. **KHÔNG BAO GIỜ xưng "Lead Designer":** Người dùng đã yêu cầu rõ *"tôi chưa bao giờ làm lead design"*. Luôn giữ giọng văn khiêm tốn, thực chiến của một **Senior UI/UX / Product Designer**.
> 2. **TUYỆT ĐỐI KHÔNG nhắc đến "Lama Lama":** Đây là tên template/dự án cũ đã bị loại bỏ hoàn toàn khỏi codebase.
> 3. **Ngôn ngữ trao đổi với người dùng:** Luôn phản hồi, giải thích và báo cáo bằng **Tiếng Việt**.

---

## 2. KIẾN TRÚC KỸ THUẬT & HỆ THỐNG THIẾT KẾ

### Tech Stack
* **Ngôn ngữ:** HTML5 Semantic + Tailwind CSS (CDN) + Vanilla JavaScript (ES6+).
* **Typography:**
  * Font chính (Heading + Body): **Bricolage Grotesque** (Google Fonts).
  * Font kỹ thuật (Badge, Tag, Metadata, Terminal): **JetBrains Mono**.
* **Thư viện:**
  * **Lucide Icons** (CDN).
  * **GSAP 3 + ScrollTrigger** (hiệu ứng entrance, reveal, text roll, glitch).
  * **Lenis Smooth Scroll** (cuộn mượt trang).
* **Hệ thống Theme (3 chế độ):**
  * `light`: Nền trắng ngà (`#F5F5F0`), chữ đen (`#0E0E0E`), accent xanh lá/đen.
  * `dark`: Nền đen sâu (`#0A0A0B`), chữ sáng (`#F5F5F0`), accent xanh neon (`#C4FF00`).
  * `pink`: Nền hồng thương hiệu MoMo (`#FF7096`), chữ đậm (`#121212`).
  * Trạng thái lưu trữ tại `localStorage.getItem('tru_theme')`.
* **Hệ thống Favicon thích ứng động (Dynamic Theme Favicon):**
  * `favicon.svg`: Chứa cả 2 biểu tượng kèm CSS media query `@media (prefers-color-scheme: dark)`.
  * `favicon-light.png`: Logo chữ "Tru." màu đen (dành cho tab trình duyệt sáng).
  * `favicon-dark.png`: Logo chữ "Tru." màu trắng sắc nét (dành cho tab trình duyệt tối).
  * Script tự động đổi favicon theo theme website và theme hệ điều hành.
* **Hệ thống Song ngữ (Bilingual VI / EN):**
  * Từ điển `translations.vi` và `translations.en` trong từng file HTML.
  * Tự động quét và gán qua `[data-i18n]`, lưu trạng thái tại `localStorage.getItem('tru_lang')`.
* **Chuẩn Responsive Mobile:**
  * Thẻ `html, body { overflow-x: clip; max-width: 100%; }` chống tràn ngang 100% trên thiết bị gập/hẹp (Samsung Galaxy Z Flip 5 / 360px).

---

## 3. CẤU TRÚC FILE TRONG THƯ MỤC DỰ ÁN

Thư mục làm việc: `/Volumes/Home_EX/tổng hợp/dự án/design with AI/tru-portfolio/`

```text
tru-portfolio/
├── index.html                   # Trang chủ Portfolio (Hero, Project Index, About, Contact)
├── yen.html                     # Case Study 01: Hệ sinh thái Yên (Aging-Tech Dual App)
├── iq-myth.html                 # Case Study 02: IQ Myth (EdTech Behavioral Testing UI)
├── momo.html                    # Case Study 03: MoMo Transfer Redesign (Fintech 40M+ Users)
├── 404.html                     # Trang báo lỗi 404 phong cách Swiss Modernism
├── favicon.svg                  # Favicon SVG đa chế độ sáng/tối
├── favicon-light.png            # Favicon PNG đen (cho tab sáng)
├── favicon-dark.png             # Favicon PNG trắng (cho tab tối)
├── assets/
│   ├── TRU_Product_Designer_CV.pdf # Bản CV PDF mới nhất (Tháng 11/2026 - 1.58 MB)
│   ├── cv.pdf                      # Alias tải nhanh CV
│   ├── tru-portrait.png            # Ảnh chân dung của Trứ
│   ├── covers/                     # Ảnh bìa thumbnail tối ưu WebP cho Mobile (<150KB tổng)
│   │   ├── yen-mobile.webp
│   │   ├── iq-mobile.webp
│   │   └── momo-mobile.webp
│   └── iq-myth/                    # Toàn bộ Video MP4 và ảnh cục bộ của Case Study IQ Myth
│       ├── iq-myth-hero.mp4        # Video Hero Section (613 KB)
│       ├── iq-myth-test.mp4        # Video Màn hình bài test 40 câu (273 KB)
│       ├── iq-myth-email.mp4       # Video Thu thập Email & AI analysis (1.38 MB)
│       ├── iq-myth-mobile.png      # Mockup Mobile-first & Leaderboard (386 KB)
│       └── iq-myth-illus.png       # Trọn bộ minh họa đen trắng - xanh neon (78 KB)
```

---

## 4. CHI TIẾT NỘI DUNG CÁC TRANG & DỰ ÁN

### 1. Trang Chủ (`index.html`)
* **Top bar:** Trạng thái sẵn sàng làm việc, đồng hồ giờ Hà Nội (GMT+7) và nút tải `RESUME ↘`.
* **Phần PROJECT INDEX (Danh mục dự án):**
  * **Trên Desktop (`lg:`):** Hiển thị danh sách chữ thanh lịch, khi rê chuột ảnh preview sẽ bay và nghiêng theo gia tốc chuột.
  * **Trên Mobile/Tablet (`< lg`):** Tự động hiển thị khung ảnh bìa mockup tỉ lệ 16:10 (`assets/covers/*.webp`) ngay dưới tên dự án để khắc phục việc màn hình cảm ứng không có hiệu ứng hover chuột.
* **3 Case Studies chính thức:**
  1. **01 // YÊN — CHĂM SÓC BỐ MẸ TỪ XA:**
     * Tag: `AGING-TECH · HEALTHCARE DUAL APP · 2026`
     * Mô tả: *"Hai ứng dụng kết nối bố mẹ và con cái qua ba nhu cầu cốt lõi: phát hiện té ngã, cảnh báo lừa đảo bằng AI và lịch nhắc thuốc trực quan."*
  2. **02 // IQ MYTH — TRẢI NGHIỆM BÀI TEST:**
     * Tag: `EDTECH · UI/UX & PROTOTYPING · 2024`
     * Mô tả: *"Thiết kế trải nghiệm làm bài test tập trung từ trang giới thiệu đến màn hình bài thi ma trận và luồng phân tích nhận kết quả qua email."*
  3. **03 // MOMO TRANSFER REDESIGN:**
     * Tag: `FINTECH · UX RESEARCH & REDESIGN · 2025`
     * Mô tả: *"Đề xuất cấu trúc lại luồng xác nhận chuyển tiền nhằm giảm 33 giây do dự và loại bỏ nỗi sợ chuyển nhầm cho hơn 40 triệu người dùng MoMo."*
* **Khối Quick Drawer:** Bấm vào bất kỳ dự án nào sẽ mở ngăn kéo xem nhanh tóm tắt dự án trước khi chuyển vào case study chi tiết.
* **Khối Giới thiệu (About & Experience):** Ghi rõ kinh nghiệm tại Marchi Lab và HIVELAB VINA; nút tải CV trực tiếp.

### 2. Case Study IQ Myth (`iq-myth.html`)
* Đã khôi phục đầy đủ 100% nội dung gốc từ Framer:
  * **Mục 02:** Ba nhận định ban đầu (Bắt đầu bài test ngay, Các bước sau bài test, Minh bạch giá).
  * **Mục 03:** Typography System (Bricolage Grotesque Type Ramp 64px / 32px / 16px).
  * **Mục 04 (Các quyết định UI chính):** 5 thẻ so le (Alternating Grid) chứa **3 video MP4 chạy tự động** và **2 ảnh mockup**.
  * **Mục 05:** Thử nghiệm & cải tiến trang Pricing Screen (So sánh Before/After) + Đo lường chuyển đổi.
  * **Mục 06:** Bài học Craft & Tách dữ liệu quan sát khỏi giả định thiết kế.

### 3. Case Study MoMo (`momo.html`) & Yên (`yen.html`)
* Đã xóa sạch các khung viền/nền đen xung quanh mockup điện thoại, nền ảnh trong suốt tự nhiên.
* Tinh chỉnh lại giọng văn thực tế của Product Designer, bỏ các danh xưng "Lead".

### 4. Trang 404 (`404.html`)
* Thiết kế theo phong cách **Swiss Modernism (Hướng C - Tối giản thanh lịch)**:
  * Số 404 khổ lớn căn giữa trang nhã.
  * Nút hành động: *Về trang chủ*, *🎲 Xem dự án ngẫu nhiên (Roulette)*, *Trang trước*.
  * Danh mục 3 thẻ bài dẫn về 3 case study chính thức với mô tả chuẩn xác.
  * Phím tắt tiện lợi: Bấm <kbd>ESC</kbd> để về ngay trang chủ.

---

## 5. QUY TRÌNH DEPLOY VÀ QUẢN LÝ GIT

* **Cơ chế triển khai:** Vercel kết nối trực tiếp với branch `main` của GitHub repo `mrtrudesigner-wq/tru-portfolio`.
* **Cấu hình SSH an toàn trên Mac:**
  * Private Key: `~/.ssh/id_ed25519`
  * Config `~/.ssh/config`: Đã cấu hình trỏ thẳng IP GitHub `20.205.243.166` để tránh lỗi DNS chập chờn trên macOS.
* **Lệnh deploy khi có cập nhật mới:**
  ```bash
  cd "/Volumes/Home_EX/tổng hợp/dự án/design with AI/tru-portfolio"
  git add .
  git commit -m "nội dung cập nhật"
  git push origin main
  ```
  *(Vercel sẽ tự động kích hoạt Build & Deploy trong 10-20 giây)*

---

## 6. DANH SÁCH CÔNG VIỆC TIẾP THEO (GỢI Ý CHO CHATGPT)

1. Nếu người dùng muốn bổ sung dự án thứ 4 (ví dụ: *Dropnoxe Enterprise Dashboard* hoặc *Petadrama* như đề cập trong CV):
   - Tạo file case study mới (ví dụ: `dropnoxe.html`) kế thừa đúng header, footer, theme system và component structure từ `yen.html` / `iq-myth.html`.
   - Cập nhật số đếm dự án từ `ALL (3)` lên `ALL (4)` trên `index.html` và thêm vào danh mục 404.
2. Kiểm tra định kỳ liên kết CV tại `assets/TRU_Product_Designer_CV.pdf` mỗi khi người dùng xuất bản file CV mới từ Figma/Canva.
3. Luôn chạy kiểm tra cú pháp thẻ đóng mở HTML trước khi push lên main.
