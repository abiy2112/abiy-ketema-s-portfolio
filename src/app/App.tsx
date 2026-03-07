import { Mail, Phone, MapPin, Play, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

export default function App() {
  const skills = [
    { category: 'Video Editing', tools: ['Adobe Premiere Pro', 'Cap Cut', 'DaVinci Resolve'] },
    { category: 'Motion Graphics', tools: ['After Effects', 'Blender'] },
    { category: 'Post-Production', tools: ['Color Grading & Correction', 'Audio Editing & Mixing'] },
    { category: 'Content Creation', tools: ['Storyboarding & Script Interpretation', 'Social Media Content'] }
  ];

  const experiences = [
    {
      title: 'Video Editor , Content creaator',
      company: 'Self Employed',
      location: 'Addis Ababa',
      period: 'jul 2023 - Present',
      responsibilities: [
        'Edited  videos for my channel MUSIKANA.',
        'Streaming (Amharic)lyrics videos on YouTube and other social media platforms.',
        'creat visually appealing content to engage audience.'
      ]
      // when clickingg on musikana it should open the youtube channel
      // it would be nice to have smple vidoes from the cannel here too
    },
    {
      title: 'Video Editor',
      company: 'Freelance',
      location: 'Addis Ababa',
      period: 'Jun 2024 - Present',
      responsibilities: [
        'Edit tiktok videos for various local(Ethiopian)clients,',
        'Managed raw footage organization and helped with video shooting.',
        'created content and writing scripts for clients.'
      ]
      //same as above if possible haveing the social media links of all of the clients listed and make tehm redirect to there pages
      // also haveing sample videos 
    },
    {
      title: 'Promotional Video Editor',
      company: 'Blue Sky Propeies',
      location: 'Addis Ababa, Ethiopia',
      period: 'Jun 2025 - Nov 2025',
      responsibilities: [
        'Edit promotional videos showcasing real estate properties.',
        'write scripts for the videos',
        'color grading and correction',
        'audio editing and mixing'
      ]
      //same as above if possible haveing the social media links of all of the clients listed and make tehm redirect to there pages
      // also haveing sample videos 
    },
    {
      title: 'Video Editor',
      company: '4 Kilo Gbi Gubae',
      location: 'Addis Ababa, Ethiopia',
      period: 'Dec 2025 - present',
      responsibilities: [
        'Edit different types of videos for teh channel',
        'write scripts for the videos',
        'color grading and correction',
        'audio editing and mixing'
      ]
      //same as above if possible haveing the social media links of all of the clients listed and make tehm redirect to there pages
      // also haveing sample videos 
    }
  ];

  const projects = [
    {
      title: 'Promotional Video Editor',
      description: 'Edited a 3-minute promotional video showcasing Ethiopia\'s tourist attractions.',
      duration: '3 min',
      image: 'https://images.unsplash.com/photo-1573403092240-26095e118918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjB0b3VyaXNtJTIwbGFuZHNjYXBlJTIwbW91bnRhaW5zfGVufDF8fHx8MTc3MDA0MTM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'NGO Awareness Campaign',
      description: 'Produced a 2-minute video for a local NGO highlighting community projects.',
      duration: '2 min',
      image: 'https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwZW9wbGUlMjBhZnJpY2ElMjBoZWxwaW5nfGVufDF8fHx8MTc3MDA0MTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Music Video: Local Artist',
      description: 'Edited a 4-minute music video with synchronized effects and transitions.',
      duration: '4 min',
      image: 'https://images.unsplash.com/photo-1669459881627-06c2a4948e33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBwZXJmb3JtYW5jZSUyMGFydGlzdHxlbnwxfHx8fDE3NzAwNDEzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
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
          <h1 className="text-6xl md:text-8xl mb-4 text-white tracking-tight">Abiy Ketema</h1>
          <p className="text-2xl md:text-3xl text-zinc-300 mb-8">Video Editor & Creative Storyteller</p>
          <div className="flex flex-wrap justify-center gap-6 text-zinc-400">
            <a href="mailto:abiyketema21@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>abiyketema21@gmail</span>
            </a>
            <a href="tel:+251934681880" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>+251-934681880</span>
            </a>
            <a href = "https://www.google.com/maps/search/Ethiopia%2C+Addis+Ababa%2C+0000%2C+Ethiopia" className="flex items-center gap-2 hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
              <span>Addis Ababa, Ethiopia</span>
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl text-white">About Me</h2>
          </div>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Creative and detail-oriented Video Editor with 3+ years of experience in editing high-quality videos for clients across social media, corporate, and entertainment platforms. Skilled in storytelling, motion graphics, and post-production techniques, with a passion for delivering visually compelling content. I also have a YouTube channel of my own that has over 8000 subs.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl text-white">Skills & Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-red-500 transition-colors">
                <h3 className="text-xl text-white mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.tools.map((tool, i) => (
                    <li key={i} className="text-zinc-400 flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl text-white">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-red-500 pl-6 pb-8 last:pb-0">
                <h3 className="text-2xl text-white mb-2">{exp.title}</h3>
                <div className="text-zinc-400 mb-4">
                  <span className="text-red-400">{exp.company}</span> | {exp.location} | {exp.period}
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-zinc-300 flex items-start gap-3">
                      <span className="text-red-500 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Play className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl text-white">Selected Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                    {project.duration}
                  </div>
                </div>
                <h3 className="text-xl text-white mb-2 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8 text-red-500" />
            <h2 className="text-4xl text-white">Education</h2>
          </div>
          <div className="bg-zinc-950 p-8 rounded-lg border border-zinc-800">
            <h3 className="text-2xl text-white mb-2">Bachelor of Arts in Multimedia Arts</h3>
            <p className="text-red-400 mb-2">Addis Ababa University</p>
            <p className="text-zinc-400">2019</p>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl text-white mb-6">Let's Create Together</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Available for freelance projects and collaborations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:abiy.ketema@example.com"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg transition-colors text-lg"
            >
              Get In Touch
            </a>
            <button className="border border-zinc-600 hover:border-red-500 text-white px-8 py-4 rounded-lg transition-colors text-lg">
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black text-center">
        <p className="text-zinc-500">
          © 2026 Abiy Ketema. References available upon request.
        </p>
      </footer>
    </div>
  );
}
