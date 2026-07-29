// 1. Import Gambar Proyek dari folder assets
import apeselImg from "../assets/apesel.png"; // atau sesuai nama file gambar APESEL kamu
import ekeuImg from "../assets/ekeu.png"; // atau sesuai nama file gambar E-KEU kamu

export const personalInfo = {
  name: "VIORITA ADNYANI, S.Kom.",
  role: "Fullstack Developer | Web Development | IT Support | Data Science | Administration",
  location: "Makassar, Sulawesi Selatan",
  email: "vioritaadyani759@gmail.com",
  phone: "085156395873",
  about:
    "Lulusan Sarjana Teknologi Informasi Universitas Bosowa (IPK 3.88) dengan pengalaman praktis di bidang data analysis, data science, web development, IT support, serta administrasi sistem. Berpengalaman dalam pengelolaan sistem informasi instansi pemerintah, pengarsipan dokumen digital, serta visualisasi data.",
};

export const projects = [
  {
    id: 1,
    title: "APESEL (Agenda Penomoran Surat Elektronik)",
    category: "Full Stack Web & Admin System",
    image: apeselImg, // Tautan variabel gambar APESEL
    url: "https://apesel.rutangianyar.com",
    description:
      "Sistem agenda penomoran surat elektronik Rutan Kelas IIB Gianyar. Mengotomatisasi penomoran surat, mencegah duplikasi, dan mempercepat pencarian arsip digital.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Arsip Digital"],
  },
  {
    id: 2,
    title: "E-KEU & Modul SIKERANG",
    category: "Full Stack & Data Integration",
    image: ekeuImg, // Tautan variabel gambar E-KEU
    url: "https://e-keu.rutangianyar.com",
    description:
      "Platform terpadu pengelolaan keuangan, perjalanan dinas, dan laporan kinerja pegawai Rutan Gianyar yang terintegrasi dengan modul layanan informasi gaji (SIKERANG).",
    tags: ["PHP", "SQL", "Data Analytics", "Dashboard UI", "Looker Studio"],
  },
  {
    id: 3,
    title: "Interactive Data Science & AI Dashboard",
    category: "Data Science & AI",
    image: null, // Boleh diisi gambar screenshot dashboard jika ada
    url: "#",
    description:
      "Dashboard analisis bisnis interaktif berbasis Python & BI Tools yang memanfaatkan machine learning untuk menghasilkan insight dan prediksi data.",
    tags: ["Python", "SQL", "Power BI", "EDA", "Machine Learning"],
  },
];

export const skills = {
  webDev: [
    "HTML/CSS",
    "JavaScript",
    "React.js",
    "PHP",
    "SQL & MySQL",
    "Tailwind CSS",
  ],
  dataAnalytics: [
    "Python",
    "SQL",
    "Power BI",
    "Looker Studio",
    "Excel (Advanced)",
    "E-Commerce Analytics",
  ],
  softSkills: [
    "Problem Solving",
    "Komunikasi Efektif",
    "Manajemen Waktu",
    "Teliti & Adaptif",
  ],
};

export const experiences = [
  {
    role: "Pengelola Fasilitas Umum (MagangHub Kemnaker)",
    company: "Rumah Tahanan Negara Kelas IIB Gianyar",
    period: "Nov 2025 - Mei 2026",
    achievements: [
      "Terpilih sebagai Peserta Magang Terbaik Program MagangHub Kemnaker Tahun 2026 🏆",
      "Mengembangkan website Sistem Elektronik Keuangan (E-KEU) Rutan Gianyar.",
      "Membuat serta memelihara sistem APESEL (Agenda Penomoran Surat Elektronik).",
    ],
  },
  {
    role: "Magang Administrasi & Data Perpajakan",
    company: "Kementerian Keuangan RI",
    period: "Apr 2025 - Jun 2025",
    achievements: [
      "Pengarsipan dokumen perpajakan (STP & Non-STP) serta kelengkapan berkas sistem Coretax.",
      "Menginput dan mengelola data administrasi menggunakan aplikasi pendukung UPDDP.",
    ],
  },
  {
    role: "Data Science Student (MSIB)",
    company: "Startup Campus",
    period: "Apr 2024 - Jun 2024",
    achievements: [
      "Menguasai SQL, Python, Preprocessing Data, Feature Engineering, dan Machine Learning.",
      "Membuat dashboard interaktif berbasis Data Science & AI untuk kebutuhan bisnis.",
    ],
  },
];

export const organizations = [
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
