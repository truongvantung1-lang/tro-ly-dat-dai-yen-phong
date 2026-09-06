import { SiteHeader } from '@/components/SiteHeader'
import { ProcedureWizard } from '@/components/ProcedureWizard'
import { AIAssistant } from '@/components/AIAssistant'
import { procedures } from '@/data/procedures'
import {
  ArrowRight, BadgeCheck, Calculator, CalendarDays, ClipboardCheck, FileText, Gavel,
  Landmark, Map, MapPinned, QrCode, Ruler, Scale, Search, ShieldCheck, Sparkles,
  SplitSquareVertical, Stamp, WalletCards, WandSparkles, Waypoints
} from 'lucide-react'

const quickPrompts = [
  'Tôi muốn tặng đất cho con','Tôi muốn bán một phần thửa đất','Tôi bị mất giấy chứng nhận','Tôi muốn chuyển đất vườn sang đất ở','Tôi muốn kiểm tra quy hoạch'
]

const utilities = [
  ['Checklist hồ sơ', ClipboardCheck],['Tính thuế TNCN', Calculator],['Tính lệ phí trước bạ', WalletCards],['Tính nghĩa vụ tài chính', Calculator],
  ['Tra cứu bảng giá đất', Search],['Tra cứu quy hoạch', Map],['Tra cứu thông tin thửa đất', MapPinned],['Tra cứu QR Giấy chứng nhận', QrCode],
  ['Đăng ký đo đạc', Ruler],['Hẹn lịch làm việc', CalendarDays],['Tạo đơn đăng ký', FileText],['Tạo tờ khai thuế', Stamp],
  ['Tra cứu căn cứ pháp lý', Scale],['Điều kiện tách thửa', SplitSquareVertical],['Trợ lý AI đất đai', Sparkles],
] as const

const officerTools = [
  'Tra cứu thủ tục','Tra cứu pháp luật','Checklist nghiệp vụ','Mẫu xác nhận','Mẫu biên bản','Mẫu niêm yết','Mẫu hòa giải','Kiểm tra điều kiện tách thửa','Kiểm tra hồ sơ đăng ký biến động','Tra cứu nguồn gốc đất','Tra cứu bảng giá đất'
]

export default function Home(){
  return <main>
    <SiteHeader/>

    <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_#e8f8ef,_transparent_40%),radial-gradient(circle_at_top_right,_#eaf3ff,_transparent_35%),linear-gradient(to_bottom,_#fff,_#f7faf9)]">
      <div className="container-main grid min-h-[650px] items-center gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-3 py-1.5 text-xs font-black text-govgreen shadow-sm"><Landmark size={15}/> GOVERNMENT TECHNOLOGY • LANDTECH • AI</div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">TRỢ LÝ ĐẤT ĐAI SỐ <span className="text-govgreen">YÊN PHONG</span></h1>
          <p className="mt-5 text-xl font-extrabold text-govblue sm:text-2xl">Công cụ hỗ trợ cán bộ cơ sở và người dân Bắc Ninh</p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">Tra cứu thủ tục • Kiểm tra thành phần hồ sơ • Tính nghĩa vụ tài chính • Hỏi trợ lý nghiệp vụ</p>
          <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-3 shadow-soft">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"><Search className="shrink-0 text-govgreen"/><input className="w-full bg-transparent text-base outline-none" placeholder="Hãy mô tả việc đất đai bạn đang cần giải quyết..."/><button className="hidden rounded-xl bg-govgreen px-5 py-3 text-sm font-bold text-white sm:block">Phân tích</button></div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">{quickPrompts.map(x=><button key={x} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 hover:border-green-300 hover:text-govgreen">{x}</button>)}</div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold text-slate-600"><span className="flex items-center gap-2"><BadgeCheck className="text-govgreen" size={18}/> Dễ dùng cho người dân</span><span className="flex items-center gap-2"><ShieldCheck className="text-govblue" size={18}/> Kiểm soát căn cứ pháp lý</span></div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-softgold blur-2xl"/>
          <div className="relative rounded-[38px] border border-white bg-white/80 p-5 shadow-soft backdrop-blur">
            <div className="rounded-[30px] bg-gradient-to-br from-govgreen to-govblue p-6 text-white">
              <div className="flex items-center justify-between"><div className="rounded-2xl bg-white/15 p-3"><MapPinned size={28}/></div><span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold">TRUNG TÂM TIỆN ÍCH</span></div>
              <h3 className="mt-8 text-2xl font-black">Một điểm làm việc cho nghiệp vụ đất đai ở cơ sở</h3>
              <p className="mt-3 text-sm leading-6 text-white/80">Hỗ trợ tiếp nhận ban đầu, rà soát giấy tờ, hướng dẫn người dân, tra cứu và chuẩn bị hồ sơ tại khu vực Yên Phong.</p>
              <div className="mt-6 grid grid-cols-2 gap-3">{['Hồ sơ thông minh','Thuế & lệ phí','Bản đồ đất đai','Trợ lý AI'].map(x=><div key={x} className="rounded-2xl bg-white/10 p-4 text-sm font-bold">{x}</div>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b border-amber-200 bg-amber-50">
      <div className="container-main flex flex-col gap-2 py-4 text-sm text-amber-950 sm:flex-row sm:items-center sm:justify-between">
        <strong>Bản khung thử nghiệm dành cho khu vực Yên Phong</strong>
        <span>Dữ liệu thủ tục, biểu mẫu và căn cứ của Bắc Ninh sẽ được nạp và kiểm chứng ở giai đoạn tiếp theo.</span>
      </div>
    </section>

    <section id="procedures" className="container-main py-16 sm:py-20">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><h2 className="section-title">Nhóm thủ tục đất đai</h2><p className="section-subtitle">Mỗi thủ tục được thiết kế theo một cấu trúc thống nhất: điều kiện, hồ sơ, quy trình, nơi nộp, thời gian, nghĩa vụ tài chính, căn cứ và biểu mẫu.</p></div><a href="#utilities" className="inline-flex items-center gap-2 text-sm font-bold text-govblue">Xem trung tâm tiện ích <ArrowRight size={16}/></a></div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{procedures.map((p,i)=><article key={p.slug} className="group rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-green-200 hover:shadow-soft"><div className="flex items-start justify-between gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-green-50 font-black text-govgreen">{String(i+1).padStart(2,'0')}</span><ArrowRight size={18} className="text-slate-300 transition group-hover:text-govgreen"/></div><h3 className="mt-5 font-extrabold leading-6 text-ink">{p.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{p.short}</p></article>)}</div>
    </section>

    <section className="bg-mist py-16 sm:py-20"><div className="container-main grid gap-6 lg:grid-cols-2"><ProcedureWizard/><div className="card p-6 sm:p-7"><div className="flex items-start gap-3"><span className="rounded-2xl bg-amber-50 p-3 text-amber-700"><WandSparkles/></span><div><h3 className="text-xl font-extrabold">Hồ sơ đất đai thông minh</h3><p className="mt-1 text-sm leading-6 text-slate-600">Nhập thông tin người sử dụng đất, GCN và thửa đất một lần; hệ thống chuẩn bị checklist và phiếu hướng dẫn theo loại hồ sơ.</p></div></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Thông tin người sử dụng đất','Thông tin Giấy chứng nhận','Thông tin thửa đất','Chọn loại hồ sơ'].map((x,i)=><div key={x} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><span className="text-xs font-black text-govgreen">BƯỚC {i+1}</span><div className="mt-1 text-sm font-bold">{x}</div></div>)}</div><button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white">Tạo hồ sơ mới <ArrowRight size={16}/></button></div></div></section>

    <section id="utilities" className="container-main py-16 sm:py-20"><h2 className="section-title">Trung tâm tiện ích đất đai</h2><p className="section-subtitle">Các công cụ cốt lõi dành cho người dân, cán bộ địa chính và người làm dịch vụ đất đai.</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">{utilities.map(([label,Icon])=><button key={label} className="group rounded-3xl border border-slate-200 bg-white p-5 text-left transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-govblue transition group-hover:bg-govblue group-hover:text-white"><Icon size={21}/></span><div className="mt-4 text-sm font-extrabold leading-5 text-ink">{label}</div></button>)}</div></section>

    <section id="map" className="border-y border-slate-200 bg-slate-950 py-16 text-white sm:py-20"><div className="container-main grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]"><div><span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold">SẴN SÀNG CHO WEBGIS</span><h2 className="mt-4 text-3xl font-black">Bản đồ đất đai</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Chuẩn bị lớp kiến trúc để tích hợp bản đồ địa chính, quy hoạch, kế hoạch sử dụng đất, giá đất và tra cứu vị trí thửa đất.</p><div className="mt-6 grid gap-3 sm:grid-cols-2">{['Bản đồ địa chính','Quy hoạch','Kế hoạch sử dụng đất','Giá đất','Vị trí thửa đất'].map(x=><div key={x} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 text-sm font-bold"><Waypoints className="text-emerald-300" size={18}/>{x}</div>)}</div></div><div className="relative min-h-[340px] overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,.35),transparent_20%),radial-gradient(circle_at_70%_45%,rgba(59,130,246,.4),transparent_25%),linear-gradient(135deg,#132b37,#0b1720)]"><div className="absolute inset-0 opacity-40" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',backgroundSize:'32px 32px'}}/><div className="absolute left-[18%] top-[28%] rounded-full bg-emerald-400 p-2 shadow-lg"><MapPinned size={20}/></div><div className="absolute right-[22%] top-[44%] rounded-full bg-blue-400 p-2 shadow-lg"><MapPinned size={20}/></div><div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 p-4 backdrop-blur"><div className="text-xs text-slate-300">WebGIS module</div><div className="mt-1 font-bold">Chưa kết nối nguồn bản đồ</div></div></div></div></section>

    <section className="container-main py-16 sm:py-20"><AIAssistant/></section>

    <section className="bg-mist py-16 sm:py-20"><div className="container-main"><div className="flex items-center gap-3"><span className="rounded-2xl bg-white p-3 text-govgreen shadow-sm"><Gavel/></span><div><h2 className="section-title">Bàn làm việc số cho cán bộ cơ sở</h2><p className="section-subtitle">Không gian thao tác nhanh để tiếp nhận ban đầu, kiểm tra hồ sơ, sử dụng biểu mẫu và tra cứu căn cứ phục vụ người dân khu vực Yên Phong.</p></div></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{officerTools.map(x=><div key={x} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 text-sm font-bold"><span>{x}</span><ArrowRight size={16} className="text-slate-300"/></div>)}</div></div></section>

    <section id="forms" className="container-main py-16"><div className="grid gap-5 lg:grid-cols-2"><div className="card p-6"><h3 className="text-xl font-black">Biểu mẫu</h3><p className="mt-2 text-sm leading-6 text-slate-600">Kiến trúc đã tách riêng dữ liệu biểu mẫu, sẵn sàng gắn file Word/PDF và phân loại theo thủ tục.</p></div><div id="legal" className="card p-6"><h3 className="text-xl font-black">Kho pháp luật</h3><p className="mt-2 text-sm leading-6 text-slate-600">Chỉ hiển thị căn cứ được nạp từ nguồn chính thức và có trạng thái hiệu lực rõ ràng; không để AI tự tạo văn bản pháp lý.</p></div></div></section>

    <footer className="border-t border-slate-200 bg-white"><div className="container-main flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div><strong className="text-ink">TRỢ LÝ ĐẤT ĐAI SỐ KHU VỰC YÊN PHONG</strong><br/>Nền tảng hỗ trợ cán bộ cơ sở và người dân chuẩn bị thủ tục đất đai.</div><div className="text-xs">Bản khung 1.0 • Chờ nạp dữ liệu chính thức của Bắc Ninh</div></div></footer>
  </main>
}
