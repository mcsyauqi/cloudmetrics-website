"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  ArrowRight,
  TrendingUp,
  Quote,
  Star,
  Building2,
  ShoppingCart,
  Rocket,
} from "lucide-react";

const caseStudies = [
  {
    company: "TechScale Inc",
    industry: "SaaS",
    logo: "TS",
    quote: "CloudMetrics mengubah cara kami memahami pelanggan. Dashboard real-time dan AI insights membantu kami meningkatkan konversi hingga 34%.",
    author: "Sarah Chen",
    role: "VP of Growth",
    metric: "34%",
    metricLabel: "Peningkatan konversi",
    href: "/customers/techscale",
    color: "from-blue-500 to-blue-600",
    icon: Rocket,
  },
  {
    company: "DataFlow Systems",
    industry: "Enterprise",
    logo: "DF",
    quote: "Akhirnya, platform analitik yang benar-benar digunakan seluruh tim. Interface-nya intuitif, dan integrasinya menghemat waktu engineering berbulan-bulan.",
    author: "Marcus Rodriguez",
    role: "CTO",
    metric: "3 bulan",
    metricLabel: "Waktu engineering dihemat",
    href: "/customers/dataflow",
    color: "from-indigo-500 to-indigo-600",
    icon: Building2,
  },
  {
    company: "Retail Giant Co",
    industry: "E-commerce",
    logo: "RG",
    quote: "Kami mengevaluasi 12 solusi analitik berbeda. CloudMetrics jelas pemenangnya karena kombinasi kekuatan, kemudahan penggunaan, dan keamanan enterprise.",
    author: "Emily Watson",
    role: "Head of Data",
    metric: "$2M",
    metricLabel: "Penghematan tahunan teridentifikasi",
    href: "/customers/retailgiant",
    color: "from-orange-500 to-orange-600",
    icon: ShoppingCart,
  },
  {
    company: "GrowthMaster",
    industry: "Marketing",
    logo: "GM",
    quote: "ROI langsung terasa. Dalam bulan pertama, kami mengidentifikasi peluang optimasi senilai $2M menggunakan rekomendasi AI CloudMetrics.",
    author: "James Park",
    role: "CEO",
    metric: "47%",
    metricLabel: "Pertumbuhan revenue",
    href: "/customers/growthmaster",
    color: "from-emerald-500 to-emerald-600",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    content: "Support-nya luar biasa. Saat kami butuh integrasi kustom, mereka membantu implementasi dalam hitungan hari, bukan minggu.",
    author: "Lisa Thompson",
    role: "Director of Analytics",
    company: "MedTech Solutions",
    avatar: "LT",
  },
  {
    content: "CloudMetrics menangani 10 miliar+ event harian kami tanpa masalah. Performanya tak tertandingi.",
    author: "David Kim",
    role: "VP Engineering",
    company: "ScaleUp Labs",
    avatar: "DK",
  },
  {
    content: "Fitur AI insights saja sudah membayar platform ini 10x lipat. Ia menangkap hal-hal yang tidak akan pernah kami sadari.",
    author: "Amanda Foster",
    role: "Data Lead",
    company: "InnovateCo",
    avatar: "AF",
  },
];

const logos = [
  "Stripe", "Shopify", "Slack", "Notion", "Linear", "Vercel",
  "Figma", "GitHub", "Atlassian", "Twilio", "Zendesk", "HubSpot",
];

export default function CustomersPage() {
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
              <Users className="mr-1 h-3 w-3" />
              Kisah Pelanggan
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Dicintai oleh{" "}
              <span className="gradient-text">1.000+ perusahaan</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Lihat bagaimana perusahaan terkemuka menggunakan CloudMetrics untuk mengubah data menjadi keunggulan kompetitif.
            </p>
          </motion.div>

          {/* Logo Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <p className="text-center text-sm text-slate-500 mb-8">
              Dipercaya oleh perusahaan inovatif di seluruh dunia
            </p>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="text-slate-400 font-semibold text-lg hover:text-slate-600 transition-colors"
                >
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Studi kasus unggulan
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Pendalaman tentang bagaimana pelanggan kami mencapai hasil luar biasa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={study.href} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                    <CardContent className="p-0">
                      {/* Header */}
                      <div className={`p-6 bg-gradient-to-br ${study.color}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white font-bold">
                              {study.logo}
                            </div>
                            <div>
                              <div className="font-semibold text-white">{study.company}</div>
                              <div className="text-sm text-white/80">{study.industry}</div>
                            </div>
                          </div>
                          <study.icon className="h-8 w-8 text-white/50" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Metric */}
                        <div className="mb-4 p-4 rounded-xl bg-slate-50 text-center">
                          <div className="text-3xl font-bold gradient-text">{study.metric}</div>
                          <div className="text-sm text-slate-600">{study.metricLabel}</div>
                        </div>

                        {/* Quote */}
                        <Quote className="h-6 w-6 text-slate-200 mb-2" />
                        <p className="text-slate-600 leading-relaxed mb-4">
                          &ldquo;{study.quote}&rdquo;
                        </p>

                        {/* Author */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-slate-900">{study.author}</div>
                            <div className="text-sm text-slate-500">{study.role}</div>
                          </div>
                          <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                            Baca cerita
                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
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

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Apa kata pelanggan kami
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
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
              Siap bergabung?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Mulai uji coba gratis hari ini dan lihat mengapa 1.000+ perusahaan mempercayai CloudMetrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Mulai Uji Coba Gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
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
