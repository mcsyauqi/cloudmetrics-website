"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  BookOpen,
  Search,
  ArrowRight,
  Rocket,
  Database,
  BarChart3,
  Plug,
  Shield,
  Code,
  Zap,
  Users,
  HelpCircle,
} from "lucide-react";

const quickLinks = [
  {
    icon: Rocket,
    title: "Memulai",
    description: "Setup CloudMetrics dalam menit",
    href: "/docs/getting-started",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Sumber Data",
    description: "Hubungkan database dan API Anda",
    href: "/docs/data-sources",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Dashboard",
    description: "Buat dan kustomisasi dashboard",
    href: "/docs/dashboards",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Plug,
    title: "Integrasi",
    description: "Hubungkan dengan tools Anda",
    href: "/docs/integrations",
    color: "from-orange-500 to-orange-600",
  },
];

const sections = [
  {
    title: "Dasar Platform",
    icon: BookOpen,
    links: [
      { title: "Pengenalan", href: "/docs/introduction" },
      { title: "Konsep Inti", href: "/docs/concepts" },
      { title: "Setup Akun", href: "/docs/account-setup" },
      { title: "Manajemen Tim", href: "/docs/team-management" },
    ],
  },
  {
    title: "Data & Metrik",
    icon: Database,
    links: [
      { title: "Sumber Data", href: "/docs/data-sources" },
      { title: "Metrik & KPI", href: "/docs/metrics" },
      { title: "Field Kustom", href: "/docs/custom-fields" },
      { title: "Transformasi Data", href: "/docs/transformations" },
    ],
  },
  {
    title: "Visualisasi",
    icon: BarChart3,
    links: [
      { title: "Dashboard Builder", href: "/docs/dashboard-builder" },
      { title: "Jenis Chart", href: "/docs/chart-types" },
      { title: "Filter & Kontrol", href: "/docs/filters" },
      { title: "Sharing & Embedding", href: "/docs/sharing" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Code,
    links: [
      { title: "REST API", href: "/docs/api" },
      { title: "Webhooks", href: "/docs/webhooks" },
      { title: "SDK", href: "/docs/sdks" },
      { title: "Autentikasi", href: "/docs/authentication" },
    ],
  },
  {
    title: "Keamanan",
    icon: Shield,
    links: [
      { title: "Gambaran Umum", href: "/docs/security" },
      { title: "SSO/SAML", href: "/docs/sso" },
      { title: "Permissions", href: "/docs/permissions" },
      { title: "Kepatuhan", href: "/docs/compliance" },
    ],
  },
  {
    title: "Bantuan & Support",
    icon: HelpCircle,
    links: [
      { title: "FAQ", href: "/docs/faq" },
      { title: "Troubleshooting", href: "/docs/troubleshooting" },
      { title: "Hubungi Support", href: "/support" },
      { title: "Halaman Status", href: "/status" },
    ],
  },
];

export default function DocsPage() {
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
              Dokumentasi
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Pelajari{" "}
              <span className="gradient-text">CloudMetrics</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Semua yang Anda butuhkan untuk membangun dashboard analitik powerful dan membuat keputusan berbasis data.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Cari dokumentasi..."
                  className="pl-12 h-14 text-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.href} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${link.color} mb-4`}>
                        <link.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-slate-600">{link.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary">
                        Mulai
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900">Jelajahi berdasarkan kategori</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <section.icon className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.title}>
                          <Link
                            href={link.href}
                            className="text-slate-600 hover:text-primary transition-colors text-sm"
                          >
                            {link.title}
                          </Link>
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

      {/* API Section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <Badge variant="outline" className="mb-6 border-slate-600 text-slate-300">
                <Code className="mr-1 h-3 w-3" />
                Developer API
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Bangun dengan API kami
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Akses data Anda secara programatis dengan REST API kami. Bangun integrasi kustom, otomatisasi workflow, dan extend CloudMetrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs/api">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    Referensi API
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/docs/sdks">
                  <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                    Lihat SDK
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 font-mono text-sm">
              <div className="text-slate-400 mb-2"># Get dashboard data</div>
              <div className="text-emerald-400">curl</div>
              <div className="text-slate-300 ml-2">-X GET \</div>
              <div className="text-blue-400 ml-2">&quot;https://api.cloudmetrics.io/v1/dashboards&quot;</div>
              <div className="text-slate-300 ml-2">-H &quot;Authorization: Bearer YOUR_API_KEY&quot;</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-slate-50 border border-slate-200"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Butuh bantuan?</h3>
                <p className="text-slate-600">Tim support kami tersedia 24/7.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/support">
                <Button variant="outline">Hubungi Support</Button>
              </Link>
              <Link href="/docs/faq">
                <Button>Lihat FAQ</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
