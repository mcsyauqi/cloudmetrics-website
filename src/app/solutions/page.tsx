"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Rocket,
  Landmark,
  Plane,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise",
    description: "Analitik skalabel untuk organisasi besar dengan kebutuhan data kompleks dan persyaratan keamanan ketat.",
    benefits: ["User unlimited", "SOC 2 Type II", "Support dedicated", "SLA kustom"],
    href: "/solutions/enterprise",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Optimalkan toko online Anda dengan tracking konversi real-time, insight inventori, dan analitik pelanggan.",
    benefits: ["Tracking konversi", "Analitik keranjang", "Segmen pelanggan", "Prediksi revenue"],
    href: "/solutions/ecommerce",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Analitik HIPAA-compliant untuk organisasi kesehatan guna meningkatkan outcome pasien dan efisiensi operasional.",
    benefits: ["HIPAA compliant", "Analitik pasien", "Metrik operasional", "Laporan kepatuhan"],
    href: "/solutions/healthcare",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Pendidikan",
    description: "Lacak engagement siswa, hasil pembelajaran, dan performa institusi dengan analitik pendidikan.",
    benefits: ["Tracking siswa", "Analitik kursus", "Metrik retensi", "Insight performa"],
    href: "/solutions/education",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Rocket,
    title: "Startup",
    description: "Bergerak cepat dengan analitik yang dirancang untuk perusahaan berkembang. Dapatkan insight tanpa kompleksitas enterprise.",
    benefits: ["Setup cepat", "Metrik pertumbuhan", "Laporan investor", "Harga terjangkau"],
    href: "/solutions/startups",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Landmark,
    title: "Layanan Keuangan",
    description: "Analitik aman dan compliant untuk bank, fintech, dan lembaga keuangan dengan deteksi fraud real-time.",
    benefits: ["Deteksi fraud", "Analitik risiko", "Siap kepatuhan", "Alert real-time"],
    href: "/solutions/financial",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Optimalkan booking, pahami perilaku tamu, dan maksimalkan revenue dengan analitik hospitality.",
    benefits: ["Analitik booking", "Insight tamu", "Optimasi revenue", "Prediksi permintaan"],
    href: "/solutions/travel",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Factory,
    title: "Manufaktur",
    description: "Monitor lini produksi, lacak metrik kualitas, dan optimalkan supply chain dengan analitik industri.",
    benefits: ["Monitoring produksi", "Kontrol kualitas", "Supply chain", "Maintenance prediktif"],
    href: "/solutions/manufacturing",
    color: "from-slate-500 to-slate-600",
  },
];

const stats = [
  { value: "1.000+", label: "Perusahaan lintas industri" },
  { value: "50Jt+", label: "Data point diproses harian" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "4.9/5", label: "Kepuasan pelanggan" },
];

export default function SolutionsPage() {
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
              <Building2 className="mr-1 h-3 w-3" />
              Solusi Industri
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Dibangun untuk{" "}
              <span className="gradient-text">industri Anda</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Solusi analitik yang disesuaikan untuk mengatasi tantangan unik industri Anda.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={solution.href} className="block group">
                  <div className="h-full p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${solution.color}`}>
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {solution.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                            >
                              <CheckCircle className="h-3 w-3 text-emerald-500" />
                              {benefit}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <div className="flex items-center text-sm font-medium text-primary">
                          Pelajari lebih lanjut
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Tidak melihat industri Anda?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              CloudMetrics cukup fleksibel untuk menangani use case apa pun. Diskusikan kebutuhan spesifik Anda dengan tim kami.
            </p>
            <Link href="/demo">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Hubungi Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
