import Link from "next/link";
import { BarChart3, Twitter, Linkedin, Github, Youtube } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Fitur", href: "/features" },
    { name: "Harga", href: "/pricing" },
    { name: "Integrasi", href: "/features/integrations" },
    { name: "API", href: "/docs/api" },
    { name: "Changelog", href: "/changelog" },
  ],
  solutions: [
    { name: "Enterprise", href: "/solutions/enterprise" },
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "Kesehatan", href: "/solutions/healthcare" },
    { name: "Startup", href: "/solutions/startups" },
  ],
  resources: [
    { name: "Dokumentasi", href: "/docs" },
    { name: "Blog", href: "/resources" },
    { name: "Studi Kasus", href: "/customers" },
    { name: "Webinar", href: "/resources/webinars" },
    { name: "Pusat Bantuan", href: "/support" },
  ],
  company: [
    { name: "Tentang Kami", href: "/about" },
    { name: "Karir", href: "/careers" },
    { name: "Kontak", href: "/contact" },
    { name: "Press", href: "/press" },
    { name: "Mitra", href: "/partners" },
  ],
  legal: [
    { name: "Privasi", href: "/privacy" },
    { name: "Ketentuan", href: "/terms" },
    { name: "Keamanan", href: "/security" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "YouTube", href: "#", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-bg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CloudMetrics</span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Ubah data menjadi keputusan. Platform analitik real-time untuk bisnis modern.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Produk</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Solusi</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Sumber Daya</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Perusahaan</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} CloudMetrics. Hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-slate-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Semua sistem beroperasi
              </span>
            </div>
          </div>
          {/* Created by Creativism */}
          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <p className="text-sm text-slate-500">
              Created by{" "}
              <a
                href="https://creativism.co.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Creativism Digital Marketing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
