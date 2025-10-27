import Image from 'next/image';
import React from 'react';

const footerLinks = [
  {
    title: 'APPLICATIONS',
    links: [
      { name: 'Apparel', href: '#' },
      { name: 'Automotive', href: '#' },
      { name: 'Filtration', href: '#' },
      { name: 'Customised Nonwoven', href: '#' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'Who We Are', href: '#' },
      { name: 'Global Compentency', href: '#' }, 
      { name: 'Innovation', href: '#' },
      { name: 'ESG Impact', href: '#' },
    ],
  },
  {
    title: 'MORE',
    links: [
      { name: 'Contact Us', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    title: 'FOLLOW US',
    links: [
      { name: 'LinkedIn', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50/50" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, #e6f7ff, #ffffff 60%)' }}>
      <div className="container mx-auto px-4 md:px-6 py-16 text-gray-800">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 md:gap-y-0 md:gap-x-12 pb-12 border-b border-gray-300/50">

          <div className="md:col-span-1 col-span-2">
            <Image src="/logo.svg" alt="Supreme Group Logo" width={180} height={36} />
          </div>

          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="uppercase font-bold text-sm mb-4 text-gray-700">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-800 hover:text-blue-500 transition duration-150 text-base font-normal"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm text-gray-600 space-y-4 md:space-y-0">
          
          <p>
            ©{new Date().getFullYear()}. All Rights Reserved.
          </p>

          <p>
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </p>

        </div>
      </div>
    </footer>
  );
}