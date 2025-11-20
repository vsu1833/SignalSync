"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6 items-center">
        {/* Left Side - Form */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-gray-200">
          <div className="mb-6">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-lg font-bold text-gray-900">
                AARTH SAARTHI
              </span>
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Create
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-primary">AARTH SAARTHI</span> account
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example.email@gmail.com"
                className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Phone Number
              </label>
              <div className="flex gap-2">
                <select className="px-3 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                  <option value="+1">🇺🇸</option>
                  <option value="+44">🇬🇧</option>
                  <option value="+91">🇮🇳</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="0123456789"
                  className="flex-1 px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter at least 8+ characters"
                  className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary pr-12 text-sm"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition font-medium shadow-lg"
            >
              Sign up
            </button>

            {/* Login Link */}
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-semibold hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>

        {/* Right Side - Dashboard Preview */}
        <div className="hidden md:block">
          <div className="bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-3xl p-6 shadow-2xl border border-gray-200">
            {/* Revenue Card */}
            <div className="bg-white rounded-2xl p-5 mb-5 shadow-xl border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">$72,000</p>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    25%
                  </p>
                </div>
                <div className="flex gap-1 items-end h-16">
                  {[60, 80, 70, 90, 85, 95, 75, 88, 92, 78, 85, 98].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-primary to-primary-dark rounded-t"
                        style={{ height: `${height}%` }}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Payment Chart */}
            <div className="bg-white rounded-2xl p-5 shadow-xl border border-gray-200">
              <div className="flex items-center mb-3">
                <p className="text-xs font-semibold text-gray-700">Payment</p>
                <svg
                  className="w-3 h-3 ml-1.5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <div className="relative h-40">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-400">
                  <span>$1,500</span>
                  <span>$1,000</span>
                  <span>$500</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="ml-12 h-full relative">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 300 150"
                    preserveAspectRatio="none"
                  >
                    {/* Purple line */}
                    <path
                      d="M 0 80 Q 75 40, 150 70 T 300 30"
                      fill="none"
                      stroke="#1c9d9a"
                      strokeWidth="2"
                    />
                    {/* Pink line */}
                    <path
                      d="M 0 60 Q 75 90, 150 100 T 300 95"
                      fill="none"
                      stroke="#f472b6"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* X-axis labels */}
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>May 01</span>
                    <span>May 03</span>
                    <span>May 05</span>
                    <span>May 07</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom text */}
            <div className="text-center mt-6">
              <p className="text-gray-500 text-base">
                Track payment statistics
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
