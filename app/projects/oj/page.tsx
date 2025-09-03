import Link from "next/link";
import { ArrowLeft, ExternalLink, Youtube, FileText } from "lucide-react";

export const metadata = {
  title: "KOJ — KNU Online Judge | 프로젝트 상세",
  description: "경북대학교 프로그래밍 실습 수업 맞춤형 Online Judge 시스템",
};

export default function OJProjectPage() {
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
          KOJ (KNU Online Judge)
        </h1>
        <p className="text-gray-500 mb-6">2024.01.01 ~ 2024.06.28</p>

        <div className="mb-8 rounded-xl border border-gray-200 p-4 bg-gray-50">
          <p className="text-gray-800 font-medium">
            🧑‍💻 프로젝트 내 역할: 프론트엔드 설계/구현, 채점 파이프라인 요구정의,
            교육 도메인 UX
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            프로젝트 개요
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>경북대학교 프로그래밍 실습 수업 맞춤형 Online Judge</li>
            <li>문제/제출/채점/랭킹 흐름을 수업 운영에 맞게 단순화</li>
            <li>
              과거 학과 내부 환경에서 실제 운영된 버전(현재는 신규 시스템으로
              대체)
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            기획 및 디자인
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            IBM Carbon Design System의 깔끔한 룩앤필을 일부 차용하여, 기존 UI에
            익숙한 사용자도 무리 없이 적응하도록 점진적 개선 방향으로 UI/UX를
            기획했습니다.
          </p>
          <a
            href="https://www.figma.com/design/YFt8uWkVke1Hue1fFFov6J/KOJ-3.0?m=dev&node-id=0-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline"
            aria-label="KOJ 피그마 디자인 링크 (새 창)"
            title="KOJ 피그마 디자인"
          >
            피그마 링크 <ExternalLink className="h-4 w-4" />
          </a>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            데모 영상
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            아래는 KOJ의 기능 데모 영상 두 편입니다.
          </p>
          <a
            href="https://youtu.be/G1jVq1TZiOQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
            aria-label="KOJ 문제 추가/제출 기능 데모 영상 (YouTube, 새 창)"
            title="문제 추가/제출 데모 영상"
          >
            <Youtube className="h-4 w-4 text-red-600" />
            <span>문제 추가/제출 기능 데모 (YouTube)</span>
          </a>
          <a
            href="https://youtu.be/lMzUSWY_sCc"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 text-blue-600 hover:underline"
            aria-label="KOJ 제출물 다운로드 기능 데모 영상 (YouTube, 새 창)"
            title="제출물 다운로드 데모 영상"
          >
            <Youtube className="h-4 w-4 text-red-600" />
            <span>제출물 다운로드 기능 데모 (YouTube)</span>
          </a>
        </section>

        {/* 1) CP949 인코딩 문제 해결 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1) CP949 인코딩 문제 해결
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              문제: Visual Studio에서 작성된 CP949 인코딩 코드가 서버에서 실행
              불가
            </li>
            <li>해결: iconv-lite + buffer로 UTF-8 변환 파이프라인 구성</li>
            <li className="text-gray-600">
              성과: 한글 포함 코드의 리눅스 OJ 서버 정상 실행 보장
            </li>
          </ul>
        </section>

        {/* 2) CodeHole 컴포넌트 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2) CodeHole 컴포넌트
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>문제: 특수 유스케이스(빈칸 채우기 등) 미지원</li>
            <li>해결: prism.js + DOMParser로 CodeHole 컴포넌트 제작</li>
            <li className="text-gray-600">
              성과: 교수자 채점 공수 감소, 학생 즉각 피드백
            </li>
          </ul>
          <figure>
            <img
              src="/images/oj/codehole.png"
              alt="Syntax Highlighting이 적용된 CodeHole 컴포넌트"
              className="block mx-auto w-full max-w-xl h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              Syntax Highlighting이 적용된 CodeHole 컴포넌트
            </figcaption>
          </figure>
        </section>

        {/* 3) 엑셀 기반 학생 등록 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            3) 엑셀 기반 학생 등록
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>문제: 반복적인 수기 입력 부담</li>
            <li>해결: xlsx 업로드로 일괄 등록</li>
            <li className="text-gray-600">
              성과: 반복 작업 감소 및 운영 편의 향상
            </li>
          </ul>
          <figure>
            <img
              src="/images/oj/xlsx%20register%20modal.png"
              alt="학교 전산 시스템에서 내려받은 xlsx 파일을 통한 학생 등록 모달"
              className="block mx-auto w-full max-w-xl h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              학교 전산 시스템에서 내려받은 xlsx 파일을 통한 학생 등록 모달
            </figcaption>
          </figure>
        </section>

        {/* 4) 교수자/학습자 편의 기능 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            4) 교수자/학습자 편의 기능 강화
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
            <li>
              교수자: “실습 가져오기(복제)”로 자료 재활용 → 준비 시간 단축
            </li>
            <li>학생: 제출물 일괄 다운로드로 시험 대비 자료 정리 용이</li>
            <li className="text-gray-600">
              성과: 교수자 최대 30% 단축, 학생 평균 50% 단축
            </li>
          </ul>
          <figure>
            <img
              src="/images/oj/lecture%20import.png"
              alt="교수자의 편의를 위한 실습 가져오기 모달"
              className="block mx-auto w-full max-w-xl h-auto rounded-xl border border-gray-200 bg-gray-50 object-contain"
              loading="lazy"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              교수자의 편의를 위한 실습 가져오기 모달
            </figcaption>
          </figure>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">성과</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>교수자 수업 준비 시간 최대 30% 단축</li>
            <li>학생 시험 대비 자료 정리 시간 평균 50% 단축</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            프로젝트 스토리
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            진행 과정과 고민을 정리한 블로그 글 모음입니다.
          </p>
          <ul className="grid gap-3 md:grid-cols-2">
            <li>
              <a
                href="https://kasterra.github.io/KOJ-story-1/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition"
                aria-label="KOJ 스토리 1 - 배경과 초기 기획·설계 (새 창)"
                title="KOJ 스토리 1"
              >
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <FileText className="h-4 w-4 text-gray-600" />
                  <span>KOJ 스토리 1</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  프로젝트의 배경과 초기 기획·설계 과정을 정리했습니다.
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://kasterra.github.io/KOJ-story-2/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition"
                aria-label="KOJ 스토리 2 - 사용자별 라우팅 로직과 핵심 컴포넌트 설계 (새 창)"
                title="KOJ 스토리 2"
              >
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <FileText className="h-4 w-4 text-gray-600" />
                  <span>KOJ 스토리 2</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  사용자별 라우팅 로직과 핵심 컴포넌트 설계를 다뤘습니다.
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://kasterra.github.io/KOJ-story-3/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition"
                aria-label="KOJ 스토리 3 - CP949 인코딩 이슈와 의존성 활용 (새 창)"
                title="KOJ 스토리 3"
              >
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <FileText className="h-4 w-4 text-gray-600" />
                  <span>KOJ 스토리 3</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  외부 라이브러리로 해결한 CP949 인코딩 이슈와 의존성 활용 사례를 소개합니다.
                </p>
              </a>
            </li>
            <li>
              <a
                href="https://kasterra.github.io/KOJ-story-4/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-gray-200 bg-white p-4 hover:shadow-sm transition"
                aria-label="KOJ 스토리 4 - GitHub Actions와 Docker 배포 설정 (새 창)"
                title="KOJ 스토리 4"
              >
                <div className="flex items-center gap-2 text-gray-900 font-medium">
                  <FileText className="h-4 w-4 text-gray-600" />
                  <span>KOJ 스토리 4</span>
                  <ExternalLink className="ml-auto h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  GitHub Actions 기반 CI/CD와 Docker 배포 설정을 정리했습니다.
                </p>
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">배운 점</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>도메인 중심 문제 해결 경험</li>
            <li>브라우저-Node.js 호환성 문제 해결 역량 강화</li>
            <li>지속적인 QA 과정을 통한 사용자 중심 UX 설계 경험</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
