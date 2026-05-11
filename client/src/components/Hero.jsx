import hero from "../assets/hero.png";
import bharathamatha from "../assets/bharathamatha.png";
import annamalai from "../assets/annamalai.png";
import modiji from "../assets/modiji.png";
export default function Hero() {
  return (
    <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={hero}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (Tricolor style) */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-400/80 via-white/70"></div>

      {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-8 p-4 md:p-8 max-w-7xl w-full text-center">
        {/* Bharath Matha */}
        <img
          src={bharathamatha}
          alt="bharath matha"
          className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] drop-shadow-2xl"
        />
        {/* Text */}
        <div className="text-center">
          <h1
            className="
        whitespace-normal

        font-black
        leading-none
        tracking-tight

        text-[clamp(16px,4vw,40px)]

        bg-[linear-gradient(to_bottom,#ff9800_0%,#ff9800_60%,#008000_60%,#008000_100%)]

        bg-clip-text
        text-transparent

 
           
        [text-rendering:geometricPrecision]
        [-webkit-font-smoothing:antialiased]
        p-2
      "
          >
            மத்திய அரசு நலத்திட்ட பிரிவு
          </h1>

          <p className="mt-4 text-green-700 text-sm sm:text-lg md:text-xl font-semibold">
            செங்கல்பட்டு தெற்கு மாவட்டம்
          </p>
<a
  href="https://tamilnadu.bjp.org/"
  target="_blank"
  rel="noopener noreferrer"
>
          <button
            className="
            mt-6
            relative
            overflow-hidden

            bg-orange-500
            text-white
            px-6
            py-3
            rounded-xl

            font-bold
            tracking-wide

            shadow-lg
            transition-all
            duration-300

            hover:bg-orange-600
            hover:scale-105
            hover:shadow-2xl

            active:scale-95

            before:absolute
            before:top-0
            before:left-[-100%]
            before:w-full
            before:h-full
            before:bg-white/20
            before:skew-x-12
            before:transition-all
            before:duration-700

            hover:before:left-[120%]
            "
          >
            இணைந்துகொள்ளுங்கள்
          </button>
          </a>
        </div>
        {/* Modiji */}
        <img
          src={modiji}
          alt="modiji"
          className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
