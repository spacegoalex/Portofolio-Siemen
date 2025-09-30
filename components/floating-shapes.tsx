"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-500/20 rotate-45 animate-pulse" />
      <div
        className="absolute top-40 right-20 w-16 h-16 border border-cyan-500/20 rounded-full animate-bounce"
        style={{ animationDuration: "3s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-blue-500/10 rotate-12 animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-24 h-24 border-2 border-cyan-500/15 rotate-45 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-60 left-1/3 w-8 h-8 bg-blue-400/20 rounded-full animate-ping"
        style={{ animationDuration: "4s" }}
      />
      <div
        className="absolute top-80 right-1/3 w-14 h-14 border border-cyan-400/25 rotate-45 animate-bounce"
        style={{ animationDuration: "5s", animationDelay: "2s" }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-2xl animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "3s" }}
      />
    </div>
  )
}
