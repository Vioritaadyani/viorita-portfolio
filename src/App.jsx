import profileImage from "./assets/profil-vio.png";
import apeselImage from "./assets/apesel.png";
import ekeuImage from "./assets/ekeu.png";
import dashboardImage from "./assets/dashboard.jpeg";
import salesDashboardImage from "./assets/sales-dashboard.png";
import React from "react";
import { motion } from "framer-motion";

export default function App() {
  // Data Pengalaman Kerja
  const experiences = [
    {
      id: 1,
      title: "MagangHub Kemnaker - Rumah Tahanan Negara Kelas IIB Gianyar",
      role: "Web Developer & Data Administrator",
      period: "Nov 2025 - Mei 2026",
      desc: "Mengelola dan mengembangkan website Sistem Elektronik Keuangan Rutan Gianyar, memelihara sistem agenda penomoran surat elektronik (APESEL), serta mengelola pengarsipan data administrasi secara digital.",
      achievement:
        "Terpilih sebagai Peserta Magang Terbaik Program MagangHub Kemnaker Tahun 2026 🏆",
    },
    {
      id: 2,
      title: "Kementerian Keuangan RI",
      role: "Administrasi & Pengelola Data",
      period: "Apr 2025 - Jun 2025",
      desc: "Melakukan administrasi & pengarsipan dokumen perpajakan (STP & non-STP), mengelola Dokumen Evaluasi Kinerja (DEK/HEK), memeriksa kelengkapan berkas ke sistem Coretax, serta menginput data via aplikasi UPDDP.",
    },
    {
      id: 3,
      title: "MSIB Startup Campus",
      role: "Data Science Track",
      period: "Apr 2024 - Jun 2024",
      desc: "Menguasai SQL, Python, data preprocessing, EDA, dan machine learning untuk insight bisnis. Menyelesaikan final project pembuatan dashboard interaktif berbasis Data Science & AI.",
    },
    {
      id: 4,
      title: "Volunteer Event Lari (Geromburun & Smansa Run)",
      role: "Koordinator Layanan & Operasional Lapangan",
      period: "Sep 2025 - Nov 2025",
      desc: "Memastikan verifikasi data peserta, pengelolaan race pack, distribusi refreshment, penanganan medali garis finish, serta koordinasi tim di lapangan.",
    },
  ];

  // Data Proyek Utama
  const projects = [
    {
      id: 1,
      title: "APESEL (Agenda Penomoran Surat Elektronik)",
      role: "Full Stack Web & Admin System",
      image: apeselImage,
      description:
        "Sistem agenda penomoran surat elektronik Rutan Kelas IIB Gianyar. Mengotomatisasi penomoran surat, mencegah duplikasi, dan mempercepat pencarian arsip digital.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Arsip Digital"],
      link: "https://apesel.rutangianyar.com",
    },
    {
      id: 2,
      title: "Sistem Keuangan Rutan Gianyar & Modul SIKERANG",
      role: "Full Stack Web & Data Analyst",
      image: ekeuImage,
      description:
        "Platform terpadu pengelolaan keuangan, perjalanan dinas, dan laporan kinerja pegawai Rutan Gianyar yang terintegrasi dengan modul layanan informasi gaji (SIKERANG).",
      tags: ["Laravel", "MySQL", "Chart.js", "Bootstrap", "Financial System"],
      link: "https://e-keu.rutangianyar.com",
    },
    {
      id: 3,
      title: "Bank Financial Overview Dashboard (2020-2023)",
      role: "Data Science & BI Analyst",
      image: dashboardImage,
      description:
        "Dashboard analisis keuangan bank interaktif yang memvisualisasikan Net Income, ROA/ROE, Profit Margin, Altman Z-Score, serta rasio utang secara komprehensif.",
      tags: [
        "Looker Studio",
        "Data Visualization",
        "Financial Analysis",
        "SQL",
        "Python",
      ],
      link: "https://datastudio.google.com/reporting/f270db84-ee6d-431b-a2d0-1b25c8ddd715/page/UFN2D",
    },
    {
      id: 4,
      title: "Dashboard Penjualan & Clustering K-Means",
      role: "Data Scientist & Python Developer",
      image: salesDashboardImage,
      description:
        "Aplikasi web interaktif berbasis Streamlit & K-Means Clustering untuk segmentasi produk e-commerce toko barang unik, rekomendasi strategi bisnis otomatis (bundling/promosi), serta fitur export hasil analisis CSV.",
      tags: [
        "Python",
        "Streamlit",
        "K-Means",
        "Scikit-Learn",
        "Pandas",
        "E-Commerce",
      ],
      link: "https://dashboard-toko-barang-unik.streamlit.app/",
    },
  ];

  // Data Sertifikasi Resmi Berdasarkan Dokumen
  const certifications = [
    {
      id: 1,
      title: "Piagam Peserta Magang Terbaik 🏆",
      issuer: "Kementerian Hukum dan HAM / Kemnaker - Rutan Kelas IIB Gianyar",
      period: "Mei 2026",
      credential: "Nomor: WP.20-1008.SA.05.03 TAHUN 2026",
      desc: "Penghargaan atas kontribusi dan kinerja luar biasa dalam pelaksanaan tugas Pemasyarakatan pada Program Nasional MagangHub Batch 2.",
      fileUrl: "/Piagam_Magang_Terbaik.jpeg",
      badge: "Prestasi Utama",
    },
    {
      id: 2,
      title: "Sertifikat Kelulusan Pemagangan (Predikat Sangat Baik)",
      issuer: "SIAPkerja Kemnaker - Rutan Kelas IIB Gianyar",
      period: "Nov 2025 - Mei 2026",
      credential: "Nomor: MN.051.009240.02.2025",
      desc: "Menyelesaikan program pemagangan perguruan tinggi posisi Pengelola Fasilitas Umum dengan predikat 'Sangat Baik'.",
      fileUrl: "/Sertifikat_MagangHub_Gianyar.pdf",
      badge: "Kemnaker RI",
    },
    {
      id: 3,
      title: "Sertifikat Magang Kementerian Keuangan RI",
      issuer: "Kanwil DJP Sulawesi Selatan, Barat, dan Tenggara",
      period: "Apr 2025 - Jun 2025",
      credential: "Nomor: SKT-1158/SJ.51/2025",
      desc: "Sertifikasi resmi penyelesaian magang pengelolaan administrasi, Dokumen Evaluasi Kinerja, dan integrasi sistem Coretax/UPDDP.",
      fileUrl: "/Sertifikat_Magang_Kemenkeu.pdf",
      badge: "Kemenkeu RI",
    },
    {
      id: 4,
      title: "Data Science & Artificial Intelligence (Grade A - 88.00)",
      issuer: "MSIB Kampus Merdeka - Startup Campus Batch 6",
      period: "Feb 2024 - Jun 2024",
      credential: "ID: 8729720 (20 SKS)",
      desc: "Studi independen komprehensif menguasai SQL, Python, Preprocessing, Machine Learning, Data Visualization, AI, dan Final Project deployment.",
      fileUrl: "/Sertifikat_Startup_Campus_DSAI.pdf",
      badge: "Studi Independen MSIB",
    },
  ];

  // Hard Skills Murni dari CV
  const hardSkills = [
    "Web Development (HTML, CSS, JS, PHP)",
    "Data Analysis & Visualization (Python, SQL, Power BI, Excel, Looker Studio)",
    "Administrasi & Pengelolaan Dokumen",
    "Sistem Informasi & Database",
    "Data Science & Data Analyst",
    "Sistem Coretax & UPDDP App",
    "Microsoft Office (Word, Excel, Email)",
    "Digital Marketing (SEO, Google Analytics, Meta Ads)",
    "E-Commerce Analytics",
  ];

  // Soft Skills Murni dari CV
  const softSkills = [
    "Problem Solving",
    "Teliti, jujur, dan bertanggung jawab",
    "Komunikasi efektif & kemampuan koordinasi",
    "Mampu bekerja di bawah tekanan",
    "Adaptif & Kolaboratif",
    "Manajemen Waktu",
  ];

  // Organisasi dari CV
  const organizations = [
    {
      role: "Bendahara Umum",
      name: "Dewan Perwakilan Mahasiswa Teknologi Informasi",
      period: "Okt 2024 - Sekarang",
    },
    {
      role: "Pengurus Sumber Daya Manusia (SDM)",
      name: "Himpunan Mahasiswa Teknologi Informasi (HIMATESI)",
      period: "Okt 2022 - Okt 2024",
    },
  ];

  // Tools & Software MURNI Sesuai CV
  const toolsFromCV = [
    {
      name: "Python",
      category: "Data Science & Analysis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SQL",
      category: "Database & Analysis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Power BI",
      category: "Data Visualization",
      icon: "https://cdn.simpleicons.org/powerbi/F2C811",
    },
    {
      name: "Looker Studio",
      category: "Data Visualization",
      icon: "https://cdn.simpleicons.org/googlelookerstudio/4285F4",
    },
    {
      name: "Microsoft Excel",
      category: "Data Analysis & Office",
      icon: "https://cdn.simpleicons.org/microsoftexcel/217346",
    },
    {
      name: "PHP",
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    },
    {
      name: "JavaScript",
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML & CSS",
      category: "Web Development",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Microsoft Word",
      category: "Microsoft Office",
      icon: "https://cdn.simpleicons.org/microsoftword/2B579A",
    },
    {
      name: "Sistem Coretax",
      category: "Administrasi Perpajakan",
      icon: "https://cdn.simpleicons.org/governmentofindonesia/E72322",
    },
    {
      name: "UPDDP App",
      category: "Aplikasi Data Kemenkeu",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Meta Ads",
      category: "Digital Marketing Tools",
      icon: "https://cdn.simpleicons.org/meta/0467DF",
    },
    {
      name: "Google Analytics",
      category: "Digital Marketing Tools",
      icon: "https://cdn.simpleicons.org/googleanalytics/E37400",
    },
    {
      name: "SEO Tools",
      category: "Digital Marketing",
      icon: "https://cdn.simpleicons.org/googlesearchconsole/4285F4",
    },
  ];

  // Variasi Animasi Framer Motion
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col justify-between selection:bg-rose-500/30 selection:text-rose-200 relative overflow-hidden font-sans scroll-smooth">
      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-900/30 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-[140px]"
        />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070a12]/80 border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-wide text-white flex items-center gap-2.5 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 group-hover:scale-125 transition-transform"></span>
            <span>
              Viorita Adnyani
              <span className="text-rose-300 font-semibold">, S.Kom.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a
              href="#tentang"
              className="hover:text-rose-300 transition-colors"
            >
              Tentang
            </a>
            <a
              href="#pengalaman"
              className="hover:text-rose-300 transition-colors"
            >
              Pengalaman
            </a>
            <a
              href="#sertifikasi"
              className="hover:text-rose-300 transition-colors"
            >
              Sertifikasi
            </a>
            <a href="#proyek" className="hover:text-rose-300 transition-colors">
              Proyek
            </a>
            <a
              href="#keahlian"
              className="hover:text-rose-300 transition-colors"
            >
              Keahlian
            </a>
            <a href="#kontak" className="hover:text-rose-300 transition-colors">
              Kontak
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow space-y-28 relative z-10">
        {/* HERO SECTION */}
        <section id="tentang" className="pt-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-6 max-w-2xl text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Peserta Magang Terbaik Kemnaker 2026 🏆
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Halo, Saya <br />
                  <span className="bg-gradient-to-r from-rose-200 via-rose-300 to-indigo-200 bg-clip-text text-transparent">
                    Viorita Adnyani, S.Kom.
                  </span>
                </h1>

                <p className="text-xs sm:text-sm font-semibold text-rose-300/90 mt-3 tracking-wide leading-relaxed">
                  Fullstack Developer <span className="text-slate-600">|</span>{" "}
                  Web Development <span className="text-slate-600">|</span> IT
                  Support <span className="text-slate-600">|</span> Data Science{" "}
                  <span className="text-slate-600">|</span> Administration
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Lulusan Sarjana Teknologi Informasi Universitas Bosowa (
                <strong className="text-rose-200 font-semibold">
                  IPK 3.88
                </strong>
                ) dengan pengalaman praktis di bidang data analysis, data
                science, web development, IT support, serta administrasi sistem.
                Berpengalaman dalam pengelolaan sistem informasi instansi
                pemerintah, pengarsipan dokumen digital, serta visualisasi data.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <svg
                    className="w-4 h-4 text-rose-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Makassar, Sulawesi Selatan
                </div>
                <span className="text-slate-700 hidden sm:inline">•</span>
                <span>🎓 Universitas Bosowa (2021 - 2025)</span>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3.5 pt-2">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#proyek"
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-white text-slate-950 font-bold text-sm transition-all duration-300 shadow-lg flex items-center gap-2 group"
                >
                  Lihat Proyek
                  <svg
                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/CV_Viorita_Adnyani.pdf"
                  target="_blank"
                  download="CV_Viorita_Adnyani.pdf"
                  className="px-5 py-3 rounded-xl bg-rose-500/20 border border-rose-500/50 hover:bg-rose-500/30 text-rose-200 font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <svg
                    className="w-4 h-4 text-rose-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Unduh CV (PDF)
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:vioritaadyani759@gmail.com"
                  className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 text-slate-200 font-semibold text-sm transition-all duration-300"
                >
                  Hubungi Saya
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0 group"
            >
              <div className="w-64 sm:w-72 rounded-2xl bg-slate-900/90 border border-slate-800 p-4 shadow-xl text-center space-y-4 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-rose-500/30 group-hover:shadow-2xl">
                <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 relative">
                  <img
                    src={profileImage}
                    alt="Viorita Adnyani"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-white text-base tracking-wide group-hover:text-rose-200 transition-colors">
                    VIORITA ADNYANI
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    S1 Teknologi Informasi (IPK 3.88)
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex justify-center">
                  <span className="text-[11px] px-3 py-1 rounded-full bg-slate-950 text-slate-400 border border-slate-800 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PENGALAMAN KERJA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="pengalaman"
          className="space-y-6 pt-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-rose-400 rounded-full"></span>
              Pengalaman Kerja & Magang
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Rekam jejak profesional di instansi pemerintahan dan organisasi
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                whileHover={{ x: 6 }}
                className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 transition-all duration-300 hover:border-rose-500/30 backdrop-blur-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xs font-semibold text-rose-300 mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-950 text-slate-400 border border-slate-800 w-fit">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.desc}
                </p>
                {exp.achievement && (
                  <div className="mt-3 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1.5 rounded-lg w-fit">
                    {exp.achievement}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BAGIAN SERTIFIKASI & PENGHARGAAN RESMI */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="sertifikasi"
          className="space-y-6 pt-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-rose-400 rounded-full"></span>
              Sertifikasi & Penghargaan
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Lisensi, sertifikat resmi instansi, serta penghargaan kompetensi
              terverifikasi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -6 }}
                className="bg-slate-900/40 border border-slate-800/80 hover:border-rose-500/40 rounded-3xl p-6 flex flex-col justify-between space-y-4 backdrop-blur-sm transition-all duration-300 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {cert.period}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-rose-200 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {cert.credential}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <a
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 hover:text-rose-200 transition-colors group/link"
                  >
                    Lihat Dokumen Sertifikat{" "}
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROYEK UTAMA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="proyek"
          className="space-y-6 pt-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-rose-400 rounded-full"></span>
              Proyek & Implementasi Sistem
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Sistem informasi resmi, aplikasi machine learning, dan karya
              analisis data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900/40 border border-slate-800/80 hover:border-rose-500/40 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl flex flex-col justify-between group backdrop-blur-sm"
              >
                <div>
                  <div className="w-full h-56 bg-slate-950 overflow-hidden relative border-b border-slate-800/80">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-950 text-slate-600 text-xs font-semibold">
                        <span>Preview Tidak Tersedia</span>
                      </div>
                    )}

                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-950/90 text-rose-300 border border-slate-800 backdrop-blur-md shadow-md">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 space-y-4">
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.link && item.link !== "#" && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-300 hover:text-rose-200 transition-colors pt-1 group/link"
                    >
                      Buka Website{" "}
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* KEAHLIAN & TOOLS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="keahlian"
          className="space-y-10 pt-6"
        >
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-rose-400 rounded-full"></span>
              Tools, Software & Keahlian
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Perangkat lunak, aplikasi, dan teknologi yang tertera pada rekam
              jejak CV saya
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {toolsFromCV.map((tool, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.04, y: -4 }}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/40 rounded-2xl p-4 flex items-center gap-3.5 transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-sm group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-950 p-2 flex items-center justify-center border border-slate-800/80 group-hover:scale-110 transition-transform flex-shrink-0">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain filter contrast-125"
                  />
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-white text-xs sm:text-sm truncate group-hover:text-rose-200 transition-colors">
                    {tool.name}
                  </h4>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 truncate mt-0.5">
                    {tool.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start pt-2">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-7 space-y-6 shadow-xl backdrop-blur-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  Hard Skill
                </div>
                <div className="flex flex-wrap gap-2">
                  {hardSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-950/80 border border-slate-800/80 hover:border-rose-500/30 rounded-xl px-3.5 py-2 text-xs text-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800/60 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-xs uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Soft Skill
                </div>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/30 rounded-xl px-3.5 py-2 text-xs text-slate-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-7 space-y-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                Pengalaman Organisasi
              </div>

              <div className="relative border-l-2 border-slate-800/80 ml-3 pl-6 space-y-6">
                {organizations.map((org, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border-2 border-rose-400 group-hover:bg-rose-400 transition-colors"></span>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="font-bold text-white text-sm group-hover:text-rose-200 transition-colors">
                        {org.role}
                      </h4>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-950 px-2.5 py-0.5 rounded-full border border-slate-800/80 w-fit">
                        {org.period}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{org.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* KONTAK SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          id="kontak"
          className="space-y-8 pt-6"
        >
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-300">
              Kontak
            </span>
            <h2 className="text-3xl font-extrabold text-white">Hubungi Saya</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Silakan hubungi saya melalui WhatsApp atau email untuk diskusi
              proyek, tawaran kerja, maupun kolaborasi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.a
              whileHover={{ y: -6 }}
              href="https://wa.me/6285156395873"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 rounded-3xl p-8 text-center space-y-4 transition-all duration-300 group shadow-xl flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.205 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">WhatsApp</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Respons cepat via pesan WhatsApp.
                </p>
              </div>
              <span className="text-sm font-semibold text-emerald-400 group-hover:underline">
                +62 851-5639-5873
              </span>
            </motion.a>

            <motion.a
              whileHover={{ y: -6 }}
              href="mailto:vioritaadyani759@gmail.com"
              className="bg-slate-900/60 border border-slate-800/80 hover:border-rose-500/50 hover:bg-slate-900 rounded-3xl p-8 text-center space-y-4 transition-all duration-300 group shadow-xl flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-300 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Email</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Kirimkan penawaran atau pesan formal.
                </p>
              </div>
              <span className="text-sm font-semibold text-rose-300 group-hover:underline break-all">
                vioritaadyani759@gmail.com
              </span>
            </motion.a>

            <motion.a
              whileHover={{ y: -6 }}
              href="https://maps.google.com/?q=Makassar,+Sulawesi+Selatan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900 rounded-3xl p-8 text-center space-y-4 transition-all duration-300 group shadow-xl flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Lokasi</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Berdomisili saat ini.
                </p>
              </div>
              <span className="text-sm font-semibold text-indigo-300 group-hover:underline">
                Makassar, Sulawesi Selatan
              </span>
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 mt-20 py-8 text-center text-xs text-slate-500">
        <p>
          © {new Date().getFullYear()} Viorita Adnyani, S.Kom. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
