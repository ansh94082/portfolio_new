import React from 'react'

export const projects = [
  { number: '01', name: 'CodeAssist', type: 'JAVASCRIPT · WEBSOCKETS', text: 'A developer-focused project built around making pair programming easier and more approachable.', github: 'https://github.com/ansh94082/codeassist', live: 'https://codeassist.live' },
  { number: '02', name: 'Floor Sim', type: 'HTML · SIMULATION', text: 'A browser-based floorr trading simulation project with a simple, direct interface and interactive behavior.', github: 'https://github.com/ansh94082/floor_sim', live: '' },
  { number: '03', name: 'Search Engine', type: 'C++ · INDEXING · SYSTEMS', text: 'A search-engine project exploring inverted indexing, searching, and information retrieval fundamentals.', github: 'https://github.com/ansh94082/search_engine_ver1.0', live: '' },
  { number: '04', name: 'WiFi Sensing', type: 'PYTHON · ML · SIGNALS', text: 'A machine-learning project that predicts actions from signals received from a WiFi router.', github: 'https://github.com/ansh94082/wifi_sensing', live: '' },
  { number: '05', name: 'Hyprland Dots', type: 'QML · LINUX · RICING', text: 'A personal Hyprland desktop setup with a focused visual system and retro-futuristic UI.', github: 'https://github.com/ansh94082/hyprland-dots', live: '' },
  { number: '06', name: 'Weather App', type: 'JAVASCRIPT · API · UI', text: 'A weather and horoscope application with live data, responsive layouts, and a frosted interface.', github: 'https://github.com/ansh94082/not-just-a-basic-weather-app', live: 'https://notjustaweatherapp.netlify.app/' }
]

export const projectDecorations = {
  '01': <svg viewBox="0 0 120 120" aria-hidden="true"><path d="M40 30l-20 30 20 30" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M80 30l20 30-20 30" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" /><circle cx="60" cy="60" r="16" fill="currentColor" opacity=".18" /></svg>,
  '02': <svg viewBox="0 0 120 120" aria-hidden="true"><rect x="18" y="18" width="84" height="84" rx="12" fill="none" stroke="currentColor" strokeWidth="8" /><path d="M40 40h40M40 80h40M40 40v40M80 40v40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /><circle cx="40" cy="40" r="6" fill="currentColor" /><circle cx="80" cy="40" r="6" fill="currentColor" /><circle cx="40" cy="80" r="6" fill="currentColor" /><circle cx="80" cy="80" r="6" fill="currentColor" /></svg>,
  '03': <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="46" cy="46" r="26" fill="none" stroke="currentColor" strokeWidth="10" /><path d="M72 72l24 24" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /><path d="M30 40h40" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /><path d="M30 56h30" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></svg>,
  '04': <svg viewBox="0 0 120 120" aria-hidden="true"><path d="M22 70c20-26 52-26 72 0" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /><path d="M34 82c14-18 36-18 50 0" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /><circle cx="60" cy="96" r="8" fill="currentColor" /></svg>,
  '05': <svg viewBox="0 0 120 120" aria-hidden="true"><rect x="16" y="20" width="88" height="68" rx="14" fill="none" stroke="currentColor" strokeWidth="10" /><circle cx="38" cy="44" r="6" fill="currentColor" /><circle cx="60" cy="44" r="6" fill="currentColor" /><circle cx="82" cy="44" r="6" fill="currentColor" /><circle cx="38" cy="70" r="6" fill="currentColor" /><circle cx="60" cy="70" r="6" fill="currentColor" /><circle cx="82" cy="70" r="6" fill="currentColor" /></svg>,
  '06': <svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="42" cy="42" r="16" fill="none" stroke="currentColor" strokeWidth="10" /><path d="M32 26l-10-10M52 26l10-10" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /><path d="M36 64h38a18 18 0 1 0-2-36 22 22 0 0 0-42 6 14 14 0 0 0 6 27z" fill="none" stroke="currentColor" strokeWidth="10" /></svg>
}

export const skillGroups = [
  ['Programming Languages', 'C', 'C++', 'Python', 'Javascript', 'Typescript'],
  ['FrontEnd', 'HTML5', 'CSS', 'React', 'Tailwind'],
  ['BackEnd', 'NodeJS', 'ExpressJS', 'Websockets', 'NextJS', 'ElectronJS'],
  ['Databases', 'MongoDB', 'PostgreSQL', 'MySQL'],
  ['Version Control', 'Git', 'GitHub']
]

export default null
