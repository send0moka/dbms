import { useState, useEffect } from "react";
import type { MetaFunction } from "@vercel/remix";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Order - DBMS Graphics Solution" },
    { name: "description", content: "Commission form for DBMS graphics services" },
  ];
};

export default function Order() {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const stars = document.querySelector(".order-stars");
    if (!stars) return;

    const starSizes = [3, 4, 5, 6];
    const starDelays = [0.5, 1, 1.5, 2];

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.className = "star";

      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;

      const size = starSizes[Math.floor(Math.random() * starSizes.length)];
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const delay = starDelays[Math.floor(Math.random() * starDelays.length)];
      star.style.animationDelay = `${Math.random() * 10}s`;
      star.style.setProperty("--twinkle-delay", `${delay}s`);

      stars.appendChild(star);
    }
  }, []);

  return (
    <>
      <Navigation />
      
      <main className="order-main">
        <div className="order-stars"></div>
        <div className="order-content">
          <div className="mascot">
            <img src="/images/maskot.png" alt="DBMS Mascot" />
          </div>
          
          <div className="form-content">
            <h1>Commission <span style={{ color: "palevioletred" }}>Form</span></h1>
            
            {!showTerms ? (
              <div className="welcome-text">
                <p>You're interested to work with us? Let's go!</p>
                <p>Please fill out the form carefully.</p>
                <p>Thank you so much for your support.</p>
                <p>~ DBMS</p>
                <button onClick={() => setShowTerms(true)} className="click-here-btn">
                  Click Here
                </button>
                <p className="time-note">takes 8 minutes</p>
              </div>
            ) : (
              <div className="terms-box">
                <p>➙ By filling out this form you agree to our <span style={{ color: "palevioletred" }}>Terms of Service.</span></p>
                <p>➙ Filling out this form does not guarantee a commission slot.</p>
                <p>We will reach out to you within <span style={{ color: "palevioletred" }}>7 business days</span>.</p>
                <button onClick={() => setShowTerms(false)} className="agree-btn">
                  I AGREE
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}