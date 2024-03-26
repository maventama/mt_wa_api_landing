import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Apakah limit API nya terbatas?',
      answer: 'Tidak, tidak ada limit API.',
    },
    {
      question: 'Bagaimana cara installasi?',
      answer: 'Setelah pembelian, Anda akan menerima url dan dokumentasi khusus untuk Anda.',
    },
    {
      question: 'Apakah bisa dihosting di server saya?',
      answer: 'Tidak bisa, kami menyediakan hosting khusus untuk produk jadi kami.',
    },
  ],
  [
    {
      question: 'Apakah ada dokumentasi?',
      answer: 'Dokumentasi akan diberikan setelah pembelian.',
    },
    {
      question: 'Apakah bisa request fitur?',
      answer:
        'MT WA API bersifat produk jadi, namun kami akan mempertimbangkan request fitur berdasarkan kompleksitas.',
    },
    {
      question: 'Apakah ada pelatihan?',
      answer:
        'Pelatihan akan diberikan setelah pembelian. 1x pelatihan online 1 jam.',
    },
  ],
  [
    {
      question: 'Apakah ini resmi dari WhatsApp?',
      answer:
        'Tidak, ini adalah produk jadi yang dibuat oleh developer kami. Kami tidak berafiliasi dengan WhatsApp. Cara kerja ini menggunakan puppeteer virtual browser.',
    },
    {
      question: 'Ada berapa admin yang bisa login?',
      answer:
        'Hanya 1 admin yang bisa login. ',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Sering Ditanyakan
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Jika pertanyaan Anda tidak terjawab di sini, silakan hubungi kami di
            email.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
