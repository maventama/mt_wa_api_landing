'use client'

import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/tentang-admin-mt-landing.png'
import screenshotInventory from '@/images/screenshots/services-admin-mt-landing.png'
import screenshotProfitLoss from '@/images/screenshots/portofolios-admin-mt-landing.png'

const features = [
  {
    name: 'Portofolio',
    summary: 'Tampilkan portofolio Anda dengan gambar dan deskripsi.',
    description:
      'Tampilkan portofolio Anda dengan gambar dan deskripsi. Ini membantu pengunjung situs web Anda memahami apa yang Anda tawarkan.',
    image: screenshotProfitLoss,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
            ℹ️
        </>
      )
    },
  },
  {
    name: 'Layanan/Produk Anda',
    summary:
      'Tampilkan layanan atau produk yang Anda tawarkan',
    description:
      'Daftar layanan atau produk yang Anda tawarkan, dengan gambar, judul, deskripsi, dan tombol untuk mempelajari lebih lanjut. Ini membantu pengunjung situs web Anda memahami apa yang Anda tawarkan.',
    image: screenshotInventory,
    icon: function InventoryIcon() {
      return (
        <>
            🌟
        </>
      )
    },
  },
  {
    name: 'Tentang Perusahaan',
    summary:
      'Tampilkan informasi tentang perusahaan Anda',
    description:
      'Mengubah logo? Menambahkan deskripsi perusahaan? Tidak masalah. Anda dapat mengelola informasi perusahaan Anda dari halaman admin yang mudah digunakan.',
    image: screenshotContacts,
    icon: function ContactsIcon() {
      return (
        <>
            🏢
        </>
      )
    },
  },
]

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg p-2',
          isActive ? 'bg-green-200' : 'bg-slate-100',
        )}
      >
          <feature.icon />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-green-600' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Manajemen Konten Landing Page Anda dari Halaman Admin
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Anda dapat mengelola konten landing page Anda dari halaman admin yang mudah digunakan.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
