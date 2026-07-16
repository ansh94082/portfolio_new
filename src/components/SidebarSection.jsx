import React from 'react'

export default function SidebarSection({ label, name, isOpen, onToggle, children }) {
  return (
    <div className={`sidebar-section${isOpen ? ' open' : ' collapsed'}`}>
      <button type="button" className="sidebar-toggle" onClick={() => onToggle(name)} aria-expanded={isOpen}>
        <small>{label}</small>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      <div className="sidebar-body">{children}</div>
    </div>
  )
}
