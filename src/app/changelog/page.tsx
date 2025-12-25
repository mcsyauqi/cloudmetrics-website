"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Bug,
  Zap,
  Shield,
  ArrowRight,
  Calendar,
  Rocket,
  Wrench,
  AlertTriangle,
} from "lucide-react";

const releases = [
  {
    version: "3.5.0",
    date: "20 Desember 2024",
    title: "AI Insights 2.0 & Dashboard Templates",
    type: "major",
    highlights: [
      "AI Insights 2.0 dengan natural language queries",
      "50+ template dashboard baru",
      "Improved real-time sync performance",
    ],
    changes: [
      { type: "feature", text: "Natural language queries - tanyakan apapun tentang data Anda dalam Bahasa Indonesia atau Inggris" },
      { type: "feature", text: "AI-powered anomaly detection dengan alert otomatis" },
      { type: "feature", text: "50+ template dashboard baru untuk berbagai industri" },
      { type: "feature", text: "Custom dashboard themes dengan brand colors" },
      { type: "improvement", text: "Real-time sync sekarang 3x lebih cepat" },
      { type: "improvement", text: "UI refresh untuk dashboard builder" },
      { type: "fix", text: "Fixed memory leak pada long-running dashboards" },
      { type: "fix", text: "Fixed timezone issues untuk scheduled reports" },
    ],
  },
  {
    version: "3.4.2",
    date: "5 Desember 2024",
    title: "Bug Fixes & Performance",
    type: "patch",
    highlights: [
      "Critical security patch",
      "Performance improvements",
    ],
    changes: [
      { type: "security", text: "Patched XSS vulnerability dalam embed dashboards" },
      { type: "fix", text: "Fixed CSV export untuk large datasets" },
      { type: "fix", text: "Fixed Salesforce sync untuk custom objects" },
      { type: "improvement", text: "Reduced initial load time by 40%" },
    ],
  },
  {
    version: "3.4.0",
    date: "15 November 2024",
    title: "New Integrations & Collaboration",
    type: "minor",
    highlights: [
      "15 integrasi baru termasuk Tokopedia & Shopee",
      "Real-time collaboration features",
      "Improved mobile experience",
    ],
    changes: [
      { type: "feature", text: "Integrasi Tokopedia Seller Center" },
      { type: "feature", text: "Integrasi Shopee Seller" },
      { type: "feature", text: "Integrasi Bukalapak Seller" },
      { type: "feature", text: "Real-time cursor presence dalam dashboard editing" },
      { type: "feature", text: "Comments dan annotations pada charts" },
      { type: "feature", text: "Mobile app redesign dengan dark mode" },
      { type: "improvement", text: "Faster dashboard loading pada mobile" },
      { type: "improvement", text: "Better touch interactions untuk charts" },
      { type: "fix", text: "Fixed push notifications pada iOS" },
    ],
  },
  {
    version: "3.3.0",
    date: "1 November 2024",
    title: "Advanced Analytics & Reporting",
    type: "minor",
    highlights: [
      "Cohort analysis builder",
      "Funnel visualization",
      "Scheduled PDF reports",
    ],
    changes: [
      { type: "feature", text: "Visual cohort analysis builder" },
      { type: "feature", text: "Funnel chart dengan conversion tracking" },
      { type: "feature", text: "Scheduled PDF report delivery via email" },
      { type: "feature", text: "Custom date range presets" },
      { type: "improvement", text: "Improved query performance untuk large datasets" },
      { type: "improvement", text: "Better error messages dengan suggested fixes" },
      { type: "fix", text: "Fixed date picker timezone issues" },
    ],
  },
  {
    version: "3.2.0",
    date: "15 Oktober 2024",
    title: "Enterprise Security & SSO",
    type: "minor",
    highlights: [
      "SAML SSO support",
      "Advanced audit logs",
      "IP whitelisting",
    ],
    changes: [
      { type: "feature", text: "SAML 2.0 SSO dengan Okta, Azure AD, OneLogin" },
      { type: "feature", text: "Advanced audit logs dengan export capability" },
      { type: "feature", text: "IP whitelisting untuk enterprise accounts" },
      { type: "feature", text: "Custom session timeout settings" },
      { type: "security", text: "Enhanced encryption untuk data at rest" },
      { type: "improvement", text: "Faster user provisioning via SCIM" },
    ],
  },
  {
    version: "3.1.0",
    date: "1 Oktober 2024",
    title: "BigQuery & Snowflake Enhancements",
    type: "minor",
    highlights: [
      "Native BigQuery connector",
      "Snowflake performance optimizations",
      "Query caching",
    ],
    changes: [
      { type: "feature", text: "Native BigQuery connector dengan query pushdown" },
      { type: "feature", text: "Snowflake warehouse size auto-scaling" },
      { type: "feature", text: "Intelligent query caching" },
      { type: "improvement", text: "50% faster queries untuk agregasi besar" },
      { type: "improvement", text: "Better cost estimation sebelum running queries" },
      { type: "fix", text: "Fixed connection pooling issues" },
    ],
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "feature": return Sparkles;
    case "improvement": return Zap;
    case "fix": return Bug;
    case "security": return Shield;
    default: return Wrench;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "feature": return "text-emerald-600 bg-emerald-50";
    case "improvement": return "text-blue-600 bg-blue-50";
    case "fix": return "text-orange-600 bg-orange-50";
    case "security": return "text-red-600 bg-red-50";
    default: return "text-slate-600 bg-slate-50";
  }
};

const getVersionBadge = (type: string) => {
  switch (type) {
    case "major": return "bg-gradient-to-r from-orange-500 to-amber-500 text-white";
    case "minor": return "bg-blue-100 text-blue-700";
    case "patch": return "bg-slate-100 text-slate-700";
    default: return "bg-slate-100 text-slate-700";
  }
};

export default function ChangelogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="secondary" className="mb-4">
              <Rocket className="mr-1 h-3 w-3" />
              Changelog
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Apa yang baru di{" "}
              <span className="gradient-text">CloudMetrics</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Ikuti perkembangan terbaru dari platform kami. Kami terus menambahkan
              fitur baru dan meningkatkan pengalaman Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-300 to-slate-200" />

            <div className="space-y-12">
              {releases.map((release, index) => (
                <motion.div
                  key={release.version}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-orange-500 border-4 border-white shadow" />

                  <Card className={`ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-[52%]" : "md:ml-[52%]"}`}>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <Badge className={getVersionBadge(release.type)}>
                          v{release.version}
                        </Badge>
                        <div className="flex items-center text-sm text-slate-500">
                          <Calendar className="mr-1 h-4 w-4" />
                          {release.date}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mb-3">
                        {release.title}
                      </h2>

                      {/* Highlights */}
                      <div className="mb-4 p-4 bg-slate-50 rounded-lg">
                        <p className="text-sm font-medium text-slate-700 mb-2">Highlights:</p>
                        <ul className="space-y-1">
                          {release.highlights.map((highlight) => (
                            <li key={highlight} className="text-sm text-slate-600 flex items-start gap-2">
                              <Sparkles className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Changes */}
                      <div className="space-y-2">
                        {release.changes.map((change, i) => {
                          const Icon = getTypeIcon(change.type);
                          return (
                            <div key={i} className="flex items-start gap-3">
                              <div className={`flex-shrink-0 p-1 rounded ${getTypeColor(change.type)}`}>
                                <Icon className="h-3 w-3" />
                              </div>
                              <span className="text-sm text-slate-600">{change.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Lihat Rilis Sebelumnya
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Dapatkan update terbaru
            </h2>
            <p className="text-orange-100 mb-8">
              Subscribe ke newsletter kami untuk mendapatkan info rilis terbaru langsung di inbox Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="email@perusahaan.com"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900"
              />
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
