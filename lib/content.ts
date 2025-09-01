export type KnowledgeItem = {
  name: string;
  description: string;
  // Icon name to be mapped in the page (avoids exporting components across module boundary)
  icon: "Award" | "Users";
  // 상세 페이지 경로 (선택)
  detailPath?: string;
};

export const knowledgeSharing: KnowledgeItem[] = [
  {
    name: "부스트컨퍼런스 연사\n(네이버 1784)",
    description:
      "JS 생태계의 의존성 관리(npm, yarn berry, pnpm) 주제로 발표했습니다.",
    icon: "Award",
    detailPath: "/talks/boostconference",
  },
  {
    name: "기술블로그\nKasterra's Archive",
    description:
      "한국어 튜토리얼 중심의 포스트를 운영하며, 단일 글 기준 2K~4.9K 조회를 달성했습니다.",
    icon: "Users",
    detailPath: "/blog",
  },
  {
    name: "스터디/특강 리딩 (5회)",
    description:
      "정규식, React 기초, Git 기본, C 언어 기초 등 주제로 스터디/특강을 진행했습니다.",
    icon: "Users",
    detailPath: "/talks/study-lectures",
  },
];

export type Project = {
  name: string;
  description: string;
  // 개발 기간(표시용)
  period: string;
  // 기술 스택/키워드 태그
  tags: string[];
  // 카드 아이콘 (lucide)
  icon:
    | "MessageSquare"
    | "Shield"
    | "Leaf"
    | "TerminalSquare"
    | "Database"
    | "HeartPulse"
    | "Gamepad2";
  // 구분: 상용/운영 프로젝트 vs 학습·연구 프로젝트
  category: "professional" | "learning";
  // GitHub 오픈소스 링크 (선택)
  link?: string;
  // 사내용/비공개 프로젝트의 상세 설명 페이지 경로 (선택)
  detailPath?: string;
  // 관련 기술 블로그/정리 링크 (선택)
  blogUrl?: string;
};

export const projects: Project[] = [
  // 최신순 정렬
  {
    name: "창톡 — 상담/서비스 앱",
    description:
      "RN 신규 서비스·상담 앱. 웹뷰 통신 프로토콜·레거시 유지보수·공통 UI 라이브러리",
    period: "2025.04 ~ 2025.07",
    tags: [
      "React Native",
      "WebView",
      "Design System",
      "Storybook",
      "TypeScript",
    ],
    icon: "MessageSquare",
    category: "professional",
    detailPath: "/projects/changtalk",
  },
  {
    name: "KOJ — KNU Online Judge",
    description:
      "수업 맞춤형 OJ. 인코딩 해결, CodeHole, 일괄 등록·복제·다운로드",
    period: "2024.01.01 ~ 2024.06.28",
    tags: ["React", "UTF-8", "Excel Import", "Education", "CodeHole"],
    icon: "TerminalSquare",
    category: "professional",
    detailPath: "/projects/oj",
  },
  {
    name: "하동본부 화학물질 안전관리",
    description:
      "안전관리 앱. 달력(공휴일), 날짜·시간 유틸, 방문 시각화, QR 자산 정보",
    period: "2024.09 ~ 2024.10",
    tags: ["Web", "Luxon", "@nivo/line", "React Native"],
    icon: "Shield",
    category: "professional",
    detailPath: "/projects/hadong-chem-safety",
  },
  {
    name: "아리 — AI 농업 비서 데이터 수집 앱",
    description:
      "AI 농업 비서 데이터 수집. 2주 프로토타입, 웹뷰 기반 사진/음성 업로드",
    period: "2024.07.24 ~ 2024.08.08",
    tags: ["React", "WebView", "File Upload", "Agile"],
    icon: "Leaf",
    category: "professional",
    detailPath: "/projects/ari",
  },

  {
    name: "섬유 물성 역공학 프로젝트",
    description:
      "대용량(3,800만+) 데이터 시각·조회 UI, 청크 처리·인덱싱 최적화",
    period: "2023.09.01 ~ 2023.11.14",
    tags: ["Data Viz", "Chunk Processing", "Indexing", "UI/UX", "TypeScript"],
    icon: "Database",
    category: "professional",
    detailPath: "/projects/textile-reverse-engineering",
  },
  {
    name: "Commenta — 감정 일기 앱",
    description:
      "감정 일기 RN 앱. WatermelonDB 도입, 무드 차트 등 진료 보조 UI",
    period: "2023.09 ~ 2023.11",
    tags: ["React Native", "WatermelonDB", "SQLite", "Charts", "UX"],
    icon: "HeartPulse",
    category: "learning",
    detailPath: "/projects/commenta",
  },
  {
    name: "부스트캠프 Canvas 2D 게임 학습 프로젝트",
    description: "Canvas 2D 게임. 카메라 추적·뷰포트 최적화, 레거시 리팩토링",
    period: "2022.11.01 ~ 2022.11.08",
    tags: ["Canvas", "2D Game", "Refactoring", "Optimization", "JavaScript"],
    icon: "Gamepad2",
    category: "learning",
    detailPath: "/projects/boostcamp-canvas",
  },
];
