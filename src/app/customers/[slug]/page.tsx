"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  ArrowLeft,
  Quote,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Building2,
} from "lucide-react";

const caseStudies: Record<string, {
  company: string;
  industry: string;
  logo: string;
  heroQuote: string;
  author: string;
  role: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  testimonials: { quote: string; author: string; role: string }[];
}> = {
  techscale: {
    company: "TechScale Inc",
    industry: "SaaS",
    logo: "TS",
    heroQuote: "CloudMetrics transformed how we understand our customers. The real-time dashboards and AI insights have helped us increase conversion by 34%.",
    author: "Sarah Chen",
    role: "VP of Growth",
    challenge: "TechScale was struggling to get a unified view of their customer journey. Data was siloed across multiple tools, making it impossible to understand what was driving conversions and where users were dropping off.",
    solution: "CloudMetrics provided a single source of truth by integrating with their entire tech stack. Real-time dashboards gave visibility into the full funnel, while AI insights automatically identified optimization opportunities.",
    results: [
      { metric: "34%", label: "Increase in conversion rate" },
      { metric: "2 hours", label: "Saved per week on reporting" },
      { metric: "15%", label: "Reduction in churn" },
      { metric: "3x", label: "Faster decision making" },
    ],
    testimonials: [
      { quote: "The AI insights feature alone has paid for itself 10x over.", author: "Michael Lee", role: "Data Lead" },
      { quote: "Our entire team now makes data-driven decisions daily.", author: "Jennifer Wu", role: "Product Manager" },
    ],
  },
  dataflow: {
    company: "DataFlow Systems",
    industry: "Enterprise Software",
    logo: "DF",
    heroQuote: "Finally, an analytics platform that our entire team actually uses. The interface is intuitive, and the integrations saved us months of engineering time.",
    author: "Marcus Rodriguez",
    role: "CTO",
    challenge: "DataFlow had built internal analytics tools, but adoption was low due to complexity. Engineers spent more time building and maintaining dashboards than actually analyzing data.",
    solution: "CloudMetrics replaced the internal tooling with a platform that non-technical users could operate independently. Pre-built integrations eliminated the need for custom development.",
    results: [
      { metric: "3 months", label: "Engineering time saved" },
      { metric: "90%", label: "Team adoption rate" },
      { metric: "50%", label: "Faster time to insight" },
      { metric: "$200K", label: "Annual infrastructure savings" },
    ],
    testimonials: [
      { quote: "I can now build dashboards without waiting for engineering.", author: "Lisa Park", role: "Analytics Manager" },
      { quote: "The best investment we've made in our data infrastructure.", author: "Tom Davis", role: "VP Engineering" },
    ],
  },
  retailgiant: {
    company: "Retail Giant Co",
    industry: "E-commerce",
    logo: "RG",
    heroQuote: "We evaluated 12 different analytics solutions. CloudMetrics was the clear winner for its combination of power, ease of use, and enterprise security.",
    author: "Emily Watson",
    role: "Head of Data",
    challenge: "With millions of daily transactions, Retail Giant needed a platform that could handle massive scale while providing real-time inventory and sales insights across thousands of SKUs.",
    solution: "CloudMetrics' enterprise infrastructure handled their data volume with ease. Custom dashboards gave buyers, merchandisers, and executives the specific views they needed.",
    results: [
      { metric: "$2M", label: "Annual savings identified" },
      { metric: "Real-time", label: "Inventory visibility" },
      { metric: "99.9%", label: "Platform uptime" },
      { metric: "10B+", label: "Daily events processed" },
    ],
    testimonials: [
      { quote: "We can now react to trends in real-time instead of weekly reports.", author: "James Miller", role: "Chief Merchandising Officer" },
      { quote: "The enterprise security features gave our compliance team peace of mind.", author: "Amanda Foster", role: "CISO" },
    ],
  },
  growthmaster: {
    company: "GrowthMaster",
    industry: "Marketing Agency",
    logo: "GM",
    heroQuote: "The ROI was immediate. Within the first month, we identified $2M in optimization opportunities using CloudMetrics' AI recommendations.",
    author: "James Park",
    role: "CEO",
    challenge: "GrowthMaster managed campaigns for dozens of clients but lacked a unified view of performance. Compiling reports was manual and time-consuming.",
    solution: "CloudMetrics automated client reporting with branded, white-label dashboards. AI insights proactively identified underperforming campaigns.",
    results: [
      { metric: "47%", label: "Revenue growth" },
      { metric: "80%", label: "Reduction in reporting time" },
      { metric: "25+", label: "New clients acquired" },
      { metric: "4.9/5", label: "Client satisfaction score" },
    ],
    testimonials: [
      { quote: "Our clients love the real-time dashboards we now provide.", author: "Rachel Green", role: "Client Success Director" },
      { quote: "CloudMetrics has become a key differentiator for our agency.", author: "Kevin Brown", role: "Head of Strategy" },
    ],
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Case study not found</h1>
          <Link href="/customers">
            <Button>Back to Customers</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/customers" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all stories
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/10 text-white font-bold text-xl">
                {study.logo}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{study.company}</h1>
                <Badge variant="outline" className="border-slate-600 text-slate-300 mt-1">
                  {study.industry}
                </Badge>
              </div>
            </div>

            <div className="max-w-3xl">
              <Quote className="h-10 w-10 text-primary mb-4" />
              <p className="text-2xl lg:text-3xl text-white font-medium leading-relaxed mb-6">
                &ldquo;{study.heroQuote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white font-semibold">
                  {study.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{study.author}</div>
                  <div className="text-slate-400">{study.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {study.results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text">{result.metric}</div>
                <div className="mt-1 text-sm text-slate-600">{result.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">The Challenge</Badge>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                What they were facing
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {study.challenge}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4">The Solution</Badge>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                How CloudMetrics helped
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {study.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900">
              What the team says
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {study.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <Quote className="h-6 w-6 text-slate-200 mb-4" />
                    <p className="text-slate-700 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to write your success story?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Join {study.company} and 1,000+ other companies using CloudMetrics.
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
