import {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  MonitorSmartphone,
  Shield,
} from "lucide-react";

const enData = {
  personal: {
    name: "Tran Viet Duc",
    title: "Junior Software Engineer",
    description: "Building high-performance web applications and flexible backend systems.",
    about: "Experienced in building high-performance web applications with Next.js and developing flexible backend systems using Python and Laravel. Currently expanding my expertise in AWS cloud services with a focus on infrastructure optimization and deployment automation. Additionally, I have a solid foundation in React Native and Flutter, enabling me to contribute to cross-platform application development when needed.",
    resumeUrl: "#",
    email: "tranvietduc2411@gmail.com",
    phone: "0886542959",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/vietduc24-dev", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Email", url: "mailto:tranvietduc2411@gmail.com", icon: "mail" },
  ],
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "AWS", href: "#aws" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  careerTimeline: [
    { id: 1, title: "Getting Started", description: "Bắt đầu sự nghiệp với C# và hệ sinh thái .NET." },
    { id: 2, title: "Enterprise Systems", description: "Xây dựng các hệ thống nghiệp vụ và ứng dụng doanh nghiệp phức tạp." },
    { id: 3, title: "Frontend Expansion", description: "Mở rộng năng lực sang mảng frontend với React, Next.js và TypeScript." },
    { id: 4, title: "Mobile Development", description: "Phát triển các ứng dụng di động đa nền tảng." },
    { id: 5, title: "Cloud Computing", description: "Làm việc với AWS và thiết kế cloud architecture." },
    { id: 6, title: "DevOps & Production", description: "Xây dựng hệ thống CI/CD, container hóa và quản lý production." },
    { id: 7, title: "AI & Automation", description: "Nghiên cứu ứng dụng AI agents và automation vào quy trình phát triển." },
  ],
  skills: [
    {
      category: "Backend",
      icon: Server,
      items: ["PHP", "Laravel", "Python", "Django", "Node.js"]
    },
    {
      category: "Frontend",
      icon: Layout,
      items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Three.js", "Vue 3"]
    },
    {
      category: "Mobile",
      icon: MonitorSmartphone,
      items: ["React Native", "Flutter", "Swift"]
    },
    {
      category: "Cloud",
      icon: Cloud,
      items: ["AWS", "Docker", "EC2", "S3", "CloudFront"]
    },
    {
      category: "Database",
      icon: Database,
      items: ["MySQL", "MariaDB", "Firestore"]
    },
    {
      category: "Tools & DevOps",
      icon: Shield,
      items: ["Git", "AWS CLI", "Postman"]
    },
    {
      category: "AI & Innovation",
      icon: Cpu,
      items: ["Cursor", "Antigravity", "Codex", "AI Detection"]
    }
  ],
  projects: [
    {
      id: "housescan-saas",
      title: "Housescan (Construction SaaS)",
      description: "A SaaS platform for digitalizing home renovation workflows, supporting 2D/3D visualization, BIM, and RoomPlan data.",
      problem: "Contractors lacked efficient tools for site surveys, data synchronization, and 3D visualization of renovations.",
      solution: "Developed web applications for project management, 3D Mesh generation from 2D drawings, and integrated real-time APIs.",
      role: "Frontend Developer",
      techStack: ["Next.js", "React", "Three.js", "Django", "AWS", "Docker"],
      impact: "Enabled digitalized home renovation workflows with seamless 2D/3D visualization and quotation management.",
      github: "https://github.com/vietduc24-dev",
      demo: "#",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2871&auto=format&fit=crop"
    },
    {
      id: "video-app",
      title: "Short-Video Social Platform",
      description: "A mobile short-video platform featuring social interaction capabilities, virtual gifting, and event-driven user activities.",
      problem: "High demands for smooth video playback, real-time social interactions, and caching.",
      solution: "Built mobile applications with optimized video caching mechanisms to reduce requests to Amazon CloudFront.",
      role: "Frontend Developer & Maintainer",
      techStack: ["React Native", "Firebase", "Firestore", "REST API"],
      impact: "Ensured application stability in production and successfully released on Google Play and Apple App Store.",
      github: "https://github.com/vietduc24-dev",
      demo: "#",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2874&auto=format&fit=crop"
    },
    {
      id: "hagiwara-b2b",
      title: "Hagiwara B2B Ecommerce",
      description: "A multi-role B2B e-commerce platform supporting Admin, Manufacturer/Supplier, and Buyer portals.",
      problem: "Complex end-to-end procurement workflows between suppliers and buyers needed automation.",
      solution: "Developed core business modules for product management, scheduled price updates via Cron Jobs, and buyer address import.",
      role: "Fullstack Developer",
      techStack: ["Next.js", "Vue 3", "Laravel 10", "TypeScript"],
      impact: "Streamlined the B2B ordering process and procurement workflow from product search to transaction tracking.",
      github: "https://github.com/vietduc24-dev",
      demo: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2870&auto=format&fit=crop"
    }
  ],
  awsJourney: [
    { service: "Application Development", description: "Building core business logic and APIs" },
    { service: "Containerization", description: "Dockerizing applications for consistency" },
    { service: "Deployment & CI/CD", description: "GitHub Actions to AWS ECR and ECS" },
    { service: "Cloud Infrastructure", description: "VPC, EC2, RDS, and S3 configuration" },
    { service: "Security & Edge", description: "IAM policies, WAF, and CloudFront CDN" },
    { service: "Monitoring & Optimization", description: "CloudWatch metrics and cost management" },
  ],
  experience: [
    {
      id: 1,
      role: "Frontend Developer",
      company: "Housescan(Construction)",
      period: "07/2025 - Present",
      summary: "Contributed to a SaaS platform for digitalizing home renovation workflows.",
      achievements: [
        "Developed web applications for project management and spatial data visualization.",
        "Developed Price Master management features for tenant-specific project configuration.",
        "Developed a feature to generate 3D Mesh models from 2D drawings for construction visualization.",
      ],
      techStack: ["Next.js", "React", "Three.js", "Django", "AWS"]
    },
    {
      id: 2,
      role: "Frontend Developer & Maintainer",
      company: "VideoApp(Entertainment)",
      period: "07/2025 - Present",
      summary: "Mobile short-video platform featuring social interaction capabilities.",
      achievements: [
        "Investigated and resolved production issues to ensure application stability.",
        "Optimized video caching mechanisms to reduce requests to Amazon CloudFront.",
        "Built, released, and maintained mobile applications on Google Play and the Apple App Store.",
      ],
      techStack: ["React Native", "Firebase", "Firestore"]
    },
    {
      id: 3,
      role: "Fullstack Developer",
      company: "Hagiwara(Ecommerce B2B)",
      period: "05/2025 - 11/2025",
      summary: "Developed a multi-role B2B e-commerce platform supporting Admin, Manufacturer, and Buyer portals.",
      achievements: [
        "Built core business modules including product management and order management.",
        "Supported the end-to-end procurement workflow between suppliers and buyers.",
        "Implemented an automated price update mechanism utilizing Cron Jobs.",
      ],
      techStack: ["Next.js", "Vue 3", "Laravel 10"]
    }
  ]
};

const viData: typeof enData = {
  ...enData,
  personal: {
    ...enData.personal,
    title: "Kỹ sư Phần mềm",
    description: "Xây dựng các ứng dụng web hiệu năng cao và hệ thống backend linh hoạt.",
    about: "Có kinh nghiệm xây dựng các ứng dụng web hiệu năng cao với Next.js và phát triển các hệ thống backend linh hoạt bằng Python và Laravel. Hiện tại, tôi đang mở rộng chuyên môn về các dịch vụ AWS với trọng tâm là tối ưu hóa cơ sở hạ tầng và tự động hóa triển khai. Ngoài ra, tôi có nền tảng vững chắc về React Native và Flutter, giúp tôi có thể đóng góp vào phát triển ứng dụng đa nền tảng khi cần thiết.",
  },
  navigation: [
    { name: "Trang chủ", href: "#home" },
    { name: "Giới thiệu", href: "#about" },
    { name: "Hành trình", href: "#journey" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "AWS", href: "#aws" },
    { name: "Kinh nghiệm", href: "#experience" },
    { name: "Liên hệ", href: "#contact" },
  ],
  careerTimeline: [
    { id: 1, title: "Khởi đầu", description: "Bắt đầu sự nghiệp với C# và hệ sinh thái .NET." },
    { id: 2, title: "Hệ thống Doanh nghiệp", description: "Xây dựng các hệ thống nghiệp vụ và ứng dụng doanh nghiệp phức tạp." },
    { id: 3, title: "Mở rộng Frontend", description: "Mở rộng năng lực sang mảng frontend với React, Next.js và TypeScript." },
    { id: 4, title: "Phát triển Mobile", description: "Phát triển các ứng dụng di động đa nền tảng." },
    { id: 5, title: "Điện toán Đám mây", description: "Làm việc với AWS và thiết kế kiến trúc đám mây." },
    { id: 6, title: "DevOps & Vận hành", description: "Xây dựng hệ thống CI/CD, container hóa và quản lý production." },
    { id: 7, title: "AI & Tự động hóa", description: "Nghiên cứu ứng dụng AI agents và tự động hóa vào quy trình phát triển." },
  ],
  projects: [
    {
      ...enData.projects[0],
      title: "Housescan (SaaS Xây dựng)",
      description: "Nền tảng SaaS số hóa quy trình cải tạo nhà ở, hỗ trợ trực quan hóa 2D/3D, dữ liệu BIM và RoomPlan.",
      problem: "Các nhà thầu thiếu công cụ hiệu quả để khảo sát hiện trường, đồng bộ hóa dữ liệu và trực quan hóa 3D.",
      solution: "Phát triển ứng dụng web để quản lý dự án, tạo mô hình 3D Mesh từ bản vẽ 2D và tích hợp API trò chuyện thời gian thực.",
      role: "Lập trình viên Frontend",
      impact: "Số hóa quy trình cải tạo nhà ở với khả năng trực quan hóa 2D/3D và quản lý báo giá liền mạch.",
    },
    {
      ...enData.projects[1],
      title: "Nền tảng Video ngắn",
      description: "Nền tảng video ngắn trên thiết bị di động tích hợp các tính năng tương tác mạng xã hội, tặng quà ảo và các hoạt động sự kiện.",
      problem: "Yêu cầu khắt khe về phát video mượt mà, tương tác xã hội thời gian thực và lưu trữ bộ nhớ đệm (caching).",
      solution: "Xây dựng ứng dụng di động với cơ chế lưu cache video tối ưu giúp giảm số lượng yêu cầu đến Amazon CloudFront.",
      role: "Lập trình viên Frontend & Bảo trì",
      impact: "Đảm bảo tính ổn định của ứng dụng trên môi trường production và phát hành thành công trên Google Play & Apple App Store.",
    },
    {
      ...enData.projects[2],
      title: "Hagiwara Thương mại điện tử B2B",
      description: "Nền tảng thương mại điện tử B2B đa vai trò hỗ trợ cổng thông tin cho Quản trị viên, Nhà sản xuất/Cung cấp và Người mua.",
      problem: "Quy trình mua sắm từ đầu đến cuối giữa nhà cung cấp và người mua phức tạp cần được tự động hóa.",
      solution: "Phát triển các module nghiệp vụ lõi cho quản lý sản phẩm, cập nhật giá tự động qua Cron Jobs và nhập địa chỉ người mua.",
      role: "Lập trình viên Fullstack",
      impact: "Đơn giản hóa quy trình đặt hàng B2B và luồng mua sắm từ tìm kiếm sản phẩm đến theo dõi giao dịch.",
    }
  ],
  experience: [
    {
      ...enData.experience[0],
      role: "Lập trình viên Frontend",
      summary: "Đóng góp vào nền tảng SaaS số hóa quy trình cải tạo nhà ở.",
      achievements: [
        "Phát triển ứng dụng web quản lý dự án và trực quan hóa dữ liệu không gian.",
        "Phát triển các tính năng quản lý Bảng giá (Price Master) cho cấu hình dự án của từng khách thuê.",
        "Phát triển tính năng tạo mô hình 3D Mesh từ bản vẽ 2D phục vụ trực quan hóa thi công.",
      ]
    },
    {
      ...enData.experience[1],
      role: "Lập trình viên Frontend & Bảo trì",
      summary: "Nền tảng video ngắn trên di động tích hợp các tính năng tương tác mạng xã hội.",
      achievements: [
        "Điều tra và giải quyết các vấn đề trên môi trường production để đảm bảo tính ổn định.",
        "Tối ưu cơ chế lưu cache video để giảm chi phí băng thông và requests tới Amazon CloudFront.",
        "Xây dựng, phát hành và bảo trì ứng dụng trên Google Play và Apple App Store.",
      ]
    },
    {
      ...enData.experience[2],
      role: "Lập trình viên Fullstack",
      summary: "Phát triển nền tảng thương mại điện tử B2B đa vai trò hỗ trợ Quản trị viên, Nhà sản xuất và Người mua.",
      achievements: [
        "Xây dựng các module nghiệp vụ lõi bao gồm quản lý sản phẩm và quản lý đơn hàng.",
        "Hỗ trợ quy trình mua sắm đầu-cuối giữa nhà cung cấp và người mua.",
        "Triển khai cơ chế cập nhật giá tự động sử dụng Cron Jobs.",
      ]
    }
  ]
};

export const portfolioData = {
  en: enData,
  vi: viData
};
