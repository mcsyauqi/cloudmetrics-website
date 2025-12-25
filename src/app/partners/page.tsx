"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Handshake,
  ArrowRight,
  Building2,
  Globe,
  DollarSign,
  Users,
  Award,
  Zap,
  BookOpen,
  Headphones,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Code,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Reseller Partner",
    description: "Jual CloudMetrics ke pelanggan Anda dan dapatkan komisi menarik hingga 30%.",
    benefits: ["Margin hingga 30%", "Deal registration", "Sales enablement", "Co-marketing funds"],
  },
  {
    icon: Code,
    title: "Technology Partner",
    description: "Integrasikan produk Anda dengan CloudMetrics untuk memberikan value lebih ke pelanggan bersama.",
    benefits: ["API akses penuh", "Technical support", "Joint roadmap", "Co-development"],
  },
  {
    icon: Briefcase,
    title: "Consulting Partner",
    description: "Bantu pelanggan mengimplementasi dan mengoptimalkan penggunaan CloudMetrics.",
    benefits: ["Implementation fee", "Training & sertifikasi", "Referral bonus", "Priority support"],
  },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Revenue Share Kompetitif",
    description: "Dapatkan komisi hingga 30% untuk setiap deal yang Anda bawa.",
  },
  {
    icon: BookOpen,
    title: "Training & Sertifikasi",
    description: "Program sertifikasi lengkap untuk tim sales dan teknis Anda.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Partner success manager khusus untuk membantu kesuksesan Anda.",
  },
  {
    icon: Globe,
    title: "Co-Marketing",
    description: "Dana marketing bersama untuk kampanye dan event.",
  },
  {
    icon: Zap,
    title: "Portal Partner",
    description: "Akses ke resources, deal registration, dan tracking komisi.",
  },
  {
    icon: Award,
    title: "Partner Awards",
    description: "Program penghargaan untuk partner berkinerja terbaik.",
  },
];

const existingPartners = [
  { name: "Accenture", category: "Consulting", logo: "AC" },
  { name: "Deloitte", category: "Consulting", logo: "DL" },
  { name: "AWS", category: "Technology", logo: "AW" },
  { name: "Google Cloud", category: "Technology", logo: "GC" },
  { name: "Salesforce", category: "Technology", logo: "SF" },
  { name: "Microsoft", category: "Technology", logo: "MS" },
  { name: "PwC", category: "Consulting", logo: "PW" },
  { name: "McKinsey", category: "Consulting", logo: "MK" },
];

const partnerLevels = [
  {
    name: "Silver",
    requirements: ["2+ deals/tahun", "1 certified staff"],
    benefits: ["10% margin", "Basic support", "Partner portal"],
  },
  {
    name: "Gold",
    requirements: ["5+ deals/tahun", "3 certified staff", "$50K revenue"],
    benefits: ["20% margin", "Priority support", "Co-marketing funds", "Quarterly reviews"],
  },
  {
    name: "Platinum",
    requirements: ["10+ deals/tahun", "5 certified staff", "$200K revenue"],
    benefits: ["30% margin", "Dedicated manager", "Joint planning", "Executive access", "Custom training"],
  },
];

const stats = [
  { value: "200+", label: "Partner Global" },
  { value: "30%", label: "Max Margin" },
  { value: "$5M+", label: "Partner Revenue" },
  { value: "95%", label: "Partner Satisfaction" },
];

export default function PartnersPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Handshake className="mr-1 h-3 w-3" />
              Partner Program
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Tumbuh bersama{" "}
              <span className="gradient-text">CloudMetrics</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Bergabunglah dengan jaringan partner global kami dan buka peluang bisnis baru
              di dunia analitik data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Menjadi Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Download Partner Guide
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

      {/* Partner Types */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Tipe Partner</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Pilih program yang sesuai untuk Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-orange-100 mb-4">
                      <type.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{type.title}</h3>
                    <p className="text-slate-600 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          {benefit}
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

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Keuntungan Partner</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Mengapa bermitra dengan kami?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-orange-100">
                        <benefit.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-sm text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Levels */}
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
              <TrendingUp className="mr-1 h-3 w-3" />
              Partner Tiers
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Tumbuh bersama program berjenjang
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${index === 2 ? "border-orange-500 shadow-lg" : ""}`}>
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <Badge variant={index === 2 ? "default" : "secondary"} className="mb-2">
                        {index === 2 && <Award className="mr-1 h-3 w-3" />}
                        {level.name}
                      </Badge>
                      {index === 2 && <p className="text-sm text-orange-600 mt-2">Most Popular</p>}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 mb-3">Persyaratan:</h4>
                      <ul className="space-y-2">
                        {level.requirements.map((req) => (
                          <li key={req} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Keuntungan:</h4>
                      <ul className="space-y-2">
                        {level.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-emerald-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
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
              <Users className="mr-1 h-3 w-3" />
              Partner Kami
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Dipercaya oleh perusahaan terkemuka
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {existingPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100 text-slate-600 font-bold text-xl mb-3">
                  {partner.logo}
                </div>
                <span className="font-medium text-slate-700">{partner.name}</span>
                <span className="text-sm text-slate-500">{partner.category}</span>
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
              Siap menjadi partner kami?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Daftarkan diri Anda hari ini dan mulai perjalanan kemitraan yang menguntungkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Daftar Sekarang
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="mailto:partners@cloudmetrics.io">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Hubungi Tim Partner
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
