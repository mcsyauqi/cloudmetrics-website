"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  ArrowRight,
  FileText,
  Video,
  Download,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";

const featuredPost = {
  title: "The Complete Guide to Building a Data-Driven Culture",
  excerpt: "Learn how leading companies transform their organizations through data literacy, governance, and modern analytics practices.",
  category: "Guide",
  readTime: "15 min read",
  href: "/resources/data-driven-culture",
  image: "gradient",
};

const blogPosts = [
  {
    title: "10 Dashboard Design Best Practices for 2024",
    excerpt: "Create dashboards that drive action with these proven design principles.",
    category: "Best Practices",
    readTime: "8 min read",
    href: "/resources/dashboard-design-best-practices",
  },
  {
    title: "How to Calculate and Improve Your Analytics ROI",
    excerpt: "A practical framework for measuring the business impact of your analytics investments.",
    category: "Strategy",
    readTime: "6 min read",
    href: "/resources/analytics-roi",
  },
  {
    title: "AI in Analytics: Beyond the Hype",
    excerpt: "Separating real value from marketing buzzwords in AI-powered analytics.",
    category: "AI & ML",
    readTime: "10 min read",
    href: "/resources/ai-analytics-beyond-hype",
  },
  {
    title: "Real-time vs Batch Processing: When to Use Each",
    excerpt: "A technical guide to choosing the right data processing approach.",
    category: "Technical",
    readTime: "12 min read",
    href: "/resources/realtime-vs-batch",
  },
  {
    title: "Building Executive Dashboards That Get Used",
    excerpt: "How to create dashboards that busy executives actually look at.",
    category: "Best Practices",
    readTime: "7 min read",
    href: "/resources/executive-dashboards",
  },
  {
    title: "Data Privacy Compliance: GDPR, CCPA, and Beyond",
    excerpt: "Navigate the complex landscape of data privacy regulations.",
    category: "Compliance",
    readTime: "9 min read",
    href: "/resources/data-privacy-compliance",
  },
];

const resources = [
  {
    type: "Webinar",
    icon: Video,
    title: "Live Demo: What's New in CloudMetrics 2024",
    description: "Join us for a walkthrough of our latest features.",
    date: "Jan 15, 2024",
    href: "/resources/webinars/whats-new-2024",
    color: "from-violet-500 to-violet-600",
  },
  {
    type: "Ebook",
    icon: Download,
    title: "The Analytics Buyer's Guide",
    description: "Everything you need to know before choosing an analytics platform.",
    date: "Free Download",
    href: "/resources/ebooks/analytics-buyers-guide",
    color: "from-blue-500 to-blue-600",
  },
  {
    type: "Template",
    icon: FileText,
    title: "KPI Dashboard Templates",
    description: "Pre-built templates for common business metrics.",
    date: "10 Templates",
    href: "/resources/templates/kpi-dashboards",
    color: "from-emerald-500 to-emerald-600",
  },
];

const categories = ["All", "Best Practices", "Strategy", "Technical", "AI & ML", "Compliance"];

export default function ResourcesPage() {
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
              <BookOpen className="mr-1 h-3 w-3" />
              Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
              Learn from the{" "}
              <span className="gradient-text">best in analytics</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600">
              Guides, tutorials, webinars, and insights to help you get the most from your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href={featuredPost.href} className="block group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Image/Gradient */}
                    <div className="h-64 lg:h-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center">
                      <BookOpen className="h-24 w-24 text-white/30" />
                    </div>
                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-slate-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium">
                        Read the guide
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={resource.href} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color}`}>
                          <resource.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">{resource.type}</Badge>
                          <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                            {resource.title}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {resource.description}
                          </p>
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {resource.date}
                          </span>
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

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12"
          >
            <h2 className="text-2xl font-bold text-slate-900">Latest articles</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600 hover:border-primary hover:text-primary transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={post.href} className="block group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </Badge>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button variant="outline" size="lg">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stay ahead of the curve
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get weekly insights on analytics, data strategy, and industry trends delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-white text-slate-900 hover:bg-slate-100">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-slate-400">
              Join 10,000+ data professionals. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
