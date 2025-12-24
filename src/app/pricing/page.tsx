"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Check,
  X,
  Zap,
  Building2,
  Sparkles,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started with analytics",
    price: "$49",
    period: "/month",
    popular: false,
    cta: "Start Free Trial",
    href: "/signup?plan=starter",
    features: [
      { name: "Up to 5 team members", included: true },
      { name: "10 dashboards", included: true },
      { name: "1M events/month", included: true },
      { name: "7-day data retention", included: true },
      { name: "Standard integrations", included: true },
      { name: "Email support", included: true },
      { name: "AI insights", included: false },
      { name: "Custom reports", included: false },
      { name: "SSO/SAML", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For growing teams that need more power and flexibility",
    price: "$149",
    period: "/month",
    popular: true,
    cta: "Start Free Trial",
    href: "/signup?plan=pro",
    features: [
      { name: "Up to 20 team members", included: true },
      { name: "Unlimited dashboards", included: true },
      { name: "10M events/month", included: true },
      { name: "1-year data retention", included: true },
      { name: "All integrations", included: true },
      { name: "Priority email support", included: true },
      { name: "AI insights", included: true },
      { name: "Custom reports", included: true },
      { name: "SSO/SAML", included: false },
      { name: "Dedicated support", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced security needs",
    price: "Custom",
    period: "",
    popular: false,
    cta: "Contact Sales",
    href: "/demo",
    features: [
      { name: "Unlimited team members", included: true },
      { name: "Unlimited dashboards", included: true },
      { name: "Unlimited events", included: true },
      { name: "Unlimited data retention", included: true },
      { name: "All integrations + custom", included: true },
      { name: "24/7 phone support", included: true },
      { name: "Advanced AI insights", included: true },
      { name: "White-label reports", included: true },
      { name: "SSO/SAML", included: true },
      { name: "Dedicated success manager", included: true },
    ],
  },
];

const faqs = [
  {
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing.",
  },
  {
    question: "What happens if I exceed my event limit?",
    answer: "We'll notify you when you're approaching your limit. You can upgrade your plan or purchase additional events as needed.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers, and invoicing for annual Enterprise plans.",
  },
  {
    question: "Do you offer discounts for annual billing?",
    answer: "Yes, you save 20% when you choose annual billing on any plan.",
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.",
  },
];

export default function PricingPage() {
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
              <Zap className="mr-1 h-3 w-3" />
              Simple Pricing
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Plans that{" "}
              <span className="gradient-text">scale with you</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Start free. Upgrade when you need more. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "relative h-full flex flex-col",
                  plan.popular && "border-primary shadow-lg shadow-primary/10 scale-105"
                )}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white shadow-lg">
                        <Sparkles className="mr-1 h-3 w-3" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-slate-500">{plan.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature.name} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-slate-300 flex-shrink-0" />
                          )}
                          <span className={cn(
                            "text-sm",
                            feature.included ? "text-slate-700" : "text-slate-400"
                          )}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href={plan.href} className="w-full">
                      <Button
                        className="w-full"
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Annual Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              <span className="font-semibold text-primary">Save 20%</span> with annual billing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 lg:p-12 rounded-2xl bg-slate-900 text-center"
          >
            <Building2 className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Need a custom solution?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Get a tailored plan with custom integrations, dedicated support, and enterprise-grade security.
            </p>
            <Link href="/demo">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Contact Sales
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-6 rounded-xl border border-slate-200 bg-white"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-slate-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-600">
              Still have questions?{" "}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                Contact our team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
