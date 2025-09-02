import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ExternalLink,
  Github,
  Mail,
  Code,
  Award,
  Users,
  MessageSquare,
  Shield,
  Leaf,
  TerminalSquare,
  Database,
  HeartPulse,
  Gamepad2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { knowledgeSharing, projects } from "@/lib/content";
import { cn } from "@/lib/utils";
import styles from "./page.module.css";
import type { Project } from "@/lib/content";

export const metadata = {
  title: "kasterra — React/RN 기반 문제 해결 포트폴리오",
  description:
    "React/React Native 중심으로 사용자·개발자 경험을 개선하는 이휘찬(kasterra)의 포트폴리오",
};

export default function Home() {
  const professionalProjects: Project[] = projects.filter(
    (p) => p.category === "professional"
  );
  const learningProjects: Project[] = projects.filter(
    (p) => p.category === "learning"
  );
  return (
    <div className={cn("min-h-screen bg-white", styles.highlightStrong)}>
      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="h-4 w-4" />
                프론트엔드 개발자 & 지식공유자
              </div>
              <h1 className="mb-4 text-6xl font-bold text-gray-900 md:text-7xl">
                이휘찬
              </h1>
              <p className="mb-2 text-xl text-gray-500">kasterra</p>
              <p className="mb-8 text-xl text-gray-600 leading-relaxed max-w-2xl">
                React/React Native 중심으로 사용자·개발자 경험을 개선합니다.
                효율적인 문제 해결과 개발 환경 개선에 집중하며,
                만들고·기록하고·공유합니다.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  asChild
                >
                  <a
                    href="https://kasterra.github.io"
                    className="flex items-center gap-2"
                  >
                    기술 블로그로 이동
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  asChild
                >
                  <a
                    href="https://github.com/kasterra"
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      5
                    </div>
                    <div className="text-xs text-gray-600">
                      상용/운영 기여 프로젝트
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      13.6K+
                    </div>
                    <div className="text-xs text-gray-600">
                      월간 평균 블로그 노출(최근 3개월)
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      78
                    </div>
                    <div className="text-xs text-gray-600">
                      블로그 외부 인용/백링크
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        경험을 만들고 기록하는 개발자
                      </p>
                      <p className="text-sm text-gray-600">
                        React 중심으로 문제 해결과 지식 공유를 실천합니다
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">기술 블로거</p>
                      <p className="text-sm text-gray-600">
                        한국어 튜토리얼 중심, 단일 글 2K~4.9K 조회
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        스터디/특강 리드
                      </p>
                      <p className="text-sm text-gray-600">
                        네이버 부스트컨퍼런스 연사 & 특강 4회
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Career Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <h2 className="mb-6 text-4xl font-bold text-gray-900">소개</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                효율적인 문제 해결을 위해 깊게 고민하고, 더 나은 개발 환경을
                만들 수 있다면 그 방향으로 꾸준히 개선합니다. 대학 시절부터
                <strong> 직관적인 UI를 만드는 일과 기술 글쓰기</strong>를 통해
                지식을 나누는 일에 매력을 느끼며 커리어를 시작했습니다.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                ‘Kasterra’s Archive’라는 이름의 기술 블로그를 운영하며
                프론트엔드 지식을 정리하고 있습니다. 한국어 자료가 부족한 주제에
                친절한 튜토리얼을 제공했고,
                <strong> 단일 글 기준 2천~4.9천 회까지 조회</strong>된
                포스트들이 있습니다. 또한 부스트컨퍼런스(네이버 1784)에서 JS
                생태계의 의존성 관리(npm vs yarn berry vs pnpm)를 주제로
                발표했습니다.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  커리어 하이라이트
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        문제 해결 & 환경 개선 지향
                      </p>
                      <p className="text-gray-600">
                        효율과 안정성을 높이기 위한 개발 환경/프로세스 개선
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        기술 블로그 (Kasterra’s Archive)
                      </p>
                      <p className="text-gray-600">
                        단일 글 조회 2,000~4,900회, 튜토리얼/베스트 프랙티스
                        공유
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        부스트컨퍼런스 연사
                      </p>
                      <p className="text-gray-600">
                        JS 의존성 관리: npm · yarn berry · pnpm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Sharing Section */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="mb-6 text-4xl font-bold text-gray-900 leading-tight text-balance">
                지식 공유
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kasterra’s Archive 블로그(2021~)와 컨퍼런스 발표를 통해
                프론트엔드 지식을 공유합니다. React 패턴, 자바스크립트 베스트
                프랙티스, 최신 도구를 한국어 튜토리얼로 정리했고, 일부 글은
                2–4.9K회까지 조회되었습니다(출처: Hits).
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-6 md:grid-cols-2">
                {knowledgeSharing.map((experience, index) => {
                  const iconMap = { Award, Users } as const;
                  const IconComponent = iconMap[experience.icon];
                  return (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                    >
                      <CardHeader className="p-6 flex-1">
                        <div className="flex items-start gap-4 justify-between">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg text-gray-900 mb-2 whitespace-pre-line">
                              {experience.name}
                            </CardTitle>
                            <CardDescription className="text-gray-600">
                              {experience.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      {experience.detailPath && (
                        <CardFooter className="pt-0 pb-6">
                          <Button
                            variant="outline"
                            className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                            asChild
                          >
                            <Link
                              href={experience.detailPath}
                              className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              자세히 보기
                            </Link>
                          </Button>
                        </CardFooter>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              주요 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문가로서 진행했던 프로젝트와, 다른 이들의 학습을 돕기 위한
              오픈소스 교육 도구
            </p>
          </div>
          {/* Professional (상용/운영) */}
          <div className="text-left mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              상용/운영 프로젝트
            </h3>
            <p className="text-gray-600 mt-1">
              실제 서비스 및 유료 프로젝트 중심의 경험
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            {professionalProjects.map((project: Project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <CardHeader className="p-8">
                  <div className="flex items-start justify-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        {(() => {
                          const iconMap: Record<Project["icon"], LucideIcon> = {
                            MessageSquare,
                            Shield,
                            Leaf,
                            TerminalSquare,
                            Database,
                            HeartPulse,
                            Gamepad2,
                          };
                          const IconComponent = iconMap[project.icon] ?? Code;
                          return (
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          );
                        })()}
                      </div>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={`${project.name}-tag-${i}`}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.blogUrl && (
                    <div className="mb-6">
                      <a
                        href={project.blogUrl}
                        className="text-blue-600 hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        관련 기술 블로그 글
                      </a>
                    </div>
                  )}
                  {project.link ? (
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                      asChild
                    >
                      <a
                        href={project.link}
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub에서 보기
                      </a>
                    </Button>
                  ) : project.detailPath ? (
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                      asChild
                    >
                      <Link
                        href={project.detailPath}
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        자세히 보기
                      </Link>
                    </Button>
                  ) : null}
                </CardHeader>
              </Card>
            ))}
          </div>
          {/* Learning/Study */}
          <div className="text-left mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              학습/연구 프로젝트
            </h3>
            <p className="text-gray-600 mt-1">
              학습 목적의 실험, 캡스톤 및 커리큘럼 기반 산출물
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {learningProjects.map((project: Project, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
              >
                <CardHeader className="p-8">
                  <div className="flex items-start justify-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        {(() => {
                          const iconMap: Record<Project["icon"], LucideIcon> = {
                            MessageSquare,
                            Shield,
                            Leaf,
                            TerminalSquare,
                            Database,
                            HeartPulse,
                            Gamepad2,
                          };
                          const IconComponent = iconMap[project.icon] ?? Code;
                          return (
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          );
                        })()}
                      </div>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={`${project.name}-tag-${i}`}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.blogUrl && (
                    <div className="mb-6">
                      <a
                        href={project.blogUrl}
                        className="text-blue-600 hover:underline text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        관련 기술 블로그 글
                      </a>
                    </div>
                  )}
                  {project.link ? (
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                      asChild
                    >
                      <a
                        href={project.link}
                        className="flex items-center justify-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub에서 보기
                      </a>
                    </Button>
                  ) : project.detailPath ? (
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full bg-transparent"
                      asChild
                    >
                      <Link
                        href={project.detailPath}
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        자세히 보기
                      </Link>
                    </Button>
                  ) : null}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 py-12 bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">kasterra</h3>
              <p className="text-gray-400">
                코드와 글로 지식을 공유하는 프론트엔드 개발자
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/kasterra"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
              <a
                href="mailto:hc19991003@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 kasterra (Huichan Lee). 모든 권리 보유.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
