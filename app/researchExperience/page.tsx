// app/researchExperience/page.tsx
import React from 'react';

export default function ResearchExperiencePage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Research Experience</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Ph.D. Research</h3>
          <p>Lee Kong Chian School of Medicine, Nanyang Technological University</p>
          <p>Jan 2021 - Present</p>
          <ul className="list-disc list-inside mt-2">
            <li>Utilizing dopaminergic neurons and midbrain-like organoids derived from human embryonic stem cells to investigate the roles of PD-associated gene</li>
            <li>Performed molecular and cellular assays related to neuronal and synaptic functions</li>
            <li>Transcriptomics analysis of bulk- and single cell-RNA sequencing datasets</li>
            <li>Writing and preparing manuscripts for publications based on my research findings</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Lab Rotation</h3>
          <p>Lee Kong Chian School of Medicine, Nanyang Technological University</p>
          <p>Feb - Apr 2021</p>
          <ul className="list-disc list-inside mt-2">
            <li>Generated ventral midbrain-like organoids from human induced pluripotent stem cells</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Final Year Project</h3>
          <p>School of Biological Sciences, Nanyang Technological University</p>
          <p>Jan - May 2020</p>
          <ul className="list-disc list-inside mt-2">
            <li>Examined the learning and memory of a mouse model of Huntington&apos;s Disease using trace fear conditioning</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Research Internship</h3>
          <p>Human Genetics, Genome Institute of Singapore, A*STAR</p>
          <p>Feb - Aug 2019</p>
          <ul className="list-disc list-inside mt-2">
            <li>Identified and validated genetic variants from whole-exome sequencing that are responsible for rare diseases in consanguineous families</li>
            <li>Assisted my supervisor in editing and reviewing collaborator&apos;s manuscripts</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Laboratory Skills</h2>
        <ul className="list-disc list-inside">
          <li>Neuronal Cell Culture derived from Stem Cells (2D dopaminergic neurons and 3D midbrain organoids)</li>
          <li>Mammalian Cell Culture (human embryonic stem cells, induced-pluripotent stem cells, cancer cell, HEK293)</li>
          <li>CRISPR gene editing</li>
          <li>Molecular Techniques including PCR, Molecular Cloning, RT-qPCR, Western Blot</li>
          <li>Cellular assays including ELISA, Proximity Ligation Assay, Surface Biotinylation, Immunoprecipitation</li>
          <li>Immunocytochemistry and Live Cell Imaging</li>
          <li>Animal work (Barnes Maze, Trace Fear Conditioning, Brain Dissection, Cryosectioning)</li>
          <li>Transcriptomic analysis of bulk and single-cell RNA sequencing data</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <div>
          <h3 className="text-lg font-bold">Ph.D. in Neuroscience</h3>
          <p>Nanyang Technological University</p>
          <p>2020 - Present</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold">B.Sc. in Biological Sciences with Honours (Highest Distinction)</h3>
          <p>Nanyang Technological University</p>
          <p>2016 - 2020</p>
        </div>
        
      </section>
            <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Certification</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Introduction to Bioinformatics and Data Analytics Programme</strong><br />
            Institution: A*STAR Bioinformatics Institute<br />
            Date of Certification: November, 2021
          </li>
          <li>
            <strong>Introduction to HTML5</strong><br />
            Institution: University of Michigan on Coursera<br />
            Date of Certification: April, 2025
          </li>
          <li>
            <strong>Introduction to CSS3</strong><br />
            Institution: University of Michigan on Coursera <br />
            Date of Certification: April, 2025
          </li>
          <li>
            <strong>Interactivity with JavaScript</strong><br />
            Institution: University of Michigan on Coursera <br />
            Date of Certification: May, 2025
          </li>
          <li>
            <strong>Advanced Styling with Responsive Design</strong><br />
            Institution: University of Michigan on Coursera<br />
            Date of Certification: April, 2025
          </li>
          <li>
            <strong>Web Design for Everybody: Basics of Web Development & Coding</strong><br />
            Institution: University of Michigan on Coursera <br />
            Date of Certification: May, 2025
          </li>
        </ul>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Awards</h2>
        <ul className="list-disc list-inside">
          <li>NTU Research Scholarship</li>
          <li>Nanyang Scholarship</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <ul className="list-disc list-inside">
          <li>Native English</li>
          <li>Full Professional Chinese</li>
        </ul>
      </section>
    </main>
  );
}
