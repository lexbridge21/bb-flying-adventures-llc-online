export default function SummerHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover origin-center"
          autoPlay
          loop
          muted
          playsInline
          poster="/summerhero.jpg"
        >
          <source src="/summerhero.webm" type="video/webm" />
          <source src="/summerhero.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
