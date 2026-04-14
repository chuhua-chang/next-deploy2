import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-start gap-8 mb-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Chu Hua Chang, Ph.D.</h1>
          <p className="mb-2"><b>Research Fellow</b></p>
          <p className="mb-2">Lee Kong Chian School of Medicine</p>
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
      I am a postdoctoral researcher in Assoc Prof Yasunori Saheki’s lab at Lee Kong Chian School of Medicine, where I investigate the intricate mechanisms of cellular cholesterol homeostasis. I earned my Ph.D. in 2025, specializing in modeling Parkinson's Disease using stem cell-derived dopaminergic neurons and organoids. Driven by a deep curiosity about molecular biology and brain complexity, I leverage a combination of in vitro modeling and computational data analysis to uncover the pathways underlying cellular health and neurodegeneration.
   </p>
   <br></br>
      <p>
      Beyond the bench, I am dedicated to continuous personal growth and stay highly active by participating in various sports. I also actively contribute to my community through volunteering and mentoring. At home, I'm a proud parent to many cats who keep me company when I'm off the clock! </p>
    </section>
  </main>
  );
}
