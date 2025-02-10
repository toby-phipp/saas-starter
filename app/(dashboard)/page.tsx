import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Sonic Serve
                <span className="block text-blue-500">Every Phone Call Covered</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Build your business a fully customisable voice assistant and never lose customers again because of missed calls.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <a
                  href="https://vercel.com/templates/next.js/next-js-saas-starter"
                  target="_blank"
                >
                  <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-6 inline-flex items-center justify-center">
                    Build Your Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <Image 
                src="/hero9984-01.webp"
                alt="Sonic Serve Demo"
                width={1605}
                height={1000}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-500 text-white">
                <Image 
                  src="/schedule.png"
                  alt="Schedule Icon"
                  width={512}
                  height={512}
                  className="h-12 w-12"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Appointment & Reservation Scheduling
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Allow customers to book appointments or make reservations directly through voice commands, streamlining your scheduling process.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue500 text-white">
                <Image 
                  src="/icons_smart_answering_web5674-2.webp"
                  alt="Schedule Icon"
                  width={512}
                  height={512}
                  className="h-12 w-12"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Business Information
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Provide callers with essential business information, including your business name, address, phone number, and operating hours.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue500 text-white">
                <Image 
                  src="/icons_smart_answering_webe323-2.webp"
                  alt="Schedule Icon"
                  width={512}
                  height={512}
                  className="h-12 w-12"
                />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Website Redirect
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Send web links via SMS to book appointments, make reservations, or share content that’s relevant to the caller’s specific inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                How Sonic Serve Can Help Your Business
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Missed calls have a big impact on your bottom line. See how Sonic Serve can ensure your customers always receive excellent service when they call, and you never miss a new customer.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="https://github.com/nextjs/saas-starter"
                target="_blank"
              >
                <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-xl px-12 py-6 inline-flex items-center justify-center">
                  Create Demo Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
