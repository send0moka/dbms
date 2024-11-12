import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const OrderForm = () => {
  const [showTerms, setShowTerms] = useState(false);
  const [showNameInput, setShowNameInput] = useState(false);
  const [name, setName] = useState('');

  const handleAgree = () => {
    setShowTerms(false);
    setShowNameInput(true);
  };

  return (
    <div className="form-content">
      <h1>Commission <span style={{ color: "palevioletred" }}>Form</span></h1>
      
      {!showTerms && !showNameInput && (
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
      )}

      {showTerms && (
        <div className="terms-box">
          <p>➙ By filling out this form you agree to our <span style={{ color: "palevioletred" }}>Terms of Service.</span></p>
          <p>➙ Filling out this form does not guarantee a commission slot.</p>
          <p>We will reach out to you within <span style={{ color: "palevioletred" }}>7 business days</span>.</p>
          <button onClick={handleAgree} className="agree-btn">
            I AGREE
          </button>
        </div>
      )}

      {showNameInput && (
        <div className="input-box">
          <h2 className="input-question"><span style={{ color: "palevioletred" }}>1. </span>What is the name you would like to be referred to?</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="TYPE YOUR ANSWER HERE..."
            className="form-input"
          />
            <button className="next-btn">
            NEXT <ArrowRight className="ml-2" strokeWidth={3} />
            </button>
        </div>
      )}
    </div>
  );
};

export default OrderForm;