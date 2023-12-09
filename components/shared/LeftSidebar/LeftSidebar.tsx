import React from 'react';
import ListItem from './ListItem';
import { SignOutButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const LeftSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen min-h-[600px] flex-col justify-between overflow-y-auto  border-r p-6 pt-36  shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className=" flex h-full flex-col gap-6  ">
        <ListItem />
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none ">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sing up"
                width={20}
                height={20}
                className="invert-colors lg:hidden  "
              />
              <span className="max-lg:hidden">Sing Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button className="text-dark300_light900 flex items-center justify-start gap-4 bg-transparent p-4 ">
            <Image
              src="/assets/icons/sign-up.svg"
              alt="sing up"
              width={20}
              height={20}
              className="invert-colors   "
            />
            <span className="base-medium max-lg:hidden">Logout</span>
          </Button>
        </SignOutButton>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
