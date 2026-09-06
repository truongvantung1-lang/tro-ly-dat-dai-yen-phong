'use client'
import { useMemo, useState } from 'react'
import { ArrowRight, CheckCircle2, ClipboardCheck } from 'lucide-react'

const choices = [
  ['Tôi muốn bán đất','Đăng ký biến động do chuyển nhượng quyền sử dụng đất'],
  ['Tôi muốn cho con đất','Tặng cho quyền sử dụng đất'],
  ['Cha mẹ mất để lại đất','Thừa kế quyền sử dụng đất'],
  ['Tôi muốn chia một phần thửa đất','Tách thửa và đăng ký biến động liên quan'],
  ['Tôi bị mất Giấy chứng nhận','Cấp lại Giấy chứng nhận'],
] as const

export function ProcedureWizard(){
  const [selected,setSelected]=useState<string>('')
  const result=useMemo(()=>choices.find(x=>x[0]===selected)?.[1],[selected])
  return <section className="card overflow-hidden p-5 sm:p-7">
    <div className="mb-5 flex items-start gap-3"><span className="rounded-2xl bg-blue-50 p-3 text-govblue"><ClipboardCheck/></span><div><h3 className="text-xl font-extrabold">Tôi cần làm thủ tục gì?</h3><p className="mt-1 text-sm text-slate-600">Chọn tình huống gần nhất, hệ thống sẽ gợi ý nhóm thủ tục và checklist ban đầu.</p></div></div>
    <div className="grid gap-2 sm:grid-cols-2">{choices.map(([label])=><button key={label} onClick={()=>setSelected(label)} className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${selected===label?'border-govgreen bg-green-50 text-govgreen':'border-slate-200 hover:border-slate-300 hover:bg-slate-50'}`}>{label}</button>)}</div>
    {result&&<div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4"><div className="flex gap-2 text-govgreen"><CheckCircle2 className="mt-0.5" size={20}/><div><div className="text-xs font-black uppercase tracking-wider">Gợi ý thủ tục</div><div className="mt-1 font-bold text-ink">{result}</div><button className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-govblue">Xem checklist hồ sơ <ArrowRight size={16}/></button></div></div></div>}
  </section>
}
