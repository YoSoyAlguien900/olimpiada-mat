'use client';

export function PdfExportButton() {
  return (
    <button
      className="icon-btn pdf-btn"
      onClick={() => window.print()}
      aria-label="Exportar a PDF"
      title="Exportar a PDF"
    >
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M4 6h8v6H4z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M4 8H2.5A.5.5 0 012 7.5v-3A.5.5 0 012.5 4h11a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M4 2h8v2H4z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12.5" cy="6" r="0.75" fill="currentColor" />
        <path
          d="M6 10h4M6 12h2"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
