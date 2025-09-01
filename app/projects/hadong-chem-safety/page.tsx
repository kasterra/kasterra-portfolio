import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "하동본부 화학물질 안전관리 | 프로젝트 상세",
  description: "한국전력 하동빛드림본부 내부 안전 관리 앱 개발",
}

export default function HadongChemSafetyProjectPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">하동본부 화학물질 안전관리</h1>
        <p className="text-gray-500 mb-6">2024.09 ~ 2024.10</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍🔬 프로젝트 내 역할: 관리자 페이지 개발 담당 및 앱 개발 보조
            <span className="text-gray-500"> (기여율 40%)</span>
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">프로젝트 개요</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Flash21 재직 중, 한국전력 하동빛드림본부 내부의 안전 관리 업무를 효율화하기
            위한 애플리케이션을 개발했습니다.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>화학물질, 안전보호구, 위험구역 정보 제공 및 안전 검사 일정 체계적 관리</li>
            <li>기존 인쇄물 중심 안전관리 한계 보완, 사용자 중심 인터페이스 도입</li>
            <li>모바일 앱 중심으로 접근성 강화, 데이터 활용도 증대</li>
          </ul>
        </section>

        {/* 1. 일정 관리 달력 컴포넌트 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1) 일정 관리 달력 컴포넌트 구현
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>앱 UX와 통일성 유지를 위한 일정 조회 달력 컴포넌트 설계</li>
            <li>국내 공휴일 정보를 holidays-kr에서 받아 렌더링</li>
            <li className="text-gray-600">
              성과: 앱/웹 UX 통일성 유지, 고객 요구사항에 맞춘 경험 제공
            </li>
          </ul>
          <figure>
            <img
              src="/images/hadong/calendar.png"
              alt="일정 조회 달력 스크린샷"
              className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              일정 조회 달력 스크린샷
            </figcaption>
          </figure>
        </section>

        {/* 2. RN/웹 공통 날짜·시간 util */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2) React Native/웹 공통 날짜·시간 헬퍼 함수 설계
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Luxon 기반으로 JS Date 한계를 보완한 프로젝트 맞춤형 유틸 설계</li>
            <li>재사용 가능한 API와 간단한 문서화로 팀 내 활용성 강화</li>
          </ul>
        </section>

        {/* 3. 위험구역 방문 횟수 시각화 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            3) 위험구역 방문 횟수 시각화
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>@nivo/line으로 방문 데이터를 직관적으로 표현</li>
            <li>관리자의 빠른 인지가 가능하도록 그래프 인터페이스 설계</li>
            <li className="text-gray-600">성과: 관리자 업무 효율성 향상</li>
          </ul>
          <figure>
            <img
              src="/images/hadong/nivoline%20graph.png"
              alt="@nivo/line으로 구현한 위험지역 방문횟수 화면"
              className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              @nivo/line 기반 위험지역 방문횟수 화면
            </figcaption>
          </figure>
        </section>

        {/* 4. QR 코드 기반 정보 제공 및 출력 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            4) QR 코드 기반 정보 제공 및 출력 기능
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>react-to-print로 QR 포함 화학물질 정보 인쇄 기능 추가</li>
            <li>요구에 맞춘 QR/출력 레이아웃 커스터마이징</li>
          </ul>
          <div className="grid grid-cols-12 gap-6">
            <figure className="col-span-12 md:col-span-6">
              <img
                src="/images/hadong/qrpreview.png"
                alt="인쇄용 QR을 확인하는 모달"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                인쇄용 QR 확인 모달 (일부 마스킹)
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-6">
              <img
                src="/images/hadong/qrprint.png"
                alt="인쇄 미리보기 화면"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                인쇄 미리보기 화면
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>안전 관리 효율성과 데이터 활용성 강화</li>
            <li>앱과 웹의 UX 통일성 확보</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">배운 점</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>불완전한 요구사항 속 고객 피드백 기반 문제 정의와 해결 역량 강화</li>
            <li>명확한 요구사항 정의와 현실적인 일정 관리의 중요성 체감</li>
            <li>RN/웹 환경의 UX 통일성과 라이브러리 커스터마이징 경험 → 재사용성/유지보수성 고려한 설계</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
