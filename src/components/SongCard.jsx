import React from 'react';

const SongCard = ({ song }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '400px',
        height: '150px',
        padding: '20px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 20px rgba(0, 255, 255, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        color: '#ffffff',
        fontFamily: 'Poppins, Arial, sans-serif',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 255, 255, 0.5)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 255, 255, 0.3)';
      }}
    >
      <div
        style={{
          fontSize: '50px',
          color: '#00ffff',
          flexShrink: 0,
        }}
      >
        🎵
      </div>
      <div
        style={{
          flex: 1,
          marginLeft: '20px',
          textAlign: 'left',
        }}
      >
        <p
          style={{
            margin: '0 0 10px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#ffffff',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {song.title}
        </p>
        <p
          style={{
            margin: '0 0 15px',
            fontSize: '16px',
            color: '#b3b3b3',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {song.artist}
        </p>
        <a
          href={song.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            fontSize: '14px',
            color: '#000000',
            backgroundColor: '#00ffff',
            borderRadius: '6px',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#00bcd4';
            e.target.style.color = '#ffffff';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#00ffff';
            e.target.style.color = '#000000';
          }}
        >
          Mooder
        </a>
      </div>
    </div>
  );
};

export default SongCard;
