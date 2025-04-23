import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Download } from 'lucide-react';

const CVPage = () => {
  return (
    <div className="min-h-screen py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto bg-slate-800 p-8 rounded-2xl border border-slate-700">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Mon CV</h2>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}>
          <div style={{ height: '600px' }}>
            <Viewer fileUrl="/cv.pdf" />
          </div>
        </Worker>
        <a href="/cv.pdf" download className="flex items-center justify-center mt-4 text-white underline">
          Télécharger mon CV
          <Download className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default CVPage;