import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">影像資訊學實驗室</h3>
            <p className="text-sm">Image Informatics Laboratory</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
              <Github size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-primary-foreground">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>國立臺北護理健康大學 資訊管理系暨研究所</p>
          <p>&copy; {new Date().getFullYear()} Image Informatics Laboratory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

