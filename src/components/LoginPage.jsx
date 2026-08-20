import { useState } from 'react'
import './LoginPage.css'

export default function LoginPage({ logoUrl }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [shakeError, setShakeError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password')
      setShakeError(true)
      setTimeout(() => setShakeError(false), 600)
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        setSuccess(true)
        setIsLoading(false)
      } else {
        setError('Invalid credentials. Access denied.')
        setShakeError(true)
        setTimeout(() => setShakeError(false), 600)
        setIsLoading(false)
      }
    }, 1500)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-left">
          <div className="login-left-content">
            <div className="login-left-logo">
              <img src={logoUrl} alt="Gujarat Police" />
            </div>
            <h1>GUJARAT<br/>POLICE</h1>
            <div className="login-left-divider"></div>
            <p className="login-left-motto">सेवा - सुरक्षा - शांति</p>
            <p className="login-left-desc">Service - Security - Peace</p>
            <div className="login-left-badge">
              <span className="badge-star">★</span>
              <span>EST. 1960</span>
              <span className="badge-star">★</span>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-wrapper">
            <div className="login-form-logo">
              <img src={logoUrl} alt="Gujarat Police" />
            </div>

            {success ? (
              <div className="login-success">
                <div className="success-icon">✓</div>
                <h2>Login Successful</h2>
                <p>Welcome, Inspector General</p>
                <p className="success-sub">Access granted to Gujarat Police Admin Portal</p>
              </div>
            ) : (
              <>
                <h2 className="login-form-title">Admin Access</h2>
                <p className="login-form-subtitle">Enter your credentials to access the portal</p>

                {error && (
                  <div className={`login-error ${shakeError ? 'shake' : ''}`}>
                    <span className="error-icon">⚠</span>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <div className="input-wrapper">
                      <span className="input-icon">👤</span>
                      <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrapper">
                      <span className="input-icon">🔒</span>
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? '🙈' : '👁'}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className={`login-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="btn-loading">
                        <span className="spinner"></span>
                        Authenticating...
                      </span>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>

                <div className="login-footer">
                  <p className="login-credentials">
                    Demo: <strong>admin</strong> / <strong>admin123</strong>
                  </p>
                  <p className="login-security">🔒 Secured Connection • SSL Encrypted</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
