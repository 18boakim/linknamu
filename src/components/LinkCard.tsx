type LinkCardProps = {
  label: string;
  url: string;
};

export default function LinkCard({ label, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-gray-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-700 dark:bg-gray-900"
    >
      {label}
    </a>
  );
}
