'use client'
import { useState } from 'react'
import { Menu, X, MapPinned } from 'lucide-react'
import { navItems } from '@/lib/navigation'

export function SiteHeader(){
  const [open,setOpen]=useState(false)
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
    <div className="container-main flex h-16 items-center justify-between gap-4">
      <a href="#home" className="flex items-center gap-3 font-black text-ink">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-govgreen text-white"><MapPinned size={21}/></span>
        <span className="hidden leading-tight sm:block">TRỢ LÝ ĐẤT ĐAI SỐ<br/><span className="text-xs font-bold text-govblue">KHU VỰC YÊN PHONG • BẮC NINH</span></span>
      </a>
      <nav className="hidden items-center gap-1 lg:flex">{navItems.map(([label,href])=><a key={href} href={href} className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-govgreen">{label}</a>)}</nav>
      <button className="rounded-xl border border-slate-200 p-2 lg:hidden" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="border-t bg-white lg:hidden"><nav className="container-main grid py-3">{navItems.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-slate-100">{label}</a>)}</nav></div>}
  </header>
}
