"use client";

import React, { useState } from "react";
import { articlesData, ArticleItem } from "@/data/articles";
import { BookOpen, Clock, ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-24 border-t border-white/[0.08] bg-[#07080D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-12 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              // Technical Notes
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Architecture Case Studies &amp; Notes
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-prose">
            Technical write-ups covering ESP32 FreeRTOS microcontrollers, Next.js optimization,
            and multi-tenant SaaS architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-6 rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-4 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-accent transition-colors font-display flex items-start justify-between gap-2">
                  <span>{article.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-0.5" />
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mt-2 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>{article.date}</span>
                <span className="text-accent group-hover:underline">Read Notes &rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.18 }}
              className="relative w-full max-w-2xl bg-[#0F111A] border border-white/[0.12] rounded-2xl p-6 sm:p-8 z-10 max-h-[80vh] overflow-y-auto text-neutral-200 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                  {selectedArticle.category}
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.06] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white font-display mb-2">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-accent mb-6">
                <span>{selectedArticle.date}</span>
                <span>&bull;</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>{selectedArticle.summary}</p>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 mt-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                    Key Architectural Takeaways
                  </h4>
                  {selectedArticle.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Articles;
