"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
    "Content-Type": "application/json",
  },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/gadgets/admin/product/view-all");
    } else {
      alert("Invalid Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5FAF9] via-white to-[#EEF7F5] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
        >

          <h1 className="text-2xl font-bold text-center text-[#003C3C]">
            Admin Login
          </h1>

          <p className="text-center text-gray-500 text-sm mt-2 mb-8">
            Enter the admin password to continue.
          </p>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#45B1A0] focus:ring-2 focus:ring-[#45B1A0]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-[#003C3C] hover:bg-[#004B4B] text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Marlayer Gadgets Admin Portal
        </p>
      </div>
    </div>
  );
}