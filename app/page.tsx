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
    <main className="min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-6 relative">

      {/* Neon ışık efektleri */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-orange-600/20 blur-[100px] rounded-full"></div>


      <div className="relative z-10 w-full max-w-md text-center">


        {/* Marka */}
        <div className="mb-12">

          <div className="inline-flex px-5 py-2 rounded-full 
          bg-white/5 backdrop-blur-xl 
          border border-orange-500/40
          shadow-[0_0_25px_rgba(249,115,22,0.35)] mb-6">

            <span className="text-orange-400 text-xs tracking-[0.3em]">
              PREMIUM WRAP EXPERIENCE
            </span>

          </div>



          <h1 className="text-6xl font-black tracking-tight">

            <span className="text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.7)]">
              WRAPUP
            </span>

            <br />

            CHICKEN

          </h1>


          <p className="mt-5 text-zinc-400 text-lg">
            Sıcacık Tavuk Wrap Keyfi
          </p>


        </div>



        {/* Sipariş Butonları */}
        <div className="space-y-5">


          <a
            href="https://tgoyemek.com/restoranlar/463004#wraps-tavuk-wrap-ve-durumler"
            target="_blank"
            onClick={() => trackClick("trendyol_click")}
            className="
            block w-full py-5 rounded-3xl
            bg-orange-500/20
            backdrop-blur-xl
            border border-orange-400/50
            shadow-[0_0_30px_rgba(249,115,22,0.35)]
            text-orange-300 font-bold text-lg
            hover:scale-105 transition-all"
          >
            🟠 Trendyol GO'dan Sipariş Ver
          </a>



          <a
            href="https://www.yemeksepeti.com/restaurant/adwl/wrapup-chicken-wraps-adwl"
            target="_blank"
            onClick={() => trackClick("yemeksepeti_click")}
            className="
            block w-full py-5 rounded-3xl
            bg-red-500/20
            backdrop-blur-xl
            border border-red-400/40
            shadow-[0_0_30px_rgba(239,68,68,0.3)]
            text-red-300 font-bold text-lg
            hover:scale-105 transition-all"
          >
            🔴 Yemeksepeti'nden Sipariş Ver
          </a>




          <a
            href="https://www.migros.com.tr/yemek/wrapup-chicken-wraps-karsiyaka-nergiz-mah-st-361a5"
            target="_blank"
            onClick={() => trackClick("migros_click")}
            className="
            block w-full py-5 rounded-3xl
            bg-green-500/20
            backdrop-blur-xl
            border border-green-400/40
            shadow-[0_0_30px_rgba(34,197,94,0.3)]
            text-green-300 font-bold text-lg
            hover:scale-105 transition-all"
          >
            🟢 Migros Yemek'ten Sipariş Ver
          </a>




          <a
            href="https://wa.me/905325192920?text=Merhaba,%20sipariş%20vermek%20istiyorum"
            target="_blank"
            onClick={() => trackClick("whatsapp_click")}
            className="
            block w-full py-5 rounded-3xl
            bg-white/10
            backdrop-blur-xl
            border border-white/30
            shadow-[0_0_30px_rgba(255,255,255,0.2)]
            text-white font-bold text-lg
            hover:scale-105 transition-all"
          >
            💬 WhatsApp Sipariş
          </a>



        </div>



        {/* Güven Alanı */}

        <div className="mt-12 space-y-2 text-sm text-zinc-500">

          <p>🔥 Özel Soslu Tavuk Wrap</p>
          <p>🚀 30 Dakikada Sıcak Teslimat</p>
          <p>📍 İzmir Karşıyaka</p>

        </div>



        <p className="mt-10 text-xs text-zinc-700">
          WrapUp Chicken © 2026
        </p>


      </div>


    </main>
  );
}