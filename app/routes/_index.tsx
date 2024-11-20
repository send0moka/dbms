import { useEffect } from "react"
import type { MetaFunction } from "@vercel/remix"
import Navigation from "~/components/Navigation"
import Footer from "~/components/Footer"

export const meta: MetaFunction = () => {
  return [
    { title: "DBMS - Graphics Solution" },
    {
      name: "description",
      content: "DBMS is a solution for your content graphics.",
    },
  ]
}

export default function Index() {
  useEffect(() => {
    const stars = document.querySelector(".stars")
    if (!stars) return

    const starSizes = [3, 4, 5, 6]
    const starDelays = [0.5, 1, 1.5, 2]

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div")
      star.className = "star"

      star.style.left = `${Math.random() * 100}vw`
      star.style.top = `${Math.random() * 100}vh`

      const size = starSizes[Math.floor(Math.random() * starSizes.length)]
      star.style.width = `${size}px`
      star.style.height = `${size}px`

      const delay = starDelays[Math.floor(Math.random() * starDelays.length)]
      star.style.animationDelay = `${Math.random() * 10}s`
      star.style.setProperty("--twinkle-delay", `${delay}s`)

      stars.appendChild(star)
    }
  }, [])

  return (
    <>
      <Navigation />

      <section className="hero">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/ina.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>We're DBMS!</h1>
          <p>DBMS is a solution for your content graphics.</p>
          <a
            href="/order"
            className="order-btn"
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Order Here
          </a>
        </div>
      </section>

      <section className="clients">
        <div className="stars"></div>
        <div className="clients-content">
          <h2>Some of our previous clients</h2>
          <div className="client-logos">
            <div className="client-logo">
              <img src="/images/aka-virtual.jpg" alt="Client 1" />
            </div>
            <div className="client-logo">
              <img src="/images/genesix.webp" alt="Client 2" />
            </div>
            <div className="client-logo">
              <img src="/images/nno_logo.png" alt="Client 3" />
            </div>
            <div className="client-logo">
              <img src="/images/ara_culture_logo.png" alt="Client 4" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
