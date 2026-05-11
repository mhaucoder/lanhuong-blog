"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Gamepad2, Calculator, Languages, Palette, Microscope, Trophy } from "lucide-react"

const gameCategories = [
  {
    title: "Tiếng Việt diệu kỳ",
    description: "Ghép chữ, tìm từ đồng nghĩa và các trò chơi về tiếng Việt sáng tạo.",
    icon: Languages,
    color: "bg-pink-100 text-pink-600",
    count: 1,
    tag: "Mới"
  },
  {
    title: "Vui cùng Toán học",
    description: "Các trò chơi tính toán nhanh, giải đố logic và hình học vui nhộn.",
    icon: Calculator,
    color: "bg-blue-100 text-blue-600",
    count: 0,
    tag: "Chờ cập nhật"
  },
  {
    title: "Khám phá Khoa học",
    description: "Tìm hiểu về thế giới tự nhiên, động thực vật và các hiện tượng vật lý.",
    icon: Microscope,
    color: "bg-green-100 text-green-600",
    count: 0,
    tag: "Chờ cập nhật"
  },
  {
    title: "Nghệ thuật & Sắc màu",
    description: "Tô màu, vẽ tranh và các trò chơi phát triển tư duy thẩm mỹ.",
    icon: Palette,
    color: "bg-yellow-100 text-yellow-600",
    count: 0,
    tag: "Chờ cập nhật"
  },
  {
    title: "Thử thách IQ",
    description: "Các bài kiểm tra trí thông minh nhẹ nhàng và câu đố hóc búa.",
    icon: Trophy,
    color: "bg-purple-100 text-purple-600",
    count: 0,
    tag: "Chờ cập nhật"
  }
]

import { useState } from "react"

function MathQuiz() {
  const [score, setScore] = useState(0)
  const [question, setQuestion] = useState({ a: 5, b: 3, result: 8 })
  const [userAnswer, setUserAnswer] = useState("")
  const [message, setMessage] = useState("")

  const generateQuestion = () => {
    const a = Math.floor(Math.random() * 10) + 1
    const b = Math.floor(Math.random() * 10) + 1
    setQuestion({ a, b, result: a + b })
    setUserAnswer("")
    setMessage("")
  }

  const checkAnswer = () => {
    if (parseInt(userAnswer) === question.result) {
      setScore(score + 1)
      setMessage("Chính xác! Giỏi quá!")
      setTimeout(generateQuestion, 1500)
    } else {
      setMessage("Chưa đúng rồi, thử lại nhé!")
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-inner border-4 border-dashed border-primary/20">
      <div className="text-3xl font-bold text-primary">Điểm: {score}</div>
      <div className="text-5xl font-extrabold flex gap-4 items-center">
        <span>{question.a}</span>
        <span className="text-secondary">+</span>
        <span>{question.b}</span>
        <span className="text-accent">=</span>
        <div className="relative group">
          <Input
            inputMode="numeric"
            pattern="[0-9]*"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-32 h-20 text-center !text-5xl font-extrabold border-4 border-primary/20 rounded-2xl bg-primary/5 focus:bg-white focus:border-primary transition-all duration-300 shadow-sm focus:shadow-xl focus-visible:ring-0 outline-none p-0"
            onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
            autoFocus
          />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4/5 h-1.5 bg-primary/20 rounded-full blur-[1px] group-focus-within:bg-primary/40 transition-colors" />
        </div>
      </div>
      <Button size="lg" className="rounded-full px-12 text-xl h-14" onClick={checkAnswer}>Kiểm tra</Button>
      {message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-xl font-bold ${message.includes("Chính xác") ? "text-green-500" : "text-orange-500"}`}
        >
          {message}
        </motion.div>
      )}
    </div>
  )
}

export default function GamesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-6 text-center max-w-2xl mx-auto mb-16">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-4 animate-bounce">
          <Gamepad2 size={32} />
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Góc trò chơi học tập</h1>
        <p className="text-muted-foreground text-lg">
          Vừa học vừa chơi, khơi nguồn sáng tạo! Những trò chơi tương tác được thiết kế riêng cho học sinh tiểu học.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gameCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all cursor-pointer group overflow-hidden bg-white/50 backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-4">
                <Badge variant="secondary" className="bg-white/80">{cat.tag}</Badge>
              </div>
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-12 ${cat.color}`}>
                  <cat.icon size={28} />
                </div>
                <CardTitle className="text-2xl">{cat.title}</CardTitle>
                <CardDescription className="text-base mt-2">{cat.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    {cat.count > 0 ? `${cat.count} trò chơi có sẵn` : "Chưa có trò chơi"}
                  </span>
                  {cat.count > 0 ? (
                    <Link 
                      href={cat.title === "Tiếng Việt diệu kỳ" ? "/games/tieng-viet" : "#featured-game"} 
                      className={cn(buttonVariants({ variant: "ghost" }), "text-primary group-hover:bg-primary group-hover:text-white transition-all rounded-xl")}
                    >
                      Chơi ngay
                    </Link>
                  ) : (
                    <Button variant="ghost" disabled className="text-muted-foreground rounded-xl">
                      Sắp ra mắt
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Featured Game Section */}
      <section id="featured-game" className="mt-24 rounded-[3rem] bg-gradient-to-r from-primary/10 to-secondary/10 p-8 md:p-16 relative overflow-hidden">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <Badge className="mb-4 bg-primary text-white">Chơi thử ngay</Badge>
            <h2 className="text-3xl font-bold mb-6">Thử thách tính nhẩm nhanh</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Bạn có thể giải được bao nhiêu phép tính trong 1 phút? Hãy thử sức mình với trò chơi tính nhẩm vui nhộn này nhé!
            </p>
          </div>
          <div className="w-full">
            <MathQuiz />
          </div>
        </div>
      </section>
    </div>
  )
}
