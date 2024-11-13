import { useState, useEffect, SetStateAction } from "react";
import type { MetaFunction } from "@vercel/remix";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import OrderForm from "~/components/OrderForm";
import OrderMascot from "~/components/OrderMascot";

export const meta: MetaFunction = () => {
  return [
    { title: "Order - DBMS Graphics Solution" },
    { name: "description", content: "Commission form for DBMS graphics services" },
  ];
};

export default function Order() {
  const [currentStep, setCurrentStep] = useState(0);

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

  const handleStepChange = (step: SetStateAction<number>) => {
    setCurrentStep(step);
  };

  return (
    <>
      <Navigation />
      
      <main className="order-main">
        <div className="order-stars"></div>
        <div className="order-content">
          <OrderMascot currentStep={currentStep} />
          <OrderForm onStepChange={handleStepChange} />
        </div>
      </main>

      <Footer />
    </>
  );
}