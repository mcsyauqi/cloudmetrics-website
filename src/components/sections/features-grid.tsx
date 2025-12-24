"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Sparkles,
  FileText,
  Plug,
  Shield,
  Clock,
  Globe,
  Zap
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Monitor your metrics as they happen with live-updating visualizations and instant alerts.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations and predictive analytics powered by machine learning.",
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: FileText,
    title: "Custom Reports",
    description: "Create beautiful, customizable reports that tell your data story effectively.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Plug,
    title: "100+ Integrations",
    description: "Connect with your favorite tools - from databases to CRMs, marketing platforms to payment systems.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption, SSO, and advanced access controls.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    span: "col-span-2",
  },
  {
    icon: Clock,
    title: "Historical Analysis",
    description: "Analyze trends over time with comprehensive historical data retention and comparison tools.",
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy across multiple regions for low-latency access and data residency compliance.",
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    span: "col-span-2 md:col-span-1",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second query performance on billions of data points using advanced caching and optimization.",
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-500/10",
    span: "col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesGrid() {
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Everything you need to{" "}
            <span className="gradient-text">understand your data</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Powerful analytics tools designed to help you make smarter decisions, faster.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`${feature.span} group relative overflow-hidden rounded-2xl bg-slate-50 p-6 lg:p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg`}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 bg-gradient-to-br ${feature.color} bg-clip-text`} style={{ color: feature.color.includes('blue') ? '#3B82F6' : feature.color.includes('violet') ? '#8B5CF6' : feature.color.includes('emerald') ? '#10B981' : feature.color.includes('orange') ? '#F97316' : feature.color.includes('indigo') ? '#6366F1' : feature.color.includes('pink') ? '#EC4899' : feature.color.includes('cyan') ? '#06B6D4' : '#EAB308' }} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
