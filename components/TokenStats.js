"use client";
export default function TokenStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 text-center">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">Total Supply</h3>
        <p className="text-xl text-ecoGreen">1,000,000 ECO</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">Holders</h3>
        <p className="text-xl text-ecoGreen">500+</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">Network</h3>
        <p className="text-xl text-ecoGreen">Arbitrum</p>
      </div>
    </section>
  );
}