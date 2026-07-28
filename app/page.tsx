"use client";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Home() {

  const trackClick = (eventName: string) => {
    window.gtag?.("event", eventName);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md text-center">

        {/* Marka Alanı */}
        <div className="mb-14">

          <div className="inline-block mb-5 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10">
            <span className="text-orange-400 text-sm tracking-widest">
              PREMIUM WRAP EXPERIENCE
            </span>
          </div>


          <h1 className="text-5xl font-black tracking-tight">
            <span className="text-orange-500">
              WRAPUP
            </span>
            <br />
            CHICKEN
          </h1>


          <p className="mt-5 text-gray-400 text-lg">
            Sıcacık Tavuk Wrap Keyfi
          </p>

        </div>



        {/* Sipariş Butonları */}
        <div className="space-y-4">


          <a
            href="https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler"
            target="_blank"
            onClick={() => trackClick("trendyol_click")}
            className="block w-full rounded-2xl py-5 bg-orange-500 text-black font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            🟠 Trendyol GO'dan Sipariş Ver
          </a>


          <a
            href="https://www.yemeksepeti.com/restaurant/adwl/wrapup-chicken-wraps-adwl"
            target="_blank"
            onClick={() => trackClick("yemeksepeti_click")}
            className="block w-full rounded-2xl py-5 bg-red-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            🔴 Yemeksepeti'nden Sipariş Ver
          </a>


          <a
            href="https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5"
            target="_blank"
            onClick={() => trackClick("migros_click")}
            className="block w-full rounded-2xl py-5 bg-green-600 text-white font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            🟢 Migros Yemek'ten Sipariş Ver
          </a>


          <a
            href="https://wa.me/905325192920?text=Merhaba,%20sipariş%20vermek%20istiyorum"
            target="_blank"
            onClick={() => trackClick("whatsapp_click")}
            className="block w-full rounded-2xl py-5 bg-white text-black font-bold text-lg shadow-xl hover:scale-105 transition"
          >
            💬 WhatsApp Sipariş
          </a>


        </div>



        <p className="mt-14 text-xs text-zinc-600">
          WrapUp Chicken © 2026
        </p>


      </div>

    </main>
  );
}