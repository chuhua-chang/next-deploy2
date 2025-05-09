// app/researchInterest/page.tsx
import Image from 'next/image';
import React from 'react';

export default function ResearchInterestPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">What is Parkinson&apos;s Disease?</h1>
        <p className="mb-4">
          Parkinson&apos;s Disease (PD) is the second most common neurodegenerative disease that is clinically diagnosed by the
          presentation of motor symptoms such as tremor, rigidity and bradykinesia. According to Parkinson&apos;s Foundation, over
          10 million people worldwide are affected with PD. However, there is no cure for this debilitating neurological disorder,
          calling an urgent need to search for biomarkers for early detection, as well as therapeutics to slow down or halt disease
          progression.
        </p>
        <div className="flex justify-center my-4">
          <Image
            src="/images/Progression of PD.jpeg"
            alt="Progression of PD"
            width={600}
            height={300}
            className="rounded"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Risk Factors</h2>
        <p>
          Parkinson&apos;s Disease is a complex disease that is largely sporadic, where approximately 90% of the cases do not have
          a clear genetic cause. Majority of the cases are also late-onset Parkinson&apos;s Disease, and age remains the greatest
          risk factor for Parkinson&apos;s Disease. Other risk factors include:
        </p>
        <ul className="list-disc list-inside mt-2 mb-4">
          <li>Age</li>
          <li>Genetic mutations in <i>SNCA</i>, <i>LRRK2</i>, <i>PRKN</i> etc</li>
          <li>Exposure to environmental toxins such as pesticides, heavy metals</li>
        </ul>
        <p>Interestingly, several environmental factors such as cigarette smoking and caffeine intake have been shown to reduce the risk of Parkinson&apos;s Disease.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Hallmarks of PD</h2>
        <p>
          PD involves the neurodegeneration of dopaminergic neurons in the substantia nigra of midbrain, while remaining neurons
          contain aggregated alpha-synuclein-containing Lewy bodies.
        </p>
      </section>

      <section className="border p-4 mb-8">
        <h2 className="text-2xl font-semibold mb-2">My Research Interests</h2>
        <p>
          I have a strong interest in elucidating the molecular mechanisms that drive PD pathogenesis. My research aims to
          understand how genetic risk factors contribute to disease onset and progression, with a particular focus on synaptic
          dysfunction and dopaminergic neurodegeneration. During my PhD, I investigated the functional role of a PD-associated risk
          gene using stem cell-derived dopaminergic neurons and midbrain organoids as in vitro models. By integrating genetic
          engineering, molecular biology, and transcriptomic approaches, I uncovered novel insights into how this gene influences
          synaptic vesicle trafficking and dopamine neurotransmission. Through this work, I aim to contribute to the identification
          of disease-modifying targets and advance our understanding of PD at the cellular and molecular level.
        </p>
      
      <section className="mb-12 mt-8">
        <h2 className="text-2xl font-semibold mb-2">My Research Models</h2>
        <p className="mb-6">I use human stem cell-derived dopaminergic neurons and midbrain organoids to model Parkinson&apos;s Disease. These models allow for high-resolution investigation of synaptic mechanisms, gene expression changes, and cellular phenotypes relevant to neurodegeneration.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
      <Image
        src="/images/neuron_if.png"
        alt="Immunostaining of Dopaminergic Neurons"
        layout="intrinsic"
        width={500}
        height={400}
        className="rounded shadow"
      />
      <p className="text-center mt-2 text-sm text-gray-600">Immunostaining of dopaminergic neurons after 40 days of culture.</p>
    </div>

    <div>
      <Image
        src="/images/organoid_if.png"
        alt="Immunostaining of organoids"
        layout="intrinsic"
        width={500}
        height={400}
        className="rounded shadow"
      />
      <p className="text-center mt-2 text-sm text-gray-600">Immunostaining of midbrain organoid on day 100 of culture.</p>
    </div>
  </div>
</section>

      </section>

    </main>
  );
}
