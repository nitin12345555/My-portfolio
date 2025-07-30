import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Server, Database, Palette, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function App() {
  const handleDownloadResume = () => {
    toast({
      title: "🚧 Resume Download",
      description: "Resume download feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: 'destructive',
    });
  };

  const handleWhatsAppChat = () => {
    window.open('https://wa.me/919521878076?text=Hi%20Nitin!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.', '_blank');
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce website with product catalogs, shopping cart, and user authentication.",
      link: "https://e-commerce-website-woad-ten.vercel.app/",
      tech: ["React","bootstrap","css"],
    },
    {
      title: "Digital Agency Website",
      description: "A stunning digital agency website showcasing modern design and smooth animations to attract clients.",
      link: "https://digital-agency-website-swart.vercel.app/",
      tech: ["React", "TailwindCSS", "Framer Motion"],
    },
    {
      title: "Interactive Web Page",
      description: "A creative web page demonstrating advanced UI/UX concepts with engaging animations and modern layouts. converting into code is under Development",
      link: "https://projects.animaapp.com/team/my-team-qmqw9hc/project/0Q4MKDp/screen/desktop-1/omniview",
      tech: ["figma","Anima"],
    },
    {
      title: "Crypto Live Pricing",
      description: "Real-time cryptocurrency price tracking application with live market data and intuitive data visualization.",
      link: "https://crypto-currency-project-phi.vercel.app/home",
      tech: ["React", "node.js","express.js","mongodb","CSS"],
    }
  ];

  const skills = [
    { name: "JavaScript", icon: Code },
    { name: "React.js", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "HTML5 & CSS3", icon: Palette },
    { name: "TailwindCSS", icon: Palette },
    { name: "Git & GitHub", icon: Github },
    { name: "Figma", icon: Palette },
    { name: "Penpot", icon: Palette },
    { name: "Uizard", icon: Palette },
    { name: "Bito", icon: Code },
    { name: "Loveable", icon: Code },
    { name: "WindSurf", icon: Code },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Nitin Jangid :: MERN Stack Developer</title>
        <meta name="description" content="The futuristic portfolio of Nitin Jangid, a MERN Stack Developer crafting next-gen web experiences." />
      </Helmet>
      
      <div className="bg-black text-gray-200 font-sans leading-normal tracking-normal">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black"></div>
        
        <div className="relative container mx-auto px-4 z-10">

          {/* Header */}
          <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex justify-between items-center py-8"
          >
            <div className="flex items-center gap-6">
              <motion.a href="https://github.com/nitin12345555" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#a78bfa' }} whileTap={{ scale: 0.9 }}>
                <Github className="w-6 h-6 text-gray-400 transition-colors" />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/nitin-jangid-585a5a377/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#a78bfa' }} whileTap={{ scale: 0.9 }}>
                <Linkedin className="w-6 h-6 text-gray-400 transition-colors" />
              </motion.a>
            </div>
          </motion.header>

          {/* Hero Section */}
          <section className="min-h-[80vh] flex flex-col items-center justify-center text-center">
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-black text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Nitin Jagid
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                MERN Stack Developer crafting high-performance web applications with a futuristic edge.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-purple-600 text-white font-bold hover:bg-purple-500 px-8 py-6 text-lg rounded-lg transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                >
                  View My Creations
                </Button>
                <Button 
                   onClick={() => window.open("https://flowcv.com/resume/gb79h1pd1pc1", "_blank")}
                    variant="outline"
                    className="border-purple-500/50 text-gray-300 hover:bg-purple-500/10 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
                    >
                    <Download className="w-5 h-5 mr-2" />
                  Resume
              </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">Core Technologies</h2>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-2"
                >
                  <skill.icon className="w-10 h-10 text-purple-400" />
                  <span className="font-semibold text-gray-200 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-16">Featured Projects</h2>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block bg-white/5 border border-white/10 rounded-xl p-8 h-full transition-all duration-300 hover:border-purple-400/50 hover:bg-white/10 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                            <span className="text-sm font-semibold mr-1">Live Demo</span>
                            <ArrowRight className="w-4 h-4"/>
                        </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-24">
             <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
                <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to Collaborate?
                </motion.h2>
                <motion.p variants={itemVariants} className="text-gray-400 max-w-xl mx-auto mb-8">
                  I'm actively seeking new projects and opportunities. Let's connect and build something amazing together.
                </motion.p>
                <motion.div variants={itemVariants} className="flex justify-center gap-4">
                    <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:opacity-90 transition-opacity">
                      <a href="mailto:nitinjangidj92@gmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send an Email
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" onClick={handleWhatsAppChat} className="border-purple-500/50 text-gray-300 hover:bg-purple-500/10 hover:text-white">
                        Chat on WhatsApp
                    </Button>
                </motion.div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="py-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © 2025 Nitin Jagid. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href={`tel:+919588845001`} className="text-gray-500 hover:text-white transition-colors text-sm">
                  +91 9588845001
                </a>
              </div>
            </div>
          </footer>
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
