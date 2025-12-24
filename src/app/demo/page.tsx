"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Sparkles,
  Shield,
  ArrowRight,
  Play,
  Building2,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "30-minute session",
    description: "Quick, focused demo tailored to your needs",
  },
  {
    icon: Users,
    title: "Expert-led",
    description: "Learn from our solutions engineers",
  },
  {
    icon: Sparkles,
    title: "Custom demo",
    description: "See features relevant to your use case",
  },
  {
    icon: Shield,
    title: "No commitment",
    description: "Just a conversation about your needs",
  },
];

const testimonial = {
  quote: "The demo was incredibly helpful. They understood our needs and showed us exactly how CloudMetrics could solve our challenges.",
  author: "Michael Chen",
  role: "Director of Analytics",
  company: "TechForward Inc",
};

export default function DemoPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-6">
                <Calendar className="mr-1 h-3 w-3" />
                Book a Demo
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                See CloudMetrics{" "}
                <span className="gradient-text">in action</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8">
                Get a personalized walkthrough of our platform. Our team will show you how CloudMetrics can help you turn data into actionable insights.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900">{benefit.title}</div>
                      <div className="text-sm text-slate-600">{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <Card className="bg-slate-50 border-slate-200">
                <CardContent className="p-6">
                  <p className="text-slate-700 italic mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold text-sm">
                      MC
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Content - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Request your demo
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          First name *
                        </label>
                        <Input
                          required
                          value={formState.firstName}
                          onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Last name *
                        </label>
                        <Input
                          required
                          value={formState.lastName}
                          onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Work email *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Company name *
                      </label>
                      <Input
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Acme Inc"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Job title *
                      </label>
                      <Input
                        required
                        value={formState.role}
                        onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                        placeholder="Head of Data"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Company size *
                      </label>
                      <select
                        required
                        value={formState.employees}
                        onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                        className="flex h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        What would you like to learn about?
                      </label>
                      <textarea
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell us about your analytics challenges..."
                        rows={3}
                        className="flex w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-primary resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Request Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What to expect
            </h2>
            <p className="text-lg text-slate-600">
              Our demos are designed to be helpful, not salesy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description: "We'll learn about your current analytics setup, challenges, and goals.",
              },
              {
                step: "2",
                title: "Personalized Demo",
                description: "See how CloudMetrics solves your specific use cases with relevant examples.",
              },
              {
                step: "3",
                title: "Q&A & Next Steps",
                description: "Get your questions answered and discuss how to get started.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-white border border-slate-200"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Play className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Prefer to explore on your own?</h3>
                <p className="text-slate-600">Start a free trial and see CloudMetrics in action.</p>
              </div>
            </div>
            <Link href="/signup">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
