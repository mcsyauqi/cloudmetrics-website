"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  X,
  Zap,
  Building2,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Sempurna untuk tim kecil yang baru memulai analitik",
    price: "$49",
    period: "/bulan",
    popular: false,
    cta: "Mulai Uji Coba Gratis",
    href: "/signup?plan=starter",
    features: [
      { name: "Hingga 5 anggota tim", included: true },
      { name: "10 dashboard", included: true },
      { name: "1 juta event/bulan", included: true },
      { name: "Retensi data 7 hari", included: true },
      { name: "Integrasi standar", included: true },
      { name: "Support email", included: true },
      { name: "AI insights", included: false },
      { name: "Laporan kustom", included: false },
      { name: "SSO/SAML", included: false },
      { name: "Support dedicated", included: false },
    ],
  },
  {
    name: "Pro",
    description: "Untuk tim berkembang yang butuh lebih banyak kekuatan dan fleksibilitas",
    price: "$149",
    period: "/bulan",
    popular: true,
    cta: "Mulai Uji Coba Gratis",
    href: "/signup?plan=pro",
    features: [
      { name: "Hingga 20 anggota tim", included: true },
      { name: "Dashboard unlimited", included: true },
      { name: "10 juta event/bulan", included: true },
      { name: "Retensi data 1 tahun", included: true },
      { name: "Semua integrasi", included: true },
      { name: "Support email prioritas", included: true },
      { name: "AI insights", included: true },
      { name: "Laporan kustom", included: true },
      { name: "SSO/SAML", included: false },
      { name: "Support dedicated", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Untuk organisasi besar dengan kebutuhan keamanan tingkat lanjut",
    price: "Kustom",
    period: "",
    popular: false,
    cta: "Hubungi Sales",
    href: "/demo",
    features: [
      { name: "Anggota tim unlimited", included: true },
      { name: "Dashboard unlimited", included: true },
      { name: "Event unlimited", included: true },
      { name: "Retensi data unlimited", included: true },
      { name: "Semua integrasi + kustom", included: true },
      { name: "Support telepon 24/7", included: true },
      { name: "AI insights advanced", included: true },
      { name: "Laporan white-label", included: true },
      { name: "SSO/SAML", included: true },
      { name: "Success manager dedicated", included: true },
    ],
  },
];

const faqs = [
  {
    question: "Bisakah saya mengubah paket kapan saja?",
    answer: "Ya, Anda bisa upgrade atau downgrade paket kapan saja. Perubahan berlaku langsung, dan kami akan prorate tagihan Anda.",
  },
  {
    question: "Apa yang terjadi jika melebihi limit event?",
    answer: "Kami akan memberitahu saat Anda mendekati limit. Anda bisa upgrade paket atau membeli event tambahan sesuai kebutuhan.",
  },
  {
    question: "Apakah ada uji coba gratis?",
    answer: "Ya! Semua paket dilengkapi uji coba gratis 14 hari. Tidak perlu kartu kredit untuk memulai.",
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer: "Kami menerima semua kartu kredit utama, transfer ACH, dan invoice untuk paket Enterprise tahunan.",
  },
  {
    question: "Apakah ada diskon untuk tagihan tahunan?",
    answer: "Ya, Anda hemat 20% jika memilih tagihan tahunan di paket mana pun.",
  },
  {
    question: "Bagaimana kebijakan refund?",
    answer: "Kami menawarkan garansi uang kembali 30 hari. Jika tidak puas, hubungi kami untuk refund penuh.",
  },
];

export default function PricingPage() {
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
              <Zap className="mr-1 h-3 w-3" />
              Harga Simpel
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Paket yang{" "}
              <span className="gradient-text">berkembang bersama Anda</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Mulai gratis. Upgrade saat butuh lebih. Tanpa biaya tersembunyi, tanpa kejutan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "relative h-full flex flex-col",
                  plan.popular && "border-primary shadow-lg shadow-primary/10 scale-105"
                )}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white shadow-lg">
                        <Sparkles className="mr-1 h-3 w-3" />
                        Paling Populer
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={cn(
                            "text-sm",
                            feature.included ? "text-slate-700" : "text-slate-400"
                          )}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={plan.href} className="w-full">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Annual Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              <span className="font-semibold text-primary">Hemat 20%</span> dengan tagihan tahunan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 lg:p-12 rounded-2xl bg-slate-900 text-center"
          >
            <Building2 className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Butuh solusi kustom?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Dapatkan paket yang disesuaikan dengan integrasi kustom, support dedicated, dan keamanan enterprise.
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">
              Pertanyaan yang sering diajukan
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 rounded-xl border border-slate-200 bg-white"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              Masih punya pertanyaan?{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Hubungi tim kami
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
