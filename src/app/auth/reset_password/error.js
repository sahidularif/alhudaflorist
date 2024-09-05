"use client";

import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter()

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">500</h1>

        {
          error && <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {error}
          </p>
        }

        <button
          type="button"
          onClick={() => router.push("login")}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}