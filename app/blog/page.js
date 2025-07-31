"use client";
export default function blog() {
  const posts = [
    { title: "Peluncuran EcoGreen Token", date: "2025-07-01", desc: "EcoGreen resmi diluncurkan di jaringan Arbitrum." },
    { title: "Roadmap 2025 Dirilis", date: "2025-07-15", desc: "Kami mengumumkan roadmap lengkap untuk tahun 2025." },
  ];

  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Berita EcoGreen</h2>
      {posts.map((p, i) => (
        <div key={i} className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-sm text-gray-500">{p.date}</p>
          <p className="mt-2">{p.desc}</p>
        </div>
      ))}
    </section>
  );
}