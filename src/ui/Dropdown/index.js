"use client";
import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center">
      <div className="relative">
        {/* Main button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-700 hover:text-blue-500 flex items-center gap-1"
        >
          Pages
          <svg
            className="w-4 h-4 mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {open && (
          <div className="absolute left-0 mt-2 w-48 bg-white  rounded-lg shadow-lg">
            <ul className="flex flex-col">
              <li>
                <a
                  href="/features"
                  className="block px-4 py-2 hover:bg-blue-500 text-gray-700"
                >
                  Our Features
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="block px-4 py-2 hover:bg-blue-500 text-gray-700"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/testimonial"
                  className="block px-4 py-2 hover:bg-blue-500 text-gray-700"
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="block px-4 py-2 hover:bg-blue-500 text-gray-700"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/404page"
                  className="block px-4 py-2 hover:bg-blue-500 text-gray-700"
                >
                  404 Page
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

