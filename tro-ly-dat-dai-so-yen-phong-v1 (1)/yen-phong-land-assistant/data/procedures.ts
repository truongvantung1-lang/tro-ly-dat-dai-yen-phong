export type Procedure = {
  slug: string
  title: string
  short: string
  audience: string
  conditions: string[]
  documents: string[]
  process: string[]
  submitAt: string
  timeline: string
  finance: string
  legalRefs: string[]
}

export const procedures: Procedure[] = [
  ['cap-gcn-lan-dau','Cấp Giấy chứng nhận lần đầu','Đăng ký, cấp GCN lần đầu cho thửa đất đủ điều kiện.'],
  ['chuyen-nhuong','Chuyển nhượng quyền sử dụng đất','Đăng ký biến động khi mua bán/chuyển nhượng.'],
  ['tang-cho','Tặng cho quyền sử dụng đất','Thủ tục tặng cho giữa cá nhân, hộ gia đình.'],
  ['thua-ke','Thừa kế quyền sử dụng đất','Đăng ký biến động do nhận thừa kế.'],
  ['tach-thua','Tách thửa','Tách một thửa thành nhiều thửa theo điều kiện địa phương.'],
  ['hop-thua','Hợp thửa','Hợp nhiều thửa liền kề thành một thửa.'],
  ['chuyen-muc-dich','Chuyển mục đích sử dụng đất','Xin phép chuyển mục đích sử dụng đất khi thuộc trường hợp phải xin phép.'],
  ['cap-doi-gcn','Cấp đổi GCN','Cấp đổi giấy chứng nhận theo nhu cầu hoặc biến động thông tin.'],
  ['cap-lai-gcn','Cấp lại GCN','Cấp lại giấy chứng nhận do bị mất.'],
  ['dinh-chinh-gcn','Đính chính GCN','Sửa sai sót thông tin trên giấy chứng nhận.'],
  ['dang-ky-bien-dong','Đăng ký biến động','Đăng ký các thay đổi về người sử dụng, tài sản, thông tin thửa đất.'],
  ['do-dac-trich-do','Đo đạc / trích đo','Đăng ký đo đạc, trích đo địa chính phục vụ hồ sơ.'],
  ['tranh-chap','Tranh chấp đất đai','Hướng dẫn xác định hướng xử lý tranh chấp đất đai.'],
  ['hoa-giai-tai-xa','Hòa giải tranh chấp tại xã','Chuẩn bị hồ sơ và quy trình hòa giải tranh chấp tại UBND cấp xã.'],
].map(([slug,title,short]) => ({
  slug, title, short,
  audience: 'Cá nhân, hộ gia đình hoặc tổ chức có nhu cầu và đủ điều kiện theo quy định.',
  conditions: ['Xác định đúng loại thủ tục','Có giấy tờ, thông tin thửa đất phù hợp','Không thuộc trường hợp pháp luật cấm hoặc hạn chế thực hiện'],
  documents: ['Đơn/phiếu đăng ký theo mẫu','Giấy chứng nhận hoặc giấy tờ về quyền sử dụng đất (nếu có)','Giấy tờ nhân thân','Tài liệu phát sinh theo từng thủ tục'],
  process: ['Chuẩn bị hồ sơ','Nộp hồ sơ','Kiểm tra/giải quyết','Thực hiện nghĩa vụ tài chính (nếu có)','Nhận kết quả'],
  submitAt: 'Cơ quan tiếp nhận hồ sơ theo phân cấp và quy định địa phương.',
  timeline: 'Phụ thuộc loại thủ tục, địa bàn và tình trạng hồ sơ.',
  finance: 'Thuế, lệ phí, phí và nghĩa vụ tài chính được xác định theo từng trường hợp cụ thể.',
  legalRefs: ['Dữ liệu pháp lý sẽ được cập nhật từ kho văn bản chính thức.'],
}))
