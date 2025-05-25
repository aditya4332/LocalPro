import React, { useState } from "react";

const services = [
  { id: "plumber", name: "Plumber", emoji: "🔧", description: "Leak repairs, installations, and maintenance." },
  { id: "electrician", name: "Electrician", emoji: "💡", description: "Wiring, lighting, and all electrical work." },
  { id: "painter", name: "Painter", emoji: "🎨", description: "Interior and exterior painting services." },
  { id: "chef", name: "Chef", emoji: "👩‍🍳", description: "Homemade meals prepared by professionals." },
];

const stateCity = {
  Uttar_Pradesh: ["Noida", "Greater Noida", "Meerut", "Gorakhpur"],
  Delhi: ["New Delhi", "South Delhi", "North Delhi"],
};

const formspreeUrl = "https://formspree.io/f/xnndyrjw";

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict("");
  };

  const styles = {
    backgroundWrapper: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      overflow: "hidden",
    },
    backgroundImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.4)",
    },
    container: {
      minHeight: "100vh",
      fontFamily: "Segoe UI, sans-serif",
      color: "#eee",
      padding: 20,
      boxSizing: "border-box",
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 30px",
      marginBottom: 20,
      backgroundColor: "rgba(0,0,0,0.6)",
      borderRadius: 8,
    },
    navLink: {
      color: "#eee",
      marginLeft: 20,
      textDecoration: "none",
      fontWeight: "600",
      cursor: "pointer",
    },
    hero: {
      textAlign: "center",
      marginBottom: 40,
      padding: "60px 20px",
      backgroundColor: "rgba(0,0,0,0.6)",
      borderRadius: 12,
    },
    heroTitle: {
      fontSize: "2.8rem",
      marginBottom: 10,
    },
    heroSubtitle: {
      fontSize: "1.2rem",
      marginBottom: 20,
      fontWeight: "500",
    },
    button: {
      backgroundColor: "#3b82f6",
      color: "white",
      border: "none",
      padding: "14px 28px",
      fontSize: 16,
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: "600",
    },
    section: {
      backgroundColor: "rgba(0,0,0,0.6)",
      borderRadius: 12,
      padding: "40px 30px",
      marginBottom: 40,
    },
    grid: {
      display: "grid",
      gap: 24,
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      marginTop: 20,
    },
    card: {
      background: "rgba(255,255,255,0.1)",
      padding: 20,
      borderRadius: 12,
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      transition: "transform 0.3s ease",
      color: "#eee",
    },
    cardHover: {
      transform: "scale(1.05)",
      backgroundColor: "rgba(59, 130, 246, 0.7)",
    },
    modalBackdrop: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    modal: {
      background: "#222",
      padding: 30,
      borderRadius: 12,
      width: 350,
      maxWidth: "90%",
      position: "relative",
      color: "#eee",
      boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
    },
    input: {
      width: "100%",
      marginBottom: 12,
      padding: 10,
      fontSize: 16,
      borderRadius: 6,
      border: "1px solid #555",
      backgroundColor: "#333",
      color: "#eee",
    },
    footer: {
      backgroundColor: "rgba(0,0,0,0.6)",
      color: "#aaa",
      textAlign: "center",
      padding: 20,
      fontSize: 14,
      borderRadius: 8,
      marginTop: "auto",
    },
    close: {
      position: "absolute",
      top: 10,
      right: 20,
      fontSize: 28,
      cursor: "pointer",
      color: "#999",
    },
  };

  return (
    <>
      <div style={styles.backgroundWrapper}>
        <img src="/images/new.jpg" alt="Background" style={styles.backgroundImage} />
      </div>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1>🏠 LocalPro</h1>
          <nav>
            <a href="#services" style={styles.navLink}>Services</a>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>
        </header>

        <section style={styles.hero}>
          <h2 style={styles.heroTitle}>LocalPro - Connecting Service Providers</h2>
          <p style={styles.heroSubtitle}>Plumbing, Electrical, Painting & Cooking Services</p>
          <button
            style={styles.button}
            onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
          >
            Need Help, Click here
          </button>
        </section>

        <section id="services" style={styles.section}>
          <h2>Our Services</h2>
          <div style={styles.grid}>
            {services.map(service => (
              <div
                key={service.id}
                style={{
                  ...styles.card,
                  ...(hoveredId === service.id ? styles.cardHover : {}),
                }}
                onClick={() => setSelectedService(service)}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <h3>{service.emoji} {service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
              <p style={{ marginTop: 20 }}>
            Are you a service provider? <a href="#contact" style={{ color: "#3b82f6", textDecoration: "underline" }}>List your services here</a>.
          </p>
        </section>

        <section id="about" style={styles.section}>
          <h2>About Us</h2>
          <p>
            <strong>LocalPro</strong> is your go-to solution for booking certified local professionals for essential home services. From fixing electrical faults to painting walls or preparing delicious home-cooked meals, our mission is to simplify how you connect with experts near you.
          </p>
          <p>
            Our platform promotes transparency, affordability, and trust between customers and skilled professionals. We are driven by technology and customer satisfaction, with a goal of making home services more accessible, convenient, and efficient for everyone.
          </p>
        </section>

        <section id="contact" style={styles.section}>
          <h2>Contact Us</h2>
          <form action={formspreeUrl} method="POST" style={{ display: "flex", flexDirection: "column", gap: 15, maxWidth: 500, margin: "auto" }}>
            <input type="text" name="name" placeholder="Your Name" required style={styles.input} />
            <input type="email" name="email" placeholder="Your Email" required style={styles.input} />
            <input type="tel" name="mobile" placeholder="Mobile Number" pattern="[0-9]{10}" required style={styles.input} />
            <textarea name="message" placeholder="Your Message" required style={{ ...styles.input, height: 100 }} />
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </section>

        <section id="terms" style={styles.section}>
          <h2>Terms & Conditions</h2>
          <p>
            LocalPro connects users with independent service providers. We do not guarantee service outcomes or pricing. By booking, you agree to our terms of use and understand that each provider is independently responsible for their service.
          </p>
        </section>

        <section id="privacy" style={styles.section}>
          <h2>Privacy Policy</h2>
          <p>
            Your privacy is important to us. Any information submitted is used only to process your requests and will not be shared. You may contact us anytime at <a href="mailto:adityaxtm25@gmai.com" style={{ color: "#3b82f6" }}>adityaxtm25@gmai.com</a>.
          </p>
        </section>

        {selectedService && (
          <div style={styles.modalBackdrop} onClick={() => setSelectedService(null)}>
            <div style={styles.modal} onClick={e => e.stopPropagation()}>
              <span style={styles.close} onClick={() => setSelectedService(null)}>&times;</span>
              <h2>Book a {selectedService.name}</h2>
              <form action={formspreeUrl} method="POST" style={{ display: "flex", flexDirection: "column" }}>
                <input name="name" type="text" placeholder="Your Name" required style={styles.input} />
                <input name="address" type="text" placeholder="Address" required style={styles.input} />
                <input name="mobile" type="tel" placeholder="Mobile" required style={styles.input} />
                <select name="state" required style={styles.input} value={selectedState} onChange={handleStateChange}>
                  <option value="">Select State</option>
                  {Object.keys(stateCity).map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <select name="City" required style={styles.input} value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)}>
                  <option value="">Select City</option>
                  {selectedState && stateCity[selectedState].map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                <input name="date" type="date" required style={styles.input} />
                <input name="time" type="time" required style={styles.input} />
                <input name="service" type="hidden" value={selectedService.name} />
                <button type="submit" style={styles.button}>Confirm Booking</button>
              </form>
            </div>
          </div>
        )}

        <footer style={styles.footer}>
          <p>© {new Date().getFullYear()} LocalPro — All Rights Reserved.</p>
          <p>
            Designed by
            <a href="https://www.instagram.com/aditya_xtm" style={styles.navLink}>Aditya Singh</a>
            <a href="https://www.instagram.com/vansh_jaiswal57/" style={styles.navLink}>Vansh Jaiswal</a>
            <a href="https://www.instagram.com/amkr221/" style={styles.navLink}>Amit Kumar</a>
            <a href="https://www.instagram.com/mr_kush__991/" style={styles.navLink}>Ajay Kushwaha</a>
          </p>
          <div style={{ marginTop: 10 }}>
            <a href="mailto:adityaxtm25@gmai.com" style={styles.navLink}>Email Us</a>
            <a href="https://www.linkedin.com/in/adityasingh7345" style={styles.navLink}>LinkedIn</a>
            {/* <a href="https://github.com" target="_blank" style={styles.navLink}>GitHub</a> */}
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;


