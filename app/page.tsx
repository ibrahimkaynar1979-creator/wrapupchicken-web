export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-5 py-10">

      <section className="max-w-md mx-auto text-center">

        {/* Logo Alanı */}
        <div className="mb-8">
          <h1 className="text-5xl font-black">
            Wrap<span className="text-orange-500">Up</span>
          </h1>

          <p className="text-orange-500 text-xl font-bold">
            CHICKEN
          </p>

          <p className="text-gray-400 mt-3">
            Özel soslu tavuk wrap deneyimi
          </p>
        </div>


        {/* Ürün Kartı */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden mb-8">

          <div className="h-56 bg-gradient-to-br from-orange-500/30 to-black flex items-center justify-center">

            <span className="text-7xl">
              🌯
            </span>

          </div>


          <div className="p-5 text-left">

            <h2 className="text-2xl font-bold">
              Bol Cheddarlı Tavuk Wrap
            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Izgara tavuk, özel WrapUp sosu,
              cheddar ve taze malzemeler.
            </p>


            <div className="mt-4 text-orange-500 font-bold text-xl">
              Favori lezzetin burada 🔥
            </div>

          </div>

        </div>



        {/* Sipariş Alanı */}

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

          <h2 className="text-2xl font-bold mb-2">
            Hemen Sipariş Ver
          </h2>

          <p className="text-gray-400 text-sm mb-6">
            Dilediğin platformdan sipariş oluştur.
          </p>


          <div className="space-y-4">

            <a
              href="#"
              className="block bg-orange-500 text-black font-bold py-4 rounded-2xl"
            >
              🟠 Trendyol GO
            </a>


            <a
              href="#"
              className="block bg-red-600 font-bold py-4 rounded-2xl"
            >
              🔴 Yemeksepeti
            </a>


            <a
              href="#"
              className="block bg-green-600 font-bold py-4 rounded-2xl"
            >
              🟢 Migros Yemek
            </a>


            <a
              href="#"
              className="block border border-orange-500 text-orange-400 font-bold py-4 rounded-2xl"
            >
              💬 WhatsApp Sipariş
            </a>

          </div>

        </div>



        <div className="mt-8 text-gray-500 text-sm space-y-2">

          <p>🚀 30 Dakikada Sıcak Teslimat</p>
          <p>📍 İzmir Karşıyaka</p>
          <p>📸 @wrapupchicken</p>

        </div>


      </section>

    </main>
  );
}