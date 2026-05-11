"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, User, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Nhật ký thực tập: Những ngày đầu đứng lớp",
    excerpt: "Những bỡ ngỡ, lo lắng và cả những niềm hạnh phúc khó tả khi lần đầu được học sinh gọi là 'cô giáo'.",
    date: "11/05/2026",
    category: "Nhật ký",
    image: "/images/intern-diary.jpg",
    author: "Lan Hương"
  },
  {
    id: 2,
    title: "Ứng dụng trò chơi trong tiết Tiếng Việt",
    excerpt: "Tiết Tiếng Việt sẽ không còn khô khan nếu chúng ta biết cách lồng ghép những trò chơi nhỏ sinh động.",
    date: "08/05/2026",
    category: "Sáng tạo",
    image: "/images/game-learning.jpg",
    author: "Lan Hương"
  },
  {
    id: 3,
    title: "Hành trang cho giáo viên trẻ: Chuẩn bị gì khi mới ra trường?",
    excerpt: "Những điều mình rút ra được sau kỳ thực tập để chuẩn bị tốt nhất cho con đường giảng dạy sắp tới.",
    date: "05/05/2026",
    category: "Kinh nghiệm",
    image: "/images/young-teacher.jpg",
    author: "Lan Hương"
  }
]

const categories = ["Tất cả"]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Góc chia sẻ kiến thức</h1>
          <p className="text-muted-foreground text-lg">
            Nơi mình ghi lại những kinh nghiệm giảng dạy và những điều thú vị trong hành trình làm giáo viên.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button key={cat} variant={cat === "Tất cả" ? "default" : "outline"} className="rounded-full">
                {cat}
              </Button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input className="pl-10 rounded-full bg-muted/50 border-none" placeholder="Tìm kiếm bài viết..." />
          </div>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full overflow-hidden flex flex-col border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-white">
              <div className="relative aspect-video p-3 sm:p-4">
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-inner bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-3 left-3 bg-white/90 text-primary hover:bg-white transition-colors border-none">{post.category}</Badge>
                </div>
              </div>
              <CardHeader className="flex-grow px-6 pb-2">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-3 mt-3">
                  {post.excerpt}
                </p>
              </CardHeader>
              <CardFooter className="pt-3 pb-3 px-6 flex items-center h-16">
                <Link
                  href={`/blog/${post.id}`}
                  className={cn(buttonVariants({ variant: "link" }), "p-0 h-auto text-primary group-hover:gap-2 transition-all font-bold flex items-center gap-1")}
                >
                  Đọc tiếp <ArrowRight size={16} />
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
