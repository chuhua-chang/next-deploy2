// app/publications/page.tsx
import React from 'react';

export default function PublicationsPage() {
  return (
    <main className="publications-page p-6 max-w-4xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">Publications</h2>

        <div className="mb-4">
          <p>
            <strong>Chang, C. H.*</strong>, Chew, E. G. Y.*, Lian, M. M., Tandiono, M., Li, Z., Chung, S. J., Tan, L. C. S., Au,
            W.-L., Prakash, K. M., Ahmad-Annuar, A., Tan, A. H., Mok, V., Chan, A. Y. Y., Lin, J.-J., Jeon, B. S., Khor,
            C. C., Lim, S.-Y., Tan, E.-K., & Foo, J. N. (2025). Rare SV2C coding variants in Parkinson&apos;s disease risk. <i>Journal of Parkinson&apos;s Disease</i>, 1877718X241300298.
            <a href="https://doi.org/10.1177/1877718X241300298" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              https://doi.org/10.1177/1877718X241300298
            </a>
          </p>
        </div>

        <div className="mb-4">
          <p>
            Chew, E. G. Y., Liu, Z., Li, Z., Chung, S. J., Lian, M. M., Tandiono, M., Ng, E. Y., Tan, L. C. S., Chng, W.
            L., Tan, T. J., Peh, E. K. L., Ho, Y. S., Chen, X. Y., Lim, E. Y. T.,
            <strong> Chang, C. H. </strong>, Leong, J. J., Heng, Y. J., Peh, T. X., Chan, L.-L., … Foo, J. N. (2024). Exome
            sequencing in Asian populations identifies low-frequency and rare coding variation influencing Parkinson&apos;s
            disease risk. <i>Nature Aging</i>.
            <a href="https://doi.org/10.1038/s43587-024-00760-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              https://doi.org/10.1038/s43587-024-00760-7
            </a>
          </p>
        </div>

        <div className="mb-4">
          <p>
            <strong>Chang, C. H.</strong>, Lim, K. L., & Foo, J. N. (2024). Synaptic Vesicle Glycoprotein 2C: a role in Parkinson&apos;s disease. <i>Frontiers in Cellular Neuroscience</i>, 18.
            <a href="https://doi.org/10.3389/fncel.2024.1437144" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              https://doi.org/10.3389/fncel.2024.1437144
            </a>
          </p>
        </div>

        <div className="mb-4">
          <p>
            Ali, G., Awan, N. B., Sadia, Khawaja, A. W., Foo, J. N., Khor, C. C.,
            <strong> Chang, C.-H. </strong>, Chew, E. G., Kiani, F. R., & Jelani, M. (2020). Identification of a recurrent nonsense
            mutation in HR gene responsible for atrichia with papular lesions in two Kashmiri families. <i>The Journal of
            Gene Medicine</i>, 22(5), e3167.
            <a href="https://doi.org/10.1002/jgm.3167" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
              https://doi.org/10.1002/jgm.3167
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-8 mb-2">Conference Posters</h2>
        <p>
          “Functional Characterisation of SV2C and its variants as a Parkinson&apos;s Disease-associated Gene.” <i>Neuroscience
          2023</i>, Society for Neuroscience, Washington D.C., United States.
        </p>
      </section>
    </main>
  );
}
