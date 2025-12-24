"use client";

import { motion } from "framer-motion";
import { Database, Cog, LineChart, Rocket } from "lucide-react";

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Hubungkan Data Anda",
    description: "Integrasikan dengan 100+ sumber data dalam hitungan menit. Dari database hingga tools SaaS, kami yang menangani.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Cog,
    step: "02",
    title: "Konfigurasi Metrik",
    description: "Tentukan KPI yang penting untuk bisnis Anda. Gunakan template kami atau buat metrik kustom dengan mudah.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Bangun Dashboard",
    description: "Buat visualisasi memukau dengan builder drag-and-drop. Tidak perlu SQL atau coding.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Ambil Tindakan",
    description: "Dapatkan insight dan notifikasi berbasis AI. Buat keputusan berbasis data yang mengembangkan bisnis Anda.",
    color: "from-purple-500 to-purple-600",
  },
];

export function HowItWorks() {
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Cara Kerja</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Dari kekacauan data menjadi{" "}
            <span className="gradient-text">kejelasan dalam hitungan menit</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Mulai gunakan CloudMetrics dalam empat langkah sederhana. Tidak perlu setup yang rumit.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Icon Container */}
                <div className="relative inline-flex">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} shadow-lg mb-6`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md border border-slate-200 text-xs font-bold text-slate-900">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-4">
            Rata-rata waktu setup: <span className="font-semibold text-slate-900">15 menit</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
