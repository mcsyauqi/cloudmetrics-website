"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  Building2,
  Users,
  Headphones,
  FileQuestion,
  ArrowRight,
  CheckCircle,
  Globe,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Tim kami akan merespons dalam 24 jam",
    contact: "hello@cloudmetrics.io",
    action: "mailto:hello@cloudmetrics.io",
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Senin-Jumat, 09:00-18:00 WIB",
    contact: "+62 21 5555 1234",
    action: "tel:+622155551234",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Tersedia 24/7 untuk pelanggan",
    contact: "Chat Sekarang",
    action: "#",
  },
];

const offices = [
  {
    city: "Jakarta",
    country: "Indonesia (HQ)",
    address: "Sudirman Central Business District",
    fullAddress: "Jl. Jend. Sudirman Kav. 52-53, Jakarta 12190",
    phone: "+62 21 5555 1234",
    email: "jakarta@cloudmetrics.io",
  },
  {
    city: "Singapura",
    country: "Singapore",
    address: "Marina Bay Financial Centre",
    fullAddress: "8 Marina Boulevard, Tower 1, Singapore 018981",
    phone: "+65 6789 1234",
    email: "singapore@cloudmetrics.io",
  },
  {
    city: "San Francisco",
    country: "United States",
    address: "Financial District",
    fullAddress: "555 California Street, Suite 4800, San Francisco, CA 94104",
    phone: "+1 415 555 1234",
    email: "sf@cloudmetrics.io",
  },
];

const departments = [
  {
    icon: Users,
    name: "Sales",
    description: "Diskusi kebutuhan bisnis Anda",
    email: "sales@cloudmetrics.io",
  },
  {
    icon: Headphones,
    name: "Support",
    description: "Bantuan teknis dan troubleshooting",
    email: "support@cloudmetrics.io",
  },
  {
    icon: Building2,
    name: "Partnership",
    description: "Peluang kemitraan bisnis",
    email: "partners@cloudmetrics.io",
  },
  {
    icon: FileQuestion,
    name: "Press & Media",
    description: "Pertanyaan media dan pers",
    email: "press@cloudmetrics.io",
  },
];

const faqs = [
  {
    question: "Berapa lama waktu respons untuk pertanyaan?",
    answer: "Tim kami biasanya merespons dalam 24 jam kerja. Untuk pelanggan Enterprise, kami menawarkan SLA respons 4 jam.",
  },
  {
    question: "Apakah ada demo langsung yang tersedia?",
    answer: "Ya! Anda dapat menjadwalkan demo personal dengan tim sales kami melalui halaman Demo atau menghubungi langsung.",
  },
  {
    question: "Bagaimana cara melaporkan bug atau masalah?",
    answer: "Anda dapat menghubungi tim support kami melalui email, live chat, atau portal support khusus pelanggan.",
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("sent"), 1500);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">Hubungi Kami</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Kami siap{" "}
              <span className="gradient-text">membantu Anda</span>
            </h1>
            <p className="text-xl text-slate-600">
              Punya pertanyaan atau ingin mendiskusikan kebutuhan analitik Anda?
              Tim kami siap membantu.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid md:grid-cols-3 gap-6"
          >
            {contactMethods.map((method, index) => (
              <a key={method.title} href={method.action}>
                <Card className="h-full hover:shadow-lg transition-all hover:border-orange-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-orange-100 mb-4 group-hover:bg-orange-500 transition-colors">
                      <method.icon className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{method.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{method.description}</p>
                    <p className="text-orange-600 font-medium">{method.contact}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">Kirim Pesan</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Ada pertanyaan? Kami dengar.
              </h2>

              {formStatus === "sent" ? (
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-full bg-emerald-100 mb-4">
                      <CheckCircle className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Terima kasih telah menghubungi kami. Tim kami akan merespons dalam 24 jam.
                    </p>
                    <Button onClick={() => setFormStatus("idle")} variant="outline">
                      Kirim Pesan Lain
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nama Depan</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nama Belakang</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Perusahaan</Label>
                    <Input id="company" placeholder="Nama perusahaan Anda" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <select
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    >
                      <option value="">Pilih topik</option>
                      <option value="sales">Pertanyaan Sales</option>
                      <option value="support">Bantuan Teknis</option>
                      <option value="partnership">Kemitraan</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Ceritakan bagaimana kami bisa membantu Anda..."
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={formStatus === "sending"}>
                    {formStatus === "sending" ? (
                      "Mengirim..."
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Departments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4">Departemen</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Hubungi tim yang tepat
              </h2>

              <div className="space-y-4">
                {departments.map((dept) => (
                  <Card key={dept.name} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 p-3 rounded-xl bg-slate-100">
                          <dept.icon className="h-5 w-5 text-slate-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900">{dept.name}</h3>
                          <p className="text-sm text-slate-600">{dept.description}</p>
                        </div>
                        <a href={`mailto:${dept.email}`} className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                          {dept.email}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* FAQ Preview */}
              <div className="mt-8">
                <h3 className="font-semibold text-slate-900 mb-4">Pertanyaan Umum</h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="p-4 bg-slate-50 rounded-xl">
                      <h4 className="font-medium text-slate-900 mb-2">{faq.question}</h4>
                      <p className="text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
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
              <Globe className="mr-1 h-3 w-3" />
              Lokasi Kantor
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Kantor kami di seluruh dunia
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Kunjungi kami di salah satu lokasi global kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <Badge variant="secondary">{office.country}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{office.city}</h3>
                    <div className="space-y-3 text-sm text-slate-600">
                      <p>{office.fullAddress}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="hover:text-orange-600">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${office.email}`} className="hover:text-orange-600">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Clock className="h-12 w-12 text-orange-200 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Butuh respons cepat?
            </h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              Jadwalkan demo langsung dengan tim kami dan dapatkan jawaban untuk semua pertanyaan Anda.
            </p>
            <Link href="/demo">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Jadwalkan Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
