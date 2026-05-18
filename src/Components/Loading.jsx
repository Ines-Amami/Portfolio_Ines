import { useState, useEffect } from 'react'
import '../Components/Loading.css'
const BUBBLES = [
  { size: 80,  top: '8%',  left: '75%', color: '#e8a0bf', dur: '4s',   delay: '0s'   },
  { size: 50,  top: '15%', left: '88%', color: '#b8a9d9', dur: '5s',   delay: '0.5s' },
  { size: 35,  top: '30%', left: '82%', color: '#f4c2d8', dur: '3.5s', delay: '1s'   },
  { size: 60,  top: '5%',  left: '60%', color: '#c9b8e8', dur: '4.5s', delay: '0.2s' },
  { size: 25,  top: '50%', left: '90%', color: '#e8c4d4', dur: '6s',   delay: '0.8s' },
  { size: 45,  top: '70%', left: '78%', color: '#b8c9e8', dur: '3.8s', delay: '1.2s' },
  { size: 30,  top: '85%', left: '85%', color: '#d4b8e8', dur: '5.2s', delay: '0.3s' },
  { size: 55,  top: '20%', left: '5%',  color: '#f0c8d8', dur: '4.2s', delay: '0.7s' },
  { size: 20,  top: '60%', left: '8%',  color: '#b8d4e8', dur: '3.2s', delay: '1.5s' },
  { size: 40,  top: '80%', left: '12%', color: '#e0b8d4', dur: '5.5s', delay: '0.4s' },
  { size: 15,  top: '40%', left: '3%',  color: '#c8e4b8', dur: '4.8s', delay: '1.1s' },
]

const MESSAGES = [
  { until: 30,  text: 'Initializing...' },
  { until: 55,  text: 'Loading projects...' },
  { until: 80,  text: 'Preparing portfolio...' },
  { until: 100, text: 'Welcome ✦' },
]

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 3.5 + 1
        if (next >= 100) {
          clearInterval(id)
          setTimeout(() => setFadeOut(true), 350)
          setTimeout(() => {
            setGone(true)
            onComplete?.()
          }, 950)
          return 100
        }
        return next
      })
    }, 55)
    return () => clearInterval(id)
  }, [onComplete])

  if (gone) return null

  const pct = Math.min(Math.floor(progress), 100)
  const msg = MESSAGES.find(m => progress <= m.until)?.text ?? 'Welcome ✦'

  return (
    <>
    
      <div className={`ls-root${fadeOut ? ' out' : ''}`}>

        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="ls-bubble"
            style={{
              width:  b.size,
              height: b.size,
              top:    b.top,
              left:   b.left,
              background: b.color,
              '--dur':   b.dur,
              '--delay': b.delay,
            }}
          />
        ))}

        

        <div className="ls-center">
          <div className="ls-name">Ines</div>
          <div className="ls-sub">Junior Software Tester &amp; Developer</div>
          <div className="ls-divider" />
          <div className="ls-track">
            <div className="ls-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="ls-pct">{pct}%</div>
          <div className="ls-status">{msg}</div>
        </div>

      </div>
    </>
  )
}