"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, RefreshCw, CheckCircle2, XCircle } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WORD_DATA = [
  { word: "gương mặt",  category: "su-vat" },
  { word: "hay",        category: "dac-diem" },
  { word: "đông đủ",   category: "dac-diem" },
  { word: "bàn chân",  category: "su-vat" },
  { word: "áo quần",   category: "su-vat" },
  { word: "vội",       category: "dac-diem" },
  { word: "đẹp",       category: "dac-diem" },
  { word: "bầu trời",  category: "su-vat" },
  { word: "sạch sẽ",   category: "dac-diem" },
  { word: "trong xanh",category: "dac-diem" },
  { word: "bạn bè",    category: "su-vat" },
  { word: "bài thơ",   category: "su-vat" },
]

const catLabel = (c: string) => c === "su-vat" ? "Sự vật" : "Đặc điểm"
type Placements = Record<string, string>

/* ── SVG Mango chip ─────────────────────────────────────────── */
function MangoChip({ word, selected = false, size = "md", onClick }: {
  word: string; selected?: boolean; size?: "md" | "sm"; onClick?: () => void
}) {
  const w = size === "md" ? 96 : 80
  const h = size === "md" ? 110 : 92
  const fill    = "#fbbf24"
  const fillEnd = "#f97316"
  const stroke  = selected ? "#ffffff" : "#d97706"
  const shadow  = selected
    ? "drop-shadow(0 0 10px #fbbf24) drop-shadow(0 0 20px #fde68a)"
    : "drop-shadow(0 4px 8px #fcd34d)"
  const id = `mg-${word.replace(/\s/g, "-")}`

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.92 }}
      className="relative flex items-center justify-center cursor-pointer select-none focus:outline-none"
      style={{ width: w, height: h }}
    >
      <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full transition-all duration-200" style={{ filter: shadow }}>
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={fill} />
            <stop offset="100%" stopColor={fillEnd} />
          </linearGradient>
        </defs>
        <path d="M50 18 C28 18 14 36 14 58 C14 84 30 108 50 108 C70 108 86 84 86 58 C86 36 72 18 50 18 Z"
          fill={`url(#${id})`} stroke={stroke} strokeWidth="2" />
        <ellipse cx="38" cy="40" rx="8" ry="5" fill="white" opacity="0.25" transform="rotate(-30 38 40)" />
        <rect x="47" y="2" width="6" height="18" rx="3" fill="#14532d" />
        <ellipse cx="58" cy="8" rx="12" ry="5" fill="#16a34a" transform="rotate(-30 58 8)" />
        <ellipse cx="40" cy="6" rx="9"  ry="4" fill="#22c55e" transform="rotate(25 40 6)" />
      </svg>
      <span
        className={cn("relative z-10 font-black text-center leading-tight drop-shadow-sm px-1 text-amber-950",
          size === "md" ? "text-sm" : "text-xs"
        )}
        style={{ maxWidth: w - 12 }}
      >
        {word}
      </span>
    </motion.button>
  )
}

export default function WordSortingGame() {
  const [placements, setPlacements] = useState<Placements>({})
  const [selected, setSelected]     = useState<string | null>(null)
  const [submitted, setSubmitted]   = useState(false)

  const unplaced  = WORD_DATA.filter(w => !placements[w.word])
  const suVat     = WORD_DATA.filter(w => placements[w.word] === "su-vat")
  const dacDiem   = WORD_DATA.filter(w => placements[w.word] === "dac-diem")
  const allPlaced = unplaced.length === 0
  const score     = WORD_DATA.filter(w => placements[w.word] === w.category).length

  const handleWordClick = (word: string) => {
    setSelected(prev => prev === word ? null : word)
  }

  const handleBasketClick = (cat: string) => {
    if (!selected) return
    setPlacements(prev => ({ ...prev, [selected]: cat }))
    setSelected(null)
  }

  const handlePlacedClick = (word: string) => {
    if (selected) return // while holding a mango, basket items are locked
    setPlacements(prev => { const n = { ...prev }; delete n[word]; return n })
  }

  const restart = () => { setPlacements({}); setSelected(null); setSubmitted(false) }


  /* ── RESULT ─────────────────────────────────────────────────── */
  if (submitted) {
    const pct = Math.round((score / WORD_DATA.length) * 100)
    return (
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">{pct === 100 ? "🏆" : pct >= 70 ? "⭐" : "💪"}</div>
          <h2 className="text-2xl font-extrabold">{pct === 100 ? "Hoàn hảo!" : pct >= 70 ? "Rất tốt!" : "Cố lên nhé!"}</h2>
          <p className="text-muted-foreground mt-1">Đúng <span className="font-black text-primary text-2xl">{score}</span>/{WORD_DATA.length} từ</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {(["su-vat", "dac-diem"] as const).map(cat => (
            <div key={cat} className={cn("rounded-2xl border-2 p-4", cat === "su-vat" ? "bg-blue-50 border-blue-100" : "bg-orange-50 border-orange-100")}>
              <div className={cn("font-bold text-base mb-3", cat === "su-vat" ? "text-blue-700" : "text-orange-700")}>
                {cat === "su-vat" ? "🧺 Sự vật" : "✨ Đặc điểm"}
              </div>
              <div className="flex flex-wrap gap-2">
                {WORD_DATA.filter(w => w.category === cat).map(w => {
                  const ok = placements[w.word] === cat
                  return (
                    <span key={w.word} className={cn("text-sm px-2.5 py-1 rounded-full font-semibold flex items-center gap-1", ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-700")}>
                      {ok ? <CheckCircle2 size={13} /> : <XCircle size={13} />} {w.word}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <Button className="rounded-full h-12 text-base" onClick={restart}><RefreshCw size={16} className="mr-2" /> Chơi lại</Button>
          <Link href="/games/tieng-viet" className={cn(buttonVariants({ variant: "outline" }), "rounded-full h-12 text-base text-center")}>Quay lại</Link>
        </div>
      </div>
    )
  }

  /* ── GAME ───────────────────────────────────────────────────── */
  return (
    <div className="container mx-auto px-4 py-4 max-w-4xl">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4 h-9">
        <Link href="/games/tieng-viet" className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "text-muted-foreground gap-1 px-2")}>
          <ArrowLeft size={15} /> Thoát
        </Link>
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full"
            >
              🥭 <b>{selected}</b> — nhấn giỏ để xếp
            </motion.div>
          )}
        </AnimatePresence>
        <p className="text-sm text-muted-foreground">Còn <span className="font-bold text-foreground">{unplaced.length}</span></p>
      </div>

      {/* Unplaced words */}
      <div className="rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-sky-50/60 p-4 mb-5 min-h-[140px] flex flex-wrap gap-3 items-center justify-center">
        {unplaced.length === 0
          ? <p className="text-muted-foreground text-sm italic">✅ Tất cả đã được xếp!</p>
          : unplaced.map(w => (
            <MangoChip key={w.word} word={w.word} selected={selected === w.word} size="md"
              onClick={() => handleWordClick(w.word)} />
          ))
        }
      </div>

      {/* Baskets */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        {(["su-vat", "dac-diem"] as const).map(cat => {
          const items = cat === "su-vat" ? suVat : dacDiem
          const active = !!selected
          return (
            <motion.div
              key={cat}
              onClick={() => handleBasketClick(cat)}
              whileHover={active ? { scale: 1.02, y: -2 } : {}}
              whileTap={active ? { scale: 0.98 } : {}}
              className={cn(
                "rounded-2xl border-2 min-h-[190px] p-3 transition-all duration-200",
                cat === "su-vat" ? "bg-blue-50" : "bg-orange-50",
                active
                  ? cat === "su-vat"
                    ? "border-blue-400 cursor-pointer shadow-lg shadow-blue-100 ring-2 ring-blue-200"
                    : "border-orange-400 cursor-pointer shadow-lg shadow-orange-100 ring-2 ring-orange-200"
                  : cat === "su-vat" ? "border-blue-200" : "border-orange-200"
              )}
            >
              <div className="text-center mb-3 pb-2 border-b border-current/10">
                <div className="text-2xl">{cat === "su-vat" ? "🧺" : "✨"}</div>
                <div className={cn("font-extrabold text-lg", cat === "su-vat" ? "text-blue-700" : "text-orange-700")}>
                  {catLabel(cat)}
                </div>
                <div className={cn("text-xs", cat === "su-vat" ? "text-blue-400" : "text-orange-400")}>
                  {cat === "su-vat" ? "Cái gì? Ai?" : "Như thế nào?"}
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {items.map(w => (
                  <MangoChip key={w.word} word={w.word} selected={selected === w.word} size="sm"
                    onClick={() => handlePlacedClick(w.word)} />
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      <Button className="w-full h-14 rounded-xl text-lg font-bold" disabled={!allPlaced}
        onClick={() => setSubmitted(true)}>
        {allPlaced ? "Kiểm tra kết quả 🏆" : `Còn ${unplaced.length} từ chưa xếp`}
      </Button>
    </div>
  )
}
