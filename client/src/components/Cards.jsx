import { useState } from "react";

const allSchemes = [
  {
    id: 1,
    icon: "🌾",
    bannerFrom: "from-green-800",
    bannerTo: "to-green-500",
    label: "PM KISAN",
    title: "பிரதமர் கிசான் சம்மான் நிதி",
    link:"https://pmkisan.gov.in/",
  },
  {
    id: 2,
    icon: "🔥",
    bannerFrom: "from-orange-600",
    bannerTo: "to-yellow-300",
    label: "உஜ்ஜ்வலா",
    title: "பிரதமர் உஜ்ஜ்வலா யோஜனா",
    link:"https://www.pmuy.gov.in/index.aspx",
  },
  {
    id: 3,
    icon: "🏠",
    bannerFrom: "from-yellow-800",
    bannerTo: "to-yellow-400",
    label: "ஆவாஸ்",
    title: "பிரதமர் ஆவாஸ் யோஜனா (ஊரக)",
    link:"https://pmaymis.gov.in/",
  },
  {
    id: 4,
    icon: "🏥",
    bannerFrom: "from-emerald-800",
    bannerTo: "to-emerald-300",
    label: "ஆயுஷ்மான்",
    title: "ஆயுஷ்மான் பாரத் - பிரதான் மந்திரி ஜன் ஆரோக்கிய யோஜனா",
    link:"https://www.cmchistn.com/",
  },
  {
    id: 5,
    icon: "🎓",
    bannerFrom: "from-blue-700",
    bannerTo: "to-blue-300",
    label: "கல்வி",
    title: "பிரதான் மந்திரி வித்யாலக்ஷ்மி (பி.எம்-வித்யாலக்ஷ்மி)",
    link:"https://pmvidyalaxmi.co.in/",
  },
  // --- Extra cards shown after expand ---
  {
    id: 6,
    icon: "💧",
    bannerFrom: "from-cyan-700",
    bannerTo: "to-cyan-300",
    label: "ஜல் ஜீவன்",
    title: "ஜல் ஜீவன் மிஷன்",
  },
  {
    id: 7,
    icon: "🛣️",
    bannerFrom: "from-gray-700",
    bannerTo: "to-gray-400",
    label: "சாலை",
    title: "பிரதமர் கிராம சாலை யோஜனா",
  },
  {
    id: 8,
    icon: "⚡",
    bannerFrom: "from-yellow-600",
    bannerTo: "to-yellow-300",
    label: "மின்சாரம்",
    title: "பிரதமர் சௌபாக்யா யோஜனா",
  },
  {
    id: 9,
    icon: "🤱",
    bannerFrom: "from-pink-600",
    bannerTo: "to-pink-300",
    label: "மாதா",
    title: "பிரசூதி பலன் யோஜனா",
  },
  {
    id: 10,
    icon: "🏦",
    bannerFrom: "from-indigo-700",
    bannerTo: "to-indigo-300",
    label: "முத்ரா",
    title: "பிரதமர் முத்ரா யோஜனா",
  },
];

const INITIAL_COUNT = 5;
export default function Cards() {
  const [expanded, setExpanded] = useState(false);
  const visibleSchemes = expanded
    ? allSchemes
    : allSchemes.slice(0, INITIAL_COUNT);
  return (
    <section className="w-full py-4 px-4 scroll-mt-28" id="home">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-orange-500 pl-3">
            முக்கிய நலத்திட்டங்கள்
          </h2>
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="text-green-600 font-semibold text-sm hover:underline flex items-center gap-1 transition-all duration-200 cursor-pointer bg-transparent border-none"
          >
            {expanded ? "மறை ←" : "அனைத்தையும் காண்க →"}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visibleSchemes.map((scheme, i) => (
            <div
              key={scheme.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{
                animation: "fadeUp 0.4s ease both",
                animationDelay: `${i * 0.07}s`,
              }}
            >
              {/* Banner */}
              <div
                className={`h-36 bg-gradient-to-br ${scheme.bannerFrom} ${scheme.bannerTo} flex flex-col items-center justify-center text-white text-3xl gap-1`}
              >
                <span className="text-5xl md:text-6xl">{scheme.icon}</span>
                <span className="text-xs font-bold tracking-wide">
                  {scheme.label}
                </span>
              </div>

              {/* Body */}
              <div className="p-3 flex flex-col flex-1 gap-3">
                <p className="text-sm font-bold text-gray-800 leading-snug min-h-[2.8rem]">
                  {scheme.title}
                </p>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-orange-500 hover:bg-orange-600 active:scale-95 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-all duration-200 cursor-pointer text-center"
                >
                  மேலும் விவரம்
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Bottom toggle button (optional) */}
        {expanded && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setExpanded(false)}
              className="text-sm font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full transition-all duration-200 cursor-pointer"
            >
              ← குறைவாக காட்டு
            </button>
          </div>
        )}
      </div>
      {/* Keyframe for card animation */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
