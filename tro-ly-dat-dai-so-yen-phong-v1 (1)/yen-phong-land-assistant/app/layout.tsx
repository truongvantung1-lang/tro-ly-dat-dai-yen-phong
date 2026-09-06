import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trợ lý đất đai số Yên Phong | Bắc Ninh',
  description: 'Cổng hỗ trợ cán bộ cơ sở và người dân khu vực Yên Phong tra cứu thủ tục, chuẩn bị hồ sơ và sử dụng tiện ích đất đai.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
