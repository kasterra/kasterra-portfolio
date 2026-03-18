import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "tilda Backoffice | 프로젝트 상세",
  description:
    "AI 시각화 서비스 백오피스 프론트엔드 인턴 경험: 접근성 개선, Release Note 시스템 구축, DX 개선",
};

export default function TildaBackofficeProjectPage() {
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

        <h1 className="mb-2 text-4xl font-bold text-gray-900">
          tilda Backoffice
        </h1>
        <p className="mb-6 text-gray-500">
          Front-end Engineer Intern · Next.js 기반 AI 시각화 서비스 백오피스
        </p>

        <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <p className="font-medium text-gray-800">
            🧑‍💻 프로젝트 내 역할: 백오피스 프론트엔드 개발, 폼 접근성 개선,
            Release Note 에디터 구현, 타입 안정성과 DX 개선
          </p>
        </div>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            프로젝트 개요
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>
              AI 시각화 서비스 운영을 위한 내부 백오피스 프론트엔드 개발 담당
            </li>
            <li>
              Next.js 기반 프론트엔드 환경에서 기능 개발을 수행하고, TanStack
              Query·Zod를 활용한 데이터 흐름 관리 및 FSD 아키텍처 기반 구조 개선
              진행
            </li>
            <li>
              백오피스 중심 개발을 수행하면서, 선언형 컴포넌트와 타입 개선을
              통해 서비스 전반의 재사용성과 일관성 향상에 기여
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            1) 폼 접근성 및 사용성 개선
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>
              폼 입력 화면에서 `aria-labelledby`, `aria-describedby` 등의 속성을
              정비해 입력 요소와 설명 텍스트의 관계를 명확하게 연결
            </li>
            <li>
              스크린리더 사용 환경에서도 폼 레이블, 안내 문구, 오류 메시지가 더
              자연스럽게 전달되도록 시맨틱 구조를 보강
            </li>
            <li>
              접근성 개선을 통해 운영자가 반복 작업을 수행할 때 입력 맥락을 더
              명확히 이해할 수 있도록 UI 사용성을 함께 다듬음
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            2) Release Note 시스템 구현
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>
              Release Note 작성 기능을 구현하면서, 마크다운만 이해하면 누구나
              쉽게 작성할 수 있는 사용 경험을 목표로 화면을 구성
            </li>
            <li>
              반복적으로 쓰이는 공지 형식을 빠르게 불러올 수 있도록 템플릿 기능
              제공
            </li>
            <li>
              운영자가 복잡한 포맷 지식 없이도 업데이트 내역을 일관된 형식으로
              정리할 수 있게 해 운영 효율을 높임
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            3) DX 및 타입 구조 개선
          </h2>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>
              React 코드에서 삼항 연산자, `&&` 조건부 렌더링, N회 반복 렌더링과
              같은 패턴을 선언형 컴포넌트로 추상화해 사용 흐름을 통일
            </li>
            <li>
              해당 선언형 컴포넌트들이 더 안전하게 쓰일 수 있도록 TypeScript
              타입 가드와 관련 타입 구조를 개선
            </li>
            <li>
              반복적인 JSX 분기 로직을 줄여 가독성과 재사용성을 높였고, 이
              패턴이 백오피스를 넘어 AI 시각화 서비스 화면에도 적용될 수 있도록
              기여
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">성과</h2>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>운영자가 사용하는 백오피스의 접근성과 입력 경험을 함께 개선</li>
            <li>
              접근성 개선 기여를 통해 한국 ICT 임팩트협회 사회적가치 AI 인증
              획득에 기여
            </li>
            <li>
              Release Note 작성/관리 기능을 통해 운영 커뮤니케이션 채널 확보
            </li>
            <li>
              선언형 컴포넌트와 타입 가드 개선으로 백오피스와 AI 시각화 서비스
              전반의 코드 재사용성과 개발 효율 향상
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">배운 점</h2>
          <ul className="list-disc space-y-1 pl-6 text-gray-700">
            <li>
              내부 운영 도구는 화려한 UI보다 예측 가능한 입력 흐름과 명확한
              피드백이 더 중요하다는 점
            </li>
            <li>
              기능 개발과 DX 개선은 별개가 아니라, 함께 다뤄야 장기 생산성이
              올라간다는 점
            </li>
            <li>
              반복되는 UI 분기 패턴을 선언형 컴포넌트로 정리하고 타입 안정성을
              보강하는 일이 팀 전체 DX에 직접 연결된다는 점
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
