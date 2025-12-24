"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Plug,
  ArrowRight,
  CheckCircle,
  Play,
  Search,
  Database,
  ShoppingCart,
  CreditCard,
  BarChart3,
  MessageSquare,
  Mail,
  Cloud,
  Code,
  Zap,
  Shield,
  Clock,
  RefreshCw,
  Lock,
  Globe,
  Server,
  Webhook,
  FileJson,
  Terminal,
  BookOpen,
  Star,
  Quote,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Users,
  Building2,
} from "lucide-react";

// Section 1: Hero data
const heroStats = [
  { value: "150+", label: "Integrations" },
  { value: "5 min", label: "Average Setup" },
  { value: "Real-time", label: "Data Sync" },
  { value: "99.9%", label: "Uptime" },
];

// Section 2: Categories
const categories = [
  { icon: Database, name: "Databases", count: 25, color: "from-blue-500 to-blue-600", description: "PostgreSQL, MySQL, MongoDB, and more" },
  { icon: ShoppingCart, name: "E-commerce", count: 18, color: "from-emerald-500 to-emerald-600", description: "Shopify, WooCommerce, Magento" },
  { icon: CreditCard, name: "Payments", count: 15, color: "from-violet-500 to-violet-600", description: "Stripe, PayPal, Square" },
  { icon: BarChart3, name: "Analytics", count: 20, color: "from-orange-500 to-orange-600", description: "Google Analytics, Mixpanel, Amplitude" },
  { icon: MessageSquare, name: "Communication", count: 12, color: "from-pink-500 to-pink-600", description: "Slack, Discord, Microsoft Teams" },
  { icon: Mail, name: "Marketing", count: 22, color: "from-cyan-500 to-cyan-600", description: "HubSpot, Mailchimp, Marketo" },
  { icon: Cloud, name: "Cloud Storage", count: 10, color: "from-indigo-500 to-indigo-600", description: "AWS S3, Google Cloud, Azure" },
  { icon: Code, name: "Developer Tools", count: 28, color: "from-slate-500 to-slate-600", description: "GitHub, GitLab, Jira" },
];

// Section 3: Featured Integrations
const featuredIntegrations = [
  { name: "Salesforce", category: "CRM", logo: "SF", description: "Sync customer data, opportunities, and sales metrics in real-time", popular: true },
  { name: "Stripe", category: "Payments", logo: "ST", description: "Track revenue, subscriptions, and payment analytics", popular: true },
  { name: "HubSpot", category: "Marketing", logo: "HS", description: "Connect marketing campaigns, leads, and customer journey data", popular: true },
  { name: "Shopify", category: "E-commerce", logo: "SH", description: "Monitor sales, inventory, and customer behavior", popular: true },
  { name: "PostgreSQL", category: "Database", logo: "PG", description: "Direct connection to your PostgreSQL databases", popular: false },
  { name: "Snowflake", category: "Data Warehouse", logo: "SN", description: "Query and visualize your Snowflake data", popular: true },
  { name: "Google Analytics", category: "Analytics", logo: "GA", description: "Import web analytics and user behavior data", popular: false },
  { name: "Slack", category: "Communication", logo: "SL", description: "Send alerts and reports directly to Slack channels", popular: false },
];

// Section 4: All Integrations Directory
const allIntegrations = [
  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Elasticsearch", category: "Databases" },
  { name: "Microsoft SQL Server", category: "Databases" },
  { name: "Oracle", category: "Databases" },
  { name: "MariaDB", category: "Databases" },
  // Data Warehouses
  { name: "Snowflake", category: "Data Warehouses" },
  { name: "BigQuery", category: "Data Warehouses" },
  { name: "Redshift", category: "Data Warehouses" },
  { name: "Databricks", category: "Data Warehouses" },
  // E-commerce
  { name: "Shopify", category: "E-commerce" },
  { name: "WooCommerce", category: "E-commerce" },
  { name: "Magento", category: "E-commerce" },
  { name: "BigCommerce", category: "E-commerce" },
  // Payments
  { name: "Stripe", category: "Payments" },
  { name: "PayPal", category: "Payments" },
  { name: "Square", category: "Payments" },
  { name: "Braintree", category: "Payments" },
  // CRM
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot CRM", category: "CRM" },
  { name: "Pipedrive", category: "CRM" },
  { name: "Zoho CRM", category: "CRM" },
  // Marketing
  { name: "Mailchimp", category: "Marketing" },
  { name: "Marketo", category: "Marketing" },
  { name: "ActiveCampaign", category: "Marketing" },
  { name: "Klaviyo", category: "Marketing" },
  // Analytics
  { name: "Google Analytics", category: "Analytics" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "Amplitude", category: "Analytics" },
  { name: "Segment", category: "Analytics" },
  // Communication
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Discord", category: "Communication" },
  { name: "Intercom", category: "Communication" },
  // Cloud
  { name: "AWS", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Heroku", category: "Cloud" },
  // Developer
  { name: "GitHub", category: "Developer" },
  { name: "GitLab", category: "Developer" },
  { name: "Jira", category: "Developer" },
  { name: "Linear", category: "Developer" },
  { name: "Notion", category: "Developer" },
  { name: "Airtable", category: "Developer" },
];

// Section 5: How it works steps
const setupSteps = [
  { step: "01", title: "Choose Your Integration", description: "Browse our directory of 150+ pre-built connectors and select the tools you want to connect.", icon: Search },
  { step: "02", title: "Authenticate Securely", description: "Use OAuth 2.0 or API keys to securely connect your accounts. Your credentials are encrypted.", icon: Lock },
  { step: "03", title: "Configure Data Sync", description: "Select which data to sync, set refresh intervals, and map fields to your metrics.", icon: RefreshCw },
  { step: "04", title: "Start Analyzing", description: "Your data flows automatically into CloudMetrics. Build dashboards and get insights instantly.", icon: BarChart3 },
];

// Section 6: Sync Features
const syncFeatures = [
  { icon: Zap, title: "Real-time Sync", description: "Data updates in seconds, not hours. See changes as they happen in your source systems." },
  { icon: RefreshCw, title: "Incremental Updates", description: "Only sync changed data to minimize load and maximize efficiency." },
  { icon: Clock, title: "Scheduled Sync", description: "Set custom sync schedules - hourly, daily, or on-demand." },
  { icon: Shield, title: "Error Handling", description: "Automatic retries and detailed error logs keep your data flowing." },
  { icon: Database, title: "Historical Backfill", description: "Import historical data when you first connect a new source." },
  { icon: Globe, title: "Multi-region Support", description: "Connect to data sources across different regions and cloud providers." },
];

// Section 7: Security Features
const securityFeatures = [
  { title: "SOC 2 Type II", description: "Audited security controls and practices", icon: Shield },
  { title: "End-to-end Encryption", description: "TLS 1.3 for data in transit, AES-256 at rest", icon: Lock },
  { title: "OAuth 2.0", description: "Secure token-based authentication", icon: RefreshCw },
  { title: "IP Whitelisting", description: "Restrict access to known IP addresses", icon: Globe },
  { title: "Audit Logs", description: "Complete visibility into all data access", icon: FileJson },
  { title: "GDPR Compliant", description: "Full compliance with data privacy regulations", icon: CheckCircle },
];

// Section 8: Custom Integration
const apiFeatures = [
  { icon: Terminal, title: "REST API", description: "Full-featured REST API for custom data ingestion and retrieval" },
  { icon: Webhook, title: "Webhooks", description: "Push data to CloudMetrics with real-time webhook endpoints" },
  { icon: Code, title: "SDKs", description: "Official SDKs for Python, JavaScript, Ruby, and more" },
  { icon: FileJson, title: "GraphQL", description: "Flexible GraphQL API for complex data queries" },
];

// Section 9: Testimonials
const testimonials = [
  {
    quote: "Setting up our Salesforce integration took 5 minutes. We had real-time sales dashboards the same day.",
    author: "Sarah Chen",
    role: "VP of Sales",
    company: "TechScale Inc",
    avatar: "SC",
  },
  {
    quote: "The Stripe integration gives us visibility into MRR, churn, and cohort analysis we never had before.",
    author: "Marcus Rodriguez",
    role: "CEO",
    company: "SaaS Startup",
    avatar: "MR",
  },
  {
    quote: "We connected 15 different data sources in one afternoon. The no-code setup is incredible.",
    author: "Emily Watson",
    role: "Data Lead",
    company: "Retail Giant",
    avatar: "EW",
  },
];

// Section 10: FAQ
const faqs = [
  {
    question: "How long does it take to set up an integration?",
    answer: "Most integrations take less than 5 minutes to set up. Simply authenticate with your account, select the data you want to sync, and you're ready to go.",
  },
  {
    question: "Is my data secure during transfer?",
    answer: "Absolutely. All data is encrypted using TLS 1.3 during transfer and AES-256 at rest. We're SOC 2 Type II certified and GDPR compliant.",
  },
  {
    question: "Can I build custom integrations?",
    answer: "Yes! We offer a REST API, webhooks, and SDKs for Python, JavaScript, Ruby, Go, and more. You can push any data to CloudMetrics programmatically.",
  },
  {
    question: "How often does data sync?",
    answer: "It depends on the integration. Many support real-time sync, while others refresh every 15 minutes, hourly, or daily. You can also trigger manual syncs anytime.",
  },
  {
    question: "What happens if an integration fails?",
    answer: "We automatically retry failed syncs with exponential backoff. You'll receive alerts if issues persist, and our support team is available 24/7 to help.",
  },
  {
    question: "Do you support on-premise data sources?",
    answer: "Yes! We offer a secure tunnel agent that you can deploy in your infrastructure to connect on-premise databases and APIs securely.",
  },
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredIntegrations = allIntegrations.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = ["All", ...Array.from(new Set(allIntegrations.map((i) => i.category)))];

  return (
    <div className="pt-20">
      {/* Section 1: Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 mb-6">
              <Plug className="h-8 w-8 text-white" />
            </div>
            <Badge variant="secondary" className="mb-4">150+ Integrations</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Connect your{" "}
              <span className="gradient-text">entire tech stack</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              From databases to SaaS apps, connect all your data sources in minutes. No code required.
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

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">Categories</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Integrations for every need
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Browse integrations by category to find the tools you already use.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category.name)}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-orange-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">{category.name}</h3>
                      <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                    </div>
                    <p className="text-sm text-slate-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Featured Integrations */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Star className="mr-1 h-3 w-3" />
              Most Popular
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Featured integrations
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              The most popular integrations used by thousands of companies.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredIntegrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 font-bold text-lg group-hover:from-orange-100 group-hover:to-orange-200 group-hover:text-orange-700 transition-all">
                        {integration.logo}
                      </div>
                      {integration.popular && (
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200">Popular</Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{integration.name}</h3>
                    <p className="text-xs text-slate-500 mb-3">{integration.category}</p>
                    <p className="text-sm text-slate-600">{integration.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Integration Directory */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Search className="mr-1 h-3 w-3" />
              Directory
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Browse all integrations
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Search our complete directory of 150+ integrations.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search integrations..."
                className="pl-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {uniqueCategories.slice(0, 6).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Integration Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredIntegrations.slice(0, 24).map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group flex flex-col items-center justify-center p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-orange-300 hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm mb-3 group-hover:shadow-md transition-shadow">
                  <span className="text-lg font-bold text-slate-400 group-hover:text-orange-500 transition-colors">
                    {integration.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-slate-700 text-center">{integration.name}</span>
                <span className="text-xs text-slate-400 mt-1">{integration.category}</span>
              </motion.div>
            ))}
          </div>

          {filteredIntegrations.length > 24 && (
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                View All {filteredIntegrations.length} Integrations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              <Zap className="mr-1 h-3 w-3" />
              Easy Setup
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Connect in minutes, not days
            </h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Our no-code setup wizard makes connecting your data sources effortless.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {setupSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector Line */}
                {index < setupSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-orange-500 to-orange-300" />
                )}

                <div className="relative inline-flex mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-sm font-bold text-slate-900">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Sync Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <RefreshCw className="mr-1 h-3 w-3" />
              Data Sync
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Powerful sync capabilities
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Keep your data fresh and accurate with our advanced sync engine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {syncFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 rounded-xl bg-orange-100">
                        <feature.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-slate-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Security & Compliance */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">
                <Shield className="mr-1 h-3 w-3" />
                Security
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Enterprise-grade security for your data
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Your data is protected by industry-leading security practices. We're SOC 2 Type II certified and compliant with GDPR, CCPA, and HIPAA.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-center gap-3">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-emerald-100">
                      <feature.icon className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{feature.title}</div>
                      <div className="text-xs text-slate-500">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="flex items-center gap-4 mb-6">
                  <Shield className="h-12 w-12 text-emerald-400" />
                  <div>
                    <div className="text-2xl font-bold text-white">SOC 2 Type II</div>
                    <div className="text-slate-400">Certified</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {["GDPR Compliant", "CCPA Compliant", "HIPAA Ready", "ISO 27001"].map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="h-5 w-5 text-emerald-400" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Custom Integration / API */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Code className="mr-1 h-3 w-3" />
              Developer API
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Build custom integrations
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Don't see what you need? Build it yourself with our powerful API and SDKs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid sm:grid-cols-2 gap-4">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <feature.icon className="h-8 w-8 text-orange-500 mb-4" />
                      <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900 rounded-2xl p-6 font-mono text-sm overflow-x-auto"
            >
              <div className="text-slate-400 mb-2"># Push data via REST API</div>
              <div className="text-emerald-400">curl -X POST \</div>
              <div className="text-blue-400 ml-2">&quot;https://api.cloudmetrics.io/v1/events&quot; \</div>
              <div className="text-slate-300 ml-2">-H &quot;Authorization: Bearer $API_KEY&quot; \</div>
              <div className="text-slate-300 ml-2">-H &quot;Content-Type: application/json&quot; \</div>
              <div className="text-slate-300 ml-2">-d &apos;{"{"}</div>
              <div className="text-yellow-400 ml-4">&quot;event&quot;: &quot;purchase&quot;,</div>
              <div className="text-yellow-400 ml-4">&quot;user_id&quot;: &quot;usr_123&quot;,</div>
              <div className="text-yellow-400 ml-4">&quot;amount&quot;: 99.99</div>
              <div className="text-slate-300 ml-2">{"}"}&apos;</div>

              <div className="mt-6 pt-4 border-t border-slate-700">
                <Link href="/docs/api">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View API Documentation
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Testimonials */}
      <section className="py-16 lg:py-24 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <Users className="mr-1 h-3 w-3" />
              Customer Stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Loved by data teams everywhere
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
              >
                <Card className="h-full bg-white">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-orange-200 mb-4" />
                    <p className="text-slate-700 leading-relaxed mb-6">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{testimonial.author}</div>
                        <div className="text-sm text-slate-500">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="mr-1 h-3 w-3" />
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-slate-600">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 11: CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to connect your data?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Start your free trial today and connect your entire tech stack in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Talk to Sales
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-orange-100">
              No credit card required. 14-day free trial.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
