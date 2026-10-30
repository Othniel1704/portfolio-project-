import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Download, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const CVPage = () => (
  <div className="min-h-dvh bg-ink-950 pb-24">
    <PageHeader tone="rose" title="Mon CV" subtitle="Version Data / BI, à jour. Consultable ici ou à télécharger en PDF.">
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a href="/cv.pdf" download className="btn-primary">
          <Download className="h-5 w-5" aria-hidden="true" />
          Télécharger le PDF
        </a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
          <ExternalLink className="h-5 w-5" aria-hidden="true" />
          Ouvrir dans un onglet
        </a>
      </div>
    </PageHeader>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-[28px] p-[1.5px] bg-gradient-to-br from-rose-300/60 via-violet-400/40 to-cyan-300/60 shadow-2xl shadow-violet-900/30">
        <div className="rounded-[27px] bg-ink-900 p-3 sm:p-5">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
            <div className="h-[70vh] min-h-[480px] rounded-2xl overflow-hidden bg-white">
              <Viewer fileUrl="/cv.pdf" />
            </div>
          </Worker>
        </div>
      </div>
    </div>
  </div>
);

export default CVPage;
