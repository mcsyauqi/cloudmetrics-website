"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Globe,
  Coffee,
  GraduationCap,
  Plane,
  DollarSign,
  Shield,
  ArrowRight,
  Building2,
  Code,
  Palette,
  TrendingUp,
  Headphones,
  Search,
} from "lucide-react";

const stats = [
  { value: "150+", label: "Tim Global" },
  { value: "15+", label: "Negara" },
  { value: "40%", label: "Remote Workers" },
  { value: "4.8", label: "Rating Glassdoor" },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Gaji Kompetitif",
    description: "Paket kompensasi di atas rata-rata industri dengan equity options",
  },
  {
    icon: Shield,
    title: "Asuransi Lengkap",
    description: "Asuransi kesehatan premium untuk Anda dan keluarga",
  },
  {
    icon: Plane,
    title: "Cuti Unlimited",
    description: "Kebijakan cuti fleksibel untuk work-life balance yang sehat",
  },
  {
    icon: Coffee,
    title: "Remote Friendly",
    description: "Bekerja dari mana saja dengan setup kerja hybrid/remote",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    description: "Rp 15 juta/tahun untuk kursus, konferensi, dan sertifikasi",
  },
  {
    icon: Heart,
    title: "Wellness Program",
    description: "Gym membership, mental health support, dan wellness activities",
  },
];

const departments = [
  { name: "Engineering", icon: Code, openings: 8 },
  { name: "Product", icon: Zap, openings: 3 },
  { name: "Design", icon: Palette, openings: 2 },
  { name: "Sales", icon: TrendingUp, openings: 5 },
  { name: "Customer Success", icon: Headphones, openings: 4 },
  { name: "Marketing", icon: Globe, openings: 3 },
];

const jobs = [
  {
    id: 1,
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "Jakarta / Remote",
    type: "Full-time",
    level: "Senior",
    description: "Bangun dan skalakan infrastruktur backend kami untuk menangani jutaan event per detik.",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    department: "Engineering",
    location: "Jakarta / Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Kembangkan UI/UX dashboard analitik yang intuitif dengan React dan TypeScript.",
  },
  {
    id: 3,
    title: "Machine Learning Engineer",
    department: "Engineering",
    location: "Jakarta / Remote",
    type: "Full-time",
    level: "Senior",
    description: "Bangun model ML untuk fitur AI Insights dan anomaly detection.",
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Jakarta",
    type: "Full-time",
    level: "Senior",
    description: "Pimpin development fitur-fitur baru dari ideation hingga launch.",
  },
  {
    id: 5,
    title: "Senior Product Designer",
    department: "Design",
    location: "Jakarta / Remote",
    type: "Full-time",
    level: "Senior",
    description: "Design pengalaman pengguna yang memukau untuk platform analitik kami.",
  },
  {
    id: 6,
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "Jakarta / Singapura",
    type: "Full-time",
    level: "Senior",
    description: "Akuisisi dan kelola klien enterprise di Asia Tenggara.",
  },
  {
    id: 7,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Jakarta",
    type: "Full-time",
    level: "Mid",
    description: "Pastikan pelanggan mendapatkan value maksimal dari CloudMetrics.",
  },
  {
    id: 8,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Kelola infrastruktur cloud dan CI/CD pipelines kami di AWS.",
  },
  {
    id: 9,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Jakarta / Remote",
    type: "Full-time",
    level: "Mid-Senior",
    description: "Buat konten yang engaging untuk blog, social media, dan campaigns.",
  },
  {
    id: 10,
    title: "Technical Support Engineer",
    department: "Customer Success",
    location: "Jakarta",
    type: "Full-time",
    level: "Junior-Mid",
    description: "Bantu pelanggan menyelesaikan masalah teknis dan optimasi penggunaan.",
  },
];

const values = [
  {
    title: "Move Fast",
    description: "Kami bergerak cepat, iterasi sering, dan belajar dari setiap langkah.",
  },
  {
    title: "Customer Obsession",
    description: "Setiap keputusan dimulai dengan memahami kebutuhan pelanggan.",
  },
  {
    title: "Own It",
    description: "Kami mengambil ownership dan bertanggung jawab atas hasil kerja.",
  },
  {
    title: "Be Transparent",
    description: "Komunikasi terbuka dan jujur adalah fondasi tim yang kuat.",
  },
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="mr-1 h-3 w-3" />
              Bergabung dengan Tim Kami
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Bangun masa depan{" "}
              <span className="gradient-text">analitik data</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Bergabunglah dengan tim passionate yang mengubah cara perusahaan
              memahami dan menggunakan data mereka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })}>
                Lihat Lowongan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Tentang Kami
                </Button>
              </Link>
            </div>
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

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Budaya Kerja</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Nilai-nilai yang kami hidupi
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-xl mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <Heart className="mr-1 h-3 w-3" />
              Benefits
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Kami peduli dengan tim kami
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Benefit komprehensif untuk mendukung kehidupan dan karir Anda
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-orange-100">
                        <benefit.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Briefcase className="mr-1 h-3 w-3" />
              Lowongan
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Posisi yang tersedia
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Temukan peran yang cocok dengan skill dan passion Anda
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Cari posisi..."
                className="w-full pl-12 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedDepartment("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedDepartment === "All"
                  ? "bg-orange-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Semua ({jobs.length})
            </button>
            {departments.map((dept) => (
              <button
                key={dept.name}
                onClick={() => setSelectedDepartment(dept.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                  selectedDepartment === dept.name
                    ? "bg-orange-500 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <dept.icon className="h-4 w-4" />
                {dept.name} ({dept.openings})
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {job.title}
                            </h3>
                            <Badge variant="secondary">{job.level}</Badge>
                          </div>
                          <p className="text-sm text-slate-600 mb-3">{job.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                            <span className="flex items-center gap-1">
                              <Building2 className="h-4 w-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <Button className="flex-shrink-0">
                          Lamar Sekarang
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600">Tidak ada posisi yang cocok dengan pencarian Anda.</p>
              </div>
            )}
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
              Tidak menemukan posisi yang cocok?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Kirimkan CV Anda dan kami akan menghubungi Anda jika ada posisi yang sesuai di masa depan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@cloudmetrics.io">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Kirim CV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Pelajari Tentang Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
