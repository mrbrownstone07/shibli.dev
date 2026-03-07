"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-[40vh] gap-4">
      <h2 className="text-xl font-semibold text-emerald-300">
        Something went wrong
      </h2>
      <button
        className="rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
