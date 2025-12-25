"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Facebook,
  Tag,
} from "lucide-react";

const articles: Record<string, {
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  content: string[];
}> = {
  "data-driven-culture": {
    title: "Membangun Budaya Data-Driven di Perusahaan Anda",
    category: "Strategi",
    author: "Ahmad Rizki",
    authorRole: "CEO, CloudMetrics",
    date: "15 Desember 2024",
    readTime: "8 menit",
    image: "📊",
    tags: ["Budaya Data", "Transformasi Digital", "Leadership"],
    content: [
      "Di era digital saat ini, membangun budaya data-driven bukan lagi pilihan—ini adalah keharusan untuk bertahan dan berkembang. Perusahaan yang berhasil mengadopsi pendekatan berbasis data menunjukkan peningkatan produktivitas hingga 40% dan pengambilan keputusan yang lebih akurat.",
      "## Apa Itu Budaya Data-Driven?",
      "Budaya data-driven adalah lingkungan kerja di mana keputusan dibuat berdasarkan analisis data, bukan intuisi atau asumsi semata. Ini melibatkan pengumpulan, analisis, dan interpretasi data secara sistematis untuk menginformasikan strategi bisnis.",
      "## Langkah-Langkah Membangun Budaya Data-Driven",
      "### 1. Dukungan dari Leadership",
      "Perubahan budaya harus dimulai dari atas. CEO dan tim eksekutif perlu menjadi champion dalam penggunaan data. Ketika leadership secara konsisten merujuk pada data dalam pengambilan keputusan, tim akan mengikuti.",
      "### 2. Investasi dalam Infrastruktur Data",
      "Tanpa tools yang tepat, data-driven culture tidak mungkin terwujud. Investasikan dalam platform analitik yang mudah digunakan seperti CloudMetrics, yang memungkinkan semua anggota tim mengakses insight tanpa keahlian teknis.",
      "### 3. Demokratisasi Akses Data",
      "Data tidak boleh menjadi silo. Pastikan semua departemen memiliki akses ke data yang mereka butuhkan. Self-service analytics memungkinkan tim membuat keputusan lebih cepat tanpa bergantung pada tim IT.",
      "### 4. Literasi Data untuk Semua",
      "Adakan training reguler untuk meningkatkan kemampuan analitis tim. Tidak semua orang perlu menjadi data scientist, tetapi semua orang perlu memahami cara membaca dan menginterpretasi data dasar.",
      "### 5. Rayakan Keputusan Berbasis Data",
      "Ketika keputusan berbasis data menghasilkan hasil positif, komunikasikan ini ke seluruh organisasi. Success stories akan memotivasi tim lain untuk mengadopsi pendekatan serupa.",
      "## Tantangan Umum dan Cara Mengatasinya",
      "**Resistensi terhadap perubahan**: Mulai dengan quick wins yang menunjukkan value dari pendekatan data-driven.",
      "**Data quality yang buruk**: Implementasikan data governance yang kuat sejak awal.",
      "**Analysis paralysis**: Fokus pada metrik yang paling penting (KPIs) dan hindari overwhelm dengan terlalu banyak data.",
      "## Kesimpulan",
      "Membangun budaya data-driven adalah perjalanan, bukan tujuan. Ini membutuhkan komitmen jangka panjang, investasi yang tepat, dan kesabaran. Namun, hasilnya—keputusan yang lebih baik, efisiensi yang meningkat, dan keunggulan kompetitif—sangat sepadan dengan usahanya.",
    ],
  },
  "dashboard-design-best-practices": {
    title: "10 Best Practices untuk Design Dashboard yang Efektif",
    category: "Tutorial",
    author: "Diana Wijaya",
    authorRole: "VP of Engineering, CloudMetrics",
    date: "10 Desember 2024",
    readTime: "12 menit",
    image: "🎨",
    tags: ["Dashboard", "Design", "UX", "Visualisasi Data"],
    content: [
      "Dashboard yang dirancang dengan baik dapat menjadi senjata rahasia tim Anda. Sebaliknya, dashboard yang buruk hanya akan membingungkan dan menghabiskan waktu. Berikut adalah 10 best practices untuk membuat dashboard yang benar-benar efektif.",
      "## 1. Tentukan Tujuan dengan Jelas",
      "Sebelum mulai mendesain, tanyakan: Apa tujuan utama dashboard ini? Siapa yang akan menggunakannya? Keputusan apa yang akan diinformasikan? Dashboard yang fokus pada satu tujuan jauh lebih efektif daripada yang mencoba melakukan segalanya.",
      "## 2. Prioritaskan Informasi",
      "Gunakan prinsip visual hierarchy. Tempatkan metrik paling penting di pojok kiri atas (di mana mata pertama kali melihat). Gunakan ukuran, warna, dan posisi untuk menunjukkan kepentingan relatif.",
      "## 3. Pilih Visualisasi yang Tepat",
      "Setiap tipe data membutuhkan visualisasi yang berbeda:\n- **Trend over time**: Line chart\n- **Perbandingan kategori**: Bar chart\n- **Proporsi**: Pie chart (untuk max 5-6 kategori)\n- **Distribusi**: Histogram\n- **Korelasi**: Scatter plot",
      "## 4. Gunakan Warna dengan Bijak",
      "Warna harus memiliki makna, bukan hanya estetika. Gunakan merah untuk warning, hijau untuk positif. Batasi palet warna menjadi 3-5 warna utama. Pastikan kontras yang cukup untuk accessibility.",
      "## 5. Sediakan Konteks",
      "Angka tanpa konteks tidak bermakna. Sertakan:\n- Target atau benchmark\n- Perbandingan periode sebelumnya\n- Trend direction (naik/turun)\n- Penjelasan singkat jika diperlukan",
      "## 6. Optimalkan untuk Scanning",
      "Pengguna dashboard biasanya scanning, bukan reading. Gunakan:\n- Label yang jelas dan ringkas\n- Whitespace yang cukup\n- Grouping logis\n- Konsistensi format",
      "## 7. Mobile-First Design",
      "Banyak eksekutif melihat dashboard di smartphone. Pastikan dashboard responsive dan informasi kritis tetap terlihat di layar kecil.",
      "## 8. Real-time vs Historical",
      "Bedakan dengan jelas antara data real-time dan historical. Tampilkan timestamp terakhir update. Untuk data real-time, tunjukkan indikator live.",
      "## 9. Tambahkan Interaktivitas yang Bermakna",
      "Filter, drill-down, dan tooltips dapat menambah depth. Namun, jangan over-engineer. Interaktivitas harus membantu, bukan menghalangi.",
      "## 10. Iterate Berdasarkan Feedback",
      "Dashboard pertama jarang sempurna. Kumpulkan feedback dari pengguna secara reguler. A/B test perubahan besar. Pantau metrik usage untuk melihat fitur mana yang benar-benar digunakan.",
      "## Bonus: Template Dashboard CloudMetrics",
      "CloudMetrics menyediakan 50+ template dashboard yang sudah mengikuti best practices ini. Mulai dari template yang sudah teruji, lalu customize sesuai kebutuhan spesifik Anda.",
    ],
  },
  "analytics-roi": {
    title: "Menghitung ROI dari Investasi Analitik Data",
    category: "Bisnis",
    author: "Eko Prasetyo",
    authorRole: "VP of Sales, CloudMetrics",
    date: "5 Desember 2024",
    readTime: "10 menit",
    image: "💰",
    tags: ["ROI", "Investasi", "Analytics", "Business Case"],
    content: [
      "Ketika mengajukan budget untuk tools analitik, pertanyaan pertama dari CFO biasanya adalah: 'Apa ROI-nya?' Artikel ini akan membantu Anda menyusun business case yang kuat untuk investasi analitik.",
      "## Mengapa ROI Analitik Sulit Dihitung?",
      "Berbeda dengan investasi pemasaran yang bisa langsung diukur dari revenue, value dari analitik seringkali tidak langsung. Manfaatnya tersebar di berbagai area: efisiensi operasional, pengambilan keputusan lebih baik, dan pengurangan risiko.",
      "## Framework Menghitung ROI Analitik",
      "### 1. Identifikasi Cost Savings",
      "- **Waktu yang dihemat**: Berapa jam per minggu yang dihabiskan untuk membuat laporan manual? Kalikan dengan hourly rate.\n- **Pengurangan errors**: Berapa biaya dari keputusan yang salah akibat data tidak akurat?\n- **Efisiensi operasional**: Proses mana yang bisa diotomatisasi?",
      "### 2. Hitung Revenue Impact",
      "- **Faster time-to-insight**: Berapa value dari keputusan yang lebih cepat?\n- **Improved conversion**: Berapa peningkatan konversi dari optimasi berbasis data?\n- **Customer retention**: Berapa CLV yang diselamatkan dari churn prediction?",
      "### 3. Quantify Risk Reduction",
      "- **Fraud detection**: Berapa kerugian yang dicegah?\n- **Compliance**: Berapa potensi denda yang dihindari?\n- **Market risks**: Berapa value dari early warning systems?",
      "## Studi Kasus: ROI CloudMetrics",
      "**Perusahaan E-commerce dengan 500 karyawan**:\n- Investasi: Rp 500 juta/tahun\n- Waktu laporan berkurang 80%: Rp 300 juta/tahun\n- Conversion rate naik 15%: Rp 2 miliar/tahun\n- Churn berkurang 10%: Rp 500 juta/tahun\n- **Total ROI: 460%**",
      "## Tips Menyusun Business Case",
      "1. **Mulai dengan pain points**: Identifikasi masalah yang paling menyakitkan dan quantify-nya\n2. **Gunakan data internal**: Angka dari perusahaan sendiri lebih meyakinkan\n3. **Include intangibles**: Sebutkan benefit yang sulit diukur seperti employee satisfaction\n4. **Show quick wins**: Tunjukkan value yang bisa dicapai dalam 3 bulan pertama\n5. **Compare alternatives**: Bandingkan dengan opsi lain termasuk status quo",
      "## Kesimpulan",
      "ROI analitik sangat bergantung pada seberapa baik implementasinya. Dengan partner yang tepat dan strategi yang jelas, investasi analitik dapat memberikan return berlipat ganda. CloudMetrics telah membantu ratusan perusahaan mencapai ROI positif dalam 6 bulan pertama.",
    ],
  },
  "ai-analytics-beyond-hype": {
    title: "AI dalam Analytics: Melampaui Hype",
    category: "Teknologi",
    author: "Sarah Putri",
    authorRole: "CTO, CloudMetrics",
    date: "1 Desember 2024",
    readTime: "15 menit",
    image: "🤖",
    tags: ["AI", "Machine Learning", "Teknologi", "Inovasi"],
    content: [
      "Artificial Intelligence (AI) telah menjadi buzzword dalam dunia analytics. Tapi apa yang benar-benar possible, dan apa yang hanya marketing hype? Sebagai CTO CloudMetrics, saya akan berbagi perspektif yang realistic.",
      "## Apa yang AI Benar-Benar Bisa Lakukan dalam Analytics",
      "### 1. Anomaly Detection",
      "AI sangat baik dalam menemukan pola yang tidak biasa dalam data besar. Sistem kami memproses jutaan data points dan dapat mengidentifikasi anomali yang tidak mungkin ditemukan manusia secara manual.",
      "### 2. Predictive Analytics",
      "Machine learning dapat memprediksi trends masa depan berdasarkan data historis. Contoh praktis:\n- Prediksi churn rate\n- Sales forecasting\n- Demand planning\n- Resource optimization",
      "### 3. Natural Language Queries",
      "Pengguna bisa bertanya 'Berapa total revenue bulan lalu dari segmen enterprise?' dan mendapatkan jawaban tanpa menulis query. Ini memdemokratisasi akses ke data.",
      "### 4. Automated Insights",
      "AI dapat menganalisis dashboard Anda dan secara proaktif menginformasikan insight penting: 'Conversion rate turun 15% minggu ini, kemungkinan karena page load time yang meningkat.'",
      "## Apa yang AI Tidak Bisa (Belum Bisa) Lakukan",
      "### 1. Menggantikan Domain Expertise",
      "AI tidak memahami konteks bisnis Anda. Manusia masih diperlukan untuk menginterpretasi insight dan membuat keputusan.",
      "### 2. Bekerja dengan Data Buruk",
      "Garbage in, garbage out. AI tidak bisa memperbaiki masalah data quality fundamental.",
      "### 3. Menjawab Pertanyaan 'Mengapa'",
      "AI bagus dalam pattern recognition, tapi kurang baik dalam causal inference. Korelasi tidak sama dengan kausalitas.",
      "## Bagaimana CloudMetrics Menggunakan AI",
      "Kami mengintegrasikan AI di tempat yang memberikan value nyata:\n- **Smart Alerts**: AI memprioritaskan alerts berdasarkan impact\n- **Auto-Suggestions**: Rekomendasi visualisasi terbaik untuk data Anda\n- **Natural Language**: Query data dengan bahasa sehari-hari\n- **Predictive Metrics**: Forecast otomatis untuk KPI utama",
      "## Tips Evaluasi AI Analytics Tools",
      "1. Minta demo dengan data Anda sendiri, bukan data demo\n2. Tanyakan tentang model transparency dan explainability\n3. Pahami learning curve dan resources yang dibutuhkan\n4. Cek apakah AI optional atau mandatory",
      "## Kesimpulan",
      "AI adalah tool yang powerful, tapi bukan magic. Gunakan AI untuk augment kemampuan tim Anda, bukan menggantikannya. Fokus pada use cases yang memberikan value nyata, dan jangan terjebak dalam hype.",
    ],
  },
  "realtime-vs-batch": {
    title: "Real-time vs Batch Processing: Kapan Menggunakan Masing-masing",
    category: "Teknologi",
    author: "Diana Wijaya",
    authorRole: "VP of Engineering, CloudMetrics",
    date: "25 November 2024",
    readTime: "11 menit",
    image: "⚡",
    tags: ["Real-time", "Batch Processing", "Data Pipeline", "Arsitektur"],
    content: [
      "Salah satu keputusan arsitektur terpenting dalam analytics adalah memilih antara real-time dan batch processing. Artikel ini akan membantu Anda memahami trade-offs dan membuat keputusan yang tepat.",
      "## Memahami Perbedaan Fundamental",
      "### Batch Processing",
      "Data dikumpulkan selama periode tertentu (jam, hari, minggu) lalu diproses sekaligus. Contoh: Daily sales report yang dijalankan setiap tengah malam.",
      "### Real-time Processing",
      "Data diproses segera setelah diterima, biasanya dalam hitungan detik atau milidetik. Contoh: Fraud detection system yang harus memutuskan dalam milliseconds.",
      "## Kapan Menggunakan Batch Processing",
      "✅ **Gunakan batch jika**:\n- Data tidak berubah cepat (laporan bulanan)\n- Analisis kompleks yang membutuhkan waktu\n- Cost efficiency adalah prioritas\n- Historical analysis dan trend jangka panjang\n- Data volume sangat besar",
      "❌ **Hindari batch jika**:\n- Keputusan harus dibuat segera\n- Fresh data critical untuk operasi\n- User expectations adalah instant updates",
      "## Kapan Menggunakan Real-time",
      "✅ **Gunakan real-time jika**:\n- Fraud detection\n- Monitoring sistem dan alerting\n- Live dashboards untuk operasi\n- Personalisasi real-time\n- IoT dan sensor data",
      "❌ **Hindari real-time jika**:\n- Tidak ada business need yang jelas\n- Budget terbatas\n- Tim tidak memiliki expertise",
      "## Hybrid Approach: Yang Terbaik dari Kedua Dunia",
      "CloudMetrics menggunakan Lambda Architecture yang menggabungkan keduanya:\n- **Speed Layer**: Real-time untuk freshness\n- **Batch Layer**: Historical untuk accuracy\n- **Serving Layer**: Merge kedua view untuk query",
      "## Pertimbangan Praktis",
      "### Cost",
      "Real-time processing 3-5x lebih mahal. Pastikan value-nya sepadan.",
      "### Complexity",
      "Real-time membutuhkan expertise khusus dalam streaming technologies.",
      "### Data Quality",
      "Batch memungkinkan data validation yang lebih thorough.",
      "## Rekomendasi Kami",
      "Mulai dengan batch processing untuk sebagian besar use cases. Tambahkan real-time hanya untuk metrik yang benar-benar membutuhkannya. CloudMetrics memudahkan transisi dengan mendukung keduanya dalam satu platform.",
    ],
  },
  "executive-dashboards": {
    title: "Panduan Membuat Dashboard untuk Eksekutif",
    category: "Tutorial",
    author: "Budi Santoso",
    authorRole: "VP of Product, CloudMetrics",
    date: "20 November 2024",
    readTime: "9 menit",
    image: "👔",
    tags: ["Executive", "Dashboard", "C-Suite", "Reporting"],
    content: [
      "Eksekutif memiliki waktu terbatas dan kebutuhan yang berbeda. Dashboard untuk C-suite harus dirancang khusus untuk audience ini. Berikut panduan lengkapnya.",
      "## Memahami Kebutuhan Eksekutif",
      "Eksekutif tidak ingin:\n- Detail operasional yang terlalu granular\n- Terlalu banyak metrik\n- Harus melakukan analisis sendiri\n- Interface yang kompleks",
      "Eksekutif ingin:\n- High-level view dari business health\n- Alerts untuk hal-hal yang perlu perhatian\n- Trend dan patterns\n- Kemampuan untuk drill-down jika tertarik",
      "## Framework: The 5 Key Questions",
      "Dashboard eksekutif yang baik menjawab 5 pertanyaan:\n1. **Bagaimana kinerja kita?** (vs target, vs periode lalu)\n2. **Apa yang berjalan baik?** (wins, growth areas)\n3. **Apa yang perlu perhatian?** (risks, issues)\n4. **Apa trend-nya?** (arah pergerakan)\n5. **Apa yang harus dilakukan?** (recommended actions)",
      "## Prinsip Design",
      "### Less is More",
      "Maksimal 5-7 KPIs di satu screen. Jika lebih, prioritaskan atau buat multiple views.",
      "### Show the Story",
      "Setiap chart harus menceritakan sesuatu. Hindari vanity metrics.",
      "### Enable Action",
      "Sertakan context yang memungkinkan keputusan: target, benchmark, alerts.",
      "### Mobile First",
      "CEO sering melihat metrics di smartphone. Pastikan responsive.",
      "## Template: CEO Dashboard",
      "**Top Row** (Summary):\n- Revenue (vs target, vs last month)\n- Cash position\n- Key metric based on business model",
      "**Middle Row** (Health Indicators):\n- Customer metrics (acquisition, retention)\n- Product metrics (usage, satisfaction)\n- Team metrics (productivity, satisfaction)",
      "**Bottom Row** (Alerts & Trends):\n- Items requiring attention\n- Key trend charts (quarterly view)",
      "## Common Mistakes",
      "1. Terlalu banyak colors dan visualizations\n2. Tidak ada context atau benchmark\n3. Data terlalu granular\n4. Update tidak real-time ketika dibutuhkan\n5. Tidak mobile-friendly",
      "## Implementasi di CloudMetrics",
      "CloudMetrics menyediakan Executive Dashboard template yang sudah mengikuti best practices ini. Anda bisa mulai dari template dan customize sesuai kebutuhan spesifik.",
    ],
  },
  "data-privacy-compliance": {
    title: "Data Privacy dan Compliance: Panduan untuk Tim Analytics",
    category: "Compliance",
    author: "Fitri Handayani",
    authorRole: "VP of Customer Success, CloudMetrics",
    date: "15 November 2024",
    readTime: "13 menit",
    image: "🔒",
    tags: ["Privacy", "GDPR", "Compliance", "Security"],
    content: [
      "Dengan regulasi seperti GDPR, CCPA, dan UU PDP Indonesia, compliance bukan lagi optional. Artikel ini memberikan panduan praktis untuk tim analytics dalam mengelola data secara compliant.",
      "## Landscape Regulasi",
      "### GDPR (EU)",
      "Berlaku untuk data warga EU. Key requirements: consent, right to be forgotten, data portability, DPO.",
      "### CCPA (California)",
      "Berlaku untuk data consumer California. Focus pada transparency dan opt-out rights.",
      "### UU PDP Indonesia",
      "Regulasi terbaru Indonesia. Mirip GDPR dengan enforcement yang semakin ketat.",
      "## Prinsip Privacy by Design",
      "1. **Data Minimization**: Hanya kumpulkan data yang benar-benar dibutuhkan\n2. **Purpose Limitation**: Gunakan data hanya untuk tujuan yang disclosed\n3. **Storage Limitation**: Hapus data yang tidak lagi diperlukan\n4. **Accuracy**: Pastikan data akurat dan up-to-date\n5. **Integrity & Confidentiality**: Lindungi data dari unauthorized access",
      "## Implementasi Praktis untuk Analytics",
      "### 1. Data Inventory",
      "Dokumentasikan semua data yang dikumpulkan:\n- Apa datanya?\n- Dari mana asalnya?\n- Siapa yang mengakses?\n- Berapa lama disimpan?",
      "### 2. Anonymization & Pseudonymization",
      "- Gunakan hashing untuk identifier\n- Aggregate data jika individual-level tidak diperlukan\n- Implement k-anonymity untuk datasets yang di-share",
      "### 3. Access Control",
      "- Role-based access ke data sensitif\n- Audit log untuk semua akses\n- Regular access review",
      "### 4. Retention Policies",
      "- Definisikan retention period untuk setiap tipe data\n- Automate deletion untuk data yang expired\n- Document exceptions dengan justification",
      "## CloudMetrics dan Compliance",
      "CloudMetrics membantu compliance dengan:\n- **Data masking**: Hide sensitive fields otomatis\n- **Access controls**: Granular permission per user/role\n- **Audit logs**: Track semua akses dan perubahan\n- **Data retention**: Configurable auto-deletion\n- **Certifications**: SOC 2 Type II, ISO 27001",
      "## Checklist Compliance",
      "☐ Data inventory completed\n☐ Privacy policy updated\n☐ Consent mechanisms in place\n☐ Access controls implemented\n☐ Retention policies defined\n☐ Incident response plan ready\n☐ Team trained on compliance",
      "## Kesimpulan",
      "Compliance tidak harus menghambat analytics. Dengan approach yang tepat, Anda bisa mendapatkan insight yang powerful sambil tetap melindungi privacy user.",
    ],
  },
};

const relatedArticles = [
  { title: "Membangun Budaya Data-Driven", slug: "data-driven-culture" },
  { title: "10 Best Practices Dashboard Design", slug: "dashboard-design-best-practices" },
  { title: "Menghitung ROI Analytics", slug: "analytics-roi" },
];

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-slate-600 mb-8">Artikel yang Anda cari tidak tersedia.</p>
          <Link href="/resources">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Resources
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/resources" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Resources
            </Link>

            <Badge variant="secondary" className="mb-4">{article.category}</Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold">
                  {article.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-slate-900">{article.author}</p>
                  <p className="text-xs">{article.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime} baca
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 pb-8 border-b border-slate-200">
              <span className="text-sm text-slate-600">Bagikan:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-slate prose-lg max-w-none"
          >
            {article.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={index} className="text-2xl font-bold text-slate-900 mt-12 mb-4">{paragraph.replace("## ", "")}</h2>;
              } else if (paragraph.startsWith("### ")) {
                return <h3 key={index} className="text-xl font-semibold text-slate-900 mt-8 mb-3">{paragraph.replace("### ", "")}</h3>;
              } else if (paragraph.startsWith("**") && paragraph.includes(":")) {
                return <p key={index} className="text-slate-700 mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
              } else if (paragraph.startsWith("- ") || paragraph.startsWith("✅") || paragraph.startsWith("❌") || paragraph.startsWith("☐")) {
                return <p key={index} className="text-slate-700 mb-2 pl-4">{paragraph}</p>;
              } else {
                return <p key={index} className="text-slate-700 mb-6 leading-relaxed">{paragraph}</p>;
              }
            })}
          </motion.article>

          {/* Author Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-6 bg-slate-50 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl font-semibold flex-shrink-0">
                {article.author.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{article.author}</h3>
                <p className="text-sm text-orange-600 mb-2">{article.authorRole}</p>
                <p className="text-sm text-slate-600">
                  Penulis artikel dan thought leader di bidang data analytics. Ikuti untuk insight lebih lanjut tentang cara mengoptimalkan penggunaan data di perusahaan Anda.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Artikel Terkait</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.filter(a => a.slug !== slug).map((related) => (
              <Link key={related.slug} href={`/resources/${related.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-slate-900 hover:text-orange-600 transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center mt-4 text-sm text-orange-600">
                      Baca selengkapnya
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Siap menerapkan insight ini?
          </h2>
          <p className="text-orange-100 mb-8">
            Mulai uji coba gratis CloudMetrics dan lihat bagaimana platform kami dapat membantu tim Anda.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Mulai Uji Coba Gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
