// app/researchInterest/page.tsx
import Image from 'next/image';
import React from 'react';

export default function ResearchInterestPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      {/* Current Postdoctoral Research */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6">Current Research</h1>
        <h2 className="text-2xl font-semibold mb-3">Cellular Cholesterol Homeostasis & Epigenetic Regulation</h2>
        <p className="mb-4 leading-relaxed">
        As a postdoctoral researcher in A/P Yasunori Saheki&apos;s lab at LKC, my current research focuses on the intricate mechanisms of cellular cholesterol homeostasis. My ongoing work investigates key regulatory proteins involved in lipid sensing and metabolic control. Utilizing various cellular and molecular biology techniques, as well as bioinformatics pipelines, I aim to dissect the mechanisms underlying how these regulatory proteins govern cholesterol metabolism and translate these findings to neurodegenerative diseases where cholesterol dysfunction is a hallmark. You can find out more about our lab&apos;s research at{' '}
          <a href="https://www.thesahekilab.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200">
            The Saheki Lab
          </a>{' '}
          website.
        </p>
      </section>

      <hr className="my-10 border-gray-200" />

      {/* Previous PhD Research */}
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-6">Previous Research (Ph.D.)</h2>
        <h3 className="text-2xl font-semibold mb-3">Modeling Neurodegeneration and Synaptic Dysfunction</h3>
        <p className="mb-4 leading-relaxed">
          During my PhD, I had a strong interest in elucidating the molecular mechanisms that drive neurodegeneration. My research aimed to understand how genetic risk factors contribute to disease onset and progression, with a particular focus on synaptic dysfunction. 
        </p>
        <p className="mb-8 leading-relaxed">
          I investigated the functional role of a disease-associated risk gene using stem cell-derived dopaminergic neurons and midbrain organoids as <i>in vitro</i> models. By integrating genetic engineering, molecular biology, and transcriptomic approaches, I uncovered novel insights into how this gene influences synaptic vesicle trafficking and dopamine neurotransmission.
        </p>
      
        <h3 className="text-xl font-semibold mb-4">In Vitro Research Models</h3>
        <p className="mb-6 leading-relaxed">
          I used human stem cell-derived dopaminergic neurons and midbrain organoids to model pathogenesis. These models allowed for high-resolution investigation of synaptic mechanisms, gene expression changes, and cellular phenotypes relevant to neurodegeneration.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <Image
              src="/images/neuron_if.png"
              alt="Immunostaining of Dopaminergic Neurons"
              layout="intrinsic"
              width={500}
              height={400}
              className="rounded shadow-md"
            />
            <p className="text-center mt-3 text-sm text-gray-500">Immunostaining of dopaminergic neurons after 40 days of culture.</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/images/organoid_if.png"
              alt="Immunostaining of organoids"
              layout="intrinsic"
              width={500}
              height={400}
              className="rounded shadow-md"
            />
            <p className="text-center mt-3 text-sm text-gray-500">Immunostaining of midbrain organoid on day 100 of culture.</p>
          </div>
        </div>
      </section>

    </main>
  );
}