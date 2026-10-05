import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        unoptimized
        className="h-28 w-28 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700"
      />
      <h1 className="mt-4 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
