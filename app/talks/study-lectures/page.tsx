import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Programming Study & Lecture | 활동 상세",
  description:
    "정규식, React, Git, 웹 퍼블리싱, C 언어 등 주제로 진행한 스터디/특강 정리",
};

export default function StudyLecturesPage() {
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
          Programming Study & Lecture
        </h1>
        <p className="text-gray-700 leading-relaxed mb-10">
          개발 지식 공유와 후배 양성을 위해 다양한 프로그래밍 스터디와 특강을
          진행했습니다. 기술적 주제를 정리하고 교육 대상을 고려한 커리큘럼으로,
          참여자들의 실질적 성장을 목표했습니다.
        </p>

        {/* 1. 부스트캠프 정규식 스터디 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            1. &lt;부스트캠프 웹・모바일 7기&gt; 정규식 스터디
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>대상:</strong> 부스트캠프 웹・모바일 7기 AOS, iOS, Web 교육생
            </li>
            <li>
              <strong>내용:</strong> 정규식 기본 문법과 활용, 기반 이론(오토마타) 개요
            </li>
            <li>
              <strong>성과:</strong> 공통적으로 활용 가능한 정규식의 실질적 이해와
              활용 능력 증진
            </li>
          </ul>
        </section>

        {/* 2. GDSC KNU FrontEnd Study */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            2. GDSC KNU FrontEnd Study
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>대상:</strong> 기초 웹 퍼블리싱 경험이 있는 학생 개발자
            </li>
            <li>
              <strong>내용:</strong> JS 기본 메서드/이벤트 버블링 점검, React 클래스형·
              함수형 컴포넌트와 생명주기, Hook 기초 강의
            </li>
            <li>
              <a
                href="https://docs.google.com/presentation/d/1dmlOmSXVFNKueoU-EOoK5WZMOwJvQg3v9Y5ouTMzoSk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                스터디 당시 중간결산용 프리젠테이션
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
            <li>
              <strong>성과:</strong> React 기반 프로젝트를 시작할 수 있는 실력 확보
            </li>
          </ul>
        </section>

        {/* 3. KERT 동아리 내 웹 스터디 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            3. KERT 동아리 내 웹 스터디
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>대상:</strong> 개발 경험이 적은 동아리 회원
            </li>
            <li>
              <strong>내용:</strong> HTML/CSS 기초 퍼블리싱, Express.js로 기초 API
              서버 구축 및 간단한 웹 서비스 제작 실습
            </li>
            <li>
              <strong>성과:</strong> 기본 웹 개발 흐름 이해 및 간단한 서비스 독립 구현
            </li>
          </ul>
        </section>

        {/* 4. 앱동 Git 특강 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            4. 경북대학교 앱동 동아리 Git 특강
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>대상:</strong> 협업 경험이 적은 비전공자 비중의 동아리 회원
            </li>
            <li>
              <strong>내용:</strong> Git 기본 원리/개념 강의, Learn Git Branching 실습
            </li>
            <li>
              <a
                href="https://learngitbranching.js.org/?locale=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                Learn Git Branching 실습 사이트
                <ExternalLink className="h-4 w-4" />
              </a>
              <span className="mx-2 text-gray-400">|</span>
              <a
                href="https://docs.google.com/presentation/d/1IFTn2516n-k2DBtxPXoWWefc24EcP41D/edit?usp=sharing&ouid=105287832852123630687&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                당시 사용 프리젠테이션 자료
                <ExternalLink className="h-4 w-4" />
              </a>
            </li>
            <li>
              <strong>성과:</strong> 협업에 필요한 Git 기초 숙지 및 실제 프로젝트 적용
            </li>
          </ul>
        </section>

        {/* 5. KERT 기초 C 언어 교육 */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            5. KERT 동아리 내 기초 C 언어 교육
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              <strong>대상:</strong> 프로그래밍 경험이 없는 신입생
            </li>
            <li>
              <strong>내용:</strong> C 언어 기초 문법, 기초 알고리즘 및 학부 수준 구현
            </li>
            <li>
              <strong>성과:</strong> 학교 수업에 필요한 프로그래밍 기초와 컴퓨터적 사고 습득
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

