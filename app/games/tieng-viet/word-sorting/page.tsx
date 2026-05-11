"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, RefreshCw, CheckCircle2, XCircle, Star } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WORD_DATA = [
  { word: "gương mặt",   category: "su-vat",   hint: "Chỉ một bộ phận của cơ thể" },
  { word: "hay",         category: "dac-diem",  hint: "Chỉ tính chất, phẩm chất" },
  { word: "đông đủ",    category: "dac-diem",  hint: "Chỉ trạng thái, đặc điểm" },
  { word: "bàn chân",   category: "su-vat",    hint: "Chỉ một bộ phận của cơ thể" },
  { word: "áo quần",    category: "su-vat",    hint: "Chỉ đồ vật cụ thể" },
  { word: "vội",        category: "dac-diem",  hint: "Chỉ cách thức, trạng thái" },
  { word: "đẹp",        category: "dac-diem",  hint: "Chỉ tính chất, đặc điểm" },
  { word: "bầu trời",   category: "su-vat",    hint: "Chỉ sự vật trong thiên nhiên" },
  { word: "sạch sẽ",    category: "dac-diem",  hint: "Chỉ tính chất, trạng thái" },
  { word: "trong xanh", category: "dac-diem",  hint: "Chỉ màu sắc, đặc điểm" },
  { word: "bạn bè",     category: "su-vat",    hint: "Chỉ người, danh từ" },
  { word: "bài thơ",    category: "su-vat",    hint: "Chỉ sản phẩm văn học" },
]

type FeedbackState = {
  type: "correct" | "wrong"
  chosen: string
  correct: string
  hint: string
  word: string
} | null

const catLabel = (c: string) => c === "su-vat" ? "Sự vật" : "Đặc điểm"

export default function WordSortingGame() {
  const [idx, setIdx]           = useState(0)
  const [score, setScore]       = useState(0)
  const [feedback, setFeedback] = useState<FeedbackState>(null)
  const [done, setDone]         = useState(false)
  const [started, setStarted]   = useState(false)

  const word = WORD_DATA[idx]

  const choose = (cat: string) => {
    if (feedback) return
    const ok = word.category === cat
    if (ok) setScore(s => s + 1)
    setFeedback({ type: ok ? "correct" : "wrong", chosen: cat, correct: word.category, hint: word.hint, word: word.word })
  }

  const next = () => {
    setFeedback(null)
    if (idx < WORD_DATA.length - 1) setIdx(i => i + 1)
    else setDone(true)
  }

  const restart = () => { setIdx(0); setScore(0); setFeedback(null); setDone(false) }

  /* ── INTRO ────────────────────────────────────────────────────── */
  if (!started) return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <div className="text-7xl mb-5">🥭</div>
        <h1 className="text-3xl font-extrabold mb-3">Phân loại từ ngữ</h1>
        <p className="text-muted-foreground text-sm mb-8 leading-relaxed px-2">
          Mỗi từ trên quả xoài thuộc về <strong>Sự vật</strong> hay <strong>Đặc điểm</strong>?<br/>
          Chọn đúng giỏ để ghi điểm!
        </p>
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm text-left">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <div className="text-3xl mb-2">🧺</div>
            <div className="font-bold text-blue-700 text-base">Sự vật</div>
            <div className="text-xs text-blue-500 mt-1">Trả lời: <em>"Cái gì? Ai?"</em></div>
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
            <div className="text-3xl mb-2">✨</div>
            <div className="font-bold text-orange-700 text-base">Đặc điểm</div>
            <div className="text-xs text-orange-500 mt-1">Trả lời: <em>"Như thế nào?"</em></div>
          </div>
        </div>
        <Button size="lg" onClick={() => setStarted(true)} className="rounded-full px-10 h-14 text-lg shadow-lg hover:scale-105 transition-transform">
          Bắt đầu chơi 🎮
        </Button>
        <Link href="/games/tieng-viet" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mt-3 flex mx-auto w-fit text-muted-foreground")}>
          <ArrowLeft size={14} className="mr-1" /> Quay lại
        </Link>
      </div>
    </div>
  )

  /* ── RESULT ───────────────────────────────────────────────────── */
  if (done) {
    const pct = Math.round((score / WORD_DATA.length) * 100)
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-sm w-full text-center">
          <div className="text-7xl mb-4">{pct === 100 ? "🏆" : pct >= 70 ? "⭐" : "💪"}</div>
          <h2 className="text-2xl font-extrabold mb-1">{pct === 100 ? "Hoàn hảo!" : pct >= 70 ? "Rất tốt!" : "Cố lên nhé!"}</h2>
          <p className="text-muted-foreground text-sm mb-6">Bạn đã phân loại đúng</p>
          <div className="text-7xl font-black text-primary tracking-tighter mb-2">
            {score}<span className="text-3xl text-muted-foreground font-medium">/{WORD_DATA.length}</span>
          </div>
          <div className="flex gap-2 mt-8 flex-col">
            <Button className="rounded-full h-12 text-base" onClick={restart}><RefreshCw size={16} className="mr-2"/> Chơi lại</Button>
            <Link href="/games/tieng-viet" className={cn(buttonVariants({ variant: "outline" }), "rounded-full h-12 text-base text-center")}>Quay lại danh sách</Link>
          </div>
        </motion.div>
      </div>
    )
  }

  /* ── GAME ─────────────────────────────────────────────────────── */
  return (
    <div className="container mx-auto px-4 py-4 max-w-md flex flex-col gap-0">

      {/* ── Top bar (fixed height) ── */}
      <div className="flex items-center justify-between mb-6 h-9">
        <Link href="/games/tieng-viet" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-muted-foreground gap-1 px-2")}>
          <ArrowLeft size={15}/> Thoát
        </Link>
        <div className="flex items-center gap-2">
          <div className="h-2 w-28 bg-muted rounded-full overflow-hidden">
            <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${((idx + 1) / WORD_DATA.length) * 100}%` }} transition={{ duration: 0.4 }}/>
          </div>
          <span className="text-xs text-muted-foreground font-medium w-10 text-right">{idx + 1}/{WORD_DATA.length}</span>
        </div>
        <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-bold">
          <Star size={13} className="fill-primary"/> {score}
        </div>
      </div>

      {/* ── Mango area (fixed height) ── */}
      <div className="flex items-center justify-center h-52 mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative"
          >
            <div className="w-44 h-44 rounded-[40%_60%_60%_40%_/_40%_40%_60%_60%] bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 shadow-2xl shadow-amber-200 flex items-center justify-center relative">
              {/* stem */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-3 h-6 bg-green-800 rounded-full" />
              <div className="absolute -top-7 left-1/2 w-8 h-5 bg-green-500 rounded-full rotate-[-30deg] origin-bottom-left" />
              {/* word */}
              <span className="text-4xl font-black text-amber-950 text-center px-5 leading-tight">
                {word.word}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Feedback area (ALWAYS RENDERED, fixed height ~80px) ── */}
      <div className="h-24 mb-5 flex items-start">
        <AnimatePresence mode="wait">
          {feedback ? (
            <motion.div
              key="fb"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className={cn(
                "w-full rounded-2xl px-4 py-3 border-2 flex items-start gap-3 text-sm",
                feedback.type === "correct" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
              )}
            >
              {feedback.type === "correct"
                ? <CheckCircle2 size={22} className="text-green-600 mt-0.5 shrink-0"/>
                : <XCircle     size={22} className="text-red-600   mt-0.5 shrink-0"/>
              }
              <div className="flex-1">
                {feedback.type === "correct"
                  ? <p className="font-bold text-green-800 text-base">Chính xác! 🎉</p>
                  : <p className="font-bold text-red-800 text-base">
                      <b>"{feedback.word}"</b> là <b>{catLabel(feedback.correct)}</b>
                    </p>
                }
                <p className="text-muted-foreground text-sm mt-1">💡 {feedback.hint}</p>
              </div>
            </motion.div>
          ) : (
            /* placeholder so height doesn't collapse */
            <div key="empty" className="w-full h-full flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Chọn một giỏ bên dưới ↓</p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Next button (ALWAYS RENDERED, fixed height ~52px) ── */}
      <div className="h-12 mb-5">
        <AnimatePresence>
          {feedback && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <Button className="w-full rounded-xl h-12 text-base font-bold" onClick={next}>
                {idx < WORD_DATA.length - 1 ? "Tiếp theo →" : "Xem kết quả 🏆"}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Baskets (ALWAYS VISIBLE) ── */}
      <div className="grid grid-cols-2 gap-4">
        <motion.button
          whileHover={!feedback ? { scale: 1.04, y: -4 } : {}}
          whileTap={!feedback ? { scale: 0.97 } : {}}
          onClick={() => choose("su-vat")}
          disabled={!!feedback}
          className={cn(
            "group relative rounded-3xl border-2 bg-gradient-to-b from-blue-50 to-blue-100 transition-all p-5 flex flex-col items-center gap-2",
            !feedback ? "border-blue-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 cursor-pointer" : "border-blue-100 opacity-60 cursor-not-allowed",
            feedback?.correct === "su-vat" && "border-green-400 opacity-100 ring-2 ring-green-300",
            feedback?.type === "wrong" && feedback.chosen === "su-vat" && "border-red-400 opacity-100 ring-2 ring-red-300"
          )}
        >
          <div className="text-5xl">🧺</div>
          <div className="font-extrabold text-blue-700 text-2xl">Sự vật</div>
          <div className="text-blue-500 text-sm font-medium">Cái gì? Ai?</div>
        </motion.button>

        <motion.button
          whileHover={!feedback ? { scale: 1.04, y: -4 } : {}}
          whileTap={!feedback ? { scale: 0.97 } : {}}
          onClick={() => choose("dac-diem")}
          disabled={!!feedback}
          className={cn(
            "group relative rounded-3xl border-2 bg-gradient-to-b from-orange-50 to-orange-100 transition-all p-5 flex flex-col items-center gap-2",
            !feedback ? "border-orange-200 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100 cursor-pointer" : "border-orange-100 opacity-60 cursor-not-allowed",
            feedback?.correct === "dac-diem" && "border-green-400 opacity-100 ring-2 ring-green-300",
            feedback?.type === "wrong" && feedback.chosen === "dac-diem" && "border-red-400 opacity-100 ring-2 ring-red-300"
          )}
        >
          <div className="text-5xl">✨</div>
          <div className="font-extrabold text-orange-700 text-2xl">Đặc điểm</div>
          <div className="text-orange-500 text-sm font-medium">Như thế nào?</div>
        </motion.button>
      </div>
    </div>
  )
}
