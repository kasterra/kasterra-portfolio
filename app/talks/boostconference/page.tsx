import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "부스트컨퍼런스(네이버 1784) | 발표 상세",
  description: "JS 생태계의 의존성 관리(npm vs yarn berry vs pnpm) 발표",
};

export default function BoostConferencePage() {
  // 로컬 자산 경로 (public/ 아래에 파일을 두면 자동으로 서빙됩니다)
  const assets = {
    slides: "/talks/boostconference/이휘찬-의존성_관리_어디까지_알고있니.pdf", // public/ 아래에 두세요
    images: {
      talk: "/talks/boostconference/img-332.jpg",
      audience: "/talks/boostconference/audience.png",
      group: "/talks/boostconference/group.png",
    },
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
          부스트컨퍼런스 - 네이버 커넥트재단 &lt;부스트캠프 웹・모바일 7기&gt;
        </h1>
        <p className="text-gray-500 mb-6">2022.10.20</p>

        <section className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            캠퍼들이 연사로 발표하는 부스트컨퍼런스 행사에서 네이버 1784로
            초빙되어 JS 생태계에서의 의존성 관리(npm vs yarn berry vs pnpm)에
            대해 발표했습니다.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mt-4 space-y-2">
            <li>
              개인 블로그에서 높은 조회수를 기록한 주제를 심화하여 발표했습니다.
              <span className="text-gray-500"> (28일간 조회수 1,383회)</span>
            </li>
            <li>
              <a
                href="https://kasterra.github.io/boostconference-retrospect/"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                부스트컨퍼런스 회고
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <span>발표 자료:</span>
              <a
                href={assets.slides}
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                PDF 다운로드
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </section>

        {/* Responsive gallery grid */}
        <section>
          <div className="grid grid-cols-12 gap-6">
            <figure className="col-span-12 md:col-span-7">
              <img
                src={assets.images.talk}
                alt="부스트컨퍼런스 발표 당시"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                부스트컨퍼런스 발표 당시
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-5">
              <img
                src={assets.images.audience}
                alt="부스트컨퍼런스에 모인 청중들"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                부스트컨퍼런스에 모인 청중들
              </figcaption>
            </figure>
            <figure className="col-span-12">
              <img
                src={assets.images.group}
                alt="연사 + 오거나이저와 기념사진"
                className="block w-full h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
                loading="lazy"
              />
              <figcaption className="mt-3 text-sm text-gray-500">
                연사 + 오거나이저와 기념사진
              </figcaption>
            </figure>
          </div>
        </section>
      </div>
    </div>
  );
}
