import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Commenta — 감정 일기 앱 | 프로젝트 상세",
  description: "정신건강 관련 사회적 문제 해결을 위한 감정 일기 앱",
};

export default function CommentaProjectPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          캡스톤 프로젝트 Commenta
        </h1>
        <p className="text-gray-500 mb-6">2023.09 ~ 2023.11</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍💻 프로젝트 내 역할: RN 클라이언트 개발 및 UI/UX, 데이터 계층
            설계(WatermelonDB)
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            프로젝트 개요
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>정신건강 관련 문제 해결을 위한 감정 일기 앱</li>
            <li>음성 입력 기반 기록 및 감정 시각화 제공</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            시연 영상
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
            <video
              className="w-full h-auto"
              src="/videos/commenta-demo.mp4"
              controls
              preload="metadata"
            >
              브라우저가 video 태그를 지원하지 않습니다.
            </video>
          </div>
        </section>

        {/* 1) 클라이언트/UI */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1) RN 클라이언트 및 UI/UX
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>React Native 기반 클라이언트 및 UI 컴포넌트 개발</li>
            <li>무드 차트, 기록 플로우 등 진료 보조 기능 UI 설계</li>
          </ul>
        </section>

        {/* 2) 데이터/성능 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2) 데이터 계층/성능
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>AsyncStorage 한계 보완 → SQLite 기반 WatermelonDB 도입</li>
            <li>오프라인/동기화 전략 및 데이터 모델 간단 문서화</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>진료 보조 도구 활용 가능성 인정</li>
            <li>후속 기수 종합설계프로젝트 주제로 ‘정신건강 앱’ 채택</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">배운 점</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>모바일 데이터 계층 설계와 성능 최적화 고려 사항</li>
            <li>전문의 피드백을 UI에 반영하는 프로세스의 중요성</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
