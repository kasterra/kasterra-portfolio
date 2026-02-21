import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "부스트캠프 10기 수료생 커피챗 호스트 | 활동 상세",
  description:
    "수료생 커피챗 호스트 활동에서의 준비, 진행 방식, 주요 결과 정리",
};

export default function BoostcampCoffeechatHostPage() {
  const assets = {
    coffeechat: "/images/boost-coffee/coffechat_with_someone.png",
    review: "/images/boost-coffee/coffee_review.png",
  } as const;

  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" /> 뒤로 가기
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          부스트캠프 10기 수료생 커피챗 호스트
        </h1>
        <p className="text-gray-500 mb-6">2026.02</p>

        <section className="mb-8">
          <a
            href="https://kasterra.github.io/boostcamp-coffeechat-host/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            원문 후기 글 보기
            <ExternalLink className="h-4 w-4" />
          </a>
        </section>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            부스트캠프 수료생 대상 커피챗에서 취업 준비, 포트폴리오/이력서, 멘탈
            관리 주제를 중심으로 1:1 대화를 진행했습니다. 아래는 원문 후기에서
            활동 관점으로 발췌한 요약입니다.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            활동 개요
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>역할:</strong> 부스트캠프 10기 수료생 대상 커피챗 호스트
            </li>
            <li>
              <strong>시기:</strong> 2026년 2월
            </li>
            <li>
              <strong>진행 인원:</strong> 총 4명 (1:1 커피챗)
            </li>
            <li>
              <strong>핵심 주제:</strong> 취준 방향, 이력서/포트폴리오 개선,
              멘탈 관리
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            준비 방식 (Pre Coffeechat)
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>사전 질문을 먼저 수집하고, 서면으로 답변 가능한 항목을 선정</li>
            <li>
              각 참여자에게 "프리 커피챗" 문서를 DM으로 전달해 기본 질문 선해결
            </li>
            <li>
              본 세션(30분)은 면대면 피드백이 필요한 항목 중심으로 집중 운영
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            본 세션에서 다룬 내용
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>이력서/포트폴리오에서 핵심 정보를 우선 노출하는 구성 방법</li>
            <li>주니어 단계에서의 커리어 의사결정과 우선순위 설정</li>
            <li>과도한 자기검열/불안 관리와 지속 가능한 취준 루틴</li>
          </ul>

          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.coffeechat}
              alt="커피챗 진행 당시 캡처 이미지"
              className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-cover"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              커피챗 진행 이미지
            </figcaption>
          </figure>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            주요 결과
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>참여자 피드백: "스스로 생각해볼 기회가 되었다"</li>
            <li>문서 구성/강조 방식이 실제 팀 스크럼 논의로 확장</li>
            <li>단기 조언을 넘어서 자기 점검 기준을 세우는 데 기여</li>
          </ul>

          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.review}
              alt="커피챗 이후 리뷰 이미지"
              className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-cover"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              커피챗 리뷰 이미지
            </figcaption>
          </figure>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">회고</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              사전 문서화 + 짧은 면담 조합이 고밀도 커뮤니케이션에 효과적이었음
            </li>
            <li>
              답변 제공보다 질문의 기준을 함께 세우는 방식이 만족도를 높였음
            </li>
            <li>향후에는 커피챗 전용 템플릿을 만들어 재사용성을 높일 계획</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
