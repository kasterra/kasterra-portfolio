import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "섬유 물성 역공학 프로젝트 | 프로젝트 상세",
  description: "대용량 데이터 처리와 웹 인터페이스 개발",
};

export default function TextileReverseEngineeringProjectPage() {
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
          섬유 물성 역공학 프로젝트
        </h1>
        <p className="text-gray-500 mb-6">2023.09.01 ~ 2023.11.14</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍💻 프로젝트 내 역할: 대용량 데이터 처리 협업 및 시각화/웹 UI 개발
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            프로젝트 개요
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>산업용 섬유 신소재/복합구조체 개발 지원 플랫폼 일부</li>
            <li>대용량 데이터 처리 및 분석 결과 시각화 UI 개발</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1) 대용량 데이터 처리/상태 가시화
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>3,800만+ 레코드 청크 처리 및 인덱싱 최적화</li>
            <li>진행 상황 시각화 스크립트로 장시간 작업 가시화</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2) 연구원 친화적 UI/UX
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>검색/필터/페이징/프리뷰 등 탐색 워크플로우 최적화</li>
            <li>분석 결과 비교가 쉬운 시각화 레이아웃 구성</li>
          </ul>
        </section>

        {/* 결과 예시 이미지 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            결과 예시
          </h2>
          <figure>
            <img
              src="/images/textile/textile-result.png"
              alt="섬유 물성 역공학 프로젝트 결과물 예시"
              className="block mx-auto w-full max-w-xl h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              예측/분석 결과를 시각화한 화면 예시
            </figcaption>
          </figure>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>대용량 데이터 처리 속도 및 안정성 개선</li>
            <li>연구원 활용도 증대</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">배운 점</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>데이터 파이프라인 진행 가시화가 사용자 신뢰에 미치는 영향</li>
            <li>UI/UX가 연구 효율에 주는 직접적 기여</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
