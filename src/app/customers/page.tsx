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
    quote: "CloudMetrics transformed how we understand our customers. The real-time dashboards and AI insights have helped us increase conversion by 34%.",
    author: "Sarah Chen",
    role: "VP of Growth",
    metric: "34%",
    metricLabel: "Increase in conversion",
    href: "/customers/techscale",
    color: "from-blue-500 to-blue-600",
    icon: Rocket,
  },
  {
    company: "DataFlow Systems",
    industry: "Enterprise",
    logo: "DF",
    quote: "Finally, an analytics platform that our entire team actually uses. The interface is intuitive, and the integrations saved us months of engineering time.",
    author: "Marcus Rodriguez",
    role: "CTO",
    metric: "3 months",
    metricLabel: "Engineering time saved",
    href: "/customers/dataflow",
    color: "from-indigo-500 to-indigo-600",
    icon: Building2,
  },
  {
    company: "Retail Giant Co",
    industry: "E-commerce",
    logo: "RG",
    quote: "We evaluated 12 different analytics solutions. CloudMetrics was the clear winner for its combination of power, ease of use, and enterprise security.",
    author: "Emily Watson",
    role: "Head of Data",
    metric: "$2M",
    metricLabel: "Annual savings identified",
    href: "/customers/retailgiant",
    color: "from-orange-500 to-orange-600",
    icon: ShoppingCart,
  },
  {
    company: "GrowthMaster",
    industry: "Marketing",
    logo: "GM",
    quote: "The ROI was immediate. Within the first month, we identified $2M in optimization opportunities using CloudMetrics' AI recommendations.",
    author: "James Park",
    role: "CEO",
    metric: "47%",
    metricLabel: "Revenue growth",
    href: "/customers/growthmaster",
    color: "from-emerald-500 to-emerald-600",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    content: "Support is incredible. When we needed a custom integration, they helped us implement it in days, not weeks.",
    author: "Lisa Thompson",
    role: "Director of Analytics",
    company: "MedTech Solutions",
    avatar: "LT",
  },
  {
    content: "CloudMetrics handles our 10B+ daily events without breaking a sweat. The performance is unmatched.",
    author: "David Kim",
    role: "VP Engineering",
    company: "ScaleUp Labs",
    avatar: "DK",
  },
  {
    content: "The AI insights feature alone has paid for the platform 10x over. It catches things we'd never notice.",
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
              Customer Stories
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Loved by{" "}
              <span className="gradient-text">1,000+ companies</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              See how leading companies use CloudMetrics to turn data into competitive advantage.
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
              Trusted by innovative companies worldwide
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
              Featured case studies
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Deep dives into how our customers achieved remarkable results.
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
                            Read story
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
              What our customers say
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
              Ready to join them?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Start your free trial today and see why 1,000+ companies trust CloudMetrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
