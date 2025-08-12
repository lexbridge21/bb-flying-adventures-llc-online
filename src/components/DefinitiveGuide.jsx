export default function DefinitiveGuide() {
  return (
    <section className="bg-[#f8f5f1] px-6 py-12 md:px-16 lg:px-24">
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center max-w-7xl mx-auto">
        {/* LEFT SIDE - TEXT */}
        <div className="lg:p-[5rem]">
          <h2 className="text-3xl md:text-4xl lg:text-5xl  font-chiswick mb-3">
            Definitive Guide: Portugal
          </h2>
          <p className="text-gray-600 mb-4">
            Jul 25, 2025 • Travel Inspiration
          </p>

          {/* LOGO + TEXT */}
          <div className="flex items-center mb-6">
            <img
              src="/BBLogo.svg"
              alt="BB LLC Logo"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-3 font-chiswick">
              <p className="text-sm italic">Curated by</p>
              <p className="text-lg font-semibold font-blanco">BB LLC</p>
            </div>
          </div>

          <p className="text-[#63574a]  mb-6 leading-relaxed font-blanco">
            Portugal blends historic charm with lively city life, sweeping
            beaches, and peaceful countryside. Lisbon offers colorful streets,
            bustling neighborhoods, and a growing food scene.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] ">
          <img
            src="/portugal.png"
            alt="Portugal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
