import React from 'react'
import Icon from './components/Icon'
import SidebarSection from './components/SidebarSection'
import ProjectCard from './components/ProjectCard'
import { projects, skillGroups } from './data.jsx'
import './style.css'

export default function App() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState('HOME')
  const [sidebarOpen, setSidebarOpen] = React.useState({
    based: true,
    studying: true,
    exploring: true,
    github: true,
    available: true,
    stack: true,
    tools: true
  })
  const links = ['HOME', 'ABOUT', 'EXPERIENCE', 'WORK', 'CONTACT']

  function toggleSidebarSection(name) {
    setSidebarOpen(prev => ({ ...prev, [name]: !prev[name] }))
  }

  function goTo(name) {
    setActive(name)
    setOpen(false)
    document.getElementById(name.toLowerCase()).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="topbar"><a className="logo" href="#home">ANSH<span>.</span></a><nav className={open ? 'nav open' : 'nav'}>{links.map((link, index) => <button key={link} className={active === link ? 'active' : ''} onClick={() => goTo(link)}><small>0{index + 1}.</small> {link}</button>)}</nav><button className="menu-button" onClick={() => setOpen(!open)}>{open ? '×' : 'MENU'}</button></header>

      <div className="page-shell">
        <aside className="side-rail">
          <SidebarSection label="// BASED IN" name="based" isOpen={sidebarOpen.based} onToggle={toggleSidebarSection}>
            <p>JALANDHAR, INDIA<br />(UTC+05:30)</p>
          </SidebarSection>
          <SidebarSection label="// STUDYING" name="studying" isOpen={sidebarOpen.studying} onToggle={toggleSidebarSection}>
            <p>B.TECH MATHEMATICS<br />&amp; COMPUTING @ NITJ</p>
          </SidebarSection>
          <SidebarSection label="// EXPLORING" name="exploring" isOpen={sidebarOpen.exploring} onToggle={toggleSidebarSection}>
            <p>WEB · SYSTEMS · ML<br />LINUX RICING</p>
          </SidebarSection>
          <SidebarSection label="// GITHUB" name="github" isOpen={sidebarOpen.github} onToggle={toggleSidebarSection}>
            <div className="github-row"><span>Contributions</span><strong className="github-value">  128</strong></div>
            <div className="github-row"><span>Commits</span><strong className="github-value">  420</strong></div>
            <div className="github-row"><span>Stars</span><strong className="github-value">  34</strong></div>
          </SidebarSection>
          <SidebarSection label="// AVAILABLE FOR" name="available" isOpen={sidebarOpen.available} onToggle={toggleSidebarSection}>
            <p>COLLABORATION · INTERNSHIPS<br />REMOTE &amp; ON-SITE · OPEN SOURCE </p>
          </SidebarSection>
          <SidebarSection label="// STACK" name="stack" isOpen={sidebarOpen.stack} onToggle={toggleSidebarSection}>
            <p>MERN · PERN · NEXTJS<br />NODE · REACT · POSTGRES</p>
          </SidebarSection>
          <SidebarSection label="// TOOLS" name="tools" isOpen={sidebarOpen.tools} onToggle={toggleSidebarSection}>
            <p>GIT · DOCKER · TAILWIND<br />VSCODE · FIGMA</p>
          </SidebarSection>
        </aside>
        <div className="page-content">
          <section id="home" className="hero">
            <div className="hero-copy"><p className="eyebrow">// HELLO, I’M ANSH</p><h1>I BUILD DIGITAL<br />APPLICATIONS<br />THAT MATTER<span>.</span></h1><p className="intro">Mathematics &amp; Computing student who enjoys building useful tools, exploring systems, and making the web feel more intentional.</p><div className="hero-actions"><button className="text-button" onClick={() => goTo('WORK')}>VIEW MY WORK <b>→</b></button><a className="icon-link" href="https://github.com/ansh94082" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon type="github" /></a><a className="icon-link" href="https://www.linkedin.com/in/ansh94082/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon type="linkedin" /></a><a className="resume-button" href="/resume.pdf" download>DOWNLOAD RÉSUMÉ ↓</a></div></div>
            <div className="hero-art" aria-label="Portfolio mockup image"><img src="/hero-mockup.jpg" alt="Portfolio mockup with hero and project sections" /></div>
          </section>

          <section id="about" className="profile-section"><article className="building-panel"><div><p className="eyebrow">02. CURRENTLY BUILDING</p><span className="building-number"></span></div><div className="download-art"><i></i><b></b><em></em></div><h2>YT DOWNLOADER<span>.</span></h2><p className="project-type">ELECTRON · REACT · YT-DLP</p><p>A desktop app for downloading YouTube videos from a URL or search query. Built with Electron, React, a local download queue, and saved settings.</p><a href="https://github.com/ansh94082/yt-downloader" target="_blank" rel="noreferrer">VIEW ON GITHUB ↗</a></article><div className="profile-right"><div className="about-copy"><p className="eyebrow">// ABOUT</p><h2>ABOUT ME<span>.</span></h2><p>I’m Ansh Sharma, a B.Tech Mathematics &amp; Computing student at NIT Jalandhar. I like turning ideas into practical software and keep learning through projects that range from web apps to systems and machine learning.</p><p>Outside code, I’m interested in finance, personal growth, and Linux ricing.</p></div><div className="skill-list"><p className="eyebrow">// SKILLS</p>{skillGroups.map(group => <div className="skill-row" key={group[0]}><h3>{group[0]}</h3><div>{group.slice(1).map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

          <section id="experience" className="experience"><div className="section-label">03. EXPERIENCE</div><div className="timeline"><h2>MY JOURNEY<span>.</span></h2><div className="timeline-item"><time>AUG 2024</time><div><h3>Joined NIT Jalandhar</h3><p>Started B.Tech in Mathematics &amp; Computing.</p></div></div><div className="timeline-item"><time>MAR 2025</time><div><h3>Floor Trading Participant</h3><p>Participated in the floor trading event by Finnest Society NITJ during Utkansh.</p></div></div><div className="timeline-item"><time>SEP 2025</time><div><h3>Joined Finnest</h3><p>Joined Finnest Society at NIT Jalandhar.</p></div></div><div className="timeline-item"><time>MAR 2026</time><div><h3>Floor Trading Organizer</h3><p>Organized the floor trading event during Utkansh.</p></div></div></div></section>

          <section id="work" className="work"><div className="section-heading"><p>04. WORK</p><h2>SELECTED PROJECTS<span>.</span></h2><a href="https://github.com/ansh94082" target="_blank" rel="noreferrer">VIEW GITHUB ↗</a></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div></section>

          <section id="contact" className="contact"><div className="section-label">05. CONTACT</div><div className="contact-copy"><h2>LET’S BUILD<br />SOMETHING<br />GREAT<span>.</span></h2><p>Have a project, idea, or just want to say hello? My inbox is open.</p></div><div className="contact-links"><a href="mailto:ansh94082@gmail.com">EMAIL ME ↗</a><a href="https://github.com/ansh94082" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/ansh94082/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></section>
          <footer><span>© 2026 ANSH SHARMA</span><div><a href="https://github.com/ansh94082" target="_blank" rel="noreferrer">GITHUB</a><a href="https://www.linkedin.com/in/ansh94082/" target="_blank" rel="noreferrer">LINKEDIN</a><a href="mailto:anshsharma94082@gmail.com">EMAIL</a></div></footer>
        </div>
      </div>
    </main>
  )
}
