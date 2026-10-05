// 보여주기용 더미 데이터입니다. 실제 내용으로 교체하세요.

export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageUrl: "/profile-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/" },
  { id: "github", label: "GitHub", url: "https://github.com/" },
  { id: "blog", label: "Blog", url: "https://example.com/" },
];
