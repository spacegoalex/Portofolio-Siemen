export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 text-balance">
          Hello, I'm Siemen Gunawan Iksan
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light">Data Engineer and Analytics</p>
       
        <div className="mt-8">
          <a
            href="/CV_Siemen Gunawan Iksan.pdf"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
