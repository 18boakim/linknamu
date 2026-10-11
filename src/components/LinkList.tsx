"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열릴 때 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => console.error("클릭 수 조회 실패:", error));
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 1을 더하고, 서버에는 따로 저장 요청을 보냅니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch((error) => console.error("클릭 수 저장 실패:", error));
  }

  return (
    <ul className="mt-8 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            label={link.label}
            url={link.url}
            clickCount={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
