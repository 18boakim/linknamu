import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(links.map((link) => link.id));

// 모든 링크의 클릭 수를 한 번에 반환합니다. 예: { "linkedin": 3, "github": 5 }
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();

    const counts: Record<string, number> = {};
    for (const doc of docs) {
      counts[doc._id] = doc.count;
    }

    return NextResponse.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 요청 본문 { id } 에 해당하는 링크의 클릭 수를 1 늘립니다.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    const result = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 저장 실패:", error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
