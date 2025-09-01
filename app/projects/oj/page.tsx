export const metadata = {
  title: "React 기반 온라인 저지 | 프로젝트 상세",
  description: "연구실 학부연구생 시절 구축한 React 기반 온라인 저지 프로젝트 개요",
}

export default function OJProjectPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">React 기반 온라인 저지 구축</h1>
        <p className="text-gray-600 mb-10">
          연구실 학부연구생 시절, 문제 업로드/채점/랭킹을 포함한 온라인 저지(Online Judge) 시스템을 React 기반으로
          설계하고 구현했습니다. 소스 코드는 비공개지만, 설계 및 기술적 의사 결정은 블로그 글로 정리되어 있습니다.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">아키텍처 개요</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>프론트엔드: React, 상태 관리 및 비동기 데이터 흐름 최적화</li>
            <li>백엔드/채점: 컨테이너 기반 격리 채점 파이프라인(샌드박싱)</li>
            <li>기능: 문제/제출 관리, 채점 큐, 랭킹 보드, 제출 기록</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">기여/역할</h2>
          <p className="text-gray-700 leading-relaxed">
            프론트엔드 전체 설계, 채점 결과 실시간 반영, 제출 기록 뷰 최적화, 접근성 개선을 담당했습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>동시 제출 처리량 향상, 채점 대기 시간 단축</li>
            <li>사용자 친화적 UI로 학습/연습 효율 개선</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

