type LinkCardProps = {
  label: string;
  url: string;
  clickCount: number;
  onClick: () => void;
};

export default function LinkCard({ label, url, clickCount, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-gray-300 bg-white px-16 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-700 dark:bg-gray-900"
    >
      {label}
      <span className="absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal text-gray-500 dark:text-gray-400">
        {clickCount.toLocaleString()}회
      </span>
    </a>
  );
}
