"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "CloudMetrics transformed how we understand our customers. The real-time dashboards and AI insights have helped us increase conversion by 34%.",
    author: "Sarah Chen",
    role: "VP of Growth",
    company: "TechScale Inc",
    avatar: "SC",
    rating: 5,
  },
  {
    content: "Finally, an analytics platform that our entire team actually uses. The interface is intuitive, and the integrations saved us months of engineering time.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "DataFlow Systems",
    avatar: "MR",
    rating: 5,
  },
  {
    content: "We evaluated 12 different analytics solutions. CloudMetrics was the clear winner for its combination of power, ease of use, and enterprise security.",
    author: "Emily Watson",
    role: "Head of Data",
    company: "Retail Giant Co",
    avatar: "EW",
    rating: 5,
  },
  {
    content: "The ROI was immediate. Within the first month, we identified $2M in optimization opportunities using CloudMetrics' AI recommendations.",
    author: "James Park",
    role: "CEO",
    company: "GrowthMaster",
    avatar: "JP",
    rating: 5,
  },
  {
    content: "Support is incredible. When we needed a custom integration, they helped us implement it in days, not weeks. True partners in our success.",
    author: "Lisa Thompson",
    role: "Director of Analytics",
    company: "MedTech Solutions",
    avatar: "LT",
    rating: 5,
  },
  {
    content: "CloudMetrics handles our 10B+ daily events without breaking a sweat. The performance and reliability are unmatched in the industry.",
    author: "David Kim",
    role: "VP Engineering",
    company: "ScaleUp Labs",
    avatar: "DK",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Loved by data teams{" "}
            <span className="gradient-text">everywhere</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See why thousands of companies trust CloudMetrics to power their analytics.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-8 w-8 text-slate-100" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
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

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["SC", "MR", "EW", "JP"].map((initials, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xs font-semibold ring-2 ring-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="text-sm text-slate-600 ml-2">4.9/5 from 500+ reviews</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">G2 Leader</span> Spring 2024
            </div>
            <div className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">Gartner</span> Cool Vendor
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
