export function ServiceCard({ icon: Icon, title, items }) {
  return (
    <div className="group relative rounded-[28px] p-[1px] 0 hover:from-cyan-300 hover:to-blue-700 hover:-translate-y-1">

      <div className="relative h-full rounded-[28px] bg-white/85 backdrop-blur-xl p-8 shadow-md group-hover:shadow-2xl transition-all duration-300">

        <div className="absolute -top-7 left-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-xl ring-4 ring-white/70">
          <Icon />
        </div>

        <h3 className="mt-10 text-2xl font-semibold text-gray-800 tracking-tight mb-5">
          {title}
        </h3>

        <div className="w-12 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mb-5"></div>

        <ul className="space-y-3 text-gray-600 text-[15px] leading-relaxed">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-3 group-hover:text-gray-700 transition"
            >
              <span className="mt-[6px] w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
