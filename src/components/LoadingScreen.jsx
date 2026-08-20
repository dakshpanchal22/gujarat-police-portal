import { useState, useEffect } from 'react'
import './LoadingScreen.css'

export default function LoadingScreen({ logoUrl }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 8 + 2
      })
    }, 100)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 3500)

    return () => {
      clearInterval(interval)
      clearTimeout(fadeTimer)
    }
  }, [])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-bg-pattern"></div>

      <div className="loading-content">
        <div className="logo-container">
          <div className="logo-glow"></div>
          <div className="logo-ring"></div>
          <img
            src={logoUrl}
            alt="Gujarat Police"
            className="loading-logo"
          />
        </div>

        <div className="loading-text-group">
          <h1 className="loading-title">GUJARAT POLICE</h1>
          <div className="loading-divider"></div>
          <p className="loading-subtitle">ADMIN PORTAL</p>
          <p className="loading-motto">सेवा - सुरक्षा - शांति</p>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            ></div>
            <div className="progress-glow" style={{ left: `${Math.min(progress, 100)}%` }}></div>
          </div>
          <div className="progress-info">
            <span className="progress-label">Initializing System</span>
            <span className="progress-percent">{Math.min(Math.floor(progress), 100)}%</span>
          </div>
        </div>

        <div className="loading-footer">
          <p>Secured by Gujarat Police Department</p>
        </div>
      </div>

      <div className="loading-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>
    </div>
  )
}
