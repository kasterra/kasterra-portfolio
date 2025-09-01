export type KnowledgeItem = {
  name: string;
  description: string;
  // Icon name to be mapped in the page (avoids exporting components across module boundary)
  icon: "Award" | "Users";
};

export const knowledgeSharing: KnowledgeItem[] = [
  {
    name: "부스트컨퍼런스 연사\n(네이버 1784)",
    description:
      "JS 생태계의 의존성 관리(npm, yarn berry, pnpm) 주제로 발표했습니다.",
    icon: "Award",
  },
  {
    name: "기술블로그\nKasterra's Archive",
    description:
      "한국어 튜토리얼 중심의 포스트를 운영하며, 단일 글 기준 2K~4.9K 조회를 달성했습니다.",
    icon: "Users",
  },
  {
    name: "스터디/특강 리딩 (5회)",
    description:
      "정규식, React 기초, Git 기본, C 언어 기초 등 주제로 스터디/특강을 진행했습니다.",
    icon: "Users",
  },
];

export type Project = {
  name: string;
  description: string;
  // GitHub 오픈소스 링크 (선택)
  link?: string;
  // 사내용/비공개 프로젝트의 상세 설명 페이지 경로 (선택)
  detailPath?: string;
  // 관련 기술 블로그/정리 링크 (선택)
  blogUrl?: string;
};

export const projects: Project[] = [
  {
    name: "KOJ - KNU Online Judge",
    description:
      "React 기반 온라인 저지 시스템. 학부 연구실 시절 설계/구현하여 실제 운영했습니다.",
    detailPath: "/projects/koj",
    blogUrl: "#",
  },
  {
    name: "Commenta — React Native 앱",
    description:
      "React Native로 개발한 모바일 앱. 실제 사용자 피드백을 반영하여 기능을 개선했습니다.",
    detailPath: "/projects/commenta",
    blogUrl: "#",
  },
  {
    name: "하동본부 화학물질 안전관리 — Admin Dashboard",
    description:
      "공공기관용 어드민 대시보드. 업무 플로우에 맞춘 데이터 관리와 접근 제어를 설계했습니다.",
    detailPath: "/projects/hadong-chem-admin",
    blogUrl: "#",
  },
  {
    name: "섬유 물성 역공학 AI 시스템 시각화",
    description:
      "AI 예측 결과를 직관적으로 확인할 수 있는 웹 시각화 도구를 설계·구축했습니다.",
    detailPath: "/projects/textile-ai-visual",
    blogUrl: "#",
  },
];
