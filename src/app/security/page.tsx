"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Server,
  Eye,
  FileCheck,
  Users,
  Globe,
  Key,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Download,
  Building2,
} from "lucide-react";

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Audit tahunan oleh auditor independen",
    icon: FileCheck,
  },
  {
    name: "ISO 27001",
    description: "Standar manajemen keamanan informasi",
    icon: Shield,
  },
  {
    name: "GDPR Compliant",
    description: "Kepatuhan regulasi privasi EU",
    icon: Globe,
  },
  {
    name: "HIPAA Ready",
    description: "Siap untuk data kesehatan",
    icon: Building2,
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "Enkripsi End-to-End",
    description: "Semua data dienkripsi menggunakan TLS 1.3 saat transit dan AES-256 saat disimpan. Kunci enkripsi dikelola dengan AWS KMS.",
    details: ["TLS 1.3 untuk data in transit", "AES-256 untuk data at rest", "Key rotation otomatis", "Customer-managed keys (Enterprise)"],
  },
  {
    icon: Key,
    title: "Autentikasi Kuat",
    description: "Multiple layer autentikasi untuk memastikan hanya pengguna yang berwenang yang dapat mengakses data Anda.",
    details: ["SSO dengan SAML 2.0", "Multi-factor authentication (MFA)", "OAuth 2.0 untuk integrasi", "Session management yang aman"],
  },
  {
    icon: Users,
    title: "Kontrol Akses Granular",
    description: "Tentukan dengan tepat siapa yang dapat melihat dan mengedit data apa dengan sistem permission berbasis role.",
    details: ["Role-based access control (RBAC)", "Custom roles dan permissions", "Team-level access", "Row-level security"],
  },
  {
    icon: Eye,
    title: "Audit & Monitoring",
    description: "Visibilitas lengkap ke semua aktivitas dalam akun Anda dengan audit log yang komprehensif.",
    details: ["Audit log untuk semua aksi", "Real-time security alerts", "Login history tracking", "API access logs"],
  },
  {
    icon: Server,
    title: "Infrastruktur Aman",
    description: "Dihosting di infrastructure cloud yang aman dengan redundansi dan disaster recovery built-in.",
    details: ["AWS infrastructure", "Multi-region availability", "Automatic backups", "99.9% uptime SLA"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Tim security kami siap 24/7 untuk merespons dan menangani insiden keamanan.",
    details: ["24/7 security monitoring", "Incident response team", "Regular security updates", "Vulnerability disclosure program"],
  },
];

const securityPractices = [
  "Penetration testing tahunan oleh pihak ketiga",
  "Code review dan security scanning otomatis",
  "Security awareness training untuk semua karyawan",
  "Background check untuk semua staff",
  "Secure development lifecycle (SDLC)",
  "Regular security assessments",
  "Vendor security assessments",
  "Data retention dan deletion policies",
];

const dataResidency = [
  { region: "Asia Pacific (Singapore)", flag: "🇸🇬", status: "Available" },
  { region: "Asia Pacific (Jakarta)", flag: "🇮🇩", status: "Available" },
  { region: "Europe (Frankfurt)", flag: "🇩🇪", status: "Available" },
  { region: "US East (Virginia)", flag: "🇺🇸", status: "Available" },
];

export default function SecurityPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex p-4 rounded-2xl bg-emerald-500/20 mb-6">
              <Shield className="h-8 w-8 text-emerald-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Keamanan adalah{" "}
              <span className="text-emerald-400">Prioritas Utama</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Kami membangun CloudMetrics dengan keamanan sebagai fondasi.
              Data Anda dilindungi oleh praktik keamanan terdepan di industri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                <Download className="mr-2 h-4 w-4" />
                Download Security Whitepaper
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                  Hubungi Tim Security
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Sertifikasi</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Sertifikasi dan Compliance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="inline-flex p-4 rounded-2xl bg-emerald-100 mb-4">
                      <cert.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{cert.name}</h3>
                    <p className="text-sm text-slate-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Fitur Keamanan</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Perlindungan berlapis untuk data Anda
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-slate-900">
                        <feature.icon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                          {detail}
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

      {/* Security Practices */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">Praktik Keamanan</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Komitmen kami terhadap keamanan
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Keamanan bukan hanya fitur—ini adalah cara kami beroperasi.
                Kami mengikuti best practices industri dan terus meningkatkan
                postur keamanan kami.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {securityPractices.map((practice) => (
                  <div key={practice} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600">{practice}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-slate-900">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Data Residency Options</h3>
                  <div className="space-y-4">
                    {dataResidency.map((region) => (
                      <div key={region.region} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{region.flag}</span>
                          <span className="text-white">{region.region}</span>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          {region.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Shield className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pertanyaan tentang keamanan?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Tim security kami siap menjawab pertanyaan Anda dan membantu
              mengevaluasi CloudMetrics untuk kebutuhan keamanan organisasi Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:security@cloudmetrics.io">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
                  security@cloudmetrics.io
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                <Download className="mr-2 h-4 w-4" />
                Request Security Questionnaire
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
