"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Sparkles,
  FileText,
  Plug,
  Shield,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Play,
  Layers,
  Bell,
  Users,
  Lock,
  Cpu,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Real-time",
    description: "Buat dashboard menakjubkan yang terupdate secara live saat data masuk. Interface drag-and-drop memudahkan siapa saja membuat visualisasi profesional.",
    benefits: ["Update data langsung", "Builder drag-and-drop", "50+ jenis chart", "Tema kustom"],
    href: "/features/dashboards",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Biarkan machine learning bekerja untuk Anda. AI kami secara otomatis mengidentifikasi tren, anomali, dan peluang yang mungkin terlewat.",
    benefits: ["Deteksi anomali", "Prediksi tren", "Alert cerdas", "Query bahasa natural"],
    href: "/features/ai-insights",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: FileText,
    title: "Laporan Kustom",
    description: "Generate laporan branded yang menceritakan data Anda. Jadwalkan pengiriman otomatis ke stakeholder sesuai kebutuhan.",
    benefits: ["Template branded", "Pengiriman terjadwal", "Berbagai format", "Elemen interaktif"],
    href: "/features/reports",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Plug,
    title: "100+ Integrasi",
    description: "Hubungkan seluruh tech stack Anda dalam menit. Dari database hingga tools SaaS, kami punya konektor pre-built untuk semuanya.",
    benefits: ["Konektor pre-built", "API kustom", "Sync real-time", "Setup tanpa kode"],
    href: "/features/integrations",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Bell,
    title: "Alert Cerdas",
    description: "Jangan lewatkan perubahan penting. Atur alert cerdas yang memberitahu Anda via Slack, email, atau SMS saat metrik berubah.",
    benefits: ["Alert multi-channel", "Trigger threshold", "Alert anomali", "Routing alert"],
    href: "/features/alerts",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Users,
    title: "Kolaborasi Tim",
    description: "Bekerja bersama dengan lancar melalui dashboard bersama, anotasi, dan fitur komentar real-time yang dibangun untuk tim modern.",
    benefits: ["Dashboard bersama", "Komentar & mention", "Riwayat versi", "Akses berbasis role"],
    href: "/features/collaboration",
    color: "from-cyan-500 to-cyan-600",
  },
];

const enterpriseFeatures = [
  { icon: Shield, title: "Sertifikasi SOC 2 Type II", description: "Keamanan dan kepatuhan tingkat enterprise" },
  { icon: Lock, title: "SSO & SAML", description: "Single sign-on dengan identity provider Anda" },
  { icon: Globe, title: "Infrastruktur Global", description: "Deploy di region mana saja untuk data residency" },
  { icon: Cpu, title: "Resource Dedicated", description: "Compute terisolasi untuk performa maksimal" },
];

export default function FeaturesPage() {
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
              <Layers className="mr-1 h-3 w-3" />
              Fitur Platform
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Analitik powerful,{" "}
              <span className="gradient-text">simpel dan indah</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Semua yang Anda butuhkan untuk memahami data dan membuat keputusan lebih cerdas.
              Dibangun untuk tim dari semua ukuran.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  Mulai Uji Coba Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Lihat Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.href} className="block group">
                  <div className="h-full p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 bg-white">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="mt-6 flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Pelajari lebih lanjut
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 border-slate-700 text-slate-300">
              <Shield className="mr-1 h-3 w-3" />
              Siap Enterprise
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Dibangun untuk skala enterprise
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Keamanan, kepatuhan, dan performa yang memenuhi kebutuhan organisasi terbesar di dunia.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
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
            <Link href="/solutions/enterprise">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Jelajahi Enterprise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200"
          >
            <LineChart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Lihat perbandingan CloudMetrics
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Bandingkan fitur, harga, dan kemampuan dengan platform analitik lainnya.
            </p>
            <Link href="/compare">
              <Button size="lg">
                Lihat Perbandingan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
