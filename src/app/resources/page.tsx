"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  ArrowRight,
  FileText,
  Video,
  Download,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";

const featuredPost = {
  title: "Panduan Lengkap Membangun Budaya Berbasis Data",
  excerpt: "Pelajari bagaimana perusahaan terkemuka mentransformasi organisasi mereka melalui literasi data, tata kelola, dan praktik analitik modern.",
  category: "Panduan",
  readTime: "15 menit baca",
  href: "/resources/data-driven-culture",
  image: "gradient",
};

const blogPosts = [
  {
    title: "10 Best Practice Desain Dashboard untuk 2024",
    excerpt: "Buat dashboard yang mendorong aksi dengan prinsip desain yang terbukti.",
    category: "Best Practices",
    readTime: "8 menit baca",
    href: "/resources/dashboard-design-best-practices",
  },
  {
    title: "Cara Menghitung dan Meningkatkan ROI Analitik",
    excerpt: "Kerangka praktis untuk mengukur dampak bisnis dari investasi analitik Anda.",
    category: "Strategi",
    readTime: "6 menit baca",
    href: "/resources/analytics-roi",
  },
  {
    title: "AI dalam Analitik: Melampaui Hype",
    excerpt: "Memisahkan nilai nyata dari buzzword marketing dalam analitik berbasis AI.",
    category: "AI & ML",
    readTime: "10 menit baca",
    href: "/resources/ai-analytics-beyond-hype",
  },
  {
    title: "Real-time vs Batch Processing: Kapan Menggunakan Masing-masing",
    excerpt: "Panduan teknis untuk memilih pendekatan pemrosesan data yang tepat.",
    category: "Teknis",
    readTime: "12 menit baca",
    href: "/resources/realtime-vs-batch",
  },
  {
    title: "Membangun Dashboard Eksekutif yang Benar-benar Digunakan",
    excerpt: "Cara membuat dashboard yang benar-benar dilihat oleh eksekutif sibuk.",
    category: "Best Practices",
    readTime: "7 menit baca",
    href: "/resources/executive-dashboards",
  },
  {
    title: "Kepatuhan Privasi Data: GDPR, CCPA, dan Lainnya",
    excerpt: "Navigasi lanskap kompleks regulasi privasi data.",
    category: "Kepatuhan",
    readTime: "9 menit baca",
    href: "/resources/data-privacy-compliance",
  },
];

const resources = [
  {
    type: "Webinar",
    icon: Video,
    title: "Demo Langsung: Yang Baru di CloudMetrics 2024",
    description: "Bergabunglah untuk walkthrough fitur terbaru kami.",
    date: "15 Jan 2024",
    href: "/resources/webinars/whats-new-2024",
    color: "from-violet-500 to-violet-600",
  },
  {
    type: "Ebook",
    icon: Download,
    title: "Panduan Pembelian Analitik",
    description: "Semua yang perlu Anda ketahui sebelum memilih platform analitik.",
    date: "Download Gratis",
    href: "/resources/ebooks/analytics-buyers-guide",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "Template",
    icon: FileText,
    title: "Template Dashboard KPI",
    description: "Template siap pakai untuk metrik bisnis umum.",
    date: "10 Template",
    href: "/resources/templates/kpi-dashboards",
    color: "from-emerald-500 to-emerald-600",
  },
];

const categories = ["Semua", "Best Practices", "Strategi", "Teknis", "AI & ML", "Kepatuhan"];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6">
              <BookOpen className="mr-1 h-3 w-3" />
              Sumber Daya
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Belajar dari yang{" "}
              <span className="gradient-text">terbaik dalam analitik</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Panduan, tutorial, webinar, dan insight untuk membantu Anda memaksimalkan data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href={featuredPost.href} className="block group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Image/Gradient */}
                    <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center">
                      <BookOpen className="h-24 w-24 text-white/30" />
                    </div>
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-slate-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Baca panduan
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={resource.href} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color}`}>
                          <resource.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">{resource.type}</Badge>
                          <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {resource.description}
                          </p>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {resource.date}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900">Artikel terbaru</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={post.href} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </Badge>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg">
              Lihat Semua Artikel
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tetap selangkah lebih maju
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Dapatkan insight mingguan tentang analitik, strategi data, dan tren industri langsung ke inbox Anda.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                Berlangganan
              </Button>
            </form>
            <p className="mt-4 text-sm text-slate-400">
              Bergabung dengan 10.000+ profesional data. Berhenti langganan kapan saja.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
