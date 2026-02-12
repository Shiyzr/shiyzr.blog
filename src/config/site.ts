// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Astro Blog",
  title: "Astro Blog",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    comments: "Comments",
  },
  
  // Hero Section
  hero: {
    prefix: "我是",
    name: "Shiyzr",
    intro: "PKU 信息科学技术学院在读本科生\n欢迎来到我的博客!",
    avatar: "/image/20943608.jpeg",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/astrodotbuild" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
      { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/tomcomtang/astro-cartoon-portfolio" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "Hi, I'm Shiyzr, a passionate web developer and blogger. I love exploring new technologies and sharing knowledge with the community. On this blog, you'll find my thoughts on web development, tutorials, and project showcases. I hope my content can inspire others in their coding journey.",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "shiyzr@stu.pku.edu.cn",
        link: "mailto:shiyzr@stu.pku.edu.cn",
      },
      // phone: {
      //   label: "Phone",
      //   value: "+1 (234) 567-890",
      //   link: "tel:+1 (234) 567-890",
      // },
      location: {
        label: "Location",
        value: "Beijing, China",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://x.com/ShiYzr" },
        // { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://www.linkedin.com/company/astrodotbuild" },
        // { name: "Facebook", icon: "/svg/facebook.svg", url: "https://www.facebook.com/astrodotbuild" },
        { name: "Bilibili", icon: "/svg/bilibili.svg", url: "https://space.bilibili.com/2036117977" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/Shiyzr" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2026 Shiyzr. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Give me stars on Github",
      url: "https://github.com/Shiyzr",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "Explore our latest articles on web development, design, and technology",
    searchPlaceholder: "Search posts...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

