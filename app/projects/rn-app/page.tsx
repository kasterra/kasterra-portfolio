export const metadata = {
  title: "React Native 앱 개발 | 프로젝트 상세",
  description: "회사 제품 React Native 앱 개발 경험의 기술 정리",
}

export default function RNAppProjectPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">React Native 앱 개발 경험</h1>
        <p className="text-gray-600 mb-10">
          회사 제품의 모바일 앱을 React Native로 개발했습니다. 소스 코드는 비공개이며, 이 페이지에서는 기술적 접근과
          구조, 성능 최적화 포인트를 요약합니다.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">핵심 기술</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>상태 관리 및 오프라인 우선 전략(네트워크 회복 시 동기화)</li>
            <li>네이티브 모듈 연동 및 성능 이슈 해결</li>
            <li>애니메이션/제스처 최적화 및 앱 구동 시간 단축</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">아키텍처</h2>
          <p className="text-gray-700 leading-relaxed">
            피처 기반 폴더 구조, 네트워크 레이어 추상화, 캐싱 전략을 도입해 유지보수성을 강화했습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>스크롤/전환 체감 성능 개선 및 크래시율 감소</li>
            <li>릴리즈 파이프라인 자동화로 배포 리드타임 단축</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

