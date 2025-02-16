import { Skeleton } from "@/components/ui/skeleton";

const transformStyles = [
  { origin: "origin-center", translate: "translate-y-2 rotate-2" },
  {
    origin: "origin-top-left",
    translate: "-translate-y-1 translate-x-2 -rotate-1",
  },
  { origin: "origin-bottom", translate: "translate-y-4 rotate-3" },
  {
    origin: "origin-top-right",
    translate: "-translate-x-2 translate-y-3 -rotate-2",
  },
  {
    origin: "origin-bottom-left",
    translate: "translate-x-3 -translate-y-2 rotate-1",
  },
  {
    origin: "origin-center",
    translate: "-translate-y-3 -translate-x-1 -rotate-3",
  },
];

const SkeletonCard = () => {
  const style =
    transformStyles[Math.floor(Math.random() * transformStyles.length)];

  return (
    <div
      className={`${style.origin} ${style.translate} bg-zinc-900 rounded-lg shadow-md border border-zinc-800 overflow-hidden`}
    >
      <Skeleton className="aspect-square w-full" />
      <div className="p-3 space-y-2">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-1">
          <Skeleton className="h-4 w-16 rounded-full" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default function Loading() {
  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
          <Skeleton className="h-12 w-full max-w-md mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Array(15)
            .fill(null)
            .map((_, index) => (
              <SkeletonCard key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
