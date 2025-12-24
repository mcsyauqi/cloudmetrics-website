"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Sparkles,
  FileText,
  Plug,
  Bell,
  Users,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";

const features: Record<string, {
  icon: typeof BarChart3;
  title: string;
  tagline: string;
  description: string;
  color: string;
  benefits: string[];
  capabilities: { title: string; description: string }[];
}> = {
  dashboards: {
    icon: BarChart3,
    title: "Real-time Dashboards",
    tagline: "Visualize your data as it happens",
    description: "Create stunning, live-updating dashboards that give you instant visibility into your key metrics. Our drag-and-drop builder makes it easy for anyone to create professional visualizations.",
    color: "from-blue-500 to-blue-600",
    benefits: [
      "Live data updates every second",
      "50+ chart types and visualizations",
      "Drag-and-drop dashboard builder",
      "Custom themes and branding",
      "Mobile-responsive designs",
      "Embeddable anywhere",
    ],
    capabilities: [
      { title: "Real-time Updates", description: "See your data change as it happens with sub-second refresh rates." },
      { title: "Flexible Layout", description: "Arrange widgets freely with our intuitive drag-and-drop interface." },
      { title: "Rich Visualizations", description: "Choose from 50+ chart types including tables, maps, and custom graphics." },
      { title: "Interactive Filters", description: "Add dropdown filters, date pickers, and search boxes for dynamic exploration." },
    ],
  },
  "ai-insights": {
    icon: Sparkles,
    title: "AI-Powered Insights",
    tagline: "Let AI find what you're missing",
    description: "Our machine learning algorithms automatically analyze your data to surface trends, anomalies, and opportunities you might miss. Get intelligent recommendations without any manual analysis.",
    color: "from-violet-500 to-violet-600",
    benefits: [
      "Automatic anomaly detection",
      "Trend forecasting and predictions",
      "Natural language queries",
      "Smart alert recommendations",
      "Root cause analysis",
      "Performance optimization suggestions",
    ],
    capabilities: [
      { title: "Anomaly Detection", description: "Automatically identify unusual patterns and deviations in your data." },
      { title: "Predictive Analytics", description: "Forecast future trends based on historical patterns." },
      { title: "Natural Language", description: "Ask questions in plain English and get instant answers." },
      { title: "Smart Recommendations", description: "Receive actionable suggestions to improve your metrics." },
    ],
  },
  reports: {
    icon: FileText,
    title: "Custom Reports",
    tagline: "Tell your data story beautifully",
    description: "Generate professional, branded reports that communicate insights effectively. Schedule automated delivery to stakeholders and export in multiple formats.",
    color: "from-emerald-500 to-emerald-600",
    benefits: [
      "Branded report templates",
      "Scheduled automated delivery",
      "Multiple export formats (PDF, Excel, CSV)",
      "Interactive report elements",
      "Version history and tracking",
      "Collaboration and commenting",
    ],
    capabilities: [
      { title: "Template Builder", description: "Create reusable templates with your brand colors and logos." },
      { title: "Scheduled Delivery", description: "Automatically send reports daily, weekly, or monthly." },
      { title: "Multiple Formats", description: "Export to PDF, Excel, PowerPoint, or share as interactive links." },
      { title: "Dynamic Content", description: "Reports update automatically with the latest data." },
    ],
  },
  integrations: {
    icon: Plug,
    title: "100+ Integrations",
    tagline: "Connect your entire tech stack",
    description: "CloudMetrics integrates with all the tools you already use. From databases to SaaS applications, connect your data sources in minutes without writing code.",
    color: "from-orange-500 to-orange-600",
    benefits: [
      "Pre-built connectors for 100+ tools",
      "Custom API integrations",
      "Real-time data synchronization",
      "No-code setup wizard",
      "OAuth authentication support",
      "Webhook triggers",
    ],
    capabilities: [
      { title: "Pre-built Connectors", description: "Connect to Salesforce, HubSpot, Stripe, and 100+ more in clicks." },
      { title: "Custom APIs", description: "Build custom integrations using our REST API and SDKs." },
      { title: "Real-time Sync", description: "Data flows automatically as changes happen in source systems." },
      { title: "Secure Authentication", description: "OAuth 2.0 support for secure, tokenized connections." },
    ],
  },
  alerts: {
    icon: Bell,
    title: "Smart Alerts",
    tagline: "Never miss a critical change",
    description: "Set up intelligent alerts that notify you via Slack, email, SMS, or webhook when your metrics change. Configure thresholds, anomaly triggers, and custom conditions.",
    color: "from-pink-500 to-pink-600",
    benefits: [
      "Multi-channel notifications",
      "Custom threshold triggers",
      "AI-powered anomaly alerts",
      "Alert routing and escalation",
      "Digest and summary options",
      "Acknowledgment tracking",
    ],
    capabilities: [
      { title: "Multi-channel", description: "Send alerts to Slack, email, SMS, PagerDuty, and more." },
      { title: "Smart Thresholds", description: "Set static or dynamic thresholds based on historical patterns." },
      { title: "Alert Routing", description: "Route different alerts to different teams or individuals." },
      { title: "Escalation Rules", description: "Automatically escalate unacknowledged alerts." },
    ],
  },
  collaboration: {
    icon: Users,
    title: "Team Collaboration",
    tagline: "Work together seamlessly",
    description: "Share dashboards, add comments, and collaborate in real-time with your team. Role-based permissions ensure everyone sees what they need.",
    color: "from-cyan-500 to-cyan-600",
    benefits: [
      "Shared dashboards and reports",
      "Real-time commenting and mentions",
      "Version history and change tracking",
      "Role-based access control",
      "Team workspaces",
      "Activity feeds and notifications",
    ],
    capabilities: [
      { title: "Shared Spaces", description: "Create team workspaces with shared dashboards and reports." },
      { title: "Comments & Mentions", description: "Add context with comments and @mention teammates." },
      { title: "Version Control", description: "Track changes and revert to previous versions anytime." },
      { title: "Access Control", description: "Fine-grained permissions for viewing, editing, and sharing." },
    ],
  },
};

export default function FeatureDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const feature = features[slug];

  if (!feature) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Feature not found</h1>
          <Link href="/features">
            <Button>Back to Features</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = feature.icon;

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
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
              <Icon className="h-8 w-8 text-white" />
            </div>
            <Badge variant="secondary" className="mb-4">Feature</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              {feature.title}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {feature.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {feature.description}
              </h2>
              <ul className="space-y-3">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`h-80 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center`}
            >
              <Icon className="h-24 w-24 text-white/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900">Key Capabilities</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {feature.capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white rounded-xl border border-slate-200"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{capability.title}</h3>
                <p className="text-slate-600">{capability.description}</p>
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
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Start your free trial today and experience the power of {feature.title}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Explore All Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
