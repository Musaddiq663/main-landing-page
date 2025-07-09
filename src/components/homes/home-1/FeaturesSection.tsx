import React, { useState, useEffect } from 'react';

const FeaturesSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const features = [
    {
      title: 'Secure Browsing',
      description: 'Your online activity stays protected and encrypted.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Fast Connection',
      description: 'Enjoy high-speed servers across the globe.',
      icon: 'fas fa-tachometer-alt',
    },
    {
      title: 'No Logs Policy',
      description: 'We don’t track your browsing or store logs.',
      icon: 'fas fa-user-secret',
    },
    {
      title: 'Global Servers',
      description: 'Access content worldwide with multiple server locations.',
      icon: 'fas fa-globe',
    },
    {
      title: 'One-Tap Connect',
      description: 'Just one tap to start protecting your internet.',
      icon: 'fas fa-fingerprint',
    },
    {
      title: 'Unlimited Bandwidth',
      description: 'No limits on streaming, downloads or surfing.',
      icon: 'fas fa-infinity',
    },
  ];

  const sectionStyle: React.CSSProperties = {
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1A2237',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const paragraphStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto 50px',
    color: '#555',
    fontSize: '1rem',
  };

  const layoutStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
  };

  const cardColumnStyle = (side: 'left' | 'right'): React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: side === 'left' ? 'flex-end' : 'flex-start',
  });

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '18px 18px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '330px',
    height: '130px',
    textAlign: 'left',
    transition: 'transform 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const iconHeadingRow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  };

  const iconStyle = (hover: boolean): React.CSSProperties => ({
    fontSize: '1.5rem',
    color: hover ? '#007bff' : '#444',
    transform: hover ? 'translateX(4px)' : 'translateX(0)',
    transition: 'all 0.3s ease',
  });

  const imageStyle: React.CSSProperties = {
    width: '240px',
    height: 'auto',
    margin: '0 60px 0 20px',
  };

  const isShifted = (desc: string) =>
    desc === 'Enjoy high-speed servers across the globe.' ||
    desc === 'Just one tap to start protecting your internet.';

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Awesome Features</h2>
      <p style={paragraphStyle}>
        We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div style={layoutStyle}>
        {/* Left Side Cards */}
        <div style={cardColumnStyle('left')}>
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              style={{
                ...cardStyle,
                transform: hoveredCard === index
                  ? 'translateX(-6px)'
                  : isShifted(feature.description)
                  ? 'translateX(-12px)'
                  : 'translateX(0)',
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={iconHeadingRow}>
                <i className={feature.icon} style={iconStyle(hoveredCard === index)}></i>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{feature.title}</h4>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* App Image Center */}
        <div>
          <img src="assets/img/ss2.jpg" alt="Light VPN App" style={imageStyle} />
        </div>

        {/* Right Side Cards */}
        <div style={cardColumnStyle('right')}>
          {features.slice(3, 6).map((feature, index) => (
            <div
              key={index + 3}
              style={{
                ...cardStyle,
                transform: hoveredCard === index + 3
                  ? 'translateX(6px)'
                  : isShifted(feature.description)
                  ? 'translateX(-12px)'
                  : 'translateX(0)',
              }}
              onMouseEnter={() => setHoveredCard(index + 3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={iconHeadingRow}>
                <i className={feature.icon} style={iconStyle(hoveredCard === index + 3)}></i>
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{feature.title}</h4>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
