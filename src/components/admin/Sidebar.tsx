export default function Sidebar({ tab, setTab }: any) {
  return (
    <aside className="w-72 bg-[#214d3b]/95 backdrop-blur text-white p-8">
      <h2 className="text-xl font-bold mb-10">Siddhi Vinayak Exim</h2>

      <div className="space-y-3">
        {["certificates", "careers"].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`w-full px-5 py-3 rounded-xl text-left capitalize transition
            ${tab === item ? "bg-white text-[#214d3b] shadow-lg" : "hover:bg-white/10"}`}>
            {item}
          </button>
        ))}
      </div>
    </aside>
  );
}
