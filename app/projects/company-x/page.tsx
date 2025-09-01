export const metadata = {
  title: "사내 대시보드 플랫폼 | 프로젝트 상세",
  description: "사내 운영 지표와 워크플로우를 통합한 대시보드 프로젝트 개요",
}

export default function CompanyXProjectPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">사내 대시보드 플랫폼</h1>
        <p className="text-gray-600 mb-10">
          본 프로젝트는 회사 내부 운영을 위해 개발된 비공개 시스템으로, 소스 코드는 공개하지 않습니다. 아래는
          아키텍처와 주요 기능, 역할, 성과에 대한 개요입니다.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">개요</h2>
          <p className="text-gray-700 leading-relaxed">
            여러 서비스로 분산된 운영 지표를 실시간으로 수집/집계하여, 팀별 워크플로우에 맞춘 대시보드를 제공합니다.
            접근 제어(SSO)와 감사 로그를 통해 보안/컴플라이언스를 준수합니다.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">기술 스택</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>프론트엔드: Next.js(정적 Export), React, Tailwind CSS</li>
            <li>데이터: WebSocket 기반 스트리밍, REST/GraphQL 혼용</li>
            <li>인증/권한: 사내 SSO 연동, 역할 기반 접근 제어(RBAC)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">주요 기능</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>실시간 운영 지표 스트리밍 및 시각화</li>
            <li>팀/역할별 맞춤형 대시보드</li>
            <li>권한 기반 편집 및 감사 추적</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">기여/역할</h2>
          <p className="text-gray-700 leading-relaxed">
            UI 설계와 컴포넌트 개발을 주도하고, 성능 최적화 및 접근성 개선을 수행했습니다. 데이터 스트리밍과 상태
            동기화 로직을 도입해 렌더링 비용을 30% 이상 절감했습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>운영 지표 확인 시간 단축, 의사결정 속도 향상</li>
            <li>대시보드 유지보수 비용 절감 및 신규 팀 온보딩 간소화</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

