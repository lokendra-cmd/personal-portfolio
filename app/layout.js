import "./globals.css";
import { Ubuntu } from 'next/font/google'


const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
})



export const metadata = {
  title: "Lokendra | Web Developer & Tech Enthusiast",
  description: "Hi, I'm Lokendra—a passionate web developer skilled in building modern and efficient web applications. Explore my portfolio to see my projects, skills, and experience in full-stack development and innovative tech solutions.",
  keywords: ["Lokendra", "Web Developer", "Full-Stack Developer", "Next.js Portfolio", "MERN Stack", "Frontend Developer", "SEO Optimized Website"],
  openGraph: {
    title: "Lokendra | Web Developer & Tech Enthusiast",
    description: "Discover my portfolio showcasing modern web development projects, skills, and experience in full-stack development.",
    url: "https://personal-portfolio-blond-three.vercel.app/",
    siteName: "Lokendra's Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
