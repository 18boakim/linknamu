import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12">
      <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />

      <ul className="mt-8 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard label={link.label} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
