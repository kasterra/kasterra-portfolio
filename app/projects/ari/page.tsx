import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "아리 — AI 농업 비서 데이터 수집 앱 | 프로젝트 상세",
  description: "AI 농업 비서 학습용 데이터 수집 앱 (사진/음성)",
}

export default function AriProjectPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" /> 뒤로 가기
          </Link>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">아리 (AI 농업 비서 데이터 수집 앱)</h1>
        <p className="text-gray-500 mb-6">2024.07.24 ~ 2024.08.08</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍💻 프로젝트 내 역할: PM/기획 보조, 웹뷰 기반 초기 앱 개발, 업로드 안정화
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">프로젝트 개요</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>제주 감귤 농민 대상 AI 비서 학습용 사진/음성 데이터 수집 앱</li>
            <li>2주 내 프로토타입 목표로 빠른 의사결정과 피드백 반영</li>
          </ul>
        </section>

        {/* 1) 애자일/프로토타이핑 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">1) 애자일 프로토타이핑/피드백 사이클</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>인턴 2명과 1~2일 단위 스프린트 운영, 고객 피드백 즉시 반영</li>
            <li>핵심 흐름(촬영/업로드/메타데이터 입력) 중심 MVP 구체화</li>
          </ul>
        </section>

        {/* 2) 웹뷰 기반 앱 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">2) 웹뷰 기반 초기 앱 구축</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>React 기반 WebView 셸로 빠른 기능 검증</li>
            <li>사진/음성 업로드 안정화(재시도, 사이즈 제한 등) 설계</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>2주 내 프로토타입 완성 및 현장 테스트 용이</li>
            <li>고객 만족도 확보, 네이티브 전환 로드맵 수립</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">배운 점</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>데이터 수집 도메인에서의 UX 고려 포인트(품질/재현성/메타데이터)</li>
            <li>초기엔 웹뷰로 가설 검증 후 네이티브 전환하는 전략의 유효성</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
