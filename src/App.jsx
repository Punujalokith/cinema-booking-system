function App() {
  return (
    <div style={{
      backgroundColor: "#0f0f0f",
      color: "gold",
      minHeight: "100vh",
      padding: "40px"
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        🎬 Cinema Booking System
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap"
      }}>
        <div style={{
          backgroundColor: "#1c1c1c",
          padding: "20px",
          borderRadius: "10px",
          width: "200px",
          textAlign: "center"
        }}>
          <h3>Avengers</h3>
          <p>Action / Adventure</p>
          <button style={{
            backgroundColor: "gold",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer"
          }}>
            Book Now
          </button>
        </div>

        <div style={{
          backgroundColor: "#1c1c1c",
          padding: "20px",
          borderRadius: "10px",
          width: "200px",
          textAlign: "center"
        }}>
          <h3>Interstellar</h3>
          <p>Sci-Fi / Drama</p>
          <button style={{
            backgroundColor: "gold",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer"
          }}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
