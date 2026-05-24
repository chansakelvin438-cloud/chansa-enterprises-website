function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/260967644528?text=Hello%20Chansa%20Enterprises,%20I%20would%20like%20to%20make%20an%20enquiry."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-xl shadow-green-500/30 transition hover:scale-105 hover:bg-green-400"
    >
      <span className="text-lg">💬</span>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  )
}

export default WhatsAppButton