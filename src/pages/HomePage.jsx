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
                background: 'linear-gradient(135deg, #ffffff, #f0f0f0)', // White gradient background
                backdropFilter: 'blur(10px)',
                minHeight: '100vh',
                minWidth: '100vw',
                fontFamily: 'Poppins, Arial, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <div style={{ flex: 1, width: '100%' }}>
                <h1
                    style={{
                        textAlign: 'center',
                        color: '#000000', // Black text for contrast
                        marginBottom: '20px',
                        marginTop: '80px',
                        fontWeight: 'bold',
                        fontSize: '3rem',
                        textShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Subtle shadow
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
                            color: '#000000', // Black text for contrast
                            borderRadius: '16px',
                            margin: '40px auto',
                            maxWidth: '80vw',
                            background: 'rgba(255, 255, 255, 0.9)', // White translucent background
                            backdropFilter: 'blur(15px)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', // Softer shadow
                            border: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border
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
                                        backgroundColor: song.color,
                                        borderRadius: '12px',
                                        border: '1px solid rgba(0, 0, 0, 0.1)', // Subtle border
                                        animation: isAnimating
                                            ? `fadeOut 0.5s ease ${index * 0.2}s forwards`
                                            : `fadeIn 0.5s ease ${index * 0.2}s forwards`,
                                        opacity: 0,
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
                                                color: '#000000', // Black icon for contrast
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
                                                    color: '#000000', // Black text for contrast
                                                }}
                                            >
                                                {song.title}
                                            </p>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    fontSize: '13px',
                                                    color: '#000000', // Black text for contrast
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
                                            color: '#ffffff', // White text for button
                                            backgroundColor: '#000000', // Black button
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
                                            e.target.style.backgroundColor = '#000000';
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
                    marginBottom: '20px',
                    textAlign: 'center',
                    color: '#000000', // Black text for footer
                    fontSize: '12px',
                    opacity: 0.8,
                }}
            >
                Build with ❤ By <a style={{color:'#000000', opacity:1, textDecoration: 'underline'}} href="https://web.facebook.com/espoir.keven.2025"> Espoir Keven</a>
            </footer>
        </div>
    );
};

export default HomePage;
