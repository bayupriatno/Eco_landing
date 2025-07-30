import WhitelistForm from "../../components/WhitelistForm";
import Countdown from "../../components/Countdown";

export default function Whitelist() {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">Whitelist EcoGreen</h2>
      <Countdown />
      <p className="text-center mb-6">
        Daftar sekarang untuk mendapatkan akses awal ke token EcoGreen!
      </p>
      <WhitelistForm />
    </section>
  );
}