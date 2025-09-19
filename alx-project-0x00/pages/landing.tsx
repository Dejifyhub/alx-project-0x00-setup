// pages/landing.tsx
import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 bg-gray-50">
      <h1 className="text-3xl font-bold">Landing Page</h1>

      {/* Small Buttons */}
      <div className="flex gap-3">
        <Button title="Small - Rounded Sm" styles="text-sm px-2 py-1 rounded-sm" />
        <Button title="Small - Rounded Md" styles="text-sm px-2 py-1 rounded-md" />
        <Button title="Small - Rounded Full" styles="text-sm px-2 py-1 rounded-full" />
        <Button title="Small - Rounded Lg" styles="text-sm px-2 py-1 rounded-lg" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-3">
        <Button title="Medium - Rounded Sm" styles="text-base px-4 py-2 rounded-sm" />
        <Button title="Medium - Rounded Md" styles="text-base px-4 py-2 rounded-md" />
        <Button title="Medium - Rounded Full" styles="text-base px-4 py-2 rounded-full" />
        <Button title="Medium - Rounded Lg" styles="text-base px-4 py-2 rounded-lg" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-3">
        <Button title="Large - Rounded Sm" styles="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large - Rounded Md" styles="text-lg px-6 py-3 rounded-md" />
        <Button title="Large - Rounded Full" styles="text-lg px-6 py-3 rounded-full" />
        <Button title="Large - Rounded Lg" styles="text-lg px-6 py-3 rounded-lg" />
      </div>
    </main>
  );
};

export default Landing;
