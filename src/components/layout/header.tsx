"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Menu,
  X,
  ChevronDown,
  Zap,
  LineChart,
  PieChart,
  Database,
  Sparkles,
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

const features = [
  { name: "Dashboard Real-time", href: "/features/dashboards", icon: BarChart3, description: "Visualisasi data langsung" },
  { name: "AI Insights", href: "/features/ai-insights", icon: Sparkles, description: "Analitik cerdas" },
  { name: "Laporan Kustom", href: "/features/reports", icon: LineChart, description: "Pelaporan sesuai kebutuhan" },
  { name: "Integrasi Data", href: "/features/integrations", icon: Database, description: "100+ koneksi aplikasi" },
];

const solutions = [
  { name: "Enterprise", href: "/solutions/enterprise", icon: Building2, description: "Untuk organisasi besar" },
  { name: "E-commerce", href: "/solutions/ecommerce", icon: ShoppingCart, description: "Analitik retail online" },
  { name: "Kesehatan", href: "/solutions/healthcare", icon: Stethoscope, description: "Insight data medis" },
  { name: "Pendidikan", href: "/solutions/education", icon: GraduationCap, description: "Analitik pembelajaran" },
];

const navigation = [
  { name: "Fitur", href: "/features", hasDropdown: true, items: features },
  { name: "Solusi", href: "/solutions", hasDropdown: true, items: solutions },
  { name: "Harga", href: "/pricing", hasDropdown: false },
  { name: "Pelanggan", href: "/customers", hasDropdown: false },
  { name: "Sumber Daya", href: "/resources", hasDropdown: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-12">
            <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">CloudMetrics</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:gap-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-slate-900 hover:bg-slate-100",
                      activeDropdown === item.name && "bg-slate-100 text-slate-900"
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          activeDropdown === item.name && "rotate-180"
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full pt-2"
                      >
                        <div className="w-72 rounded-xl bg-white p-2 shadow-xl ring-1 ring-slate-900/5">
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <subItem.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-900">{subItem.name}</p>
                                <p className="text-xs text-slate-500">{subItem.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <Link href="/demo">
              <Button variant="ghost" size="sm">
                Jadwalkan Demo
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">
                Coba Gratis
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Buka menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-6 py-6 shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 -m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg">
                    <BarChart3 className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-slate-900">CloudMetrics</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Tutup menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-slate-200">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-900 hover:bg-slate-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-3">
                    <Link href="/demo" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        Jadwalkan Demo
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full">
                        Coba Gratis
                        <Zap className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
