import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Chu Hua Chang</h1>
          <p className="mb-2"><b>Neuroscience Ph.D. Candidate</b></p>
          <p className="mb-2">Nanyang Technological University, Singapore</p>
          <p className="mb-2">ORCID: <a href="https://orcid.org/0009-0008-4787-5249" target="_blank">0009-0008-4787-5249</a></p>
        </div>
  
  <div className="flex-shrink-0 p-4 mb-4">
    <Image
      src="/images/picture of me.jpeg"
      alt="picture of me"
      width={300}
      height={200}
      className="rounded"
    />
  </div>
</div>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p>
        I am an enthusiastic Neuroscience Ph.D. candidate with expertise in using stem cell-derived dopaminergic neurons and organoids to model Parkinson's Disease. I am driven by a deep curiosity about the complexities of the brain and seek postdoctoral opportunities to further investigate the molecular mechanisms underlying neurodegenerative diseases. My dissertation has been submitted, and my Ph.D. viva is expected in May 2025.
      </p>
   
      <p>Outside of lab, I exercise a lot! I also actively look for ways to improve myself and contribute the community by volunteering. I have 3 cats at home that I absolutely adore! </p>
    </section>
  </main>
  );
}
