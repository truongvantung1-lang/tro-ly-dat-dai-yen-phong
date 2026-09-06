export type LandForm = { id:string; name:string; category:string; fileUrl?:string }
export const forms: LandForm[] = [
  { id:'form-register', name:'Đơn đăng ký đất đai, tài sản gắn liền với đất', category:'Đăng ký' },
  { id:'form-tax', name:'Tờ khai thuế, lệ phí liên quan', category:'Nghĩa vụ tài chính' },
]
