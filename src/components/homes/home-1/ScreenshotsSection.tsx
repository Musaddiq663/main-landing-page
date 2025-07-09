import React, { useEffect, useRef, useState } from 'react';

const ScreenshotsSection: React.FC = () => {
  const [modalImage, setModalImage] = useState<string>('');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Duplicate for infinite loop
  const screenshots: string[] = [
    'assets/img/ss1.jpg',
    'assets/img/ss2.jpg',
    'assets/img/ss3.jpg',
    'assets/img/ss4.jpg',
    'assets/img/ss5.jpg',
    'assets/img/ss6.jpg',
    'assets/img/ss7.jpg',
   

    // duplicate set for loop effect
   'assets/img/ss1.jpg',
    'assets/img/ss2.jpg',
    'assets/img/ss3.jpg',
    'assets/img/ss4.jpg',
    'assets/img/ss5.jpg',
    'assets/img/ss6.jpg',
    'assets/img/ss7.jpg',
  ];

  // Scroll with pause
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = 220; // 1 card
    const delay = 2000; // 2 sec

    const scrollStep = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    };

    const interval = setInterval(scrollStep, delay);
    return () => clearInterval(interval);
  }, []);

  // Modal logic
  const openModal = (src: string) => {
    setModalImage(src);
    const modalEl = document.getElementById('imageModal');
    if (modalEl) modalEl.style.display = 'flex';
  };

  const closeModal = () => {
    const modalEl = document.getElementById('imageModal');
    if (modalEl) modalEl.style.display = 'none';
  };

  // --- Inline Styles ---
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
    margin: '0 auto 40px',
    color: '#666',
    fontSize: '1rem',
  };

  const sliderWrapperStyle: React.CSSProperties = {
    overflowX: 'hidden',
    whiteSpace: 'nowrap',
    paddingBottom: '10px',
  };

  const cardStyle: React.CSSProperties = {
    display: 'inline-block',
    width: '200px',
    marginRight: '20px',
    position: 'relative',
    cursor: 'pointer',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    borderRadius: '10px',
    display: 'block',
    transition: 'transform 0.3s ease',
  };

  const plusIconStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '10px',
    borderRadius: '50%',
    opacity: 0,
    transition: '0.3s ease',
    pointerEvents: 'none',
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
    const icon = document.getElementById(`plus-${index}`);
    if (icon) icon.style.opacity = '1';
  };

  const handleMouseLeave = (index: number) => {
    setHoverIndex(null);
    const icon = document.getElementById(`plus-${index}`);
    if (icon) icon.style.opacity = '0';
  };

  const modalStyle: React.CSSProperties = {
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalImgStyle: React.CSSProperties = {
    maxWidth: '90%',
    maxHeight: '90%',
    borderRadius: '10px',
  };

  const closeBtnStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    fontSize: '2rem',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>App Screenshots</h2>
      <p style={paragraphStyle}>
        We ensure quality & support. People love us & we love them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div style={sliderWrapperStyle} ref={sliderRef}>
        {screenshots.map((src, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={src}
              style={{
                ...imageStyle,
                transform: hoverIndex === index ? 'scale(1.15)' : 'scale(1)',
              }}
              onClick={() => openModal(src)}
              alt={`Screenshot ${index + 1}`}
            />
            <i
              id={`plus-${index}`}
              className="fas fa-plus"
              style={plusIconStyle}
            ></i>
          </div>
        ))}
      </div>

      {/* Modal */}
      <div id="imageModal" style={modalStyle} onClick={closeModal}>
        <span style={closeBtnStyle}>&times;</span>
        <img src={modalImage} style={modalImgStyle} alt="Full View" />
      </div>
    </section>
  );
};

export default ScreenshotsSection;
