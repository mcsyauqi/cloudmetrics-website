"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "Stripe", category: "Payments" },
  { name: "Shopify", category: "E-commerce" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "Marketing" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Snowflake", category: "Data Warehouse" },
  { name: "BigQuery", category: "Data Warehouse" },
  { name: "Slack", category: "Communication" },
  { name: "Zendesk", category: "Support" },
  { name: "Intercom", category: "Support" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "Segment", category: "CDP" },
  { name: "AWS", category: "Cloud" },
  { name: "Google Analytics", category: "Analytics" },
  { name: "GitHub", category: "Developer" },
];

export function Integrations() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Integrations</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Connect your{" "}
            <span className="gradient-text">entire stack</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            CloudMetrics integrates with 100+ tools you already use. Set up in clicks, not code.
          </p>
        </motion.div>

        {/* Integrations Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 group-hover:bg-primary/10 transition-colors mb-2">
                <span className="text-lg font-bold text-slate-400 group-hover:text-primary transition-colors">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-slate-700 text-center">{integration.name}</span>
              <span className="text-xs text-slate-400">{integration.category}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link href="/features/integrations">
            <Button variant="outline" size="lg">
              View All 100+ Integrations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
