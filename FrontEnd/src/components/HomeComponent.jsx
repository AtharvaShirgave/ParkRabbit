import { Component, useState } from "react";

import {  useNavigate } from "react-router";
export default function HomeComponent() {
  const [userMessage, ] = useState("Welcome Abinash!😄");
  const navigate = useNavigate();
  return (

     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="flex flex-col items-center text-center px-6 max-w-xl">

        {/* Brand */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-[0.4em] text-gray-900">
          Park Rabbit
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
          Smart. Simple. Stress-free parking.
        </p>

        {/* Divider */}
        <div className="mt-8 h-px w-24 bg-gray-300" />

        {/* CTA */}
        <button
          onClick={() => navigate("/login")}
          className="mt-10 w-64 rounded-xl bg-black py-4 text-white text-sm font-medium
                     tracking-wide hover:bg-gray-900 active:scale-[0.98]
                     transition-all duration-200 shadow-lg"
        >
          Sign In
        </button>

        {/* Secondary text */}
        <p className="mt-6 text-xs text-gray-500">
          Find, reserve, and manage parking effortlessly
        </p>

      </div>
    </div>
  );
}
