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
        marginTop: '50px',
        marginBottom: '50px',
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
            textTransform: '',
            letterSpacing: '',
            color: '#00ffff',
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
              borderRadius: '6px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#ffffff',
              cursor: 'pointer',
              outline: 'none',
              boxShadow: '0 4px 10px rgba(0, 255, 255, 0.2)',
              transition: 'all 0.3s ease',
              animation: 'float 3s infinite ease-in-out', // Updated animation
              fontFamily: '"Anton", sans-serif', // Updated font
            }}
          >
            <option value="" disabled>
              {translations[language].placeholder}
            </option>
            {moods.map((mood) => (
              <option key={mood} value={mood}>
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
