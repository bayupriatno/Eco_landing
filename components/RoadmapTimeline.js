export default function RoadmapTimeline() {
  const items = [
    { quarter: "Q1 2025", text: "Peluncuran Token & Website" },
    { quarter: "Q2 2025", text: "Kemitraan Hijau & Listing DEX" },
    { quarter: "Q3 2025", text: "Staking Rewards & DAO Voting" },
    { quarter: "Q4 2025", text: "Proyek Lingkungan & NFT Green" },
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
      <div className="space-y-6">
        {items.map((i, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-ecoGreen">{i.quarter}</h3>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}