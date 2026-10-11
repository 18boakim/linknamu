// 보여주기용 더미 데이터입니다. 실제 내용으로 교체하세요.

export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "김보아",
  bio: "손으로 만드는걸 좋아하는 AI & Data Consultant",
  imageUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/boa-kim-6062861b8/" },
  { id: "github", label: "GitHub", url: "https://github.com/18boakim" },
];
