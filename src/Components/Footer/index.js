"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaSlack,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1A33] text-gray-300 pt-15">
      <div className="max-w-6xl mx-auto px-6 container
       grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaSlack className="text-white text-2xl" />
            <h2 className="text-xl font-bold text-white">LifeSure</h2>
          </div>

          <p className="text-sm mb-4">
            Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
            dolor sit amet, consectetur adipiscing..
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-blue-600 hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-blue-600 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-blue-900 rounded-full hover:bg-blue-600 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Useful Links
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-blue-400">
                Features
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-blue-400">
                FAQ's
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-400">
                Blogs
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Instagram</h2>
          <div className="grid grid-cols-3 gap-2">
            <img
              src="/instagramfooter1.jpg"
              alt="insta"
              className="w-full h-20 object-cover rounded-md"
            />
            <img
              src="/instagramfooter2.jpg"
              alt="insta"
              className="w-full h-20 object-cover rounded-md"
            />
            <img
              src="/instagramfooter3.jpg"
              alt="insta"
              className="w-full h-20 object-cover rounded-md"
            />
            <img
              src="/instagramfooter4.jpg"
              alt="insta"
              className="w-full h-20 object-cover rounded-md"
            />
            <img
              src="/instagramfooter5.jpg"
              alt="insta"
              className="w-full h-20 object-cover rounded-md"
            />
            <img
              src="/instagramfooter6.jpg"
              alt="insta"
              className="w-full h-20 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Newsletter</h2>
          <p className="text-sm mb-4">
            Dolor amet sit justo amet elit clita ipsum elit est. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex bg-white rounded-full overflow-hidden mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm text-gray-700 w-full outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
              SignUp
            </button>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600">
              <FaPhoneAlt />
            </div>
            <p>
              Call to Our Experts <br />
              <span className="text-white font-semibold">
                Free: +0123 456 7890
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© <span className="text-blue-400">Your Site Name</span>. All rights reserved.</p>
        <p>Designed by <a href="#" className="text-blue-400">HTML Codex</a></p>
      </div> */}

      {/* Contact Row */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-lg text-white">
            <FaMapMarkerAlt />
          </div>
          <p>123 Street New York, USA</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-lg text-white">
            <FaEnvelope />
          </div>
          <p>info@example.com</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-lg text-white">
            <FaPhoneAlt />
          </div>
          <p>(+012) 3456 7890</p>
        </div>
      </div>
    </footer>
  );
}
