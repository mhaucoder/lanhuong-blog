import Link from "next/link"
import { GraduationCap, Link as LinkIcon, Globe, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <GraduationCap size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Lan Hương <span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-6">
              Góc nhỏ của một cô giáo trẻ yêu nghề, nơi chia sẻ những trải nghiệm thực tập và những học liệu sáng tạo đầu tay.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:text-primary transition-colors">
                <LinkIcon size={20} />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:text-primary transition-colors">
                <Globe size={20} />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên kết</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Giới thiệu</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/games" className="hover:text-primary transition-colors">Trò chơi</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+84 xxx xxx xxx</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>lanhuong.edu@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1">
                  <GraduationCap size={16} className="text-primary" />
                </div>
                <span>Trường Đại học Quy Nhơn</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Lan Huong Blog. Thiết kế và chịu trách nhiệm nội dung bởi Hajua Developer.</p>
        </div>
      </div>
    </footer>
  )
}
