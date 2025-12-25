"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BarChart3,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  Chrome,
  Github,
} from "lucide-react";

const features = [
  "Akses dashboard real-time",
  "150+ integrasi data",
  "AI-powered insights",
  "Kolaborasi tim unlimited",
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">CloudMetrics</span>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-slate-600">
              Masuk ke akun Anda untuk melanjutkan
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@perusahaan.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-sm text-orange-600 hover:text-orange-700">
                      Lupa password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="rounded border-slate-300" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Ingat saya selama 30 hari
                  </Label>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Memproses..." : "Masuk"}
                  {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </form>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-4 text-slate-500">atau lanjutkan dengan</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                  <Chrome className="mr-2 h-4 w-4" />
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-slate-600 mt-6">
            Belum punya akun?{" "}
            <Link href="/signup" className="text-orange-600 hover:text-orange-700 font-medium">
              Daftar gratis
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-orange-500 to-amber-500 items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 text-center text-white max-w-lg"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ubah Data Menjadi Keputusan Cerdas
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Bergabung dengan 2.000+ perusahaan yang menggunakan CloudMetrics untuk
            analitik data real-time.
          </p>
          <ul className="space-y-4 text-left">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                  <ArrowRight className="h-4 w-4" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
