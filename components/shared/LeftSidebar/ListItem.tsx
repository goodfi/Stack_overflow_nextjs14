'use client';

import React from 'react';
import { sidebarLinks } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ListItem = () => {
  const pathname = usePathname();
  return (
    <>
      <section className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map(({ imgURL, label, route }) => {
          const isActive =
            (pathname.includes(route) && route.length > 1) ||
            pathname === route;
          return (
            <Link
              key={label}
              href={route}
              className={`${
                isActive
                  ? 'primary-gradient rounded-lg text-light-900'
                  : 'text-dark300_light900'
              } flex items-center justify-start gap-4 bg-transparent p-4 `}
            >
              <Image
                src={imgURL}
                alt={label}
                width={20}
                height={20}
                className={`${isActive ? '' : 'invert-colors'}`}
              />
              <p
                className={`${
                  isActive ? 'base-bold' : 'base-medium'
                } max-lg:hidden`}
              >
                {label}
              </p>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default ListItem;
