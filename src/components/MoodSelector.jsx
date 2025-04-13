import React, { useState, useEffect } from 'react';

const translations = {
  en: {
    title: 'Select Your Mood',
    placeholder: 'Choose a mood',
  },
  fr: {
    title: 'Sélectionnez votre humeur',
    placeholder: 'Choisissez une humeur',
  },
};

const MoodSelector = ({ moods, onMoodSelect }) => {
  const [selectedMood, setSelectedMood] = useState('');
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language.slice(0, 2); // Get the first two characters of the browser language
    setLanguage(translations[browserLanguage] ? browserLanguage : 'en');
  }, []);

  const handleMoodChange = (mood) => {
    onMoodSelect([mood]); // Trigger the callback immediately
    setSelectedMood(mood); // Update the selected mood
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        marginTop: '',
        marginBottom: '30px',
        fontFamily: '"Poppins", sans-serif', // Updated font
        color: '#ffffff',
      }}
    >
      <form
        style={{
          padding: '30px',
          borderRadius: '12px',
          textAlign: 'center',
          width: '',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h2
          style={{
            marginBottom: '20px',
            fontSize: '24px',
            textTransform: '', // Added uppercase for emphasis
            letterSpacing: '0px', // Added letter spacing for readability
            color: '#000000', // Black text for contrast with white background
            textShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for better visibility
          }}
        >
          {translations[language].title}
        </h2>
        <div style={{ marginBottom: '20px' }}>
          <select
            value={selectedMood}
            onChange={(e) => handleMoodChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '12px', // Rounded corners for the dropdown
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Translucent background
              color: '#ffffff',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: '0 4px 10px rgba(0, 255, 255, 0.2)',
              transition: 'all 0.3s ease-in-out',
              fontFamily: '"Anton", sans-serif',
              appearance: 'none',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'white\'%3E%3Cpath d=\'M7 10l5 5 5-5z\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 10px center',
              backgroundSize: '16px',
            }}
          >
            <option value="" disabled>
              {translations[language].placeholder}
            </option>
            {moods.map((mood) => (
              <option
                key={mood}
                value={mood}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Translucent background for options
                  color: '#ffffff', // White text for dropdown items
                  padding: '10px',
                  fontFamily: '"Poppins", sans-serif', // Consistent font
                  fontSize: '14px', // Slightly smaller font for options
                  border: 'none', // Remove default borders
                  borderRadius: '8px', // Rounded corners for options
                  transition: 'background-color 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(50, 50, 50, 0.8)'; // Highlight on hover
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Reset background on mouse out
                }}
              >
                {mood}
              </option>
            ))}
          </select>
        </div>
      </form>
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default MoodSelector;
