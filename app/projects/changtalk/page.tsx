import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "창톡 | 프로젝트 상세",
  description: "React Native 기반 신규 서비스 구현 및 기존 상담 앱 유지보수",
}

export default function ChangtalkProjectPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">창톡</h1>
        <p className="text-gray-500 mb-6">2025.04 ~ 2025.07</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍💻 프로젝트 내 역할: RN 신규 서비스 및 상담 앱 개발/유지보수, 공통 UI 라이브러리 설계
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">프로젝트 개요</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>React Native 기반 신규 서비스 구현 및 기존 상담 앱 유지보수</li>
            <li>웹뷰 통신 안정화 및 법적 요구/스토어 요건 대응</li>
            <li>사내 공통 UI/디자인 시스템 구축과 컴포넌트 배포</li>
          </ul>
        </section>

        {/* 1) RN ↔ 웹뷰 통신 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">1) RN ↔ 웹뷰 통신 프로토콜 설계</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>메시지 라우터 구조와 핸들러 최적화, 에러 대응 체계 수립</li>
            <li>디버깅/로깅 포인트 정의로 장애 대응 속도 향상</li>
          </ul>
        </section>

        {/* 2) 레거시 유지보수 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">2) 레거시 서비스 유지보수</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>법적 요구사항 대응 및 RN/Xcode 버전 호환성 이슈 해결</li>
            <li>빌드/릴리즈 파이프라인 안정화로 배포 리드타임 개선</li>
          </ul>
        </section>

        {/* 3) 공통 UI/Design System */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">3) 공통 UI 라이브러리/디자인 시스템</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>디자인 시스템 기반 컴포넌트 개발 및 Storybook 도입</li>
            <li>사내 npm registry 배포로 멀티 앱 간 재사용성 확보</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>네이티브-웹뷰 통신 안정성 확보</li>
            <li>UI 컴포넌트 재사용성 강화 및 협업 효율성 향상</li>
            <li>서비스 유지보수 및 신규 개발 생산성 개선</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">배운 점</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>네이티브-웹뷰 경계 관리와 에러 핸들링 전략</li>
            <li>디자인 시스템 도입 시 문서화/배포 파이프라인의 중요성</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
