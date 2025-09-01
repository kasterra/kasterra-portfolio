import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "부스트캠프 캔버스 학습 프로젝트 | 프로젝트 상세",
  description: "Canvas 기반 2D 게임 카메라 추적 및 최적화",
};

export default function BoostcampCanvasProjectPage() {
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
          부스트캠프 캔버스 학습 프로젝트
        </h1>
        <p className="text-gray-500 mb-6">2022.11.01 ~ 2022.11.08</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍💻 프로젝트 내 역할: 레거시 코드 리팩토링, 카메라 추적 구현/최적화
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            프로젝트 개요
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Canvas 기반 2D 게임 프로젝트 일부</li>
            <li>뷰포트보다 넓은 공간에서 대상 추적 카메라 구현</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            시연 영상
          </h2>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-black">
            <video
              className="w-full h-auto"
              src="/videos/boostcamp-canvas-demo.mp4"
              controls
              preload="metadata"
            >
              브라우저가 video 태그를 지원하지 않습니다.
            </video>
          </div>
        </section>

        {/* 1) 리팩토링 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1) 레거시 리팩토링
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>IIFE 레거시 → 클래스 기반 모듈화로 가독성/확장성 향상</li>
          </ul>
        </section>

        {/* 2) 카메라/렌더링 최적화 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2) 카메라 추적/렌더링 최적화
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>프레임마다 카메라 기준 좌표 계산</li>
            <li>뷰포트 내 필요한 영역만 렌더링하도록 최적화</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>모던 문법 기반 코드로 동료 학습자와 공유</li>
            <li>불필요한 렌더링 감소로 성능 향상</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
