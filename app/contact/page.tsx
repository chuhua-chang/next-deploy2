import React from 'react';

export default function YourPageName() {
  return (
  <main className="p-6 max-w-4xl mx-auto">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Contact Information</h1>
        <p>I am  always happy to talk about science! Let's connect!</p>
        <p className="mt-1 mb-1">
      📧 Email: <a href="mailto:chuhuachang@ymail.com" className="text-blue-600 underline">chuhuachang@ymail.com</a>
    </p>
    <p className="">
      💼 LinkedIn: <a href="https://www.linkedin.com/in/chuhua-chang" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">linkedin.com/in/chuhua-chang</a>
    </p>
    <a
    href="/Chu Hua Chang_CV.pdf"
    target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition mt-4"
  >
    Download CV
  </a>
  </section>

  
</main>

  );
}
