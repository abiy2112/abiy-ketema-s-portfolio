import {
  Mail,
  Phone,
  MapPin,
  Play,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  ExternalLink,
  Youtube,
  Music,
  Linkedin,
  Send,
  Pause,
} from "lucide-react";
import imageme from "../img/me.jpg";
import imagechan from "../img/channels4_profile.jpg";

export default function App() {
  const skills = [
    {
      category: "Video Editing",
      tools: ["Adobe Premiere Pro", "Cap Cut", "DaVinci Resolve"],
    },
    { category: "Motion Graphics", tools: ["After Effects", "Blender"] },
    {
      category: "Post-Production",
      tools: ["Color Grading & Correction", "Audio Editing & Mixing"],
    },
    {
      category: "Content Creation",
      tools: ["Storyboarding & Script Interpretation", "Social Media Content"],
    },
  ];

  const experiences = [
    {
      title: "YouTube Video Editor and Content Creator",
      company: "Self Employed (MUSIKANA)",
      companyUrl: "https://youtube.com/@musikana1?si=YM0bpGXPvAAbcyKw",
      location: "Addis Ababa",
      period: "Jul 2023 - Present",
      responsibilities: [
        "Edited videos for my channel MUSIKANA.",
        "Streaming Amharic lyrics videos on YouTube and other social media platforms.",
        "Created visually appealing content to engage audience.",
      ],
      // Using your provided user profile picture
      thumbnail: imagechan,
      videoUrl: "https://youtube.com/@musikana1",
    },
    {
      title: "TikTok Video Editor",
      company: "Freelance",
      location: "Addis Ababa",
      period: "Jun 2024 - Present",
      responsibilities: [
        "Edited TikTok videos for various local Ethiopian clients.",
        "Managed raw footage organization and helped with video shooting.",
        "Created content and wrote scripts for clients.",
      ],
      // Flagging this as TikTok to show the new icons
      isTikTok: true,
      links: [
        "https://www.tiktok.com/@orbitrise/video/7543299885341117701",
        "https://www.tiktok.com/@abela_.g/video/7508002112287165702",
        "https://www.tiktok.com/@dagimshumey_/video/7569241398868856120",
      ],
    },
    {
      title: "Promotional Video Editor",
      company: "Blue Sky Properties",
      location: "Addis Ababa, Ethiopia",
      period: "Jun 2025 - Nov 2025",
      responsibilities: [
        "Edited promotional videos showcasing real estate properties.",
        "Wrote scripts for the videos.",
        "Note: I edited multiple videos for their channel, make sure to check out the whole channel!",
      ],
      isTikTok: true,
      links: [
        "https://www.tiktok.com/@blueskypropet/video/7536115078043553029",
      ],
    },
    {
      title: "Video Editor",
      company: "4 Kilo Gbi Gubae",
      location: "Addis Ababa, Ethiopia",
      period: "Dec 2025 - Present",
      responsibilities: [
        "Edit different types of videos for the channel.",
        "Write scripts for the videos.",
        "Color grading and correction.",
      ],
    },
  ];

  const projects = [
    { id: "Kpl1YGsYaXY", title: "Ethiopian Tourism" },
    { id: "2y93gUqIRnY", title: "Short Form Edit 1" },
    { id: "se6H6d5qpNs", title: "Short Form Edit 2" },
    { id: "4JyLoYDakG4", title: "Short Form Edit 3" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1757845366142-e5929f71c7bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBmaWxtfGVufDF8fHx8MTc3MDA0MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Video editing workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl mb-4 text-white tracking-tight">
            Abiy Ketema
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-8">
            Video Editor & Creative Storyteller
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-zinc-400">
            <a
              href="mailto:abiyketema21@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>abiyketema21@gmail</span>
            </a>
            <a
              href="tel:+251934681880"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+251-934681880</span>
            </a>
            <a
              href="https://www.google.com/maps/search/Ethiopia%2C+Addis+Ababa%2C+0000%2C+Ethiopia"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Addis Ababa, Ethiopia</span>
            </a>
          </div>
        </div>
      </header>

      {/* About Me */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-6 h-6 text-red-500" />
          <h2 className="text-3xl font-bold text-white">About Me</h2>
        </div>
        <p className="text-lg leading-relaxed text-zinc-400">
          Creative and detail-oriented Video Editor with 3+ years of experience
          in editing high-quality videos for clients across social media,
          corporate, and entertainment platforms. Skilled in storytelling,
          motion graphics, and post-production techniques. I also manage the
          MUSIKANA YouTube channel with over 8,000 subscribers.
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-6 h-6 text-red-500" />
            <h2 className="text-3xl font-bold text-white">
              Skills & Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((s, i) => (
              <div
                key={i}
                className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl"
              >
                <h3 className="text-white font-bold mb-3">{s.category}</h3>
                <ul className="text-sm space-y-2 text-zinc-500">
                  {s.tools.map((t, j) => (
                    <li key={j}>• {t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <Briefcase className="w-6 h-6 text-red-500" />
          <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        </div>
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              <div className="flex-1">
                <h3 className="text-2xl text-white font-bold">{exp.title}</h3>
                <p className="text-red-500 font-medium mb-4">
                  {exp.company}{" "}
                  <span className="text-zinc-600 text-sm ml-2">
                    | {exp.period}
                  </span>
                </p>
                <ul className="space-y-2 text-zinc-400">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="text-sm">
                      • {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience Thumbnails */}
              {(exp.thumbnail || exp.isTikTok) && (
                <div className="flex gap-2">
                  {exp.isTikTok ? (
                    exp.links?.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="w-16 h-16 bg-zinc-900 border border-zinc-700 rounded-lg flex items-center justify-center hover:border-red-500 transition-all group"
                      >
                        {/* TikTok Sign / Video Sign requested */}
                        <Music className="w-6 h-6 text-zinc-500 group-hover:text-white" />
                      </a>
                    ))
                  ) : (
                    <a
                      href={exp.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-24 h-24 rounded-full border-2 border-zinc-800 overflow-hidden hover:border-red-500 transition-all shadow-lg block"
                    >
                      <img
                        src={exp.thumbnail}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24 px-4 bg-zinc-900/50 overflow-hidden">
        <div className="max-w-6xl mx-auto snap-x snap-mandatory flex overflow-x-auto gap-6 pb-12">
          {projects.map((p, i) => (
            <a
              key={i}
              href={`https://youtube.com/watch?v=${p.id}`}
              target="_blank"
              rel="noreferrer"
              className="snap-center shrink-0 w-[80vw] md:w-[40vw] lg:w-[23vw] block group"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700 group-hover:border-red-500 transition-all shadow-xl">
                <img
                  src={`https://img.youtube.com/vi/${p.id}/mqdefault.jpg`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  alt={p.title}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 shadow-2xl">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-sm font-bold text-zinc-400 group-hover:text-white transition-colors flex items-center gap-2">
                {p.title} <ExternalLink className="w-3 h-3" />
              </h3>
            </a>
          ))}
        </div>
        <p className="text-center text-zinc-600 text-xs mt-[-20px]">
          ← Swipe to explore more projects →
        </p>
      </section>

      {/* Education */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-red-500" />
          <h2 className="text-3xl font-bold text-white">Education</h2>
        </div>
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
          <h3 className="text-xl text-white font-bold">
            Information Systems Student
          </h3>
          <p className="text-red-500">Addis Ababa University</p>
        </div>
      </section>

      {/* Contact with Circle Profile Logo */}
      <section className="py-24 px-4 text-center bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 italic tracking-tight">
            Let's build something great.
          </h2>

          {/* Circular Profile Image (Bitmoji) */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-red-600/30 overflow-hidden shadow-2xl mb-12 hover:scale-105 transition-transform">
            <img
              src={imageme} // Replace with your profile image URL if different
              alt="Abiy Ketema Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:abiyketema21@gmail.com"
              className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all hover:border-red-500 shadow-lg"
            >
              <Mail className="w-5 h-5 text-red-500" /> Email
            </a>
            <a
              href="https://t.me/abiy2112"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all hover:border-red-500 shadow-lg"
            >
              <Send className="w-5 h-5 text-red-500" /> Telegram
            </a>
            <a
              href="https://www.linkedin.com/in/abiy-ketema-2a8902290"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all hover:border-red-500 shadow-lg"
            >
              <Linkedin className="w-5 h-5 text-red-500" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-zinc-600 text-sm border-t border-zinc-900 bg-black">
        <p>
          © {new Date().getFullYear()} Abiy Ketema. References available upon
          request.
        </p>
      </footer>
    </div>
  );
}
