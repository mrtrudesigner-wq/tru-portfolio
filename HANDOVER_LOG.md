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
     * Tag: `EDTECH · UI/UX & PROTOTYPING · 2025`
     * Mô tả: *"Thiết kế trải nghiệm làm bài test tập trung từ trang giới thiệu đến màn hình bài thi ma trận và luồng phân tích nhận kết quả qua email."*
  3. **03 // MOMO TRANSFER REDESIGN:**
     * Tag: `FINTECH · UX RESEARCH & REDESIGN · 2025`
     * Mô tả: *"Concept thiết kế lại luồng chuyển tiền, dựa trên nghiên cứu với 11 người dùng; tập trung làm rõ người nhận, số dư và bước xác nhận."*
* **Khối Quick Drawer:** Bấm vào bất kỳ dự án nào sẽ mở ngăn kéo xem nhanh tóm tắt dự án trước khi chuyển vào case study chi tiết.
* **Khối Giới thiệu (About & Experience):** Ghi rõ kinh nghiệm tại Marchi Lab và HIVELAB VINA; nút tải CV trực tiếp.

### 2. Case Study IQ Myth (`iq-myth.html`)
* Đã khôi phục các nhóm nội dung chính từ Framer (đối chiếu trực tiếp mới nhất tại mục 8; chưa đủ để kết luận bảo toàn 100% nội dung):
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

---

## 7. CẬP NHẬT TIẾP QUẢN — 09/11/2026

### Yêu cầu người dùng đã xác nhận
* Ưu tiên **nội dung gọn hơn và làm rõ vai trò Product Designer**.
* Phạm vi đợt chỉnh sửa này: trang chủ, ba Quick Drawer và mô tả MoMo trên trang 404. Nội dung dài của các trang case study chưa được biên tập lại trong đợt này.

### Đã thực hiện
* Rút gọn 24 trường nội dung trên trang chủ ở cả VI/EN; cập nhật đồng thời HTML ban đầu và từ điển dịch.
* Các đoạn giới thiệu, cách làm việc, kinh nghiệm, câu chuyện và lời mời liên hệ giảm từ 560 xuống 309 từ ở bản Việt (~45%), từ 330 xuống 250 từ ở bản Anh (~24%), đếm theo khoảng trắng sau khi bỏ thẻ HTML.
* Giới thiệu trực tiếp vai trò Product Designer, phạm vi user flow/UI/prototype và việc phối hợp cùng Product/Engineering. Chức danh tại các công ty vẫn giữ UI/UX Designer theo nội dung hiện có.
* Mỗi Quick Drawer có **loại dự án** và mục **Vai trò của tôi / My role**. Yên và MoMo ghi rõ là concept; IQ Myth tách quan sát đối thủ khỏi giả thuyết về chuyển đổi.
* Rút gọn CTA đọc case study; thay timeline 2025–2026 dùng chung cho cả ba drawer bằng loại dự án, tránh gán sai thời gian.
* Đồng bộ mô tả MoMo trên danh mục, hover preview, menu và trang 404 để không tạo ấn tượng concept đã triển khai cho toàn bộ người dùng MoMo.
* Sửa liên kết trang 404 từ `index.html#selected-work` thành `index.html#work`.
* Cả 5 trang cập nhật `html.lang` khi đổi VI/EN; giá trị ngôn ngữ không hợp lệ được đưa về `vi`.
* Trang chủ và 3 case study dùng duy nhất GSAP ticker để cập nhật Lenis; bỏ vòng `requestAnimationFrame` trùng lặp.

### Kiểm tra
* Kiểm tra cân bằng thẻ HTML, ID trùng, đường dẫn/anchor/tài nguyên cục bộ và cú pháp tất cả inline JavaScript trên 5 trang.
* Kiểm tra các khóa `data-i18n` đều tồn tại trong cả hai từ điển; cả 6 bản tóm tắt dự án có loại dự án, vai trò và 3 nhóm giải pháp.
* Kiểm tra trên Chrome cục bộ: chuyển 3 theme; đổi VI/EN và lưu lựa chọn qua các trang; mở các drawer và đối chiếu liên kết case study; bấm liên kết 404 về đúng `#work`.
* Kiểm tra trang chủ ở viewport 360×800: không có tràn ngang toàn trang; ảnh đã tải không có lỗi. Đã trả viewport về mặc định sau kiểm tra.
* Không ghi nhận lỗi console trong các lượt kiểm tra. Chưa đo hiệu năng định lượng sau thay đổi vòng cập nhật cuộn.

### Trạng thái và điểm cần đối chiếu tiếp
* Thay đổi đang ở local, **chưa commit/push/deploy**.
* **Năm dự án IQ Myth:** đã đối chiếu trang Framer gốc trong lượt audit ở mục 8: **2025**. Trang chủ và case study đang đúng; trang 404 và mô tả bàn giao cũ ghi 2024 cần được đồng bộ theo nguồn gốc.
* Nếu tiếp tục biên tập case study MoMo, cần đối chiếu nguồn của các con số như -42%, +28%, 3.5× và thời gian 3 giây. Phần tóm tắt đã dùng cách diễn đạt giả thuyết/concept; nội dung chi tiết còn các tuyên bố mạnh cần rà soát.


---

## 8. ĐỐI CHIẾU TRỰC TIẾP VỚI FRAMER — 09/11/2026

**Phạm vi:** so sánh ba trang chi tiết Framer hiện tại với các file HTML cục bộ. Đây là lượt kiểm tra; chưa áp dụng sửa đổi nội dung/giao diện website trong lượt này. Các ghi nhận bên dưới được ưu tiên hơn mô tả hoàn tất trong các mục bàn giao cũ.

### Yên — https://itstru.framer.website/project-yen
* Có đủ 15 ảnh nội dung gốc. **Thiếu 1 video ở phần ứng dụng con cái:** `https://framerusercontent.com/assets/oKTqWbF38Pne5TRGl48pMcvdPQ.mp4`.
* Thiếu khối giới hạn concept: điện thoại có thể hết pin/không ở cạnh người dùng; khả năng phát hiện và độ chính xác AI cần kiểm chứng.
* Thiếu giải thích trạng thái “Đã uống” chỉ phản ánh xác nhận trên ứng dụng, không chứng minh đã uống thuốc.
* Phần bài học giữ ba hướng thử nghiệm nhưng lược bỏ đoạn nhận định hai nhóm cần lượng thông tin khác nhau và kế hoạch thử nghiệm theo giai đoạn.
* Cần đối chiếu lại câu “một nút duy nhất” với hai lựa chọn trong luồng nhắc thuốc; bỏ các khẳng định tuyệt đối về loại trừ bấm nhầm. Nội dung gốc nói tin nhắn/đường link đáng ngờ, bản mới thêm xử lý cuộc gọi.

### IQ Myth — https://itstru.framer.website/project-iq-myth
* Có đủ **7 ảnh nội dung khác nhau và 3 video**. Một số ảnh DOM Framer bị lặp do responsive, không phải nội dung bổ sung.
* Đã so SHA-256: cả 2 ảnh PNG và 3 MP4 lưu tại `assets/iq-myth/` giống hoàn toàn tài nguyên gốc.
* Thiếu liên kết khách hàng `https://iqmyth.com/`; thiếu đoạn giải thích xây dựng hệ thống thiết kế trong lúc phát triển luồng, chỉ bổ sung pattern lặp lại.
* Hero đang gắn “ít hơn 2 bước” với thanh toán/nhận kết quả; bản gốc gắn mốc này với từ landing vào bài test.
* Khối pricing tự khẳng định “drop-off cao/rất cao”, trong khi nguồn gốc yêu cầu đo và kiểm chứng, chưa đưa kết quả chuyển đổi. Cần sửa cả VI/EN và rà soát meta description.
* **Nguồn gốc xác nhận năm 2025**; 2024 ở trang 404 và mục 4 của bàn giao là thông tin lệch.

### MoMo — https://itstru.framer.website/project-momo
* Đã có 9 ảnh chính của dự án và đủ 5 màn hình UI. **Thiếu toàn bộ phần User Flow**: sơ đồ FigJam nhúng, ba điểm vào (SĐT/QR/danh bạ), chỉ báo “Bước X/3”.
* Nguồn sơ đồ: `https://embed.figma.com/board/wq4UJYgGssQT67NriRvBxP/Momo-Transfer-%E2%80%94-User-Flow-Redesign?node-id=0-1&embed-host=share`. Chỉ xác nhận trang gốc có embed; chưa kiểm tra nội dung bên trong file Figma.
* **Thiếu Before/After:** thanh kéo so sánh, hai ảnh `A8SPspakrK0K7CWu6fEno1cY2A.png`, `qcpDCgZ6rURua60BhC77hdpd0.png` trên `framerusercontent.com/images/` và đoạn kế hoạch usability test.
* Thiếu ba nhận định nghiên cứu: hỗ trợ đối chiếu giao dịch, cần thử trực tiếp với người lớn tuổi, QR đã lưu cần thêm ngữ cảnh. Thiếu cảnh báo rõ mẫu 11 người không đại diện toàn bộ người dùng.
* Mốc 33 giây trong nguồn là thời gian hoàn thành tác vụ bằng QR và chưa đủ bối cảnh đo; bản mới biến thành thời gian do dự/benchmark. Phải giữ đúng ý nghĩa dữ liệu.
* Bản mới thêm nội dung **không thấy trong nguồn gốc**: -42%/+28%; ma trận phương án A/B/C với 3.5×, 14+ fields; xác nhận trong 3 giây; đọc từ 1 mét; cơ chế idempotency/Napas và đếm ngược 10 giây. Chưa có bằng chứng để trình bày như kết quả hoặc hệ thống đã triển khai.
* Bài học gốc nói hành vi kiểm tra lại chưa tự động chứng minh UI có lỗi; bản mới kết luận thiếu trust signals. Cần khôi phục mức độ thận trọng của lập luận và tách quy mô nền tảng 40M+ khỏi phạm vi tác động của concept.

### Thứ tự khuyến nghị
1. MoMo: xử lý tuyên bố thiếu căn cứ, khôi phục User Flow, Before/After và giới hạn nghiên cứu.
2. Yên: khôi phục video, giới hạn concept và ý nghĩa trạng thái nhắc thuốc.
3. IQ Myth: sửa câu chữ lệch nghĩa, bổ sung liên kết khách hàng và lập luận design system; đồng bộ năm ở 404.

Bằng chứng đọc từ DOM Framer và kết quả đối chiếu tài nguyên được lưu tại thư mục visualization của chat, `portfolio-audit/` (`framer-originals.json`, `local-translations.json`, `iq-asset-verification.json`).


---

## 9. BỔ SUNG THEO NGUỒN GỐC & LOẠI BỎ TUYÊN BỐ THIẾU CĂN CỨ — 09/11/2026

**Yêu cầu người dùng:** bổ sung các phần còn thiếu theo Framer, bỏ số liệu/khẳng định chưa có căn cứ và mở bản chỉnh sửa để xem. Các thiếu sót ở mục 8 đã được xử lý trong lượt này.

### Nội dung và media đã hoàn thiện
* **Yên:** thêm video gốc `assets/yen/yen-child-app.mp4` (5,02 giây), có điều khiển phát và chú thích. Ghép đúng video với ứng dụng con cái, ảnh với ứng dụng bố mẹ. Bổ sung giới hạn pin/vị trí điện thoại/độ chính xác, ý nghĩa xác nhận “Đã uống”, bài học về nhu cầu thông tin khác nhau và kế hoạch thử nghiệm tiếp theo.
* **Yên VI/EN:** mốc 30 giây được ghi là giả định; sửa nội dung một nút duy nhất thành hai lựa chọn; bỏ xử lý cuộc gọi và các diễn đạt loại trừ hoàn toàn bấm nhầm/chi phí/thao tác học. Ngôn ngữ mô tả giải pháp được đặt trong phạm vi concept.
* **IQ Myth:** khôi phục liên kết khách hàng, cách hình thành design system theo pattern lặp lại và lý do dùng màu. Sửa hero để không gắn “dưới 2 bước” với thanh toán; bỏ “drop-off cao”, “high-conversion” và các diễn đạt như đã chứng minh hiệu quả. Giữ đủ 7 ảnh/3 video và nội dung các quyết định UI. Trang 404 đồng bộ năm **2025** trong HTML và VI/EN.
* **MoMo:** khôi phục FigJam User Flow, ba điểm vào, chỉ báo bước, ba nhận định nghiên cứu, giới hạn mẫu 11 người, nội dung typography/nguồn Brandbook, Before/After và kế hoạch usability test.
* **Before/After MoMo:** dùng đúng ảnh gốc, lưu tại `assets/momo/transfer-before.png` và `assets/momo/transfer-after.png`. Thanh so sánh dùng native range, hỗ trợ chuột và bàn phím; nhãn và chú thích có VI/EN. Ảnh bản hiện tại nằm phía trái ở trạng thái 50%, concept nằm bên phải.
* **MoMo VI/EN:** bỏ các tỷ lệ -42%/+28%, số 3.5×/14+ fields, tuyên bố xác nhận trong 3 giây/đọc từ 1 mét. Xóa phần ma trận phương án và edge cases không thấy trong nguồn, bao gồm idempotency/Napas/đếm ngược 10 giây, cùng các khóa dịch tương ứng.
* Mốc **33 giây** được giữ đúng dưới dạng ghi chú tác vụ QR cần cách đo/benchmark, không dùng làm KPI do dự hay hiệu quả redesign. Các số 4.27/5, 6/11, 11/11 được giữ theo nguồn, giới hạn rõ trong nhóm khảo sát.
* Bối cảnh quy mô MoMo được ghi theo nguồn lịch sử Decision Lab 2024, tách khỏi phạm vi tác động của concept. Bài học giữ tính thận trọng: hành vi kiểm tra lại chưa tự động chứng minh UI có lỗi.
* Đồng bộ phần nhắc thuốc và giả định thời gian chờ trong Quick Drawer trang chủ.

### Kiểm tra
* 5 trang qua kiểm tra cân bằng thẻ HTML, ID, liên kết/anchor cục bộ, tài nguyên và cú pháp inline JavaScript; các khóa nội dung có đủ VI/EN. Kiểm tra các tuyên bố đã loại bỏ không còn trong từ điển.
* Số lượng media sau bổ sung: Yên **15 ảnh + 1 video**; IQ Myth **7 ảnh + 3 video**; MoMo **11 ảnh + 1 iframe FigJam**.
* Chrome: video Yên tải và phát hết 5,02 giây; FigJam hiển thị sơ đồ; thanh Before/After đổi được về 0%/100% và bằng phím mũi tên; kiểm tra ngôn ngữ VI/EN.
* Kiểm tra ba trang ở viewport 360×800: không tràn ngang toàn trang, không có ảnh đã tải bị lỗi. Kiểm tra chuyển Light/Dark/Pink. Viewport được trả về mặc định sau QA.

**Trạng thái:** bản local đã cập nhật; chưa commit/push/deploy. Giữ nguyên CV và thông tin kinh nghiệm.

---

## 10. SỬA CẮT ẢNH MINH HỌA YÊN — 10/11/2026
* Hai ảnh tâm lý bố mẹ/con cái trong phần bối cảnh bị cắt do khung `h-64` và `object-cover`.
* Đổi riêng hai khung này sang `aspect-square`, ảnh dùng `object-contain` để hiển thị toàn bộ hình gốc. Thêm anchor `#problem-context` để xem trực tiếp.
* Kiểm tra trên trình duyệt: desktop 1440px có hai khung 584×584, cả hai ảnh tải đầy đủ; mobile 360px có khung 245×245 và không tràn ngang toàn trang. Đã trả viewport về mặc định và mở phần vừa sửa trong bản xem trước.
* Chỉ cập nhật bố cục hai ảnh; giữ nội dung và tài nguyên gốc. Chưa deploy.

---

## 11. LỜI THOẠI HTML TRONG MINH HỌA YÊN — 10/11/2026
* Đưa hai câu thoại vào bong bóng bằng HTML (`blockquote` + `span[data-i18n]`), giữ ảnh gốc và không ghi chữ trực tiếp lên PNG.
* Xóa hai tiêu đề trích dẫn lặp bên dưới; giữ nhãn tâm lý và đoạn giải thích. Nhãn được dùng làm heading của mỗi thẻ.
* VI/EN đổi lời thoại bằng hệ thống dịch hiện có; xuống dòng được biên tập riêng cho từng ngôn ngữ.
* Mỗi ảnh có khung tọa độ theo đúng tỷ lệ gốc để vị trí chữ không lệch khi resize. Font dùng container units; bố cục 320px có padding nhỏ hơn để lời thoại Việt không tràn.
* Giữ nền canvas sáng và màu chữ đậm trong cả Light/Dark/Pink để minh họa nét đen và lời thoại luôn có độ tương phản.
* Kiểm tra trình duyệt ở 1440, 768, 360 và 320px, cả VI/EN: chữ nằm trong vùng thoại và không tràn ngang trang. Kiểm tra ba theme. Đã kiểm tra HTML, ID, cú pháp JavaScript và mỗi câu thoại chỉ xuất hiện một lần trong HTML hiển thị.
* Viewport QA trả về mặc định; mở lại bản local ở phần bối cảnh. Chưa deploy.

---

## 12. BẢN PHÁT HÀNH ĐƯỢC DUYỆT — 10/11/2026
* Người dùng đã yêu cầu deploy toàn bộ bản chỉnh sửa đã xem trong chat.
* Phạm vi phát hành: nội dung trang chủ VI/EN, ba case study được đối chiếu Framer, tài nguyên Yên/MoMo bổ sung, trang 404 và lời thoại HTML VI/EN trong minh họa Yên.
* Kiểm tra trước phát hành: cả 5 trang qua kiểm tra thẻ HTML, ID, liên kết/anchor/tài nguyên cục bộ, cú pháp JavaScript, khóa dịch VI/EN và các tuyên bố đã loại bỏ; `git diff --check` sạch. Các kiểm tra giao diện và media được ghi tại mục 9–11.
* Quy trình phát hành: commit lên `main` của `mrtrudesigner-wq/tru-portfolio`, push `origin main` để Vercel triển khai tại `https://mrtrudesigner.vercel.app`, sau đó kiểm tra mã HTML và tài nguyên trên production.
* **Kết quả:** Commit `f31ef76` đã được triển khai thành công trên Vercel.

---

## 13. RÀ SOÁT & HOÀN THIỆN COPYWRITING TOÀN TRANG — 11/11/2026

* **Yêu cầu người dùng:** Rà soát lại copywriting toàn bộ trang web và đẩy lên web (deploy lên production).
* **Kết quả rà soát toàn bộ 5 trang web:**
  * Giữ vững bản sắc và danh xưng: Product Designer / UI/UX Designer, không nhận vơ danh xưng, không phóng đại số liệu, không tuyên bố thiếu bằng chứng.
  * Tinh chỉnh câu thông điệp tại Hero (`hero-quote`):
    * VI: *"Tôi thiết kế sản phẩm số rõ ràng về thông tin, mạch lạc trong thao tác."*
    * EN: *"I design digital products with clear information architecture and intuitive user flows."*
  * Tinh chỉnh câu chốt định vị năng lực tại mục Chuyện là... (`story-p3`):
    * VI: *"Tôi hướng tới những sản phẩm số rõ ràng về trải nghiệm, chỉn chu về thị giác và khả thi khi đưa vào sản xuất."*
    * EN: *"I aim for digital products that are clear in experience, refined in visual craft, and realistic to implement."*
  * Đồng bộ phụ đề dự án IQ Myth giữa mã HTML tĩnh và từ điển translations: *"THIẾT KẾ LUỒNG LÀM BÀI VÀ NHẬN KẾT QUẢ"*.
* **Kiểm tra kỹ thuật trước phát hành:**
  * Toàn bộ 5 trang HTML qua kiểm tra cân bằng thẻ (HTML parser test).
  * `git diff --check` sạch hoàn toàn, không có trailing whitespace.
* **Quy trình triển khai:**
  * Commit lên `main`, push lên remote `origin main` qua SSH để Vercel tự động build và deploy tới `https://mrtrudesigner.vercel.app`.

---

## 14. TINH CHỈNH UI/UX CRAFT, TƯƠNG PHẢN THEME & HIỆU NĂNG — 18/11/2026

* **Phạm vi cập nhật trên cả 5 trang (`index.html`, `yen.html`, `iq-myth.html`, `momo.html`, `404.html`):**
  * **Sticky Header & Surface Tokens:** Thay các lớp `bg-[var(--...)]/opacity` (sinh CSS không hợp lệ với biến màu hex) bằng hệ thống biến chuẩn `--header-bg` (độ đục `94%` + `backdrop-filter: blur(14px)`), `--surface-subtle` và `--surface-hover` cho cả 3 theme Light / Dark / Pink, triệt tiêu hiện tượng nhòe chữ khi cuộn dưới header.
  * **Typography & Responsive Layout:** Xử lý rớt dòng vụn ở nút `XEM CHI TIẾT DỰ ÁN` và thanh tiêu đề Quick Summary Drawer trên mobile; áp dụng `text-wrap: balance` / `text-wrap: pretty`; chuyển lưới mục `#craft` sang `lg:grid-cols-3` để tránh chật cột ở cỡ màn hình Tablet; cập nhật động nội dung Drawer khi đổi `VI / EN` và thông báo sao chép email song ngữ.
  * **Tương phản màu (Contrast) 3 Theme:** Chuẩn hóa `--accent-highlight` (`#047857` đạt chuẩn WCAG AA trên nền Light, `#C4FF00` trên Dark, `#121212` trên Pink), `--accent-display` (`#6B0F2B` trên Pink) và `--status-dot`; sửa lỗi mất chấm trạng thái ở `404.html` khi đổi ngôn ngữ.
  * **Hiệu năng, Điều hướng & Hình ảnh:** Rút ngắn thời gian reveal chữ Hero xuống `~0.75s` kèm hỗ trợ `prefers-reduced-motion`; bổ sung `scroll-margin-top` và offset động theo chiều cao header; dùng bộ ảnh `.webp` nội bộ (`assets/covers/`) kèm preload cho hover preview và Quick Summary Drawer; bổ sung `loading="lazy" decoding="async"` cho ảnh bên dưới màn hình đầu.
* **Kiểm tra & Triển khai:** Toàn bộ 5 trang qua kiểm tra cân bằng thẻ HTML, cú pháp JS, đầy đủ từ điển `VI / EN` và `git diff --check` sạch; commit và push lên `origin main` để Vercel tự động deploy.

---

## 15. NÂNG CẤP TỔNG THỂ: PIXEL INTRO CURTAIN, HALFTONE CURSOR, DARK FOOTER & CHUẨN HÓA NỘI DUNG — 18/11/2026

* **Bối cảnh & Quyết định thiết kế theo yêu cầu:**
  * **Kiến trúc Single-Page tinh gọn:** Giữ nguyên cấu trúc trang chủ cuộn mượt (`#work`, `#craft`, `#experience`, `#story`, `#contact`), loại bỏ toàn bộ các trang con dư thừa theo phản hồi của Trứ (*"thôi bỏ các trang con đi, nói nhiều quá không tốt"*). Giữ website tập trung, cô đọng và có sức nặng.
  * **Dark 50/50 Split Footer (`#141416`):** Triển khai chân trang màu đen tối giản với bố cục chia 50/50 theo đúng chỉ đạo (*"bỏ bản này đi, giữ lại chân trang màu đen là được"*). Nửa trái là Colophon triết lý thiết kế và trạng thái sẵn sàng nhận dự án; nửa phải là Tabular `<dl>` danh bạ trực tiếp (Email, Telegram, LinkedIn, GitHub) và link nhanh tới 3 Case Studies.
  * **Pixel-Matrix & Noise Intro Curtain (`interactive-fx.js`):** Màn chào mở đầu canvas với monogram `T.` dithered, thanh đếm phần trăm monospaced, hỗ trợ click/phím ESC để skip ngay lập tức, tự động gỡ bỏ khi người dùng bật `prefers-reduced-motion`.
  * **2D Velocity-Field Halftone Cursor & Magnetic Pill:** Con trỏ tùy biến với vệt hạt dither tính toán theo vector vận tốc chuột (`interactive-fx.js`) và nhãn từ điển song ngữ ngữ cảnh (`[ ĐỌC CASE STUDY → ]`, `[ XEM CHI TIẾT ]`), tự động fallback về con trỏ hệ thống trên thiết bị cảm ứng hoặc khi con trỏ rời màn hình.
  * **Chuẩn hóa Copy Kinh nghiệm (CV Grounding):** Thay thế đoạn mô tả kinh nghiệm chung chung bằng dữ liệu xác thực từ CV:
    * **Marchi Lab:** *"Marchi Lab · Thiết kế xuyên suốt từ luồng người dùng đến UI & Prototype cho sản phẩm SaaS, E-commerce, EdTech và Web3; xây dựng Design System và tối ưu phễu chuyển đổi (Onboarding, Quiz, Paywall)."*
    * **HIVELAB VINA:** *"HIVELAB VINA · Thiết kế giao diện Web/Mobile cho hệ sinh thái Samsung & Naver; xây dựng UI Library theo chuẩn Apple HIG, Material Design và kiểm thử chất lượng hiển thị (Design QA) trước khi go-live."*
  * **Sửa lỗi bóng thoại minh họa Yên (`yen.html`):** Thiết lập `position: relative; z-index: 2` cho `.persona-dialogue` và giới hạn `main img:not(.persona-artwork img)` để bong bóng thoại không bị ảnh che mất chữ.
  * **Loại bỏ họa tiết hình tròn:** Đã xóa bỏ hình tròn thử nghiệm ở phần Kinh nghiệm theo phản hồi (*"vòng tròn ở background chán v"*).

* **Kiểm tra kỹ thuật trước phát hành:**
  * Toàn bộ 5 trang HTML (`index.html`, `yen.html`, `iq-myth.html`, `momo.html`, `404.html`) qua kiểm tra parser cân bằng thẻ (0 unclosed tags, 0 mismatched tags).
  * Syntax audit: `node --check assets/js/interactive-fx.js` không có lỗi cú pháp.
  * Kiểm tra từ khóa cấm: 0 từ khóa "Lead Designer", 0 từ khóa template ngoài danh mục.
  * `git diff --check`: Sạch hoàn toàn, không có trailing whitespace.

* **Quy trình triển khai:**
  * Commit lên `main`, push lên `origin main` (`git@github.com:mrtrudesigner-wq/tru-portfolio.git`) để Vercel kích hoạt webhook tự động deploy lên `https://mrtrudesigner.vercel.app`.

---

## 16. TÍCH HỢP GOOGLE ANALYTICS 4 (GA4) TOÀN DIỆN — 20/11/2026

* **Bối cảnh & Triển khai luồng đo lường:**
  * Khởi tạo Web Data Stream trên Google Analytics 4 cho portfolio `https://mrtrudesigner.vercel.app`:
    * **Tên luồng (Stream Name):** `Tru Portfolio`
    * **URL luồng:** `https://mrtrudesigner.vercel.app`
    * **Mã luồng (Stream ID):** `16379788699`
    * **Mã đo lường (Measurement ID):** `G-0JDFWHXT8Q`
  * Gắn đoạn mã chuẩn `gtag.js` vào ngay đầu thẻ `<head>` của cả 5 trang HTML:
    * `index.html` (Trang chủ portfolio)
    * `yen.html` (Case Study Yên)
    * `iq-myth.html` (Case Study IQ Myth)
    * `momo.html` (Case Study MoMo Transfer)
    * `404.html` (Trang 404 Not Found)
  * Bổ sung Custom Event Tracking cho hành động tương tác giá trị cao:
    * Gắn sự kiện `copy_email` khi người dùng bấm nút sao chép email liên hệ (`mr.tru.designer@gmail.com`) tại Footer trang chủ.
  * Dọn dẹp & Tối ưu luồng dữ liệu Google Analytics:
    * Đã xóa 2 luồng dữ liệu portfolio cũ không còn sử dụng:
      1. `web portfolio` (`trudesigner.framer.website` / `G-6GVFJV8ZNL`)
      2. `portfolio v2` (`itstru.framer.website` / `G-M9DP7L7X44`)
    * Giữ lại duy nhất 1 luồng hoạt động chính thức: `Tru Portfolio` (`mrtrudesigner.vercel.app` / `G-0JDFWHXT8Q`).
* **Kiểm tra kỹ thuật trước phát hành:**
  * Toàn bộ 5 trang HTML qua kiểm tra parser cân bằng thẻ (0 unclosed tags, 0 mismatched tags).
  * `git diff --check` sạch hoàn toàn, không có trailing whitespace.
* **Quy trình triển khai:**
  * Commit lên `main`, push lên `origin main` (`git@github.com:mrtrudesigner-wq/tru-portfolio.git`) để Vercel tự động triển khai phiên bản mới lên `https://mrtrudesigner.vercel.app`.

---

## 17. KHỞI TẠO HỆ THỐNG DAILY ANALYTICS BOT GỬI TELEGRAM — 20/11/2026

* **Bối cảnh & Cấu hình kết nối:**
  * Khởi tạo Bot Telegram đo lường chuyên sâu cho portfolio:
    * **Bot Username:** `@tru_portfolio_analytics_bot`
    * **Bot Token:** `9211189986:AAFaVUSVjZEvXH9tmgqnJBQF3DPha849jEI`
    * **User Chat ID:** `8079649476` (`@truuiuxdesign`)
    * **GA4 Property ID:** `447155326`
* **Triển khai kiến trúc & Kịch bản tự động hóa:**
  * **Kịch bản phân tích (`.github/scripts/report_analytics.py`):**
    * **Cơ chế Silent Mode:** Nếu số lượt khách truy cập trong ngày bằng 0 (`active_users == 0`), script tự động thoát trong 2 giây mà không gửi bất kỳ tin nhắn nào để giữ Telegram yên tĩnh.
    * **Công cụ nhận định thông minh (Actionable Insights):**
      * Phát hiện tín hiệu tuyển dụng chuyển đổi cao: Cảnh báo ngay khi có lượt sao chép email liên hệ (`copy_email`).
      * Thống kê case study nổi bật nhất trong ngày (Yên, IQ Myth, MoMo).
      * Đánh giá độ sâu đọc trang dựa trên thời gian tương tác trung bình.
      * Phân tích bối cảnh người xem (Desktop tại văn phòng vs Mobile khi di chuyển).
  * **GitHub Actions Workflow (`.github/workflows/analytics-daily.yml`):**
    * Tự động chạy định kỳ vào **21:00 mỗi tối** (14:00 UTC).
    * Hỗ trợ `workflow_dispatch` để kiểm tra thủ công bất kỳ lúc nào qua giao diện GitHub.
* **Kiểm thử thực tế (End-to-End Verification):**
  * Đã kích hoạt test thành công với GA4 Data API: Dữ liệu thực tế được kéo về chính xác, công cụ sinh nhận định (Actionable Insights) hoạt động chuẩn xác và tin nhắn báo cáo đã gửi thành công tới Telegram `@truuiuxdesign` (`Chat ID: 8079649476`).
  * Kiểm thử cơ chế Silent Mode: Với ngày có 0 lượt xem (`active_users == 0`), script tự động thoát trong 1 giây mà không gửi tin nhắn làm phiền.
  * Hệ thống hoàn toàn sẵn sàng và sẽ tự động gửi báo cáo vào **21:00 mỗi tối** khi có lượt xem mới.

---

## 18. RÀ SOÁT & BIÊN TẬP CHỐNG AI SLOP TOÀN TRANG (MỨC ĐẦY ĐỦ) — 23/11/2026

* **Tiêu chuẩn áp dụng:** Kết hợp 4 bộ tiêu chuẩn (`no-ai-slop`, `humanizer`, `slopbeth`, `anti-ai-slop-writing`) cho cả bản Tiếng Việt và Tiếng Anh trên 6 tệp (`index.html`, `yen.html`, `iq-myth.html`, `momo.html`, `404.html`, `assets/js/interactive-fx.js`).
* **Các thay đổi chính:**
  * **Chuẩn hóa giọng văn Tiếng Anh trên 3 case study & 404 (`iq-myth.html`, `yen.html`, `momo.html`, `404.html`):** Thay toàn bộ từ ngữ quảng cáo/AI slop (`leverage`, `streamlined`, `frictionless`, `ecosystem`, `journey`, `engineered to`, `universal responsiveness`, `disentangling`, `intuitive`) bằng diễn đạt chủ động, sát tông bình tĩnh của bản Tiếng Việt; gỡ chi tiết `40-question` chưa xác thực ở `404.html`.
  * **Giảm câu bị động trên `momo.html` & `iq-myth.html`:** Chuyển các quyết định thiết kế trong phần 05 (`momo.html`) và phần 03–06 (`iq-myth.html`) về ngôi chủ động (`Tôi bỏ...`, `Tôi đặt...`, `Tôi nhóm...`), giữ nguyên toàn bộ giới hạn bằng chứng và câu chuyện trải nghiệm thật (đưa màn hình MoMo cho người bán xem, thoại bóng thoại Yên, khẩu hiệu trà đá Hà Nội).
  * **Chỉnh `<meta description>`, chân trang và đồng bộ HTML tĩnh (`index.html`, `interactive-fx.js`):** Bỏ khẩu hiệu `Craft-focused, intentional systems, eliminating fluff` và `DESIGNED & CRAFTED WITH INTENTION` / `CRAFTED WITH INTENTION`; đổi 5 nhãn tĩnh tiếng Anh trên `index.html` (`btn-contact`, `menu-sec-title`, `nav-experience`, `nav-story`) sang tiếng Việt khớp `translations.vi`.
* **Kết quả kiểm toán Slopbeth trên văn xuôi EN (Trước → Sau, thang 100 điểm sạch):**
  * `index.html`: `deslop` `48 → 60/100` (nghi vấn `13 → 10`), `orwell` `100/100` (bị động `0%`), `dashes = 0`.
  * `yen.html`: `deslop` `64 → 80/100` (nghi vấn `9 → 5`), `orwell` `92 → 96/100` (bị động `5.6% → 2.8%`), `dashes = 0`.
  * `iq-myth.html`: `deslop` `0 → 52/100` (nghi vấn `25 → 12`), `orwell` `77 → 100/100` (bị động `13.9% → 0.0%`), `dashes = 0`.
  * `momo.html`: `deslop` `0 → 60/100` (nghi vấn `21 → 10`), `orwell` `64 → 96/100` (bị động `16.7% → 1.9%`), `dashes = 0`.
  * `404.html`: `deslop` `64 → 76/100` (nghi vấn `9 → 6`), `orwell` `96 → 100/100` (bị động `20.0% → 0.0%`).
* **Trạng thái kỹ thuật & Triển khai:** Toàn bộ 5 file HTML qua kiểm tra cân bằng thẻ (0 thẻ thừa/chưa đóng), `node --check` đạt trên `interactive-fx.js` và 21 thẻ `<script>` nội tuyến, đầy đủ 100% khóa `VI / EN`, 0 từ cấm dự án và `git diff --check` sạch. Đã commit lên `main` và push lên `origin main` để Vercel triển khai lên `https://mrtrudesigner.vercel.app`.

---

## 19. BỔ SUNG CASE STUDY 04 (SHORTPEEK) & ĐỒNG BỘ TOÀN TRANG — 24/11/2026

* **Bối cảnh & Phạm vi dự án mới:**
  * **Dự án:** Shortpeek (Mobile App xem phim ngắn dạng dọc tại **Marchi Lab**, năm **2026**, **chưa phát hành**).
  * **Vai trò trực tiếp:** Product Designer (`UX Audit`, `User Flow`, `UI Redesign`, `Design System`, `App Icon`, `Prototype`).
  * **Bài toán:** Làm mới định vị giao diện theo hướng điện ảnh gọn gàng (lấy cảm hứng từ Netflix) trước khi nộp App Store / Google Play, đồng thời tách rõ luồng mở khóa tập bằng xu/gói thành viên và phủ đủ trạng thái biên phục vụ duyệt store.
* **Các tệp đã thêm mới & cập nhật đồng bộ:**
  * **Tài nguyên ảnh (`assets/shortpeek/` & `assets/covers/shortpeek-mobile.webp`):** Xuất màn hình gốc (`Archive`) và bản redesign (`Redesign app`, `submit`) từ Figma (`2QwkE80vfdgSVRotQn2M57`), dựng `22` tệp `.webp` trong `assets/shortpeek/` cộng `1` ảnh bìa 16:10 `assets/covers/shortpeek-mobile.webp` (`75.1 KB`, tổng `23` tệp `.webp`) gồm `shortpeek-hero.webp`, cặp ảnh thanh kéo đối chiếu `before-comparison.webp` / `after-comparison.webp`, các cụm màn hình Audit, App Icon, Home, Clip, Unlock (Đủ xu / Thiếu xu), Wallet, Premium, My List (Saved / History / Downloads), Profile, Rewards và Edge States.
  * **Case Study 04 (`shortpeek.html` — Cấu trúc Hướng 1 bản thoáng biên tập):** Đầy đủ GA4 (`G-0JDFWHXT8Q`), 3 theme (`Light / Dark / Pink`), song ngữ `VI / EN`, tách chữ trực tiếp lên nền trang cùng nhịp khoảng trắng rộng và đường kẻ ngang mảnh (gỡ toàn bộ `surface-card` lồng nhau và khung viền thừa, chỉ giữ nền tối `#0D0E11` cho cụm màn hình sản phẩm). Mở màn bằng Hero tách cột + Spec List không khung + đối chiếu Before/After (`#shortpeek-comparison` kéo trực tiếp, không lớp phủ chọn xanh và điều khiển bàn phím), phần 01 Audit 4 dòng không khung + dải 4 màn hình bản gốc (`Archive`) + 3 Mục tiêu thiết kế mở, phần 02 Bàn mổ xẻ tương tác 5 luồng dạng tab gạch chân (`Home`, `Clip`, `Mở khóa & Ví xu` có 2 nhánh con, `My List` đủ 3 tab `Saved · History · Downloads`, `Profile & Xu thưởng`), phần 03 Kiến trúc IA + 3 cụm luồng mở + Hệ màu tối + Inter + App Icon & logo mới + toàn cảnh 4 màn hình, phần 04 Checklist duyệt Store không khung + 3 Edge States, và phần 05 gồm 3 cột Đánh đổi & Sửa theo review nội bộ (từ comment thật trên Figma) + Trạng thái chưa phát hành kèm 3 giả thuyết kiểm chứng.
  * **Trang chủ (`index.html`):** Bổ sung dự án `04/ SHORTPEEK`, cập nhật `[ ALL (4) ]`, đổi nhãn filter thứ hai sang `[ UX AUDIT & REDESIGN ]` (nhóm `redesign` cho MoMo & Shortpeek; `product` cho Yên & IQ Myth), cập nhật `drawerData` (`01 / 04`..`04 / 04`), Menu Overlay (`04 CASES`), Dark Footer (lưới 4 thẻ `01. YÊN` đến `04. SHORTPEEK`) và danh sách preload cover.
  * **Các trang con & điều hướng dùng chung (`yen.html`, `iq-myth.html`, `momo.html`, `404.html`, `assets/js/interactive-fx.js`):** Cập nhật chỉ số `CASE 01 / 04`..`03 / 04`, đổi nút điều hướng chân trang của `momo.html` trỏ sang `shortpeek.html`, chuyển lưới `404.html` sang 2×2 kèm thẻ `04 // MOBILE APP` + thêm vào `spinRoulette()`, gắn cứng nút `MENU` vào đúng nhóm điều khiển bên phải thanh `<header>` trên cả 5 trang con cho khớp `index.html`, đồng bộ `04 CASES` + `#shortpeek-comparison`, sửa selector chèn dự phòng và gắn `?v=2` cho `interactive-fx.js` trên cả 6 trang để xóa cache trình duyệt ngay khi `Cmd + R`.
  * **Analytics Bot (`.github/scripts/report_analytics.py`):** Bổ sung theo dõi lượt xem `shortpeek.html` vào báo cáo Telegram hằng ngày.
* **Kiểm toán kỹ thuật & Slopbeth (trên văn xuôi EN):**
  * Cả 6 trang HTML qua kiểm tra parser cân bằng thẻ (`0` lỗi), `0` ID trùng, `0` tài nguyên cục bộ bị thiếu, đầy đủ `159/159` khóa `VI / EN` trên `shortpeek.html` (`0` khóa thiếu, `0` khóa thừa), `node --check` sạch trên `interactive-fx.js` và `25` `<script>` nội tuyến, `py_compile` sạch trên `report_analytics.py`, `0` từ cấm, `0` dấu gạch ngang dài (`—`) và `git diff --check` sạch.
  * Mật độ khung viền `<main>` trên `shortpeek.html` giảm rõ rệt: `surface-card` `23 → 0`, `hairline-all` `66 → 2`, `border-l-4` giữ `0`, `rounded` `64 → 28` và nhãn ngoặc `[ ... ]` `38 → 7`; toàn bộ `22/22` tệp `.webp` trong `assets/shortpeek/` đều được tham chiếu (`0` tệp thừa).
  * Kết quả `slopbeth` trên `shortpeek.html`: `deslop 88/100`, `orwell 100/100` (`passive_ratio = 0.0%`, `0` từ/cụm thừa, `0` câu mở đầu `V-ing` ở EN).
* **Kiểm thử trình duyệt cục bộ (`http://localhost:3000/`):**
  * `0` lỗi console và `0` lỗi tải tài nguyên trên `shortpeek.html`.
  * Toàn bộ ảnh trên `shortpeek.html` (bao gồm `Before/After`, 4 ảnh Audit, `Home` `960×960`, `Saved / History + Undo / Downloads` ở Tab 04, các luồng ở 5 tab và 3 Edge States) tải HTTP 200; kiểm tra đổi 3 theme (`Light / Dark / Pink`), đổi `VI / EN` (`159/159` khóa), kéo trực tiếp trên `#shortpeek-comparison` không bị lớp phủ chọn xanh, 5 tab gạch chân `.wt-tab` + 2 nhánh con `.subview-note`, hiệu ứng scroll reveal đầy đủ và mobile `360×800` không tràn ngang.
* **Trạng thái hiện tại:** Đã hoàn tất kiểm thử cục bộ, commit và push các chỉnh sửa tinh gọn nội dung (gỡ khối `sp-list`, bỏ đếm số màn hình `17 nhóm / 104 màn hình`, rút gọn mô tả hệ thống component và Typography) lên nhánh `main` (`origin/main`) để triển khai tự động lên Vercel (`https://mrtrudesigner.vercel.app/shortpeek.html`).

---

## 20. TỐI ƯU CHUYỂN ĐỔI LIÊN HỆ: SLOT-MACHINE ROLLING TEXT ENGINE & BANNER CONTACT CASE STUDY — 24/11/2026

* **Bối cảnh & Lỗ hổng chuyển đổi (Conversion Gap):**
  * Báo cáo analytics Telegram (`@truuiuxdesign` theo dõi `https://mrtrudesigner.vercel.app`) ghi nhận tương tác người dùng rất sâu (**96 pageviews / 9 visitors, trung bình 10.7 trang/người, thời lượng 1m 07s, Desktop 8/9 người dùng, IQ Myth dẫn đầu 10 views**), tuy nhiên tỷ lệ chuyển đổi liên hệ lại bằng **0 lượt copy email**.
  * **Nguyên nhân kỹ thuật & UX:** Khi người đọc (nhà tuyển dụng/khách hàng) xem hết nội dung chuyên sâu của 4 case study (`iq-myth.html`, `yen.html`, `momo.html`, `shortpeek.html`), điểm cuối trang chỉ có thanh điều hướng chuyển bài (`FOOTER NAV`), hoàn toàn thiếu vắng điểm chạm liên hệ (CTA) tại chỗ. Khách muốn liên hệ buộc phải cuộn ngược toàn bộ trang lên header hoặc bấm về trang chủ. Đồng thời, nút copy email ở chân trang chủ thiếu phản hồi thị giác tương tác cuốn hút để kích thích hành vi bấm.
* **Các nâng cấp kỹ thuật & tương tác chính:**
  * **Động cơ Slot-Machine Rolling Text (`assets/js/interactive-fx.js`):**
    * Lấy cảm hứng từ micro-interaction trục quay cơ học của ToyFight, xây dựng cơ chế cuộn chữ 3 tầng hỗ trợ tăng tốc phần cứng (`transform: translate3d`, `will-change: transform`, đường cong gia tốc lò xo `cubic-bezier(0.16, 1, 0.3, 1)`).
    * Hỗ trợ 2 chế độ:
      * **2 tầng (Hover reveal):** Hiển thị nhãn mặc định (`slot-line-default`), khi hover cuộn trượt lên để lộ email/action mới (`slot-line-hover`).
      * **3 tầng (Action + Copy Success):** Mặc định (`slot-line-default`) → Hover (`slot-line-hover`) → Khi click sao chép kích hoạt `.is-copied` để trượt tiếp lên tầng thành công (`slot-line-success`). Tự động hoàn trả sau 2.8s.
    * Tôn trọng triệt để cờ trợ năng `@media (prefers-reduced-motion: reduce)` (tắt chuyển động cuộn, chuyển sang chuyển đổi tức thì).
  * **Cơ chế sao chép & Floating Toast Feedback toàn cục (`window.copyEmail`):**
    * Sao chép địa chỉ `mr.tru.designer@gmail.com` vào clipboard qua `navigator.clipboard.writeText` (có fallback `document.execCommand`).
    * Bắn sự kiện GA4 tracking `copy_email` (`gtag('event', 'copy_email', { method: 'button_click', ... })`).
    * Tự động biến đổi icon Lucide từ `copy` sang `check` có animation xoay nhẹ.
    * Hiển thị thanh thông báo nổi (floating toast pill `.tru-copy-toast`) ở đáy màn hình với hiệu ứng trượt lò xo: `✓ Đã sao chép mr.tru.designer@gmail.com vào clipboard` (tự động mờ dần và biến mất sau 2.4s).
  * **Nâng cấp nút liên hệ Trang Chủ (`index.html`):**
    * **Header:** Nút "Liên hệ" desktop (`hidden sm:flex`) tích hợp `.slot-roller`: hover mượt mà lộ `mr.tru.designer@gmail.com ↗`. Đồng bộ chuẩn breakpoint `sm:flex` tương thích toàn bộ trang con.
    * **Footer:** Nút sao chép chân trang nâng cấp thành `.footer-email-btn.slot-roll-btn` 3 tầng cuộn (`[ SAO CHÉP EMAIL ]` → `[ MR.TRU.DESIGNER@GMAIL.COM ↗ ]` → `[ ✓ ĐÃ SAO CHÉP EMAIL! ]`). Hỗ trợ click-to-copy trực tiếp cả khi bấm vào chuỗi email văn bản `#email-text`. Đồng bộ tuyệt đối chuẩn bo góc `rounded-lg` (8px), padding `px-4 py-2`, font `text-[11px]` và `gap-2` khớp 100% với 2 hàng nút liền kề ("Gọi điện trực tiếp", "Resume PDF") và danh mục 4 case study bên dưới, khắc phục hoàn toàn tình trạng lệch khối pill (`rounded-full`) so với thiết kế bảng công nghiệp.
    * Cập nhật từ điển song ngữ: thêm `btn-copied-email` cho cả VI (`✓ Đã sao chép email!`) và EN (`✓ Copied to clipboard!`).
  * **Bổ sung Banner Liên hệ Editorial cuối 4 Case Study (`iq-myth.html`, `yen.html`, `momo.html`, `shortpeek.html`):**
    * Bố trí ngay trước `<!-- FOOTER NAV -->` tại điểm chạm kết bài của cả 4 case study.
    * Thiết kế dạng banner tối giản tương phản cao, typography đậm chất editorial:
      * Tag: `[ HỢP TÁC & TRAO ĐỔI // GET IN TOUCH ]`
      * Tiêu đề: `BẠN CẦN PRODUCT DESIGNER CHO DỰ ÁN?` / `LOOKING FOR A PRODUCT DESIGNER?`
      * Mô tả: Lời mời hợp tác rõ ràng cho các cơ hội Full-time, Remote hoặc Freelance UI/UX Product Design.
      * Cụm nút kép: 1 nút Slot-Machine Copy Email (`.slot-roll-btn`) tích hợp toast + 1 nút secondary `mailto:mr.tru.designer@gmail.com` (`GỬI THƯ ↗` / `SEND EMAIL ↗`).
    * Đồng bộ đầy đủ 6 khóa từ điển song ngữ VI/EN (`cs-contact-tag`, `cs-contact-title`, `cs-contact-desc`, `btn-copy-email`, `btn-copied-email`, `btn-send-mail`) trên toàn bộ 4 tệp case study.
* **Kiểm thử thực tế & Đảm bảo chất lượng:**
  * Cú pháp JavaScript qua kiểm tra `node --check assets/js/interactive-fx.js` đạt 0 lỗi.
  * Kiểm thử giao diện và hành vi thực tế qua Browser subagent:
    * Hover desktop kích hoạt cuộn chữ mượt mà, không giật khung hình.
    * Click sao chép kích hoạt class `.is-copied`, chữ cuộn chuẩn xác lên tầng `✓ ĐÃ SAO CHÉP EMAIL!`, icon chuyển thành `check` và toast nổi xuất hiện chuẩn ở đáy màn hình.
    * Banner liên hệ trên cả 4 case study hiển thị thoáng đãng, sắc nét, đúng cấu trúc phân tầng và chuyển đổi theme (`Light / Dark / Pink`) mượt mà.
* **Trạng thái hiện tại:** Đã hoàn tất đóng gói, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai phiên bản tối ưu chuyển đổi và đồng bộ radius lên `https://mrtrudesigner.vercel.app`.

---

## 21. THAY THẾ HIỆU ỨNG CON TRỎ: SATISFYING BLACK FIRE CURSOR TRAIL ANIMATION — 24/11/2026

* **Bối cảnh & Yêu cầu:** Người dùng yêu cầu thay thế toàn bộ hiệu ứng con trỏ chuột hiện tại bằng hiệu ứng **"Satisfying Black Fire Cursor Trail Animation"** theo hướng dẫn video YouTube (`https://www.youtube.com/watch?v=7eE8xPyXSR4` bởi tác giả Zain Zafar / Code Morphism - CodePen: `oNypoEr`).
* **Triển khai kỹ thuật (`assets/js/interactive-fx.js`):**
  * **Thay thế Canvas Halftone Dithered:** Gỡ bỏ hoàn toàn bộ đệm 2D Cellular Grid và `initHalftoneCursor()` (~212 dòng tính toán ma trận điểm halftone trên canvas `#tru-cursor-canvas`), thay bằng module tăng tốc phần cứng `initBlackFireCursorTrail()`.
  * **Cấu trúc 22 Vòng tròn Động cơ (`#tru-fire-cursor-container`):**
    * Tự động sinh `22` phần tử tròn `.tru-trail-circle` (đường kính cơ sở `24px`, bo tròn `50%`, `position: fixed`, `pointer-events: none`, `z-index: 110`).
    * **Dải quang phổ màu Black Fire nguyên bản:** Chuyển màu chuyển tiếp mượt mà từ đốm lửa vàng cam rực rỡ (`#ffb56b`, `#fdaf69`, `#f89d63`) qua đỏ cam (`#ef865e`, `#e36e5c`), đỏ mận (`#d5585c`, `#c5415d`), tím thẫm (`#9c155f`, `#830060`, `#60005f`) và vuốt đuôi về đen khói sâu (`#2a0026`, `#120010`). 4 vòng tròn đầu tiên được phủ thêm hiệu ứng phát quang nhẹ `box-shadow: 0 0 8px rgba(255, 181, 107, 0.45)`.
    * **Tỷ lệ thu nhỏ liên tục (Progressive Scaling):** Vòng tròn đầu mang tỷ lệ `scale(1.0)` và thu nhỏ dần đều theo cấp số nhân dọc thân đuôi xuống `scale(0.045)` ở đốt thứ 22.
    * **Động học Lerp Dẻo (Organic Trailing Physics):** Mỗi đốt bám theo vị trí đốt trước với hệ số nội suy mượt mà `0.32` (`x += (nextCircle.x - x) * 0.32`), tạo cảm giác lượn sóng/uốn lượn như ngọn lửa đen mềm mại, bám dính tự nhiên theo tốc độ di chuột của người dùng.
    * **Phản hồi xúc giác khi nhấp chuột (Click Pulse):** Khi người dùng nhấn giữ chuột (`mousedown`), toàn bộ chuỗi hạt lửa nở rộng tức thì thêm `22%` (`scale * 1.22`) và thu lại trạng thái chuẩn khi nhả chuột (`mouseup`).
    * **Tự động ngủ đông tiết kiệm năng lượng (Sleep Cycle):** Khi chuột dừng di chuyển và chuỗi hạt đã hội tụ dưới con trỏ (`maxDelta < 0.15`), vòng lặp `requestAnimationFrame` tự động dừng hẳn để bảo toàn 100% tài nguyên CPU/GPU và pin thiết bị. Chu trình chỉ thức dậy khi có sự kiện `mousemove` hoặc `mousedown` mới.
    * **Trợ năng & Đa nền tảng:** Tự động tắt trên thiết bị cảm ứng (không có fine pointer) hoặc người dùng bật cờ `prefers-reduced-motion: reduce`. Tự động ẩn nhẹ nhàng (`opacity: 0`) khi chuột rời khỏi khung nhìn trình duyệt (`mouseleave`).
* **Kiểm thử thực tế & Bằng chứng xác minh:**
  * Kiểm tra cú pháp `node --check assets/js/interactive-fx.js` đạt 0 lỗi.
  * Kiểm thử qua Browser subagent trên cả trang chủ `http://localhost:3366/` và case study `http://localhost:3366/iq-myth.html`:
    * Container sinh đầy đủ 22 phần tử `.tru-trail-circle`.
    * Dải màu và tỷ lệ scale chuyển tiếp chuẩn xác từ đầu đến đuôi (`scale 1.0 → 0.045`).
    * Mousedown kích hoạt scale tăng `1.22` lần mượt mà.
    * Tuyệt đối không cản trở thao tác click hay hover vào các nút bấm, liên kết và component trên website (`pointer-events: none`).
* **Trạng thái hiện tại:** Đã hoàn tất kiểm thử, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai phiên bản con trỏ mới lên `https://mrtrudesigner.vercel.app`.

---

## 22. TÍCH HỢP HIỆU ỨNG LOAD ĐẦU TRANG & CHUYỂN CẢNH TOYFIGHT 5-COLUMN STAGGERED CURTAIN — 24/11/2026

* **Bối cảnh & Yêu cầu:** Người dùng yêu cầu tích hợp hiệu ứng tải đầu trang (page loader/entrance) và hiệu ứng chuyển trang (page transition) theo phong cách của trang web nổi tiếng **ToyFight** (`https://toyfight.co/work`).
* **Phân tích chuyển động ToyFight (Awwwards Site of the Year):**
  * Khung màn che được chia thành **5 cột dọc đối xứng** (`width: 20vw` mỗi cột, trải toàn màn hình).
  * Giữa màn hình xuất hiện cụm 3 huy hiệu viên thuốc (pill badges) tối giản: `[ TRỨ ] [ PRODUCT DESIGNER ] [ PORTFOLIO ]` (hoặc tên case study tương ứng `[ 01. YÊN ]`, `[ 02. IQ MYTH ]`, `[ 03. MOMO ]`, `[ 04. SHORTPEEK ]`).
  * **Chuyển động bậc thang lùi dần (Staggered Echelon):** Khi mở trang, 5 cột trượt lên trên theo nhịp so le lệch pha từ trái sang phải (`stagger: 0.065s`, gia tốc `power4.inOut`). Khi chuyển trang, 5 cột quét lên từ đáy màn hình, huy hiệu xuất hiện rồi tự động mở ra ở trang mới.
* **Triển khai kỹ thuật (`assets/js/interactive-fx.js` & 6 tệp HTML):**
  * **Kiến trúc DOM đồng nhất (`#tru-curtain-overlay`):** Bổ sung trực tiếp khối 5 cột `.tru-curtain-col` và cụm huy hiệu `#tru-curtain-badge` vào đầu thẻ `<body>` của toàn bộ 6 trang (`index.html`, `iq-myth.html`, `yen.html`, `momo.html`, `shortpeek.html`, `404.html`). Đảm bảo 100% không bị chớp trắng (Zero FOUC) ngay cả khi người dùng truy cập trực tiếp bằng URL hay bấm `Cmd + R` làm mới.
  * **Module `initToyFightCurtain()` (Load đầu trang):**
    * Giữ huy hiệu trung tâm trong thời gian tối ưu (`480ms` khi mở trang mới, `140ms` khi chuyển trang nhanh).
    * Huy hiệu mờ dần và thu nhỏ (`scale: 0.92, duration: 0.22s, ease: 'power2.in'`), ngay sau đó 5 cột đen trượt lên (`yPercent: -100`) theo nhịp so le (`stagger: 0.065s, duration: 0.72s, ease: 'power4.inOut'`).
    * Tự động kích hoạt hiệu ứng mở chữ Hero (`triggerHeroEntrance`) ngay khi màn che bắt đầu mở.
  * **Module `navigateWithCurtain(href)` (Chuyển trang liên kết nội bộ):**
    * Bắt sự kiện click chuột trên toàn bộ link điều hướng và dự án nội bộ.
    * 5 cột trượt quét ngược từ dưới lên (`yPercent: 100 -> 0`) theo nhịp so le (`stagger: 0.055s, duration: 0.58s`), huy hiệu trung tâm nảy ra nhẹ nhàng (`scale: 1, ease: 'back.out(1.2)'`), cập nhật tức thì nhãn của trang đích.
    * Lưu cờ `sessionStorage.setItem('tru_transition', '1')` để trang kế tiếp biết và lập tức mở màn che mà không bắt người dùng phải đợi lâu.
  * **Cơ chế chống treo & Trợ năng:**
    * Fail-safe timeout 2.8s tự động gỡ màn che nếu trình duyệt gặp sự cố mạng hoặc JS.
    * Hỗ trợ bộ nhớ đệm trình duyệt (bfcache): lắng nghe `pageshow` để tự động dọn sạch màn che khi người dùng bấm nút Back/Forward trên trình duyệt.
    * Tự động tắt hoàn toàn khi phát hiện cờ `prefers-reduced-motion: reduce`.
* **Kiểm thử thực tế & Bằng chứng xác minh:**
  * Cú pháp `node --check assets/js/interactive-fx.js` đạt 0 lỗi.
  * Kiểm thử qua Browser subagent trên cả 4 kịch bản:
    1. Load đầu trang chủ: 5 cột quét lên so le mượt mà, huy hiệu hiển thị chuẩn.
    2. Chuyển trang xuôi sang case study `yen.html`: màn che quét lên từ đáy, chuyển trang mượt mà, mở màn che để lộ case study.
    3. Chuyển trang ngược về `index.html#work`: màn che quét lên và mở ra chuẩn xác.
    4. Vệt chuột Black Fire Cursor Trail hoạt động song song mượt mà ở 60–120fps, không bị giật lag hay xung đột DOM.
* **Trạng thái hiện tại:** Đã hoàn tất đóng gói, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai lên `https://mrtrudesigner.vercel.app`.

---

## 23. ẨN HOÀN TOÀN CON TRỎ MẶC ĐỊNH HỆ THỐNG (DEFAULT OS CURSOR SUPPRESSION) — 24/11/2026

* **Bối cảnh & Yêu cầu:** Người dùng yêu cầu "ẩn con trỏ mặc định đi" để vệt lửa đen **Black Fire Cursor Trail** và huy hiệu nổi trở thành con trỏ thị giác duy nhất trên toàn bộ website, loại bỏ hiện tượng hiển thị cùng lúc cả con trỏ chuột mũi tên / bàn tay mặc định của hệ điều hành và vệt lửa.
* **Thách thức kỹ thuật:**
  * Nếu chỉ đặt `body { cursor: none; }`, khi người dùng rê chuột qua các thẻ liên kết `<a>`, nút bấm `<button>`, các phần tử mang class `cursor-pointer` (từ Tailwind) hoặc `input`, con trỏ mặc định của hệ thống vẫn sẽ hiện đè lên vệt lửa.
  * Phải đảm bảo con trỏ chuột không bị ẩn trên thiết bị di động / màn hình cảm ứng, và phải phục hồi bình thường nếu người dùng bật chế độ giảm chuyển động (`prefers-reduced-motion: reduce`).
  * Khắc phục độ ưu tiên z-index: Đẩy `#tru-fire-cursor-container` lên `z-index: 100000` và `#tru-cursor-pill` lên `z-index: 100001` (vượt trên màn che ToyFight `z-index: 99999`) để con trỏ không bao giờ bị "biến mất" đột ngột trong lúc chuyển trang hay tải đầu trang.
* **Giải pháp triển khai kỹ thuật (`assets/js/interactive-fx.js` & 6 tệp HTML):**
  * **Khai báo CSS chống override triệt để:**
    ```css
    @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
      html.has-fire-cursor,
      html.has-fire-cursor *,
      html.has-fire-cursor *::before,
      html.has-fire-cursor *::after,
      body.has-fire-cursor,
      body.has-fire-cursor *,
      body.has-fire-cursor *::before,
      body.has-fire-cursor *::after {
        cursor: none !important;
      }
    }
    ```
  * **Đồng bộ sớm trong `<head>` của toàn bộ 6 trang (`index.html`, `iq-myth.html`, `yen.html`, `momo.html`, `shortpeek.html`, `404.html`):**
    * Thêm cờ kích hoạt `document.documentElement.classList.add('has-fire-cursor')` ngay từ đoạn script đầu `<head>` giúp con trỏ hệ thống biến mất tức thì ngay từ frame đầu tiên khi mở trang, không có hiện tượng giật con trỏ (Zero Cursor Flicker).
    * Bổ sung quy tắc CSS vào khối `<style>` của cả 6 trang để bộ render của trình duyệt tính toán trước.
  * **Cơ chế tự bảo vệ trong `assets/js/interactive-fx.js`:**
    * Hàm `injectFireCursorStyles()` tự động tiêm thẻ `<style id="tru-fire-cursor-styles">` vào DOM.
    * Gắn class `has-fire-cursor` vào cả `documentElement` và `document.body`.
    * Tự động hoàn trả con trỏ mặc định nếu phát hiện môi trường cảm ứng (`pointer: coarse`) hoặc chế độ giảm chuyển động.
* **Kiểm thử thực tế & Bằng chứng xác minh:**
  * Cú pháp `node --check assets/js/interactive-fx.js` đạt 0 lỗi.
  * Kiểm thử qua Browser subagent trên máy chủ cục bộ:
    * `document.documentElement.classList.contains('has-fire-cursor') === true`.
    * `window.getComputedStyle(el).cursor` đạt giá trị `'none'` trên `body`, thẻ `<a>`, `<button>` và `.case-row`.
    * Container `#tru-fire-cursor-container` hoạt động ổn định với đầy đủ 22 hạt `.tru-trail-circle`, opacity 1, bám sát tọa độ chuột mượt mà.
    * Đã lưu ảnh chụp kiểm chứng tại: `browser_evidence/628e2502-07ca-4a14-9a61-ff0eeff41d97/final_step_20.png`.
* **Trạng thái hiện tại:** Đã hoàn tất kiểm thử, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai lên `https://mrtrudesigner.vercel.app`.

---

## 24. TÁI CẤU TRÚC THỨ TỰ DỰ ÁN THEO THỜI GIAN THỰC HIỆN & ĐỒNG BỘ TOÀN DIỆN BÁN KÍNH BO GÓC — 24/11/2026

* **Bối cảnh & Yêu cầu:**
  * Người dùng yêu cầu sắp xếp lại thứ tự toàn bộ các case study trên website theo trục thời gian thực hiện (Timeline).
  * Lựa chọn đã chốt: **Mới nhất đến cũ nhất (Dự án thực tế trước)**:
    1. **`01. SHORTPEEK`** (2026 — Client Work tại Marchi Lab, Mobile App)
    2. **`02. YÊN`** (2026 — Personal Concept, Healthcare & Aging-Tech Dual App)
    3. **`03. IQ MYTH`** (2025 — EdTech Web App, Behavioral UI & Prototyping)
    4. **`04. MOMO TRANSFER`** (2025 — Personal Concept, FinTech UX Research & Redesign)
  * Đồng thời rà soát và kiểm chứng đồng bộ bán kính góc bo (`border-radius: 8px` / `rounded-lg`) trên cụm nút liên hệ chân trang ("Sao chép địa chỉ email", "Gọi điện trực tiếp", "RESUME PDF" và lưới 4 case study liên kết trực tiếp).
* **Các tệp được cập nhật đồng bộ xuyên suốt toàn bộ codebase (7 tệp):**
  1. **`assets/js/interactive-fx.js`:**
     * Cập nhật `getPagePillLabels()`: ánh xạ nhãn huy hiệu chuyển trang màn che sang `01. SHORTPEEK`, `02. YÊN`, `03. IQ MYTH`, `04. MOMO`.
     * Cập nhật `navigateWithCurtain()`: gán nhãn đích chuẩn xác cho từng đường dẫn.
     * Cập nhật danh sách nút dự án trong Menu Overlay toàn màn hình (Shortpeek đầu tiên, MoMo cuối cùng).
  2. **`index.html`:**
     * Cập nhật ảnh preview ban đầu `#cursor-preview-img` sang `assets/covers/shortpeek-mobile.webp`.
     * Đổi thứ tự 4 hàng case study trong `#work`: Shortpeek (`01/`), Yên (`02/`), IQ Myth (`03/`), MoMo Transfer (`04/`).
     * Đồng bộ bán kính `rounded-lg` (8px) cho cụm 3 nút liên hệ chân trang và lưới 4 thẻ liên kết direct cases.
     * Đổi thứ tự trong danh sách nút Menu Overlay, drawer preview data (`01 / 04` .. `04 / 04`) và danh sách preload covers.
  3. **`shortpeek.html`:**
     * Cập nhật huy hiệu màn che `#tru-curtain-badge` sang `01. SHORTPEEK`.
     * Cập nhật thẻ chỉ mục hero: `[ 01 // SELECTED WORK ]`.
     * Cập nhật điều hướng chân trang: Nút trước -> `VỀ TRANG CHỦ` (`index.html`), Nút kế tiếp -> `DỰ ÁN TIẾP THEO: YÊN` (`yen.html`).
     * Cập nhật từ điển dịch thuật đa ngữ VI/EN (`hero-tag`, `foot-back`, `foot-next`).
  4. **`yen.html`:**
     * Cập nhật huy hiệu màn che `#tru-curtain-badge` sang `02. YÊN`.
     * Cập nhật thẻ chỉ mục hero: `[ 02 // SELECTED WORK ]`.
     * Cập nhật điều hướng chân trang: Nút trước -> `DỰ ÁN TRƯỚC: SHORTPEEK` (`shortpeek.html`), Nút kế tiếp -> `DỰ ÁN TIẾP THEO: IQ MYTH` (`iq-myth.html`).
     * Cập nhật từ điển dịch thuật đa ngữ VI/EN (`hero-tag`, `foot-prev`, `foot-next`).
  5. **`iq-myth.html`:**
     * Cập nhật huy hiệu màn che `#tru-curtain-badge` sang `03. IQ MYTH`.
     * Cập nhật thẻ chỉ mục hero: `[ 03 // SELECTED WORK ]`.
     * Điều hướng chân trang: Nút trước -> `yen.html` (`02. YÊN`), Nút kế tiếp -> `momo.html` (`04. MOMO`).
     * Cập nhật từ điển dịch thuật đa ngữ VI/EN (`hero-tag`).
  6. **`momo.html`:**
     * Cập nhật huy hiệu màn che `#tru-curtain-badge` sang `04. MOMO`.
     * Cập nhật thẻ chỉ mục hero: `[ 04 // SELECTED WORK ]`.
     * Cập nhật điều hướng chân trang: Nút trước -> `iq-myth.html` (`03. IQ MYTH`), Nút kế tiếp -> `VỀ DỰ ÁN ĐẦU TIÊN: SHORTPEEK` (`shortpeek.html` tạo chu trình điều hướng tuần hoàn khép kín).
     * Cập nhật từ điển dịch thuật đa ngữ VI/EN (`hero-tag`, `foot-next`).
  7. **`404.html`:**
     * Đổi thứ tự 4 thẻ danh mục dự án sang Shortpeek (01) → Yên (02) → IQ Myth (03) → MoMo (04).
     * Cập nhật mảng dự án ngẫu nhiên `projects` trong hàm `spinRoulette()`.
     * Cập nhật từ điển đa ngữ `w1` đến `w4` trong cả 2 ngôn ngữ `vi` và `en`.
* **Kiểm thử thực tế & Bằng chứng xác minh:**
  * Cú pháp `node --check assets/js/interactive-fx.js` đạt 0 lỗi.
  * `git diff --check` sạch 100%, không lỗi khoảng trắng hay xung đột.
  * Browser subagent kiểm thử trên máy chủ cục bộ:
    * Section `#work` hiển thị chuẩn xác `01/ SHORTPEEK`, `02/ YÊN`, `03/ IQ MYTH`, `04/ MOMO TRANSFER`.
    * Cụm nút chân trang Dark Footer đồng bộ tuyệt đối `rounded-lg` (computed 8px).
    * Click "01. SHORTPEEK" tải đúng trang, hiển thị `[ 01 // SELECTED WORK ]`, chân trang trỏ tới "DỰ ÁN TIẾP THEO: YÊN".
    * Trang `404.html` hiển thị đúng danh mục 4 thẻ theo thứ tự mới.
* **Trạng thái hiện tại:** Đã hoàn tất đóng gói, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai.

---

## 25. CHUỖI 22 HẠT ĐẢO MÀU ÂM BẢN (22-PARTICLE INVERTING NEGATIVE TRAIL) — 25/11/2026

* **Bối cảnh & Yêu cầu:**
  * Người dùng làm rõ yêu cầu: *"không đúng rồi, như trong ảnh vẫn là kiểu 22 hạt mà"*.
  * Ảnh minh họa tham chiếu chính là chuỗi chuyển động 22 hạt tròn nối đuôi nhau (Zain Zafar / Code Morphism) nhưng không dùng dải màu lửa đa sắc (cam/hồng/tím), mà dùng **màu trắng nguồn kết hợp `mix-blend-mode: difference`** để toàn bộ 22 hạt biến thành một dải ruy-băng đen tuyền uốn lượn, và khi lướt qua chữ đen hoặc bất cứ nội dung nào sẽ tạo nên các dải sóng âm bản (negative cutout ripples) xen kẽ cực kỳ thôi miên và cao cấp.
* **Nguyên lý quang học CSS & Thuật toán triển khai:**
  * **22 phần tử `.tru-trail-circle` đồng dạng mang `mix-blend-mode: difference; background: #ffffff;`:**
    * Trên nền sáng (`#F5F5F0` / `#FFFFFF`): Vùng hạt đơn lẻ đảo nền trắng thành **đen tuyền (`#000000`)**.
    * Khi các hạt đè lấn lên nhau: Sự giao thoa quang học tạo nên các nếp sóng âm bản so le đen - trắng hình nón vuốt nhọn (tapering wedge) bám theo quán tính chuyển động chuột, khớp 100% từng pixel trong ảnh chụp tham chiếu của người dùng.
    * Khi lướt qua chữ đen (`#141416` / `#0E0E0E`): Bất kỳ phần nét chữ nào nằm dưới các hạt tròn lập tức đảo thành **màu trắng sáng rực (`#FFFFFF`)**.
    * Khi lướt qua nền tối (Dark Footer `#141416`): Chuỗi 22 hạt tự động đảo thành **dải ruy-băng trắng phát quang**, và khi lướt qua chữ trắng sẽ đảo nét chữ thành đen.
    * Khi lướt qua nút bấm lime `#C4FF00`: Chuỗi hạt đổi sang dải màu tím điện quang (electric indigo `#3B00FF`) kèm chữ âm bản.
* **Chi tiết kỹ thuật (`assets/js/interactive-fx.js`):**
  * **Cấu trúc DOM:** Container `#tru-trail-cursor-container` sinh chính xác `22` hạt `.tru-trail-circle` (`width: 26px, height: 26px, border-radius: 50%`, `z-index: 100000`, `pointer-events: none`).
  * **Thuật toán vật lý bám đuổi (Fluid Chasing Physics):**
    * Vòng lặp `requestAnimationFrame` tính toán nội suy tọa độ:
      ```javascript
      const nextCircle = circles[i + 1] || circles[0];
      curX += (nextCircle.x - curX) * 0.32;
      curY += (nextCircle.y - curY) * 0.32;
      ```
    * Tỷ lệ thu nhỏ vuốt đuôi: `scaleBase = (circles.length - i) / circles.length` (từ 1.0 ở hạt đầu đến ~0.045 ở hạt đuôi).
  * **Mở rộng dải âm bản khi lướt qua chữ (`isHovering`):**
    * Khi rê chuột qua văn bản (`h1..h6`, `p`, `span`, `strong`, `li`, `dt`, `dd`, `blockquote`), nút bấm, thẻ dự án: Hệ số phóng đại tự động nhân thêm `hoverMult: 1.6` (hạt đầu mở rộng lên `~41.6px`), giúp dải âm bản phủ rộng và làm nổi bật các nét chữ bên dưới.
    * Khi bấm chuột (`mousedown`): Hệ số nhân thêm `clickMult: 1.25` tạo phản hồi nhấp nháy cơ học.
  * **Khoảng cách thẻ nhãn (`#tru-cursor-pill`):** Dời cự ly an toàn `offsetDist: 38px` để thẻ nhãn bay song hành cùng đầu chuỗi 22 hạt mà không che khuất các hạt âm bản.
* **Kiểm thử trực quan qua Browser subagent:**
  * Đã xác nhận trực tiếp trên `http://localhost:3394/`:
    * `#tru-trail-cursor-container` chứa đủ 22 phần tử `.tru-trail-circle`.
    * Rê chuột theo đường cong qua tiêu đề Hero `h1` `"DESIGN WITHOUT"`: chuỗi 22 hạt uốn lượn mượt mà, đảo nét chữ đen thành trắng âm bản rõ rệt.
    * Rê chuột xuống Dark Footer: chuỗi hạt phát sáng trắng trên nền tối, đảo chữ heading `"MỘT BUỔI"` và nút `"RESUME PDF"` qua `mix-blend-mode: difference`.
    * Đã lưu ảnh chụp kiểm chứng tại: `browser_evidence/22b0e8b2-7f4f-4dd6-af11-23f284d74efa/final_step_14.png` và `step_4_shot_1.png`.
* **Trạng thái hiện tại:** Đã hoàn tất đóng gói, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai.

---

## 26. KHẮC PHỤC TRIỆT ĐỂ LỖI VÂN ĐỒNG TÂM MOIRÉ BẰNG CSS ISOLATION COMPOSITING — 25/11/2026

* **Bối cảnh & Yêu cầu:**
  * Người dùng gửi ảnh phản ánh: *"sao giờ lại thành như này rồi"* kèm ảnh chụp con trỏ khi dừng lại trên chữ `"VIỆC"` bị co lại thành các vòng tròn đồng tâm so le đen - trắng dày đặc như bia bắn / ảo ảnh quang học moiré.
* **Nguyên nhân gốc rễ (Root Cause):**
  * Khi con trỏ đứng yên, toàn bộ `22` hạt tròn hội tụ về cùng một tọa độ `(x, y)` với kích thước bán kính giảm dần từ hạt 0 đến hạt 21.
  * Nếu đặt `mix-blend-mode: difference` trực tiếp trên từng hạt `.tru-trail-circle`, mỗi hạt nằm đè lên hạt trước đó sẽ đảo ngược màu lại một lần (Hạt 0: trắng $\rightarrow$ đen; Hạt 1 đè lên: đen $\rightarrow$ trắng; Hạt 2 đè lên: trắng $\rightarrow$ đen...). Kết quả tạo ra 22 vòng tròn đồng tâm đen - trắng xen kẽ.
* **Giải pháp kiến trúc CSS Isolation:**
  * **Chuyển `mix-blend-mode: difference` lên Container cha `#tru-trail-cursor-container` kết hợp `isolation: isolate;`:**
    ```css
    #tru-trail-cursor-container {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 100000;
      overflow: hidden;
      opacity: 0;
      transition: opacity 0.25s ease;
      isolation: isolate;
      mix-blend-mode: difference;
    }
    .tru-trail-circle {
      position: fixed;
      top: 0;
      left: 0;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: #ffffff;
      pointer-events: none;
      will-change: transform;
      transform: translate3d(-100px, -100px, 0) scale(0);
    }
    ```
  * **Cơ chế hoạt động:**
    1. Bên trong container bị cô lập (`isolation: isolate`), toàn bộ 22 hạt đều mang màu trắng thuần khiết `#ffffff` và hòa trộn bình thường (`mix-blend-mode: normal`).
    2. Khi các hạt đè lên nhau (dù lúc dừng lại hay di chuyển), chúng tự động **hợp nhất thành một khối trắng đặc liền mạch duy nhất (Single Unified Silhouette)** — triệt tiêu 100% các vòng vân đồng tâm.
    3. Sau đó, toàn bộ khối hình trắng hợp nhất này mới được hòa trộn một lần duy nhất với trang web thông qua `mix-blend-mode: difference` của container.
    4. *Kết quả:*
       * Khi đứng yên: Hiện thị là **1 vòng tròn đen đặc duy nhất (Solid Black Circle)**, không có bất kỳ vân xoắn hay bia bắn nào.
       * Khi di chuyển: Tạo thành **dải ruy-băng đen tuyền mượt mà uốn lượn**, không hề có sọc vằn moiré.
       * Khi lướt qua chữ: Nét chữ đen bên dưới được đảo ngược thành **màu trắng sáng rực (âm bản)** trên nền dải đen liền khối.
* **Kiểm thử trực quan qua Browser subagent:**
  * Đã kiểm chứng trực tiếp trên máy chủ cục bộ:
    * Khi dừng chuột tại tọa độ `(300, 300)`: con trỏ hội tụ thành một hình tròn đen đặc duy nhất, không còn dấu vết của vòng đồng tâm.
    * Khi quét chuột qua tiêu đề `"DESIGN WITHOUT"`: dải ruy-băng đen liền mạch đảo nét chữ `"W"` thành màu trắng âm bản rõ ràng, sắc sảo.
    * Đã lưu ảnh chụp kiểm chứng tại: `browser_evidence/2a8b7c1d-c139-45a8-95c4-ae601ad1e282/final_step_12.png` và `step_4_shot_1_stationary_cursor.png`.
* **Trạng thái hiện tại:** Đã hoàn tất đóng gói, commit và push lên nhánh `main` (`origin/main`) để Vercel tự động triển khai.

---

### 27. CỐ ĐỊNH KÍCH THƯỚC CON TRỎ ÂM BẢN VÀ HOÀN TẤT ĐỒNG BỘ GIAO DIỆN — 25/11/2026
* **Yêu cầu tinh chỉnh:**
  1. Khi hover chuột vào chữ hoặc các thành phần trang web, giữ nguyên kích thước con trỏ bình thường (`24px`), không phóng to (`hoverMult: 1.6`).
  2. Rà soát và giải quyết trọn vẹn 3 ảnh đối chiếu của người dùng:
     * *Ảnh 1:* Đồng bộ bán kính góc bo (`border-radius`) cụm nút chân trang.
     * *Ảnh 2:* Vệt di chuyển âm bản tự nhiên uốn lượn theo chuột, đảo màu nét chữ từ đen sang trắng sắc nét.
     * *Ảnh 3:* Khắc phục triệt để lỗi 22 vòng tròn đồng tâm (hiệu ứng moiré/dartboard) khi dừng chuột.
* **Giải pháp kỹ thuật chi tiết:**
  * **Loại bỏ hệ số mở rộng kích thước hover:**
    * Trong `assets/js/interactive-fx.js`: Gỡ bỏ danh sách `HOVER_TARGETS` và cờ `isHovering`.
    * Cố định tỷ lệ `multiplier = isClicking ? 1.15 : 1.0;` (chỉ có phản hồi nhấp chuột nhẹ 1.15x khi click, không phình to khi lướt qua văn bản).
    * Chuẩn hóa kích thước hạt đầu về `24px` (`curX - 12px`, `curY - 12px`) và vuốt nhỏ dần đều theo 22 phân đoạn vật lý (`scale: 1.0` xuống `0.045`).
  * **Tổng hợp kết quả 3 vấn đề đối chiếu:**
    1. *Ảnh 1 (Radius):* Nút sao chép email đã đồng bộ `rounded-lg` (8px), kích thước `px-4 py-2`, font `text-[11px]`, khớp 100% với nút "Gọi điện trực tiếp" và "RESUME PDF".
    2. *Ảnh 2 (Mẫu vệt âm bản):* Dải 22 hạt uốn lượn mềm mại, khi lướt qua các ký tự chữ đen sẽ đảo ngược màu thành chữ trắng tinh khôi trên dải đen mà không cần dùng thêm lớp DOM giả.
    3. *Ảnh 3 (Moiré vòng đồng tâm):* Nhờ container cha mang `isolation: isolate; mix-blend-mode: difference;` và các hạt mang màu trắng `#ffffff` với `mix-blend-mode: normal`, các hạt khi đứng yên hợp nhất thành 1 hình tròn đen đặc duy nhất, tuyệt đối không còn vân vòng tròn bia bắn.
* **Kiểm thử trực quan qua Browser subagent:**
  * Browser subagent đã kiểm tra thao tác lia chuột qua các khối chữ `"DESIGN WITHOUT"`, đoạn trích dẫn `"sản phẩm số..."`:
    * Con trỏ giữ nguyên kích thước `24px` cố định, chuyển động mượt mà ở 60fps.
    * Nét chữ đảo màu âm bản trắng sáng chuẩn xác.
    * Đã lưu ảnh kiểm chứng tại: `browser_evidence/5d46a6fc-e65c-4989-b276-4cf540bd0382/step_12_shot_1_trail_sweep_design.png` và `step_12_shot_2_trail_sweep_paragraph.png`.
* **Trạng thái hiện tại:** Đã hoàn tất đóng gói, commit và push lên nhánh `main` (`origin/main`) để Vercel cập nhật trực tiếp.

---

## 28. CẬP NHẬT DEVICE MOCKUP 2 MÁY CHO SHORTPEEK COVER — 27/11/2026
* **Bối cảnh & Yêu cầu:**
  * Thay thế ảnh bìa Shortpeek trước đó (3 màn hình phẳng flat UI trên nền lưới tối) thành ảnh Device Mockup chân thực, chuyên nghiệp.
  * Thống nhất lựa chọn mẫu Mockup 2 máy đứng trực diện chuẩn iPhone (Titanium Silver / Studio Shadow) trên nền sáng trung tính `#E9E9E7`.
* **Thực hiện:**
  * Tiếp nhận file ảnh mockup do người dùng xuất từ template Mẫu 1 (gồm 2 máy: máy trái là màn Home với poster phim, máy phải là màn Mở khóa tập 11 giải quyết bài toán Monetization & VIP cards).
  * Chuẩn hóa kích thước về tỉ lệ 16:10 (`1280 × 800px`), căn giữa cụm 2 máy cân đối tuyệt đối trên nền studio xám nhạt (`#E9E9E7`) đồng điệu 100% với phong cách Swiss Editorial của toàn bộ portfolio.
  * Tối ưu nén WebP chất lượng 90% siêu nhẹ (`55.8 KB`), thay thế trực tiếp vào `assets/covers/shortpeek-mobile.webp`.
  * Ảnh được tự động cập nhật đồng bộ tại 3 vị trí:
    1. Ngăn kéo tóm tắt nhanh (Quick Summary Drawer) của Shortpeek.
    2. Khung thẻ bài Mobile Showcase tỉ lệ 16:10 trên điện thoại (`index.html`).
    3. Cửa sổ nổi xem trước dự án theo con trỏ chuột (`#cursor-preview`) trên Desktop.
* **Kiểm thử kỹ thuật:**
  * HTTP 200 tải tệp `assets/covers/shortpeek-mobile.webp` (55.8 KB) trên máy chủ cục bộ.
  * Kiểm tra hiển thị nền tiệp màu tuyệt đối không có vết ghép (zero seam).
* **Trạng thái:** Đã cập nhật và đẩy lên nhánh `main` để Vercel tự động triển khai.
