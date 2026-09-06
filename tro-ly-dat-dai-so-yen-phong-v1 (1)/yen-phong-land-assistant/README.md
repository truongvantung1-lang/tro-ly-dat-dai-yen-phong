# TRỢ LÝ ĐẤT ĐAI SỐ KHU VỰC YÊN PHONG – BẮC NINH

Website prototype bằng Next.js + TypeScript + Tailwind CSS.

## Phạm vi bản khung 1.0

- Giao diện riêng cho cán bộ cơ sở và người dân khu vực Yên Phong
- Bộ nhóm thủ tục phổ biến, trình chọn thủ tục và bàn làm việc nghiệp vụ
- Trung tâm tiện ích, khu vực WebGIS và giao diện trợ lý đất đai
- Kiến trúc dữ liệu tách riêng để tiếp tục nạp quy trình, biểu mẫu, bảng giá đất và văn bản của Bắc Ninh

> Lưu ý: bản này là khung kỹ thuật, chưa phải nguồn tư vấn pháp lý chính thức. Các dữ liệu địa phương phải được kiểm chứng trước khi công khai.

## Chạy local

```bash
npm install
npm run dev
```

Mở: http://localhost:3000

## Cấu trúc dữ liệu
- `data/procedures.ts`
- `data/legalDocuments.ts`
- `data/forms.ts`
- `data/landPrices.ts`
- `data/administrativeAreas.ts`

## Kiến trúc mở rộng
- Thêm API routes trong `app/api/*`
- Kết nối database về sau (PostgreSQL/Supabase hoặc hệ tương đương)
- WebGIS tách module bản đồ
- AI assistant kết nối backend/RAG để chỉ truy xuất căn cứ pháp lý đã kiểm chứng
- Sinh Word/PDF từ dữ liệu hồ sơ sau này

## Domain/hosting
Tên miền Hostinger đã có. Chỉ trỏ domain sau khi build và deploy ổn định.

## Đưa lên Hostinger dạng web tĩnh

```bash
npm install
npm run build
```

Tải toàn bộ nội dung trong thư mục `out` lên thư mục `public_html` của tên miền.
