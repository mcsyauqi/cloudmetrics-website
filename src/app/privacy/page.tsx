"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Shield, Calendar } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Shield className="mr-1 h-3 w-3" />
              Legal
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Kebijakan Privasi
            </h1>
            <div className="flex items-center gap-2 text-slate-600 mb-8">
              <Calendar className="h-4 w-4" />
              <span>Terakhir diperbarui: 1 Januari 2024</span>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                Di CloudMetrics, kami berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi
                ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
                pribadi Anda.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <p className="text-slate-600 mb-4">Kami mengumpulkan informasi yang Anda berikan secara langsung:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Informasi akun (nama, email, password)</li>
                <li>Informasi pembayaran (diproses oleh payment processor pihak ketiga)</li>
                <li>Data yang Anda integrasikan ke platform kami</li>
                <li>Komunikasi dengan tim support kami</li>
              </ul>

              <p className="text-slate-600 mb-4">Kami juga mengumpulkan informasi secara otomatis:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Log penggunaan dan analitik</li>
                <li>Informasi perangkat dan browser</li>
                <li>Alamat IP dan data lokasi umum</li>
                <li>Cookies dan teknologi pelacakan serupa</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h2>
              <p className="text-slate-600 mb-4">Kami menggunakan informasi yang dikumpulkan untuk:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Menyediakan, mengoperasikan, dan meningkatkan layanan kami</li>
                <li>Memproses transaksi dan mengirim notifikasi terkait</li>
                <li>Mengirim update produk, newsletter, dan komunikasi marketing</li>
                <li>Merespons pertanyaan dan memberikan dukungan pelanggan</li>
                <li>Mendeteksi dan mencegah aktivitas penipuan atau berbahaya</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Berbagi Informasi</h2>
              <p className="text-slate-600 mb-6">
                Kami tidak menjual informasi pribadi Anda. Kami mungkin membagikan informasi dengan:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Penyedia layanan yang membantu operasi bisnis kami</li>
                <li>Partner bisnis dengan persetujuan Anda</li>
                <li>Otoritas hukum jika diwajibkan oleh hukum</li>
                <li>Pihak terkait dalam merger atau akuisisi</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Keamanan Data</h2>
              <p className="text-slate-600 mb-6">
                Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk
                melindungi informasi pribadi Anda, termasuk:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Enkripsi data saat transit (TLS 1.3) dan saat disimpan (AES-256)</li>
                <li>Kontrol akses berbasis peran</li>
                <li>Audit keamanan reguler dan penetration testing</li>
                <li>Sertifikasi SOC 2 Type II</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Hak Anda</h2>
              <p className="text-slate-600 mb-4">Anda memiliki hak untuk:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                <li>Meminta koreksi data yang tidak akurat</li>
                <li>Meminta penghapusan data Anda</li>
                <li>Menolak pemrosesan data untuk marketing</li>
                <li>Meminta portabilitas data</li>
                <li>Menarik persetujuan kapan saja</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Cookies</h2>
              <p className="text-slate-600 mb-6">
                Kami menggunakan cookies dan teknologi serupa untuk meningkatkan pengalaman Anda,
                menganalisis penggunaan, dan mempersonalisasi konten. Anda dapat mengelola preferensi
                cookies melalui pengaturan browser Anda.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Retensi Data</h2>
              <p className="text-slate-600 mb-6">
                Kami menyimpan informasi pribadi selama diperlukan untuk menyediakan layanan atau
                sesuai yang diwajibkan oleh hukum. Ketika Anda menutup akun, kami akan menghapus
                atau menganonimkan data Anda dalam 90 hari.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Transfer Data Internasional</h2>
              <p className="text-slate-600 mb-6">
                Data Anda mungkin ditransfer ke dan diproses di negara lain. Kami memastikan
                perlindungan yang memadai melalui Standard Contractual Clauses atau mekanisme
                transfer yang disetujui lainnya.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Privasi Anak</h2>
              <p className="text-slate-600 mb-6">
                Layanan kami tidak ditujukan untuk anak di bawah 16 tahun. Kami tidak secara
                sengaja mengumpulkan informasi dari anak-anak.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">10. Perubahan Kebijakan</h2>
              <p className="text-slate-600 mb-6">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan
                memberitahu Anda tentang perubahan material melalui email atau pemberitahuan
                di platform kami.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">11. Hubungi Kami</h2>
              <p className="text-slate-600 mb-6">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="text-slate-700">
                  <strong>CloudMetrics</strong><br />
                  Email: privacy@cloudmetrics.io<br />
                  Alamat: Sudirman Central Business District, Jakarta 12190, Indonesia
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
