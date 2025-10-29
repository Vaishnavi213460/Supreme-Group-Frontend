"use client"; 
import React, { useState, useEffect } from "react";

const linkGroups = [
  {
    title: "Applications",
    links: [
      { text: "Apparel", href: "/applications/apparel" },
      { text: "Automotive", href: "/applications/automotive" },
      { text: "Filtration", href: "/applications/filtration" },
      { text: "Customised Nonwoven", href: "/applications/customised-nonwoven" },
    ],
    titleClasses: "font-semibold uppercase text-opacity-90",
  },
  {
    title: "Company",
    links: [
      { text: "Who We Are", href: "/who-we-are" },
      { text: "Global Compentency", href: "/global-competency" },
      { text: "Innovation", href: "/innovation" },
      { text: "ESG Impact", href: "/esg-impact" },
    ],
    titleClasses: "uppercase font-bold",
  },
  {
    title: "More",
    links: [
      { text: "Contact Us", href: "/contact-us" },
      { text: "Careers", href: "/careers" },
    ],
    titleClasses: "font-semibold uppercase text-opacity-90",
  },
  {
    title: "Follow Us",
    links: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/company/supreme-group-company/",
        external: true,
        linkClasses:
          "block text-black text-opacity-70 hover:text-opacity-100 whitespace-nowrap text-base font-normal transition-all duration-300",
      },
    ],
    titleClasses: "font-semibold uppercase text-opacity-90",
  },
];

const FooterLinkGroup = ({ title, links, titleClasses }) => {
  const commonLinkClasses =
    "text-base text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 transition-all duration-300";

  return (
    <ul className="grid sm:gap-5 gap-3 text-black list-none">
      <li className={`mb-2 text-base ${titleClasses}`}>{title}</li>
      {links.map((link) => (
        <li key={link.text}>
          <a
            href={link.href}
            target={link.external ? "_blank" : "_self"}
            rel={link.external ? "noopener noreferrer" : undefined}
            className={link.linkClasses ? link.linkClasses : commonLinkClasses}
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="w-full pt-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="pb-8">
          <img src="/logo.svg" alt="Supreme Group Logo" className="h-12" />
        </div>

        <div className="hidden md:flex flex-row items-start justify-between md:pr-10 lg:gap-20 sm:gap-10 gap-4 mt-8 pb-16">
          {linkGroups.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
              titleClasses={group.titleClasses}
            />
          ))}
        </div>

        <div className="md:hidden block space-y-8 pt-8 pb-8">
          {linkGroups.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
              titleClasses={group.titleClasses}
            />
          ))}
        </div>

        <div className="flex gap-3 md:flex-row flex-col justify-between items-center py-6">
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            ©{currentYear}. All Rights Reserved.
          </h6>
          <h6 className="md:block hidden text-sm text-black whitespace-nowrap">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </h6>
          <h6 className="md:hidden block text-sm text-black whitespace-nowrap">
            ©{currentYear}. All Rights Reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
}
