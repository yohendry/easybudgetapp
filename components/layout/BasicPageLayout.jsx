import React from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { propReactElement } from '../../propTypes';
import Logo from '../Logo';
import GetStartedButton from '../pages/home/getStarted';

function BasicPageLayout({ children }) {
  return (
    <>
      <motion.div
        style={{ maxWidth: '900px' }}
        className="px-5 md:px-0 container mx-auto"
        initial="initial"
        animate="animate"
        transition={{ duration: 0.3 }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >

        <nav className="container mx-auto ">
          <div className="flex justify-between items-center py-10 px-5 lg:px-0">
            <Logo className="" />
            <ul className="hidden md:flex space-x-8 font-medium text-sm">
              <li className="hover:text-budget-purple-800 text-gray-500">
                <Link href="/#pricing" passHref>
                  <a href>Pricing</a>
                </Link>
              </li>
              <li className="hover:text-budget-purple-800 text-gray-500">
                <Link href="/#product" passHref>
                  <a href>Product</a>
                </Link>
              </li>
              <li className="hover:text-budget-purple-800 text-gray-500">
                <Link href="/#about-us" passHref>
                  <a href>About Us</a>
                </Link>
              </li>
              <li className="hover:text-budget-purple-800 text-gray-500">
                <Link href="/blog" passHref>
                  <a href>Blog</a>
                </Link>
              </li>
            </ul>
            <GetStartedButton variant="budget-purple" />
          </div>
        </nav>
        <main className="py-0 px-5 md:px-0 md:py-12">
          {children}
        </main>

      </motion.div>
      <footer className="bg-budget-purple-800 text-gray-400 py-12 px-7 md:px-0">
        <div className="container mx-auto flex flex-col-reverse lg:space-y-0 lg:flex-row justify-between">
          <p className="text-xs text-center mt-10 lg:hidden block">Copyright 2020. All Rights Reserved</p>
          <div className="flex flex-col-reverse lg:flex-col justify-between items-center">
            <Logo isH1={false} />
            <div className="flex justify-around text-white self-stretch mb-10 lg:mb-0 text-3xl lg:text-lg">
              <a href="/" className="hover:text-primary">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="/" className="hover:text-primary">
                <i className="fab fa-youtube" />
              </a>
              <a href="/" className="hover:text-primary">
                <i className="fab fa-twitter" />
              </a>
              <a href="/" className="hover:text-primary">
                <i className="fab fa-pinterest" />
              </a>
              <a href="/" className="hover:text-primary">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="flex justify-around lg:justify-between lg:w-1/3 mb-10 lg:mb-0">
            <ul className="space-y-2">
              <li>
                <Link href="/#pricing" passHref>
                  <a>Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/#product" passHref>
                  <a>Product</a>
                </Link>
              </li>
              <li>
                <Link href="/#about-us" passHref>
                  <a>About Us</a>
                </Link>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" passHref>
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" passHref>
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms" passHref>
                  <a>Terms</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between mb-10 lg:mb-0">
            <div className="flex justify-around">
              <input
                type="text"
                placeholder="Updates in your inbox…"
                className="py-2 px-4 rounded-full mr-7 flex-grow focus:outline-none focus:ring focus:ring-primary"
              />
              <button
                type="button"
                className="text-center bg-budget-green-500 text-budget-purple-800 text-sm rounded-full py-3 px-6 placeholder-gray-300 hover:bg-budget-green-700"
              >
                Go
              </button>
            </div>
            <p className="text-xs text-right hidden lg:block">Copyright 2020. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}

BasicPageLayout.propTypes = {
  children: propReactElement.isRequired,
};

export default BasicPageLayout;
