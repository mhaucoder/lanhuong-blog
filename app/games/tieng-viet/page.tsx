"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Languages, Star, Play } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const games = [
  {
    id: "word-sorting",
    title: "Phân loại từ ngữ",
    description: "Giúp cậu bé hái xoài và phân loại từ ngữ vào đúng giỏ Sự vật hoặc Đặc điểm nhé!",
    image: "/images/games/tieng-viet-1.png",
    level: "Dễ",
    time: "Không giới hạn"
  }
]

export default function TiengVietGames() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/games"
          className={cn(buttonVariants({ variant: "ghost" }), "mb-8 group")}
        >
          <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" /> Quay lại Góc trò chơi
        </Link>

        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
            <Languages size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Tiếng Việt diệu kỳ</h1>
            <p className="text-muted-foreground">Khám phá vẻ đẹp của tiếng Việt qua các trò chơi tương tác thú vị.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, idx) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white flex flex-col h-full">
                <div className="relative aspect-[4/3] p-3">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-pink-50">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <Badge variant="secondary" className="absolute top-2 left-2 bg-white/90 text-pink-600 border-none text-[15px] h-5">{game.level}</Badge>
                  </div>
                </div>
                <CardHeader className="p-4 pt-0 space-y-1 flex-grow">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">{game.title}</CardTitle>
                  <CardDescription className="text-xs line-clamp-2">{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Link
                    href={`/games/tieng-viet/${game.id}`}
                    className={cn(buttonVariants({ size: "sm", className: "w-full rounded-xl" }))}
                  >
                    <Play size={14} className="mr-1.5 fill-current" /> Chơi ngay
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
