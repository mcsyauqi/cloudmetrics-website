"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Sparkles,
  FileText,
  Plug,
  Shield,
  Clock,
  Globe,
  Zap
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Real-time",
    description: "Pantau metrik Anda secara langsung dengan visualisasi yang terus diperbarui dan notifikasi instan.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Dapatkan rekomendasi cerdas dan analitik prediktif yang didukung oleh machine learning.",
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: FileText,
    title: "Laporan Kustom",
    description: "Buat laporan yang indah dan dapat disesuaikan untuk menceritakan data Anda secara efektif.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Plug,
    title: "100+ Integrasi",
    description: "Hubungkan dengan alat favorit Anda - dari database hingga CRM, platform marketing hingga sistem pembayaran.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Shield,
    title: "Keamanan Enterprise",
    description: "Tersertifikasi SOC 2 Type II dengan enkripsi end-to-end, SSO, dan kontrol akses tingkat lanjut.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    span: "col-span-2",
  },
  {
    icon: Clock,
    title: "Analisis Historis",
    description: "Analisis tren dari waktu ke waktu dengan retensi data historis komprehensif dan alat perbandingan.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Globe,
    title: "Infrastruktur Global",
    description: "Deploy di berbagai region untuk akses latensi rendah dan kepatuhan residensi data.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Zap,
    title: "Super Cepat",
    description: "Performa query sub-detik pada miliaran data point menggunakan caching dan optimisasi canggih.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    span: "col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Fitur</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Semua yang Anda butuhkan untuk{" "}
            <span className="gradient-text">memahami data Anda</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Alat analitik powerful yang dirancang untuk membantu Anda membuat keputusan lebih cerdas, lebih cepat.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`${feature.span} group relative overflow-hidden rounded-2xl bg-slate-50 p-6 lg:p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg`}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: feature.color.includes('blue') ? '#3B82F6' : feature.color.includes('violet') ? '#8B5CF6' : feature.color.includes('emerald') ? '#10B981' : feature.color.includes('orange') ? '#F97316' : feature.color.includes('indigo') ? '#6366F1' : feature.color.includes('pink') ? '#EC4899' : feature.color.includes('cyan') ? '#06B6D4' : '#EAB308' }} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
