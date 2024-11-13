'use client';

export default function StartPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] bg-gradient-to-b from-blue-500 to-blue-300 p-4 overflow-hidden">
      <h1 className="text-4xl font-bold text-white text-center mb-2">Welcome to Spaced Repetition</h1>
      <h2 className="text-2xl text-white text-center mb-4">Enhance Your Learning Experience</h2>
      <p className="text-lg text-white text-center mb-6 max-w-md">
        A smart way to remember information through spaced repetition techniques. 
        Start your journey to better retention and understanding today!
      </p>
    </div>
  );
}