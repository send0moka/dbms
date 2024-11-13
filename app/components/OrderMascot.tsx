import { useState, useEffect } from 'react';
import { useLocation } from '@remix-run/react';

interface OrderMascotProps {
  currentStep: number;
}

const OrderMascot = ({ currentStep }: OrderMascotProps) => {
  const [currentMascot, setCurrentMascot] = useState('/images/maskot.png');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState('3s');
  const location = useLocation();

  useEffect(() => {
    const handleTransition = async () => {
      setIsTransitioning(true);
      setAnimationSpeed('1s');
      setCurrentMascot('/images/maskot2.png');

      await new Promise(resolve => setTimeout(resolve, 500));
      
      setCurrentMascot('/images/maskot.png');
      setAnimationSpeed('3s');
      setIsTransitioning(false);
    };

    if (currentStep !== undefined) {
      handleTransition();
    }
  }, [currentStep]);

  return (
    <div className="mascot">
      <img 
        src={currentMascot} 
        alt="DBMS Mascot" 
        className={isTransitioning ? 'transitioning' : ''}
        style={{
          height: '400px',
          width: 'auto',
          animation: `float ${animationSpeed} ease-in-out infinite`,
          transition: 'all 0.3s ease-in-out'
        }}
      />
    </div>
  );
};

export default OrderMascot;