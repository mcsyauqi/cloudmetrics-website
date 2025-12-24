"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle } from "lucide-react";

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Cancel anytime",
  "24/7 support",
];

export function CTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-dark" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm mb-8"
          >
            <Zap className="h-4 w-4 text-yellow-400" />
            <span>Start analyzing in minutes</span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto">
            Ready to turn your data into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400">
              competitive advantage?
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Join 1,000+ companies using CloudMetrics to make smarter decisions.
            Set up in minutes, not months.
          </p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/signup">
              <Button size="xl" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="xl" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                Talk to Sales
              </Button>
            </Link>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-slate-300 text-sm">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                {benefit}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
