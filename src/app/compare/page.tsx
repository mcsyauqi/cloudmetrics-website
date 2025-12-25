"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Check,
  X,
  ArrowRight,
  BarChart3,
  Zap,
  Shield,
  Users,
  Globe,
  DollarSign,
  Clock,
  Headphones,
} from "lucide-react";

const competitors = [
  { name: "CloudMetrics", highlight: true },
  { name: "Competitor A", highlight: false },
  { name: "Competitor B", highlight: false },
  { name: "Competitor C", highlight: false },
];

const comparisonFeatures = [
  {
    category: "Core Analytics",
    features: [
      { name: "Real-time dashboards", values: [true, true, true, false] },
      { name: "AI-powered insights", values: [true, false, true, false] },
      { name: "Natural language queries", values: [true, false, false, false] },
      { name: "Custom metrics builder", values: [true, true, true, true] },
      { name: "Cohort analysis", values: [true, true, false, false] },
      { name: "Funnel analysis", values: [true, true, true, false] },
    ],
  },
  {
    category: "Integrations",
    features: [
      { name: "150+ native integrations", values: [true, false, true, false] },
      { name: "Indonesian platforms (Tokopedia, Shopee)", values: [true, false, false, false] },
      { name: "Custom API connectors", values: [true, true, true, true] },
      { name: "Real-time sync", values: [true, false, true, false] },
      { name: "No-code setup", values: [true, true, false, false] },
    ],
  },
  {
    category: "Collaboration",
    features: [
      { name: "Unlimited users (Pro+)", values: [true, false, false, false] },
      { name: "Real-time collaboration", values: [true, false, true, false] },
      { name: "Comments & annotations", values: [true, true, true, false] },
      { name: "Scheduled reports", values: [true, true, true, true] },
      { name: "Slack/Teams integration", values: [true, true, true, false] },
    ],
  },
  {
    category: "Security & Compliance",
    features: [
      { name: "SOC 2 Type II", values: [true, true, true, false] },
      { name: "GDPR compliant", values: [true, true, true, true] },
      { name: "SSO (SAML)", values: [true, true, true, false] },
      { name: "IP whitelisting", values: [true, false, true, false] },
      { name: "Audit logs", values: [true, true, true, false] },
      { name: "Data residency options", values: [true, false, true, false] },
    ],
  },
  {
    category: "Support & Services",
    features: [
      { name: "24/7 support", values: [true, false, true, false] },
      { name: "Dedicated CSM", values: [true, false, true, false] },
      { name: "Onboarding assistance", values: [true, true, true, false] },
      { name: "Training & certification", values: [true, false, true, false] },
      { name: "Indonesian support team", values: [true, false, false, false] },
    ],
  },
];

const pricingComparison = [
  { name: "CloudMetrics", starting: "Rp 2,9 jt", enterprise: "Custom", highlight: true },
  { name: "Competitor A", starting: "Rp 4,5 jt", enterprise: "$1,000+", highlight: false },
  { name: "Competitor B", starting: "Rp 6 jt", enterprise: "$2,000+", highlight: false },
  { name: "Competitor C", starting: "Rp 1,5 jt", enterprise: "$500+", highlight: false },
];

const advantages = [
  {
    icon: Globe,
    title: "Fokus Asia Tenggara",
    description: "Satu-satunya platform dengan integrasi native untuk Tokopedia, Shopee, dan Bukalapak.",
  },
  {
    icon: DollarSign,
    title: "Harga Lebih Terjangkau",
    description: "Hingga 50% lebih murah dibanding kompetitor dengan fitur yang sama lengkapnya.",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Natural language queries dalam Bahasa Indonesia untuk akses data tanpa keahlian teknis.",
  },
  {
    icon: Users,
    title: "Unlimited Users",
    description: "Tidak ada biaya per user di plan Pro dan Enterprise. Skalakan tim tanpa khawatir biaya.",
  },
  {
    icon: Headphones,
    title: "Support Lokal",
    description: "Tim support berbahasa Indonesia yang memahami konteks bisnis lokal.",
  },
  {
    icon: Clock,
    title: "Setup Cepat",
    description: "Rata-rata waktu setup integrasi hanya 5 menit. Mulai analisis di hari yang sama.",
  },
];

export default function ComparePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Perbandingan</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              CloudMetrics vs{" "}
              <span className="gradient-text">Kompetitor</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Lihat bagaimana CloudMetrics dibandingkan dengan alternatif lain di pasar.
              Kami yakin Anda akan membuat pilihan yang tepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  Coba Gratis 14 Hari
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  Jadwalkan Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Keunggulan</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Mengapa memilih CloudMetrics?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-orange-100">
                        <advantage.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{advantage.title}</h3>
                        <p className="text-sm text-slate-600">{advantage.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Perbandingan Fitur</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Perbandingan fitur lengkap
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-white font-medium text-slate-600 rounded-tl-xl">Fitur</th>
                  {competitors.map((comp) => (
                    <th
                      key={comp.name}
                      className={`p-4 text-center font-semibold ${
                        comp.highlight
                          ? "bg-orange-500 text-white"
                          : "bg-white text-slate-900"
                      } ${comp.name === "Competitor C" ? "rounded-tr-xl" : ""}`}
                    >
                      {comp.highlight && <BarChart3 className="h-5 w-5 mx-auto mb-1" />}
                      {comp.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((category) => (
                  <>
                    <tr key={category.category}>
                      <td colSpan={5} className="p-4 bg-slate-100 font-semibold text-slate-900">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, fIndex) => (
                      <tr key={feature.name} className="border-b border-slate-100">
                        <td className="p-4 text-slate-700 bg-white">{feature.name}</td>
                        {feature.values.map((value, vIndex) => (
                          <td
                            key={vIndex}
                            className={`p-4 text-center ${
                              vIndex === 0 ? "bg-orange-50" : "bg-white"
                            }`}
                          >
                            {value ? (
                              <Check className={`h-5 w-5 mx-auto ${vIndex === 0 ? "text-orange-500" : "text-emerald-500"}`} />
                            ) : (
                              <X className="h-5 w-5 mx-auto text-slate-300" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
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
              <DollarSign className="mr-1 h-3 w-3" />
              Perbandingan Harga
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Value terbaik untuk budget Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {pricingComparison.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${item.highlight ? "border-orange-500 shadow-lg" : ""}`}>
                  <CardContent className="p-6 text-center">
                    {item.highlight && (
                      <Badge className="mb-4 bg-orange-500">Rekomendasi</Badge>
                    )}
                    <h3 className="font-semibold text-slate-900 mb-4">{item.name}</h3>
                    <div className="mb-2">
                      <p className="text-sm text-slate-500">Mulai dari</p>
                      <p className={`text-2xl font-bold ${item.highlight ? "text-orange-600" : "text-slate-900"}`}>
                        {item.starting}
                      </p>
                      <p className="text-sm text-slate-500">/bulan</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-sm text-slate-500">Enterprise</p>
                      <p className="font-semibold text-slate-700">{item.enterprise}</p>
                    </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Siap untuk beralih?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Mulai uji coba gratis 14 hari dan rasakan perbedaannya sendiri.
              Tidak perlu kartu kredit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Mulai Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Jadwalkan Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
