export default function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="font-fira text-neon text-sm">{number}.</span>
      <h2 className="font-syne font-bold text-2xl md:text-3xl text-white">{title}</h2>
      <div className="flex-1 h-px bg-[#1f2937] ml-3 hidden md:block" />
    </div>
  )
}
