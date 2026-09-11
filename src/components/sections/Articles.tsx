"use client";

import React, { useState } from "react";
import { articlesData, ArticleItem } from "@/data/articles";
import { soundFX } from "@/lib/sound";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Reveal } from "../animations/Reveal";
import { TiltCard } from "../animations/TiltCard";
import { FloatingParticles } from "../animations/FloatingParticles";
import { BookOpen, Clock, ArrowUpRight, CheckCircle2, Sparkles, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const openArticle = (article: ArticleItem) => {
    soundFX.playClick(900);
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    soundFX.playClick(600);
    setSelectedArticle(null);
  };

  return (
    <section id="articles" className="py-24 relative bg-[#08080C] border-t border-white/5 tech-grid overflow-hidden">
      <FloatingParticles count={20} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          index="11"
          badge="Engineering Case Studies"
          badgeIcon={<BookOpen className="w-3.5 h-3.5" />}
          title="Technical Notes &"
          titleAccent="Architecture Deep Dives."
          subtitle="In-depth technical breakdowns covering ESP32 FreeRTOS microcontrollers, Next.js optimization, and cloud system design."
        />

        {/* 3D Tilt Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <Reveal key={article.id} direction="up" delay={0.1}>
              <TiltCard maxTilt={8} glareOpacity={0.25} scaleOnHover={1.03}>
                <div
                  onClick={() => openArticle(article)}
                  className="cursor-pointer h-full"
                >
                  <Card
                    variant="glass"
                    borderAccent
                    className="p-6 h-full flex flex-col justify-between hover:border-accent/50 transition-all duration-300 group bg-[#0C0C14]/40 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="accent" size="sm">
                          {article.category}
                        </Badge>
                        <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 font-display group-hover:text-accent transition-colors flex items-center justify-between">
                        <span>{article.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>

                      <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span>{article.date}</span>
                      <span className="text-accent font-semibold group-hover:underline">Read Case Study →</span>
                    </div>
                  </Card>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Article Detail Slide-over Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0E0E18]/95 border border-white/20 rounded-3xl p-6 sm:p-8 z-10 max-h-[80vh] overflow-y-auto text-neutral-200 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <Badge variant="accent" size="sm">
                  {selectedArticle.category}
                </Badge>
                <button
                  onClick={closeArticle}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-2xl font-bold text-white font-display mb-2">
                {selectedArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs font-mono text-accent mb-6">
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
                <p>{selectedArticle.summary}</p>

                <div className="p-4 rounded-2xl bg-[#141424]/60 border border-white/5 space-y-2 mt-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                    Key Technical Takeaways
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
