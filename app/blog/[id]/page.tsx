"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowLeft, Share2, MessageCircle } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const blogPosts = [
  {
    id: 1,
    title: "Nhật ký thực tập: Những ngày đầu đứng lớp",
    content: `
      <p>Kỳ thực tập sư phạm tại trường tiểu học vừa qua là một trong những trải nghiệm đẹp nhất và đáng nhớ nhất trong cuộc đời mình. Lần đầu tiên bước chân vào cổng trường với tư cách là một giáo viên, cảm xúc trong mình thật khó tả - vừa lo lắng, hồi hộp, lại vừa tự hào.</p>
      <h2>Những bỡ ngỡ ban đầu</h2>
      <p>Nhớ ngày đầu tiên đứng trước lớp, nhìn những ánh mắt ngây thơ, trong sáng của các con hướng về mình, mình đã run đến mức quên cả lời chào đã chuẩn bị sẵn. Nhưng chính sự hồn nhiên của các con đã giúp mình lấy lại tự tin.</p>
      <h2>Tiếng gọi 'Cô giáo' đầu tiên</h2>
      <p>Có lẽ giây phút xúc động nhất là khi một cậu học trò nhỏ chạy lại nắm tay mình và hỏi: "Cô ơi, ngày mai cô lại đến dạy lớp con nữa nhé?". Tiếng gọi 'Cô' thân thương ấy đã thắp sáng ngọn lửa yêu nghề trong mình.</p>
      <h2>Bài học về sự kiên nhẫn</h2>
      <p>Dạy trẻ nhỏ không chỉ cần kiến thức mà quan trọng hơn hết là sự kiên nhẫn và thấu hiểu. Mỗi ngày trôi qua, mình lại học được cách lắng nghe các con nhiều hơn, biết cách biến những kiến thức khô khan thành những câu chuyện kể sinh động.</p>
    `,
    date: "11/05/2026",
    category: "Nhật ký",
    image: "/images/intern-diary.jpg",
    author: "Lan Hương"
  },
  {
    id: 2,
    title: "Ứng dụng trò chơi trong tiết Tiếng Việt",
    content: `
      <p>Tiếng Việt thường được coi là một môn học có nhiều lý thuyết và dễ gây nhàm chán nếu chỉ dạy theo cách truyền thống. Trong kỳ thực tập vừa qua, mình đã thử nghiệm việc lồng ghép các trò chơi nhỏ và kết quả thật bất ngờ!</p>
      <h2>Trò chơi "Cùng nhau ghép chữ"</h2>
      <p>Thay vì viết bảng, mình chuẩn bị các thẻ chữ cái nhiều màu sắc. Các con sẽ được chia thành các đội để thi đua ghép thành các từ có nghĩa. Không khí lớp học trở nên cực kỳ sôi động và các con nhớ từ rất nhanh.</p>
      <h2>"Ai là trạng nguyên nhí?"</h2>
      <p>Đây là một hình thức ôn tập kiến thức dưới dạng các câu hỏi trắc nghiệm vui nhộn. Mỗi khi một con trả lời đúng, cả lớp sẽ cùng dành một tràng pháo tay cổ vũ. Điều này giúp các con tự tin hơn rất nhiều.</p>
      <h2>Hiệu quả từ tiếng cười</h2>
      <p>Khi được học thông qua trò chơi, các con không còn cảm thấy áp lực. Tiếng cười trong lớp học chính là động lực lớn nhất để mình tiếp tục sáng tạo thêm nhiều hoạt động thú vị hơn nữa.</p>
    `,
    date: "08/05/2026",
    category: "Sáng tạo",
    image: "/images/game-learning.jpg",
    author: "Lan Hương"
  },
  {
    id: 3,
    title: "Hành trang cho giáo viên trẻ: Chuẩn bị gì khi mới ra trường?",
    content: `
      <p>Chuẩn bị tốt nghiệp và chính thức bước chân vào nghề giáo là một bước ngoặt lớn. Từ những gì rút ra được sau kỳ thực tập, mình muốn chia sẻ một vài điều mà các giáo viên trẻ như mình nên chuẩn bị.</p>
      <h2>Chuẩn bị về tâm lý</h2>
      <p>Đừng quá áp lực việc phải trở thành một giáo viên hoàn hảo ngay lập tức. Hãy cho phép bản thân được học hỏi từ những sai lầm. Sự chân thành và yêu thương học trò sẽ là chìa khóa giúp bạn vượt qua mọi khó khăn.</p>
      <h2>Kỹ năng công nghệ thông tin</h2>
      <p>Trong thời đại số, việc biết thiết kế bài giảng điện tử sinh động, biết tìm kiếm tư liệu trên mạng là một lợi thế cực lớn. Hãy dành thời gian làm quen với các công cụ như Canva, Quizizz hay các trang web hỗ trợ dạy học.</p>
      <h2>Xây dựng kho tài liệu cá nhân</h2>
      <p>Hãy bắt đầu thu thập và phân loại giáo án, hình ảnh, video clip minh họa ngay từ bây giờ. Một kho tài liệu ngăn nắp sẽ giúp bạn tiết kiệm rất nhiều thời gian khi bắt đầu công việc chính thức.</p>
      <p>Hành trình phía trước còn dài, nhưng với đam mê và sự chuẩn bị kỹ lưỡng, chúng ta nhất định sẽ làm tốt!</p>
    `,
    date: "05/05/2026",
    category: "Kinh nghiệm",
    image: "/images/young-teacher.jpg",
    author: "Lan Hương"
  }
]

export default function BlogPost() {
  const params = useParams()
  const post = blogPosts.find(p => p.id === Number(params.id)) || blogPosts[0]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: "ghost" }), "mb-8 group")}
        >
          <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" /> Quay lại Blog
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-muted overflow-hidden relative border-2 border-primary/20">
                <Image src="/images/lanhuong-2.jpg" fill alt="Author" className="object-cover" />
              </div>
              <span className="font-medium text-foreground">{post.author}</span>
            </div>
            <span className="flex items-center gap-1 text-sm"><Calendar size={14} /> {post.date}</span>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
            <Image src={post.image} fill alt={post.title} className="object-cover" />
          </div>

          <div
            className="prose prose-lg prose-slate max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t flex items-center justify-between">
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <MessageCircle size={18} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
