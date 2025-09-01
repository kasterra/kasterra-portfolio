import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "kasterra — 프론트엔드 포트폴리오 & 지식 공유",
  description:
    "이휘찬(kasterra)의 포트폴리오. 주요 프로젝트, 지식 공유(블로그/발표), 학습/연구 활동을 정리한 랜딩 페이지",
  keywords: [
    "kasterra",
    "이휘찬",
    "프론트엔드",
    "React",
    "React Native",
    "포트폴리오",
    "기술 블로그",
  ],
  authors: [{ name: "이휘찬", url: "https://github.com/kasterra" }],
  openGraph: {
    title: "kasterra — 프론트엔드 포트폴리오 & 지식 공유",
    description:
      "주요 프로젝트, 지식 공유(블로그/발표), 학습/연구 활동을 정리한 포트폴리오",
    type: "website",
    images: [
      { url: "/placeholder.jpg" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
