"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar } from "lucide-react";

export default function TermsPage() {
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
              <FileText className="mr-1 h-3 w-3" />
              Legal
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <div className="flex items-center gap-2 text-slate-600 mb-8">
              <Calendar className="h-4 w-4" />
              <span>Terakhir diperbarui: 1 Januari 2024</span>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                Selamat datang di CloudMetrics. Dengan mengakses atau menggunakan layanan kami,
                Anda menyetujui syarat dan ketentuan berikut.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">1. Definisi</h2>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li><strong>&quot;Layanan&quot;</strong> mengacu pada platform analitik CloudMetrics</li>
                <li><strong>&quot;Pengguna&quot;</strong> adalah individu atau entitas yang menggunakan Layanan</li>
                <li><strong>&quot;Data Pelanggan&quot;</strong> adalah data yang Anda upload atau integrasikan ke platform</li>
                <li><strong>&quot;Akun&quot;</strong> adalah akses terdaftar Anda ke Layanan</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">2. Penggunaan Layanan</h2>
              <p className="text-slate-600 mb-4">Anda setuju untuk:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Menggunakan Layanan sesuai dengan hukum yang berlaku</li>
                <li>Tidak menyalahgunakan atau mencoba mengakses sistem secara tidak sah</li>
                <li>Menjaga kerahasiaan kredensial akun Anda</li>
                <li>Memberikan informasi yang akurat dan terkini</li>
                <li>Tidak menggunakan Layanan untuk aktivitas ilegal atau berbahaya</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">3. Akun dan Keamanan</h2>
              <p className="text-slate-600 mb-6">
                Anda bertanggung jawab atas semua aktivitas yang terjadi melalui akun Anda.
                Segera laporkan kepada kami jika Anda mencurigai adanya penggunaan tidak sah.
                Kami berhak menangguhkan akun yang melanggar ketentuan ini.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">4. Data Pelanggan</h2>
              <p className="text-slate-600 mb-4">Mengenai Data Pelanggan:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Anda memiliki dan mempertahankan semua hak atas Data Pelanggan Anda</li>
                <li>Anda memberi kami lisensi untuk memproses data guna menyediakan Layanan</li>
                <li>Anda bertanggung jawab atas legalitas dan kualitas data Anda</li>
                <li>Kami tidak akan menjual atau membagikan data Anda ke pihak ketiga untuk tujuan marketing</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">5. Pembayaran dan Penagihan</h2>
              <p className="text-slate-600 mb-4">Ketentuan pembayaran:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6">
                <li>Biaya berlangganan ditagih di muka sesuai periode yang dipilih</li>
                <li>Semua biaya tidak dapat dikembalikan kecuali dinyatakan lain</li>
                <li>Kami berhak mengubah harga dengan pemberitahuan 30 hari sebelumnya</li>
                <li>Keterlambatan pembayaran dapat mengakibatkan penangguhan akses</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">6. Pembatalan dan Pengembalian</h2>
              <p className="text-slate-600 mb-6">
                Anda dapat membatalkan langganan kapan saja melalui pengaturan akun. Akses akan
                berlanjut hingga akhir periode penagihan saat ini. Kami menawarkan jaminan uang
                kembali 14 hari untuk pelanggan baru.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">7. Ketersediaan Layanan</h2>
              <p className="text-slate-600 mb-6">
                Kami berupaya menyediakan uptime 99.9%. Namun, layanan dapat tidak tersedia
                sementara untuk pemeliharaan atau perbaikan. Kami akan memberitahu pengguna
                tentang pemeliharaan terjadwal.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">8. Hak Kekayaan Intelektual</h2>
              <p className="text-slate-600 mb-6">
                CloudMetrics dan semua konten, fitur, dan fungsionalitas adalah milik kami atau
                pemberi lisensi kami. Anda tidak boleh menyalin, memodifikasi, atau mendistribusikan
                bagian dari Layanan tanpa izin tertulis.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">9. Batasan Tanggung Jawab</h2>
              <p className="text-slate-600 mb-6">
                Sejauh diizinkan oleh hukum, CloudMetrics tidak bertanggung jawab atas kerugian
                tidak langsung, insidental, atau konsekuensial. Total tanggung jawab kami tidak
                akan melebihi jumlah yang Anda bayarkan kepada kami dalam 12 bulan terakhir.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">10. Ganti Rugi</h2>
              <p className="text-slate-600 mb-6">
                Anda setuju untuk membela dan mengganti rugi CloudMetrics dari klaim yang timbul
                dari pelanggaran Anda terhadap ketentuan ini atau penggunaan Layanan yang tidak sah.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">11. Penghentian</h2>
              <p className="text-slate-600 mb-6">
                Kami dapat menangguhkan atau menghentikan akses Anda jika Anda melanggar ketentuan
                ini. Setelah penghentian, hak Anda untuk menggunakan Layanan akan segera berakhir.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">12. Perubahan Ketentuan</h2>
              <p className="text-slate-600 mb-6">
                Kami dapat mengubah ketentuan ini dengan memberitahu Anda melalui email atau
                pemberitahuan di platform. Penggunaan berkelanjutan setelah perubahan berarti
                Anda menerima ketentuan baru.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">13. Hukum yang Berlaku</h2>
              <p className="text-slate-600 mb-6">
                Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa akan diselesaikan
                melalui arbitrase di Jakarta sesuai dengan aturan BANI.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">14. Hubungi Kami</h2>
              <p className="text-slate-600 mb-6">
                Untuk pertanyaan tentang Syarat dan Ketentuan ini:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl">
                <p className="text-slate-700">
                  <strong>CloudMetrics</strong><br />
                  Email: legal@cloudmetrics.io<br />
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
