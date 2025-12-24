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
    title: "Getting Started",
    description: "Set up CloudMetrics in minutes",
    href: "/docs/getting-started",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Data Sources",
    description: "Connect your databases and APIs",
    href: "/docs/data-sources",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Create and customize dashboards",
    href: "/docs/dashboards",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Plug,
    title: "Integrations",
    description: "Connect with your tools",
    href: "/docs/integrations",
    color: "from-orange-500 to-orange-600",
  },
];

const sections = [
  {
    title: "Platform Basics",
    icon: BookOpen,
    links: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Core Concepts", href: "/docs/concepts" },
      { title: "Account Setup", href: "/docs/account-setup" },
      { title: "Team Management", href: "/docs/team-management" },
    ],
  },
  {
    title: "Data & Metrics",
    icon: Database,
    links: [
      { title: "Data Sources", href: "/docs/data-sources" },
      { title: "Metrics & KPIs", href: "/docs/metrics" },
      { title: "Custom Fields", href: "/docs/custom-fields" },
      { title: "Data Transformations", href: "/docs/transformations" },
    ],
  },
  {
    title: "Visualizations",
    icon: BarChart3,
    links: [
      { title: "Dashboard Builder", href: "/docs/dashboard-builder" },
      { title: "Chart Types", href: "/docs/chart-types" },
      { title: "Filters & Controls", href: "/docs/filters" },
      { title: "Sharing & Embedding", href: "/docs/sharing" },
    ],
  },
  {
    title: "Developer Tools",
    icon: Code,
    links: [
      { title: "REST API", href: "/docs/api" },
      { title: "Webhooks", href: "/docs/webhooks" },
      { title: "SDKs", href: "/docs/sdks" },
      { title: "Authentication", href: "/docs/authentication" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    links: [
      { title: "Overview", href: "/docs/security" },
      { title: "SSO/SAML", href: "/docs/sso" },
      { title: "Permissions", href: "/docs/permissions" },
      { title: "Compliance", href: "/docs/compliance" },
    ],
  },
  {
    title: "Help & Support",
    icon: HelpCircle,
    links: [
      { title: "FAQ", href: "/docs/faq" },
      { title: "Troubleshooting", href: "/docs/troubleshooting" },
      { title: "Contact Support", href: "/support" },
      { title: "Status Page", href: "/status" },
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
              Documentation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Learn{" "}
              <span className="gradient-text">CloudMetrics</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Everything you need to build powerful analytics dashboards and make data-driven decisions.
            </p>

            {/* Search */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search documentation..."
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
                        Get started
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
            <h2 className="text-2xl font-bold text-slate-900">Browse by category</h2>
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
                Build with our API
              </h2>
              <p className="text-lg text-slate-300 mb-6">
                Access your data programmatically with our REST API. Build custom integrations, automate workflows, and extend CloudMetrics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/docs/api">
                  <Button className="bg-white text-slate-900 hover:bg-slate-100">
                    API Reference
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/docs/sdks">
                  <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                    View SDKs
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
                <h3 className="text-xl font-semibold text-slate-900">Need help?</h3>
                <p className="text-slate-600">Our support team is available 24/7.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/support">
                <Button variant="outline">Contact Support</Button>
              </Link>
              <Link href="/docs/faq">
                <Button>View FAQ</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
