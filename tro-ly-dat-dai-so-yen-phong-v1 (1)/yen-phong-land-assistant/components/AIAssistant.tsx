'use client'
import { useState } from 'react'
import { Bot, Send, ShieldCheck } from 'lucide-react'

export function AIAssistant(){
  const [value,setValue]=useState('')
  const [messages,setMessages]=useState<{role:'user'|'ai';text:string}[]>([
    {role:'ai',text:'Xin chào! Tôi là trợ lý đất đai số khu vực Yên Phong. Hãy mô tả hồ sơ cần xử lý; tôi sẽ gợi ý thủ tục, giấy tờ và nội dung cần kiểm tra.'}
  ])
  function submit(){
    if(!value.trim()) return
    setMessages(m=>[...m,{role:'user',text:value},{role:'ai',text:'Đã ghi nhận yêu cầu. Đây là bản khung nên tôi đang đưa bạn tới bước sàng lọc ban đầu. Khi nạp kho dữ liệu Bắc Ninh, hệ thống sẽ đối chiếu thủ tục, biểu mẫu và căn cứ đang có hiệu lực trước khi trả lời.'}])
    setValue('')
  }
  return <section id="ai" className="overflow-hidden rounded-[32px] bg-slate-950 text-white shadow-soft">
    <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
      <div className="p-7 sm:p-10"><span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold"><Bot size={15}/> AI LAND ASSISTANT</span><h2 className="mt-5 text-3xl font-black">Trợ lý nghiệp vụ đất đai</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">Phân tích yêu cầu, xác định thủ tục, đề xuất hồ sơ, cảnh báo rủi ro và trích căn cứ pháp lý từ nguồn dữ liệu đã kiểm chứng.</p><div className="mt-6 flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"><ShieldCheck className="shrink-0 text-emerald-300"/><span>Không tự tạo căn cứ pháp luật. Khi thiếu dữ liệu, hệ thống phải yêu cầu bổ sung hoặc hiển thị trạng thái cần kiểm tra thêm.</span></div></div>
      <div className="bg-white p-4 text-ink sm:p-6"><div className="flex h-[410px] flex-col rounded-3xl border border-slate-200 bg-slate-50"><div className="flex-1 space-y-3 overflow-auto p-4">{messages.map((m,i)=><div key={i} className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.role==='user'?'ml-auto bg-govblue text-white':'bg-white shadow-sm'}`}>{m.text}</div>)}</div><div className="border-t border-slate-200 bg-white p-3"><div className="flex gap-2"><input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()} className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-govgreen" placeholder="Ví dụ: Tôi muốn tặng một phần đất cho con..."/><button onClick={submit} className="grid w-12 place-items-center rounded-xl bg-govgreen text-white"><Send size={18}/></button></div></div></div></div>
    </div>
  </section>
}
