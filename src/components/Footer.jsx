export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1f2937] py-8">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-fira text-neon text-sm">&lt;KS /&gt;</div>

        <div className="font-outfit text-xs text-gray-600 text-center">
          Built by <span className="text-gray-400">Kunal Santosh Sawant</span> · React + Tailwind · {year}
        </div>

        <a
          href="mailto:kunalsawant30122612@gmail.com"
          className="font-fira text-xs text-gray-600 hover:text-neon transition-colors"
        >
          kunalsawant30122612@gmail.com
        </a>
      </div>
    </footer>
  )
}
