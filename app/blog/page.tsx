import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Tech Blog | Kasterra’s Archive",
  description:
    "프론트엔드 중심의 친절한 한국어 튜토리얼 블로그 — 인기 글과 하이라이트",
};

export default function TechBlogPage() {
  const assets = {
    hero: "/blog/hero.png", // 블로그 개요 스크린샷
    gscYarnBerry: "/blog/gsc-yarn-berry.png", // yarn berry 글 인용/조회
    gscPopular1: "/blog/gsc-popular-1.png", // GSC 인기 컨텐츠 1위 (2025.02)
    gscPopular4: "/blog/gsc-popular-4.png", // GSC 인기 컨텐츠 4위 (2025.02)
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

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Tech Blog
        </h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Kasterra’s Archive 라는 이름으로, 프론트엔드쪽 지식을 중점으로 학습한
          내용들을 정리한 블로그를 운영하고 있습니다.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10">
          공식 문서나 기타 학습 자료들을 읽으면서, <strong>조금 더 친절한
          튜토리얼</strong>이 필요하다 생각한 부분이나, <strong>한국어 자료가 없는
          튜토리얼</strong>을 캐치하여 아티클을 작성하였고, 2천에서 많게는 4,900회까지
          조회되는 컨텐츠를 제작했습니다. 단순 조회를 넘어 여러 블로그에 참고자료로
          인용되며 역링크도 확인되었습니다.
        </p>

        {/* Hero image */}
        <figure className="mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.hero}
            alt="Kasterra’s Archive 블로그 하이라이트"
            className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
            loading="lazy"
          />
          <figcaption className="mt-3 text-sm text-gray-500">
            Kasterra’s Archive — 프론트엔드 한국어 튜토리얼 중심 블로그
          </figcaption>
        </figure>

        {/* yarn berry article */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            yarn berry로 React.js 프로젝트 시작하기 (4,900회+)
          </h2>
          <p className="text-gray-700 mb-3">
            2022년 당시 토스의 도입 등으로 yarn berry에 대한 관심이 높았지만,
            입문자가 한눈에 보기 어려운 정보들이 산재해 있어 이를 정리했습니다.
            npm과의 차이로 인해 자주 만나는 오류와 해결책을 모아 높은 관심과 인용을
            받았고, 이 글을 바탕으로 부스트컨퍼런스 발표도 진행했습니다.
          </p>
          <p className="text-blue-600 hover:underline inline-flex items-center gap-1 mb-4">
            <a
              href="https://kasterra.github.io/setting-yarn-berry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              yarn berry로 React.js 프로젝트 시작하기 | Kasterra's Archive
            </a>
            <ExternalLink className="h-4 w-4" />
          </p>

          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assets.gscYarnBerry}
              alt="Google Search Console에서 확인한 글 인용 기록"
              className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              Google Search Console — 글 인용 및 노출 기록
            </figcaption>
          </figure>
        </section>

        {/* react-beautiful-dnd series */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            React-beautiful-dnd 튜토리얼 시리즈 (최대 2,000회+)
          </h2>
          <p className="text-gray-700 mb-3">
            트렐로 클론코딩 등 입문 수요가 큰 라이브러리지만 한국어 단계별
            튜토리얼이 드물어, 클론 가능한 예제 레포와 태그 기반 단계별 코드를
            구성해 학습자들이 쉽게 따라올 수 있도록 했습니다.
          </p>
          <p className="text-blue-600 hover:underline inline-flex items-center gap-1">
            <a
              href="https://kasterra.github.io/react-beautiful-dnd-1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-beautiful-dnd 알아보기 ① | Kasterra's Archive
            </a>
            <ExternalLink className="h-4 w-4" />
          </p>
        </section>

        {/* express.js posts */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            express.js에서 데이터 처리를 위한 글들 (2,000회+)
          </h2>
          <p className="text-gray-700 mb-3">
            웹 입문 강의에서 자주 스킵되는 파일 업로드의 핵심 개념을 정리한
            2분 읽기 글과, 입문 레벨의 POST 처리 명세를 간결하게 설명한 글이 꾸준히
            검색 유입을 받고 있습니다.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>
              <a
                href="https://kasterra.github.io/what-is-multipart-form-data/"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                enctype="multipart/form-data"가 뭐에요?
              </a>
              <ExternalLink className="h-4 w-4 inline ml-1" />
            </li>
            <li>
              <a
                href="https://kasterra.github.io/handle-POST-data-in-express/"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                express.js에서 POST 데이터 처리하기 (조회수 2,400회+)
              </a>
              <ExternalLink className="h-4 w-4 inline ml-1" />
            </li>
          </ul>

          <div className="grid grid-cols-12 gap-6">
            <figure className="col-span-12 md:col-span-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.gscPopular1}
                alt="GSC 인사이트 — 2025.02 인기 컨텐츠 1위"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                Google Search Console 인사이트 — 2025.02 인기 컨텐츠 1위
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assets.gscPopular4}
                alt="GSC 인사이트 — 2025.02 인기 컨텐츠 4위"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                Google Search Console 인사이트 — 2025.02 인기 컨텐츠 4위
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}
