import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090A0F] text-white px-6">
      <div className="text-center max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/20 inline-block">
          404 — Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
          Page Does Not Exist
        </h1>
        <p className="text-sm text-neutral-400 leading-relaxed">
          The requested route was moved, renamed, or does not exist on abuhosain.dev.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent hover:bg-accent-hover text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141624] hover:bg-[#1A1D30] border border-white/10 text-neutral-200 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Browse Projects</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
