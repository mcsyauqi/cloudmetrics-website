"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Newspaper,
  Download,
  ExternalLink,
  Calendar,
  ArrowRight,
  Image,
  FileText,
  Mail,
} from "lucide-react";

const pressReleases = [
  {
    date: "15 Desember 2024",
    title: "CloudMetrics Mengumumkan Pendanaan Seri B senilai $50 Juta",
    description: "Pendanaan dipimpin oleh Sequoia Capital untuk mempercepat ekspansi global dan pengembangan fitur AI.",
    link: "#",
  },
  {
    date: "1 November 2024",
    title: "CloudMetrics Meluncurkan AI Insights 2.0",
    description: "Fitur baru menggunakan large language models untuk memberikan insight otomatis dan rekomendasi actionable.",
    link: "#",
  },
  {
    date: "15 September 2024",
    title: "CloudMetrics Mencapai 2.000 Pelanggan Enterprise",
    description: "Milestone penting dalam perjalanan menjadi platform analitik terkemuka di Asia Pasifik.",
    link: "#",
  },
  {
    date: "1 Juli 2024",
    title: "CloudMetrics Membuka Kantor di Singapura",
    description: "Ekspansi regional untuk melayani pelanggan di Asia Tenggara dengan lebih baik.",
    link: "#",
  },
  {
    date: "15 Maret 2024",
    title: "CloudMetrics Meraih Sertifikasi SOC 2 Type II",
    description: "Pencapaian keamanan yang menegaskan komitmen kami terhadap perlindungan data pelanggan.",
    link: "#",
  },
];

const mediaFeatures = [
  {
    publication: "Tech in Asia",
    title: "Startup Analitik Indonesia Ini Siap Bersaing di Level Global",
    date: "Desember 2024",
    logo: "TIA",
  },
  {
    publication: "Forbes Indonesia",
    title: "30 Under 30: Founders CloudMetrics",
    date: "November 2024",
    logo: "FI",
  },
  {
    publication: "DealStreetAsia",
    title: "CloudMetrics Raises $50M to Expand Across Southeast Asia",
    date: "Desember 2024",
    logo: "DSA",
  },
  {
    publication: "Kompas Tekno",
    title: "Platform Analitik Lokal yang Dikembangkan untuk Pasar Global",
    date: "Oktober 2024",
    logo: "KT",
  },
];

const brandAssets = [
  {
    name: "Logo Package",
    description: "Logo CloudMetrics dalam berbagai format (PNG, SVG, EPS)",
    icon: Image,
  },
  {
    name: "Brand Guidelines",
    description: "Panduan penggunaan brand, warna, dan tipografi",
    icon: FileText,
  },
  {
    name: "Executive Photos",
    description: "Foto resmi tim leadership untuk keperluan media",
    icon: Image,
  },
  {
    name: "Product Screenshots",
    description: "Screenshot dashboard dan fitur untuk publikasi",
    icon: Image,
  },
];

const stats = [
  { value: "2.000+", label: "Pelanggan" },
  { value: "$50M", label: "Total Pendanaan" },
  { value: "50Jt+", label: "Event/Hari" },
  { value: "15+", label: "Negara" },
];

export default function PressPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Newspaper className="mr-1 h-3 w-3" />
              Press & Media
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Ruang Berita <span className="gradient-text">CloudMetrics</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Dapatkan berita terbaru, siaran pers, dan aset media tentang CloudMetrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:press@cloudmetrics.io">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Hubungi Tim Press
                </Button>
              </a>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Press Kit
              </Button>
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

      {/* Press Releases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Siaran Pers</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Berita terbaru dari CloudMetrics
            </h2>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500 lg:w-40 flex-shrink-0">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {release.title}
                        </h3>
                        <p className="text-slate-600">{release.description}</p>
                      </div>
                      <a href={release.link}>
                        <Button variant="outline" className="flex-shrink-0">
                          Baca Selengkapnya
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Liputan Media</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              CloudMetrics di media
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-bold flex-shrink-0 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                        {feature.logo}
                      </div>
                      <div>
                        <p className="text-sm text-orange-600 font-medium mb-1">{feature.publication}</p>
                        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-slate-500">{feature.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Assets */}
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
              <Download className="mr-1 h-3 w-3" />
              Aset Brand
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Download aset media
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Gunakan aset resmi kami untuk publikasi dan liputan media.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandAssets.map((asset, index) => (
              <motion.div
                key={asset.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-slate-100 mb-4 group-hover:bg-orange-100 transition-colors">
                      <asset.icon className="h-8 w-8 text-slate-600 group-hover:text-orange-600 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{asset.name}</h3>
                    <p className="text-sm text-slate-600 mb-4">{asset.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Mail className="h-12 w-12 text-orange-200 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Butuh informasi lebih lanjut?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Tim press kami siap membantu dengan pertanyaan media, wawancara, dan permintaan informasi.
            </p>
            <a href="mailto:press@cloudmetrics.io">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                press@cloudmetrics.io
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
