# AGENTS.md — Quy tắc phát triển Trợ lý đất đai số Yên Phong

## Phạm vi dự án

- Chỉ làm việc trong thư mục dự án hiện tại:
  `tro-ly-dat-dai-so-yen-phong-v1 (1)/yen-phong-land-assistant`
- Không tạo website hoặc dự án mới để thay thế dự án hiện tại.
- Không tự ý chuyển sang một cấu trúc dự án khác.
- Không đổi tên miền `tuan2016.com`.

## Bảo toàn chức năng hiện có

- Không xóa, vô hiệu hóa hoặc thay đổi hành vi của chức năng đang có nếu chưa được yêu cầu rõ ràng.
- Khi bổ sung chức năng mới, ưu tiên tương thích ngược và hạn chế ảnh hưởng đến các luồng hiện hữu.
- Trước khi thay đổi lớn, phải rà soát mã nguồn và xác định các chức năng có thể bị ảnh hưởng.

## Dữ liệu đất đai và pháp lý

- Không tự bịa hoặc suy đoán căn cứ pháp luật, biểu mẫu, bảng giá đất, thủ tục, số liệu địa phương hoặc dữ liệu nghiệp vụ.
- Mọi dữ liệu pháp lý đưa vào website phải có nguồn kiểm chứng.
- Mọi dữ liệu pháp lý phải thể hiện hoặc lưu được trạng thái hiệu lực; không mặc nhiên coi văn bản là còn hiệu lực nếu chưa kiểm tra.
- Khi chưa đủ nguồn xác thực, phải đánh dấu là chưa xác minh hoặc yêu cầu bổ sung nguồn thay vì tự suy diễn.
- Không đưa thông tin nhạy cảm, thông tin tài khoản, mật khẩu, khóa API hoặc thông tin xác thực vào mã nguồn phía client.

## Công nghệ

- Giữ nền tảng hiện tại: Next.js.
- Sử dụng TypeScript cho mã nguồn TypeScript.
- Giữ Tailwind CSS cho hệ thống giao diện hiện tại.
- Không thay thế stack công nghệ hiện tại bằng một framework hoặc kiến trúc mới nếu chưa có yêu cầu rõ ràng.

## Kiểm thử và build

- Sau mỗi thay đổi mã nguồn, phải kiểm tra dependency và chạy `npm install` khi cần.
- Sau mỗi thay đổi, phải chạy `npm run build`.
- Nếu build lỗi, phải sửa lỗi và chạy lại cho đến khi build thành công trước khi đề xuất merge.
- Không báo build thành công nếu chưa thực sự kiểm tra.
- Pull request chỉ được tạo khi build đã thành công.

## Giao diện và trải nghiệm

- Website phải tối ưu cho điện thoại và màn hình máy tính.
- Ưu tiên giao diện đơn giản, rõ ràng, dễ thao tác đối với cán bộ cơ sở và người dân.
- Các biểu mẫu, nút thao tác, thông báo lỗi và kết quả tra cứu phải dễ đọc, dễ hiểu và phù hợp với thiết bị cảm ứng.
- Không hy sinh khả năng sử dụng trên điện thoại để tối ưu riêng cho desktop.

## Git và quy trình thay đổi

- Làm việc trực tiếp trên repository và thư mục dự án hiện tại; không tạo dự án thay thế.
- Mỗi nhóm thay đổi có mục đích rõ ràng nên được thực hiện trên branch riêng khi phù hợp.
- Commit phải mô tả đúng nội dung thay đổi.
- Pull request phải nêu rõ phạm vi thay đổi và kết quả kiểm tra build.
- Không tạo pull request nếu chưa đáp ứng điều kiện build thành công ở trên.

## Nguyên tắc chung

- Ưu tiên tính chính xác, khả năng kiểm chứng, ổn định và bảo toàn chức năng hơn việc bổ sung nhanh chức năng mới.
- Khi có xung đột giữa dữ liệu hiển thị và nguồn pháp lý chính thức, phải ưu tiên nguồn chính thức và ghi nhận việc cần rà soát/cập nhật.
