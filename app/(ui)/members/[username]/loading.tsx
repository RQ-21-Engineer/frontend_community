import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function LoadingMemberPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative bg-gradient-to-br from-blue-900 to-black py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute top-0 left-0 z-10">
              <Link
                href="/members"
                className="inline-flex items-center text-blue-400 mb-8 hover:text-blue-300 transition-colors"
              >
                <FaArrowLeft className="mr-2" /> Back to Members
              </Link>
            </div>

            <div className="md:flex items-center space-x-8 pt-16">
              <Skeleton className="relative w-48 h-48 rounded-2xl mb-6 md:mb-0" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-64" />
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-6 w-32" />
                  <span className="text-zinc-500">•</span>
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-6 w-96" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <Skeleton className="h-8 w-32 mb-4" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <Skeleton className="h-8 w-32 mb-4" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-8 w-24 rounded-full" />
                ))}
              </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <Skeleton className="h-8 w-32 mb-6" />
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="p-6 bg-zinc-800/50 rounded-xl space-y-2"
                  >
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <Skeleton className="h-8 w-32 mb-6" />
              <div className="space-y-4">
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-48" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/20">
              <Skeleton className="h-8 w-32 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-14 w-full rounded-xl" />
                <Skeleton className="h-14 w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
