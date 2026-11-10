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
