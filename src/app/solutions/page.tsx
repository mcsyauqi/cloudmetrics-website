"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Rocket,
  Landmark,
  Plane,
  Factory,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Enterprise",
    description: "Scalable analytics for large organizations with complex data needs and strict security requirements.",
    benefits: ["Unlimited users", "SOC 2 Type II", "Dedicated support", "Custom SLAs"],
    href: "/solutions/enterprise",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Optimize your online store with real-time conversion tracking, inventory insights, and customer analytics.",
    benefits: ["Conversion tracking", "Cart analytics", "Customer segments", "Revenue forecasting"],
    href: "/solutions/ecommerce",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "HIPAA-compliant analytics for healthcare organizations to improve patient outcomes and operational efficiency.",
    benefits: ["HIPAA compliant", "Patient analytics", "Operational metrics", "Compliance reports"],
    href: "/solutions/healthcare",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Track student engagement, learning outcomes, and institutional performance with educational analytics.",
    benefits: ["Student tracking", "Course analytics", "Retention metrics", "Performance insights"],
    href: "/solutions/education",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Move fast with analytics designed for growing companies. Get insights without the enterprise complexity.",
    benefits: ["Quick setup", "Growth metrics", "Investor reports", "Affordable pricing"],
    href: "/solutions/startups",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Secure, compliant analytics for banks, fintech, and financial institutions with real-time fraud detection.",
    benefits: ["Fraud detection", "Risk analytics", "Compliance ready", "Real-time alerts"],
    href: "/solutions/financial",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "Optimize bookings, understand guest behavior, and maximize revenue with hospitality-focused analytics.",
    benefits: ["Booking analytics", "Guest insights", "Revenue optimization", "Demand forecasting"],
    href: "/solutions/travel",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Monitor production lines, track quality metrics, and optimize supply chain with industrial analytics.",
    benefits: ["Production monitoring", "Quality control", "Supply chain", "Predictive maintenance"],
    href: "/solutions/manufacturing",
    color: "from-slate-500 to-slate-600",
  },
];

const stats = [
  { value: "1,000+", label: "Companies across industries" },
  { value: "50M+", label: "Data points processed daily" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "4.9/5", label: "Customer satisfaction" },
];

export default function SolutionsPage() {
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
              <Building2 className="mr-1 h-3 w-3" />
              Industry Solutions
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Built for{" "}
              <span className="gradient-text">your industry</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Tailored analytics solutions designed to address the unique challenges of your industry.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={solution.href} className="block group">
                  <div className="h-full p-6 lg:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${solution.color}`}>
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                          {solution.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {solution.description}
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {solution.benefits.map((benefit) => (
                            <span
                              key={benefit}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700"
                            >
                              <CheckCircle className="h-3 w-3 text-emerald-500" />
                              {benefit}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        <div className="flex items-center text-sm font-medium text-primary">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
              Don&apos;t see your industry?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              CloudMetrics is flexible enough to handle any use case. Talk to our team about your specific needs.
            </p>
            <Link href="/demo">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Talk to Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
