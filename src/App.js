import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
export default function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="portfolio-app">
      <div className="bg-blur-1"></div>
      <div className="bg-blur-2"></div>

      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="container nav-wrap">
          <div className="brand">KHUZAIMAH<span className="accent-dot">.</span></div>
          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme}>{isDark ? '☀️' : '🌙'}</button>
            <div className="nav-menu">
              <a href="#projects">Work</a>
              <a href="#future">Future</a>
              <a href="https://wa.me/923263615155" className="nav-cta">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero-section">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.span variants={itemVariants} className="hero-tag">Grade 9 • Developer • Future Trader</motion.span>
            <motion.h1 variants={itemVariants} className="hero-main-title">
              Mastering Code. <br/>Architecting <span className="text-gradient">Wealth.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-description">
              Building high-performance AI systems while mastering the art of financial markets and global freelancing.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="project-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <br></br>
          <br></br>

          <div className="grid-layout">
            {/* TRADING TRACKER - THE MASTER PROJECT */}
            <motion.div whileHover={{ y: -10 }} className="glass-card pro-card">
             
              <span className="label">FINTECH / AI</span>
              <h3>AEGIS AI Trading Terminal</h3>
              <p>Real-time BTC/USDT tracker with AI signals and professional cyberpunk interface.</p>
              <div className="card-links">
                <a href="https://ai-trading-traker.vercel.app/" target="_blank" rel="noreferrer" className="primary-link">View Live Demo →</a>
              </div>
            </motion.div>

              {/*Ai bot - THE MASTER PROJECT */}
            <motion.div whileHover={{ y: -10 }} className="glass-card pro-card">
             
              <span className="label">FINTECH / AI</span>
              <h3>AEGIS AI BotTerminal</h3>
              <p>  AI signals and professional cyberpunk interface.</p>
              <div className="card-links">
                <a href="https://ai-bot-blue-mu.vercel.app/" target="_blank" rel="noreferrer" className="primary-link">View Live Demo →</a>
              </div>
            </motion.div>


            {/* OTHER PROJECTS */}
            {[
              { title: "AI Bose Cafe", label: "AI", desc: "Intelligent hospitality management system.", link: "https://app.landingsite.ai/website-preview?id=f9f7030a-a036-4584-952e-67a73cff6840" },
              { title: "Bangalore Town", label: "EDU", desc: "Digital infrastructure for education.", link: "https://app.landingsite.ai/website-preview?id=f8680f79-d5e2-473d-8735-fa1e89f7c8de" },
              { title: "Namaz Tracker", label: "PROD", desc: "Minimalist spiritual productivity tool.", link: "https://app.landingsite.ai/website-preview?id=45c5fd0b-714e-4f1b-85bc-92e6181f9df6" },
              { title: "Focks n Knives", label: "FOOD", desc: "Premium food-tech commerce platform.", link: "https://app.landingsite.ai/website-preview?id=5efda7c1-8743-492d-9e20-97f4a34dbf31" }
            ].map((project, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="glass-card">
                <span className="label">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer">Explore Site →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FUTURE PLANS SECTION --- */}
      <section id="future" className="future-section">
        <div className="container">
          <h2 className="section-title">Future Roadmap</h2>
          <div className="future-grid">
            <motion.div whileHover={{ scale: 1.02 }} className="future-card">
              <div className="icon">📈</div>
              <h3>Expert Trading</h3>
              <p>Mastering technical analysis and algorithmic trading to navigate global financial markets with precision.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="future-card">
              <div className="icon">🌍</div>
              <h3>Elite Freelancing</h3>
              <p>Scaling digital services globally, providing top-tier AI and Full-stack solutions to international clients.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="main-footer">
        <div className="container footer-flex">
          <div className="footer-info">
            <h3>Let's Build the Future.</h3>
            <a href="mailto:khuzaimahtech@gmail.com" className="mail-link">khuzaimahtech@gmail.com</a>
          </div>
          <div className="footer-copyright">© 2026 KHUZAIMAH</div>
        </div>
      </footer>
    </div>
  );
}