"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Heart,
  Zap,
  Users,
  Globe,
  Award,
  TrendingUp,
  Building2,
  ArrowRight,
  Linkedin,
  Twitter,
  MapPin,
  Calendar,
  Rocket,
  Shield,
  Lightbulb,
} from "lucide-react";

const stats = [
  { value: "2019", label: "Tahun Didirikan" },
  { value: "50Jt+", label: "Event Diproses/Hari" },
  { value: "2.000+", label: "Pelanggan Global" },
  { value: "150+", label: "Karyawan" },
];

const values = [
  {
    icon: Target,
    title: "Fokus pada Pelanggan",
    description: "Setiap keputusan yang kami buat dimulai dengan pertanyaan: bagaimana ini membantu pelanggan kami sukses?",
  },
  {
    icon: Lightbulb,
    title: "Inovasi Tanpa Henti",
    description: "Kami terus mendorong batas kemungkinan dalam analitik data dan machine learning.",
  },
  {
    icon: Heart,
    title: "Transparansi",
    description: "Kami percaya pada komunikasi terbuka, baik dengan tim internal maupun pelanggan kami.",
  },
  {
    icon: Shield,
    title: "Keamanan Pertama",
    description: "Keamanan data pelanggan adalah prioritas utama dalam setiap produk yang kami bangun.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description: "Tim terbaik dibangun dari keragaman perspektif dan kerja sama yang solid.",
  },
  {
    icon: Rocket,
    title: "Eksekusi Cepat",
    description: "Kami bergerak cepat, belajar dari kesalahan, dan terus iterasi untuk hasil terbaik.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "CloudMetrics Didirikan",
    description: "Dimulai dari garasi dengan misi menyederhanakan analitik data untuk semua bisnis.",
  },
  {
    year: "2020",
    title: "Pendanaan Seed $2M",
    description: "Mendapat kepercayaan dari investor terkemuka untuk mengembangkan platform.",
  },
  {
    year: "2021",
    title: "1.000 Pelanggan Pertama",
    description: "Milestone penting dengan pencapaian 1.000 pelanggan berbayar.",
  },
  {
    year: "2022",
    title: "Peluncuran AI Insights",
    description: "Memperkenalkan fitur AI-powered untuk insight otomatis dan prediksi.",
  },
  {
    year: "2023",
    title: "Ekspansi Global",
    description: "Membuka kantor di Asia dan Eropa untuk melayani pelanggan global.",
  },
  {
    year: "2024",
    title: "2.000+ Pelanggan",
    description: "Melampaui 2.000 pelanggan enterprise di seluruh dunia.",
  },
];

const leadership = [
  {
    name: "Ahmad Rizki",
    role: "CEO & Co-Founder",
    bio: "Mantan VP Engineering di Tokopedia. 15+ tahun pengalaman di data & analytics.",
    avatar: "AR",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Putri",
    role: "CTO & Co-Founder",
    bio: "PhD Computer Science dari ITB. Ex-Google, spesialisasi machine learning.",
    avatar: "SP",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Budi Santoso",
    role: "VP of Product",
    bio: "10+ tahun membangun produk SaaS. Mantan Product Lead di Gojek.",
    avatar: "BS",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Diana Wijaya",
    role: "VP of Engineering",
    bio: "Mantan Tech Lead di Shopee. Expert dalam distributed systems.",
    avatar: "DW",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Eko Prasetyo",
    role: "VP of Sales",
    bio: "15+ tahun enterprise sales. Mantan Regional Director di Salesforce.",
    avatar: "EP",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Fitri Handayani",
    role: "VP of Customer Success",
    bio: "Passionate tentang customer experience. Ex-Head of CS di Traveloka.",
    avatar: "FH",
    linkedin: "#",
    twitter: "#",
  },
];

const offices = [
  {
    city: "Jakarta",
    country: "Indonesia",
    address: "Sudirman Central Business District, Jakarta 12190",
    type: "Headquarters",
  },
  {
    city: "Singapura",
    country: "Singapore",
    address: "Marina Bay Financial Centre, Singapore 018983",
    type: "Asia Pacific",
  },
  {
    city: "San Francisco",
    country: "USA",
    address: "555 California Street, San Francisco, CA 94104",
    type: "Americas",
  },
];

const investors = [
  { name: "Sequoia Capital", logo: "SC" },
  { name: "Accel Partners", logo: "AP" },
  { name: "East Ventures", logo: "EV" },
  { name: "GGV Capital", logo: "GG" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Tentang Kami</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Memberdayakan bisnis dengan{" "}
              <span className="gradient-text">kekuatan data</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Kami membangun platform analitik yang membantu ribuan perusahaan
              mengubah data mentah menjadi keputusan bisnis yang cerdas.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">Misi Kami</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Demokratisasi analitik data untuk semua
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Kami percaya setiap bisnis, besar atau kecil, berhak memiliki akses ke insight
                data yang powerful. Misi kami adalah menghilangkan kompleksitas dari analitik
                data sehingga siapa pun dapat membuat keputusan berbasis data.
              </p>
              <p className="text-lg text-slate-600">
                Dengan CloudMetrics, tim Anda tidak perlu menjadi data scientist untuk
                mendapatkan insight yang actionable. Platform kami mengotomatisasi hal-hal
                teknis sehingga Anda bisa fokus pada yang paling penting: mengembangkan bisnis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Target className="h-24 w-24 mx-auto mb-6 opacity-90" />
                  <p className="text-2xl font-bold">&ldquo;Data untuk Semua&rdquo;</p>
                  <p className="mt-2 opacity-90">Moto CloudMetrics</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Nilai-Nilai Kami</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Prinsip yang memandu kami
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Nilai-nilai ini membentuk budaya kami dan cara kami bekerja setiap hari.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-orange-100">
                        <value.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                        <p className="text-sm text-slate-600">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Calendar className="mr-1 h-3 w-3" />
              Perjalanan Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Dari garasi ke global
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 to-amber-500 hidden lg:block" />

            <div className="space-y-8 lg:space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <Card className="inline-block">
                      <CardContent className="p-6">
                        <div className="text-3xl font-bold gradient-text mb-2">{item.year}</div>
                        <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Users className="mr-1 h-3 w-3" />
              Tim Kepemimpinan
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Dipimpin oleh yang terbaik
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Tim eksekutif kami membawa pengalaman puluhan tahun dari perusahaan teknologi terkemuka.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-24 w-24 mx-auto items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white text-2xl font-bold mb-4 group-hover:scale-105 transition-transform">
                      {person.avatar}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{person.name}</h3>
                    <p className="text-sm text-orange-600 font-medium mb-3">{person.role}</p>
                    <p className="text-sm text-slate-600 mb-4">{person.bio}</p>
                    <div className="flex justify-center gap-3">
                      <a href={person.linkedin} className="text-slate-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={person.twitter} className="text-slate-400 hover:text-sky-500 transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Globe className="mr-1 h-3 w-3" />
              Kantor Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Kehadiran global
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Dengan kantor di 3 benua, kami siap melayani pelanggan di seluruh dunia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-orange-100">
                        <MapPin className="h-5 w-5 text-orange-600" />
                      </div>
                      <Badge variant="secondary">{office.type}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">{office.city}</h3>
                    <p className="text-sm text-orange-600 mb-3">{office.country}</p>
                    <p className="text-sm text-slate-600">{office.address}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <TrendingUp className="mr-1 h-3 w-3" />
              Investor Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Didukung oleh yang terbaik
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Kami bangga bermitra dengan investor venture capital terkemuka di dunia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {investors.map((investor, index) => (
              <motion.div
                key={investor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-bold text-xl mb-3">
                  {investor.logo}
                </div>
                <span className="text-sm font-medium text-slate-700">{investor.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Bergabunglah dengan tim kami
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Kami selalu mencari talenta terbaik untuk membangun masa depan analitik data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Lihat Lowongan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
