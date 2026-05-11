"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, BookOpen, Gamepad2, Download } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Trò chơi học tập",
    description: "Các trò chơi tương tác giúp học sinh vừa học vừa chơi một cách thú vị.",
    icon: Gamepad2,
    color: "bg-secondary/20 text-secondary-foreground",
    href: "/games"
  },
  {
    title: "Kinh nghiệm dạy học",
    description: "Những chia sẻ tâm huyết từ thực tế giảng dạy tại bậc tiểu học.",
    icon: BookOpen,
    color: "bg-primary/20 text-primary-foreground",
    href: "/blog"
  }
]

const recentPosts = [
  {
    title: "Nhật ký thực tập: Những ngày đầu đứng lớp",
    excerpt: "Những bỡ ngỡ, lo lắng và cả những niềm hạnh phúc khó tả khi lần đầu được gọi là 'cô giáo'.",
    date: "11/05/2026",
    category: "Nhật ký",
    image: "/images/intern-diary.jpg"
  },
  {
    title: "Ứng dụng trò chơi trong tiết Tiếng Việt",
    excerpt: "Những trò chơi đơn giản mình đã áp dụng thành công để tiết học trở nên sôi động hơn.",
    date: "08/05/2026",
    category: "Sáng tạo",
    image: "/images/game-learning.jpg"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/20 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <Badge variant="outline" className="w-fit py-1.5 px-4 text-sm font-medium border-primary/20 text-primary bg-primary/5">
                <Sparkles size={14} className="mr-2 inline" /> Gen Z gieo mầm tri thức
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                Chào mừng bạn đến với góc nhỏ của <span className="text-primary italic">Lan Hương</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-[600px]">
                Nơi một cô giáo trẻ vừa hoàn thành kỳ thực tập chia sẻ những trải nghiệm đầu đời, những giáo án sáng tạo và niềm yêu nghề cháy bỏng.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 shadow-md hover:shadow-lg transition-all")}
                >
                  Xem Blog <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/about"
                  className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full px-8 hover:bg-muted")}
                >
                  Tìm hiểu về mình
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src="/images/hero-image.png"
                alt="Lan Hương Blog"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12 flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight">Dành cho bạn</h2>
          <p className="text-muted-foreground">Những khu vực thú vị nhất trên trang web của mình</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-primary/20 transition-all cursor-pointer overflow-hidden group">
                <Link href={cat.href}>
                  <CardHeader>
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", cat.color)}>
                      <cat.icon size={24} />
                    </div>
                    <CardTitle>{cat.title}</CardTitle>
                    <CardDescription className="text-base">{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent />
                  <CardFooter className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Xem chi tiết <ArrowRight size={16} />
                  </CardFooter>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Bài viết mới nhất</h2>
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }), "text-primary hover:text-primary/80")}
          >
            Xem tất cả bài viết
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {recentPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <Card className="flex flex-col sm:flex-row overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group h-full bg-white">
                <div className="relative w-full sm:w-2/5 aspect-[16/10] sm:aspect-auto p-3 sm:p-4">
                  <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-inner bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="flex flex-col p-6 sm:pl-0 sm:w-3/5">
                  <Badge variant="secondary" className="w-fit mb-3 bg-primary/10 text-primary border-none">{post.category}</Badge>
                  <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                    <Link href="#">{post.title}</Link>
                  </CardTitle>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-xs text-muted-foreground font-medium">
                      {post.date}
                    </div>
                    <div className="text-primary text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Đọc thêm <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
