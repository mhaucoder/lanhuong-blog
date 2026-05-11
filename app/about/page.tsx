"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Book, Users, Star } from "lucide-react"

export default function AboutPage() {
  const highlights = [
    {
      icon: Heart,
      title: "Tâm huyết",
      description: "Luôn đặt tình yêu thương và sự thấu hiểu học sinh lên hàng đầu."
    },
    {
      icon: Book,
      title: "Sáng tạo",
      description: "Không ngừng đổi mới phương pháp để mỗi tiết học là một niềm vui."
    },
    {
      icon: Users,
      title: "Kết nối",
      description: "Xây dựng mối quan hệ chặt chẽ giữa nhà trường, giáo viên và phụ huynh."
    },
    {
      icon: Star,
      title: "Chuyên môn",
      description: "Luôn cập nhật các kiến thức giáo dục hiện đại và ứng dụng công nghệ."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid gap-12 lg:grid-cols-2 items-start">
        {/* Profile Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] shadow-2xl p-4 bg-white border-8 border-muted/20">
            <div className="relative h-full w-full overflow-hidden rounded-[1.8rem]">
              <Image
                src="/images/lanhuong-2.jpg"
                alt="Cô Lan Hương"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-secondary rounded-full -z-10 animate-pulse opacity-50 blur-xl" />
          <div className="absolute -top-6 -left-6 h-24 w-24 bg-primary/20 rounded-full -z-10 blur-xl" />
          <div className="absolute top-1/2 -right-4 h-12 w-12 bg-accent/30 rounded-full -z-10 blur-md" />
        </motion.div>

        {/* Content Column */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">Về mình</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Nguyễn Thị Lan Hương (2004)</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Chào các bạn! Mình là Lan Hương, một giáo viên tiểu học Gen Z vừa hoàn thành kỳ thực tập sư phạm đầy ý nghĩa. Đối với mình, giáo dục không chỉ là truyền đạt kiến thức mà còn là cùng các con khơi mở những niềm vui mỗi ngày đến trường.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-slate max-w-none text-muted-foreground"
          >
            <p>
              Là một giáo viên trẻ, mình luôn mong muốn mang luồng gió mới, sự năng động và sáng tạo vào từng tiết học. Kỳ thực tập vừa qua đã cho mình những bài học vô giá về tình yêu nghề và sự thấu hiểu tâm lý trẻ thơ.
            </p>
            <p className="mt-4">
              Blog này là nơi mình lưu giữ những kỷ niệm đầu đời của nghề giáo, chia sẻ những tài liệu mình đã dày công chuẩn bị và những ý tưởng trò chơi thú vị mà mình đã áp dụng thành công trong lớp học.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
              >
                <Card className="border-none bg-muted/50 shadow-sm hover:bg-white hover:shadow-md transition-all">
                  <CardContent className="p-4 flex gap-4 items-start">
                    <div className="mt-1 h-8 w-8 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Teaching Philosophy Section */}
      <section className="mt-24 py-16 bg-primary/5 rounded-[3rem] px-8 md:px-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-3xl font-bold tracking-tight italic">&quot;Giáo dục không phải là việc đổ đầy một cái bình, mà là thắp sáng một ngọn lửa.&quot;</h2>
          <p className="text-lg text-muted-foreground">
            Mình luôn tin rằng mỗi học sinh đều có những thế mạnh riêng. Nhiệm vụ của người thầy không chỉ là truyền đạt kiến thức, mà còn là khơi gợi niềm tin, sự tự tin và lòng ham học hỏi trong mỗi học trò.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-2 w-12 rounded-full bg-primary/30" />
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
        </div>
      </section>
    </div>
  )
}
