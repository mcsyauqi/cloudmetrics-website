"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Headphones,
  Search,
  BookOpen,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  ArrowRight,
  FileText,
  Video,
  Users,
  Zap,
  CheckCircle,
  ExternalLink,
  HelpCircle,
  Settings,
  Database,
  BarChart3,
  Shield,
  Code,
} from "lucide-react";

const supportOptions = [
  {
    icon: BookOpen,
    title: "Dokumentasi",
    description: "Panduan lengkap dan tutorial untuk semua fitur CloudMetrics.",
    link: "/docs",
    linkText: "Buka Dokumentasi",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Dapatkan bantuan real-time dari tim support kami.",
    link: "#",
    linkText: "Mulai Chat",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Kirim tiket dan dapatkan respons dalam 24 jam.",
    link: "mailto:support@cloudmetrics.io",
    linkText: "Kirim Email",
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Untuk pelanggan Enterprise dengan dukungan prioritas.",
    link: "tel:+622155551234",
    linkText: "+62 21 5555 1234",
  },
];

const popularArticles = [
  {
    icon: Settings,
    title: "Cara Setup Integrasi Pertama Anda",
    category: "Getting Started",
    views: "15.2K",
  },
  {
    icon: Database,
    title: "Menghubungkan Database PostgreSQL",
    category: "Integrations",
    views: "12.8K",
  },
  {
    icon: BarChart3,
    title: "Membuat Dashboard Pertama Anda",
    category: "Dashboards",
    views: "11.5K",
  },
  {
    icon: Shield,
    title: "Konfigurasi Keamanan dan Akses",
    category: "Security",
    views: "9.3K",
  },
  {
    icon: Code,
    title: "Menggunakan REST API",
    category: "API",
    views: "8.7K",
  },
  {
    icon: Users,
    title: "Mengelola Tim dan Permission",
    category: "Team",
    views: "7.9K",
  },
];

const faqCategories = [
  { name: "Billing", count: 12 },
  { name: "Account", count: 8 },
  { name: "Integrations", count: 24 },
  { name: "Dashboards", count: 18 },
  { name: "Security", count: 15 },
  { name: "API", count: 21 },
];

const faqs = [
  {
    question: "Bagaimana cara reset password?",
    answer: "Klik 'Lupa Password' di halaman login, masukkan email Anda, dan ikuti instruksi di email untuk mereset password.",
  },
  {
    question: "Mengapa data saya tidak ter-sync?",
    answer: "Periksa status integrasi di Settings > Integrations. Pastikan kredensial masih valid dan tidak ada error pada log sync.",
  },
  {
    question: "Bagaimana cara upgrade plan?",
    answer: "Buka Settings > Billing > Upgrade Plan. Pilih plan baru dan ikuti proses pembayaran. Perubahan akan efektif segera.",
  },
  {
    question: "Apakah ada batas data yang bisa di-import?",
    answer: "Batas tergantung plan Anda. Starter: 1M events/bulan, Pro: 10M events/bulan, Enterprise: unlimited.",
  },
  {
    question: "Bagaimana cara menambah anggota tim?",
    answer: "Buka Settings > Team > Invite Member. Masukkan email dan pilih role yang sesuai. Undangan akan dikirim via email.",
  },
];

const supportPlans = [
  {
    name: "Standard",
    description: "Untuk semua pelanggan",
    responseTime: "24 jam",
    features: ["Email support", "Dokumentasi", "Community forum"],
    included: true,
  },
  {
    name: "Priority",
    description: "Untuk pelanggan Pro",
    responseTime: "4 jam",
    features: ["Live chat", "Phone support (jam kerja)", "Onboarding session"],
    included: false,
  },
  {
    name: "Enterprise",
    description: "Untuk pelanggan Enterprise",
    responseTime: "1 jam",
    features: ["24/7 support", "Dedicated CSM", "Custom training", "SLA guarantee"],
    included: false,
  },
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");

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
              <Headphones className="mr-1 h-3 w-3" />
              Pusat Bantuan
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Bagaimana kami bisa{" "}
              <span className="gradient-text">membantu?</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Temukan jawaban, pelajari fitur, atau hubungi tim support kami.
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Cari artikel bantuan, tutorial, atau FAQ..."
                className="pl-12 h-14 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Opsi Support</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Pilih cara yang nyaman untuk Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-orange-100 mb-4">
                      <option.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{option.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{option.description}</p>
                    <a href={option.link}>
                      <Button variant="outline" size="sm" className="w-full">
                        {option.linkText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
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
              <FileText className="mr-1 h-3 w-3" />
              Artikel Populer
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Artikel yang sering dibaca
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-slate-100 group-hover:bg-orange-100 transition-colors">
                        <article.icon className="h-5 w-5 text-slate-600 group-hover:text-orange-600 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 text-xs">{article.category}</Badge>
                        <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-slate-500">{article.views} views</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/docs">
              <Button variant="outline" size="lg">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ Categories */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                <HelpCircle className="mr-1 h-3 w-3" />
                Kategori FAQ
              </Badge>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Jelajahi berdasarkan topik
              </h2>
              <div className="space-y-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="text-slate-700">{category.name}</span>
                    <Badge variant="secondary">{category.count}</Badge>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Badge variant="outline" className="mb-4">Pertanyaan Umum</Badge>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Pertanyaan yang sering diajukan
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <Card key={faq.question}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                      <p className="text-slate-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Plans */}
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
              <Clock className="mr-1 h-3 w-3" />
              Support Plans
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Level support sesuai kebutuhan Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${index === 2 ? "border-orange-500 shadow-lg" : ""}`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
                      <p className="text-sm text-slate-600">{plan.description}</p>
                    </div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold gradient-text">{plan.responseTime}</div>
                      <p className="text-sm text-slate-500">Response Time</p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <MessageSquare className="h-12 w-12 text-orange-200 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Masih butuh bantuan?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Tim support kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@cloudmetrics.io">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Hubungi Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Buka Dokumentasi
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
