# HỆ THỐNG THIẾT KẾ & HƯỚNG DẪN MIGRATION
Dành cho Portfolio của **Trứ (Product Designer)**

---

## 1. Giới thiệu tổng quan
Dự án này là phiên bản tái cấu trúc toàn diện từ trang Framer cũ (phiên bản cũ) sang phong cách **Editorial Neo-Grotesque & Industrial Architecture**:
- **Tập trung vào tính xác thực (No Fluff)**: Tuyên ngôn thẳng thắn về tư duy giải quyết vấn đề.
- **Phân cấp thị giác tương phản cực đại**: Tiêu đề khổng lồ kết hợp cùng micro-labels monospaced trong dấu ngoặc vuông `[ ... ]`.
- **Bố cục bảng tương tác (Tabular Interactive Index)**: Danh sách dự án với đường kẻ hairline và hiệu ứng floating preview theo con trỏ chuột.

---

## 2. Bảng Design Tokens

### Màu sắc (Color Tokens)
| Tên Token | Light Mode (Chính) | Dark Mode (Terminal) | Pink Accent | Mục đích sử dụng |
| :--- | :--- | :--- | :--- | :--- |
| `--bg-primary` | `#F5F5F0` (Off-White ngà) | `#0C0C0D` (Đen chì) | `#FF7096` | Màu nền chủ đạo toàn trang |
| `--bg-secondary` | `#EAEAE4` | `#161618` | `#FF85A7` | Khối phụ, filter bar, card background |
| `--text-primary` | `#0E0E0E` (Đen sâu) | `#F5F5F0` (Trắng ấm) | `#121212` | Tiêu đề H1/H2, tên dự án, text chính |
| `--text-muted` | `#666660` | `#8E8E93` | `#3D1220` | Mô tả phụ, micro-labels, metadata |
| `--border-color` | `rgba(14, 14, 14, 0.14)` | `rgba(245, 245, 240, 0.14)` | `rgba(18, 18, 18, 0.2)` | Đường kẻ hairline phân chia section |
| `--accent` | `#0E0E0E` | `#C4FF00` (Acid Lime) | `#121212` | Điểm nhấn active, button hover, status dot |

### Typography Ramp
- **Heading / Display**: `Bricolage Grotesque` (Sans-serif)
  - Hero H1: `text-5xl` đến `text-8xl` (hoặc `7.5rem` trên màn hình lớn), `font-weight: 800`, `letter-spacing: -0.04em` (tighter), `line-height: 0.92`.
  - Case Title: `text-3xl` đến `text-5xl`, `font-weight: 800`, `tracking-tighter`.
- **Body Text**: `Bricolage Grotesque` / Inter
  - Kích thước: `16px` - `18px`, `font-weight: 400 - 500`, `line-height: 1.6`.
- **Micro Metadata / Code**: `JetBrains Mono`
  - Kích thước: `10px` - `12px`, `text-transform: uppercase`, `letter-spacing: 0.05em`.
  - Quy ước hiển thị: Bọc trong dấu ngoặc vuông: `[ 01 // SELECTED WORK ]`, `[ PRODUCT DISCOVERY ]`, `[ 2026 ]`.

---

## 3. Các thành phần tương tác chính (Key Interactions)

1. **Floating Cursor Preview**:
   - Khi hover vào bất kỳ hàng dự án nào (Yên, IQ Myth, MoMo Transfer), ảnh mockup thực tế sẽ xuất hiện và trôi êm theo con trỏ chuột (`lerp animation`).
2. **Interactive Case Drawer (Slide-Over)**:
   - Nhấp vào dự án sẽ trượt ra bảng chi tiết Case Study đầy đủ (Bối cảnh, HMW, 3 trụ cột giải pháp, Research data) mà không làm gián đoạn trải nghiệm người xem.
3. **Multi-theme Switcher**:
   - Hỗ trợ chuyển đổi tức thì giữa 3 theme: **Light (Editorial)**, **Dark (Modern Terminal)** và **Pink Accent**.
4. **Live Time Indicator & Pulsating Status**:
   - Đồng hồ thời gian thực `Saigon (GMT+7)` và chấm xanh radar báo hiệu trạng thái sẵn sàng nhận dự án mới.

---

## 4. Hướng dẫn đưa vào Framer (Nếu muốn áp dụng trên Framer)
Nếu Trứ muốn đưa thiết kế này vào Framer:
1. **Layout**:
   - Tạo Frame chính với Auto Layout dọc, khoảng cách gap = 0.
   - Thêm đường viền Bottom Border (`1px`, màu `#0E0E0E` độ mờ `14%`) cho mỗi Section để tạo hiệu ứng hairline dividers.
2. **Typography**:
   - Thêm font `Bricolage Grotesque` và `JetBrains Mono` từ Google Fonts vào mục Font của Framer.
3. **Project List**:
   - Tạo Component `CaseRow` với các biến thể `Default` và `Hover`.
   - Trên state `Hover`, kích hoạt hiệu ứng text dịch chuyển sang phải `translate-x: 8px` và hiển thị ảnh overlay hoặc floating thumbnail.
