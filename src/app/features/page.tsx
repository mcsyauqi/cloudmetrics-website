"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Sparkles,
  FileText,
  Plug,
  Shield,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Play,
  Layers,
  Bell,
  Users,
  Lock,
  Cpu,
  LineChart,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Create stunning, live-updating dashboards that visualize your data as it happens. Drag-and-drop interface makes it easy for anyone to build professional visualizations.",
    benefits: ["Live data updates", "Drag-and-drop builder", "50+ chart types", "Custom themes"],
    href: "/features/dashboards",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Let machine learning do the heavy lifting. Our AI automatically identifies trends, anomalies, and opportunities you might miss.",
    benefits: ["Anomaly detection", "Trend forecasting", "Smart alerts", "Natural language queries"],
    href: "/features/ai-insights",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Generate beautiful, branded reports that tell your data story. Schedule automated delivery to stakeholders on any cadence.",
    benefits: ["Branded templates", "Scheduled delivery", "Multiple formats", "Interactive elements"],
    href: "/features/reports",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Plug,
    title: "100+ Integrations",
    description: "Connect to your entire tech stack in minutes. From databases to SaaS tools, we have pre-built connectors for everything.",
    benefits: ["Pre-built connectors", "Custom APIs", "Real-time sync", "No-code setup"],
    href: "/features/integrations",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Never miss a critical change. Set up intelligent alerts that notify you via Slack, email, or SMS when metrics move.",
    benefits: ["Multi-channel alerts", "Threshold triggers", "Anomaly alerts", "Alert routing"],
    href: "/features/alerts",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared dashboards, annotations, and real-time commenting features built for modern teams.",
    benefits: ["Shared dashboards", "Comments & mentions", "Version history", "Role-based access"],
    href: "/features/collaboration",
    color: "from-cyan-500 to-cyan-600",
  },
];

const enterpriseFeatures = [
  { icon: Shield, title: "SOC 2 Type II Certified", description: "Enterprise-grade security and compliance" },
  { icon: Lock, title: "SSO & SAML", description: "Single sign-on with your identity provider" },
  { icon: Globe, title: "Global Infrastructure", description: "Deploy in any region for data residency" },
  { icon: Cpu, title: "Dedicated Resources", description: "Isolated compute for maximum performance" },
];

export default function FeaturesPage() {
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
              <Layers className="mr-1 h-3 w-3" />
              Platform Features
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Powerful analytics,{" "}
              <span className="gradient-text">beautifully simple</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Everything you need to understand your data and make smarter decisions.
              Built for teams of all sizes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.href} className="block group">
                  <div className="h-full p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 bg-white">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Link */}
                    <div className="mt-6 flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 border-slate-700 text-slate-300">
              <Shield className="mr-1 h-3 w-3" />
              Enterprise Ready
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built for enterprise scale
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Security, compliance, and performance that meets the demands of the world&apos;s largest organizations.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/solutions/enterprise">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Explore Enterprise
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200"
          >
            <LineChart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              See how CloudMetrics compares
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Compare features, pricing, and capabilities with other analytics platforms.
            </p>
            <Link href="/compare">
              <Button size="lg">
                View Comparisons
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
