export default function Navbar() {
  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <a href="#" style={styles.logo}>
          Viorita<span style={{ color: "#38bdf8" }}>.dev</span>
        </a>
        <nav style={styles.navLinks}>
          <a href="#tentang">Tentang</a>
          <a href="#proyek">Proyek</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#pengalaman">Pengalaman</a>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "rgba(11, 15, 23, 0.8)",
    backdropFilter: "blur(8px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
    borderBottom: "1px solid #1e293b",
    padding: "1rem 0",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#ffffff",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem" /* Memberi jarak antar menu agar tidak menumpuk */,
  },
};
