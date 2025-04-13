import React, { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import mockSongs from '/mockSongs.json';

const HomePage = () => {
  const [selectedMoods, setSelectedMoods] = useState([]);
  const [songs, setSongs] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMoodSelect = (moods) => {
    setIsAnimating(true); // Start the "ease out" animation
    setTimeout(() => {
      setSelectedMoods(moods);
      const newSongs = [];
      moods.forEach((mood) => {
        if (mockSongs[mood]) {
          newSongs.push(...mockSongs[mood]);
        }
      });
      setSongs(newSongs); // Update the songs after the animation
      setIsAnimating(false); // Reset animation state
    }, 500); // Duration of the "ease out" animation
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.5))', // Glassmorphism background
        backdropFilter: 'blur(10px)', // Blur effect
        minHeight: '100vh',
        fontFamily: 'Poppins, Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between', // Adjust for footer
        padding: '20px',
      }}
    >
      <div style={{ flex: 1, width: '100%' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#ffffff',
            marginBottom: '20px',
            marginTop: '80px',
            fontWeight: 'bold',
            textShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Subtle text shadow
          }}
        >
          Welcome to Moodye
        </h1>
        <MoodSelector
          moods={Object.keys(mockSongs)}
          onMoodSelect={handleMoodSelect}
        />
        {songs.length > 0 && (
          <div
            style={{
              padding: '30px 20px',
              textAlign: 'center',
              color: '#ffffff',
              borderRadius: '16px',
              margin: '40px auto',
              maxWidth: '80vw',
              background: 'rgba(255, 255, 255, 0.2)', // Translucent background
              backdropFilter: 'blur(15px)', // Glassmorphism blur
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', // Glassmorphism shadow
              border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
            }}
          >
        
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}
            >
              {songs.map((song, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    marginBottom: '10px',
                    backgroundColor: song.color, // Use the color from the JSON
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
                    animation: isAnimating
                      ? `fadeOut 0.5s ease ${index * 0.2}s forwards`
                      : `fadeIn 0.5s ease ${index * 0.2}s forwards`, // Animation with delay
                    opacity: 0, // Start hidden
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '20px',
                        color: '#ffffff',
                      }}
                    >
                      🎵
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '15px',
                          fontWeight: 'bold',
                          color: '#ffffff',
                        }}
                      >
                        {song.title}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: '13px',
                          color: '#ffffff',
                        }}
                      >
                        {song.artist}
                      </p>
                    </div>
                  </div>
                  <a
                    href={song.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '6px 12px',
                      fontSize: '13px',
                      color: '#ffffff',
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Translucent button
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#ffffff';
                      e.target.style.color = '#000000';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
                      e.target.style.color = '#ffffff';
                    }}
                  >
                    Listen
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <footer
        style={{
          marginTop: '20px',
          textAlign: 'center',
          color: '#ffffff',
          fontSize: '14px',
          opacity: 0.8,
        }}
      >
        Build with ❤ By Espoir Keven
      </footer>
    </div>
  );
};

export default HomePage;
