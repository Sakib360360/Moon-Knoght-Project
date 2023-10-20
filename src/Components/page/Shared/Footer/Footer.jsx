import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaArrowAltCircleRight,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <>
          <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <header className="footer-title">OXIWEAR</header>
          <div className="flex gap-4">
            <Link
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              to="" //TO DO
            >
              <FaFacebook />
            </Link>
            <Link
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              to="" //TO DO
            >
              <FaGithub />
            </Link>
            <Link
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              to="" //TO DO
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="flex justify-center items-center mt-4 w-8 h-8 text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-black dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
              target="_blank"
              to="" //TO DO
            >
              <FaTwitter />
            </Link>
          </div>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Advisors</a>
          <a className="link link-hover">Reviews</a>
          <a className="link link-hover">Partners</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input rounded-lg w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-full">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </fieldset>
        </form>
      </footer>  
        </>
    );
};

export default Footer;