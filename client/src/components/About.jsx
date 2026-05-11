import myphoto from "../assets/myphoto.png";
export default function About()
{
    return (
        <section className="w-full py-4 px-4 scroll-mt-28" id="aboutme">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-[35%_65%] gap-10 items-center">

    {/* Left Image */}
<div className="flex justify-center items-center w-full px-4">
  <div
    className="
      relative
      w-full
      max-w-[320px]
      sm:max-w-[380px]
      md:max-w-[450px]
      h-[420px]
      sm:h-[500px]
      md:h-[550px]
       [@media(width:1024px)]:max-w-[300px]
        [@media(width:1024px)]:h-[420px]
      rounded-3xl
      overflow-hidden
      shadow-2xl
      border-4
      border-orange-400
      mx-auto
    "
  >
    <img
      src={myphoto}
      alt="Senthilkumar BJP"
      className="w-full h-full object-cover"
    />

    {/* Overlay */}
    <div
      className="
        absolute
        bottom-0
        left-0
        w-full
        h-36
        bg-gradient-to-t
        from-black/80
        via-black/40
        to-transparent
      "
    ></div>

    {/* Name */}
    <div className="absolute bottom-4 left-0 w-full text-center text-white px-2">
      <p className="text-sm text-orange-200 font-semibold">
        செயலாளர்
      </p>

      <h2 className="text-xl text-orange-200 sm:text-2xl font-bold">
        G.செந்தில்குமார்
      </h2>

      <p className="text-xs sm:text-sm text-orange-200 font-semibold">
        மத்திய அரசு நலத்திட்ட பிரிவு
      </p>
    </div>
  </div>
</div>

    {/* Right Content */}
    <div className="ml-8 mr-8">
      <h2
        className="
          text-3xl
          md:text-5xl
          font-black
          mb-8 p-2
          bg-[linear-gradient(to_right,#ff9800_20%,#138808)]
          bg-clip-text
          text-transparent
        "
      >
        என்னைப் பற்றி
      </h2>

      <div
        className="
          bg-white/80
          backdrop-blur-md
          rounded-3xl
          shadow-xl
          p-4
          border
          border-orange-100
           w-full

        "
      >
        <p className="text-gray-700 leading-8 text-base md:text-lg font-medium">
          நான் <span className="font-bold text-orange-600">G.செந்தில்குமார்</span>,
          பாரதிய ஜனதா கட்சி மத்திய அரசு நலத்திட்ட பிரிவு,
          செங்கல்பட்டு தெற்கு மாவட்ட செயலாளராக பணியாற்றி வருகிறேன்.
          <b> மாண்புமிகு பாரத பிரதமர்</b>
          <span className="font-bold text-green-700">
            {" "}நரேந்திர மோடி{" "}
          </span>
          அவர்களின் தற்சார்பு இந்தியா கனவை பெருமிதத்துடன் முன்னெடுத்து,
          மத்திய அரசின் மக்கள் நலத் திட்டங்களை பொதுமக்களிடம் கொண்டு சேர்க்கும்
          பணியில் முழு அர்ப்பணிப்புடன் செயல்பட்டு வருகிறேன்.
        </p>

        <p className="text-gray-700 leading-8 text-lg font-medium mt-6">
          ஏழை எளிய மக்களுக்கு மத்திய அரசின் நலத்திட்டங்களின் பயன்களை
          எடுத்துரைத்து, அவர்களுக்கு தேவையான உதவிகளை செய்து சமூக சேவையில்
          தொடர்ந்து ஈடுபட்டு வருகிறேன். மேலும், பாரதிய ஜனதா கட்சியின்
          வளர்ச்சி திட்டங்கள், தேசிய சிந்தனைகள் மற்றும் மக்கள் முன்னேற்றக்
          கொள்கைகளை தமிழக மக்களிடம் கொண்டு சேர்க்க உறுதியாக செயல்படுகிறேன்.
        </p>

        <p className="text-gray-700 leading-8 text-lg font-medium mt-6">
          இந்தியா பசுமை பாரதமாக உருவாக வேண்டும் என்ற உயரிய நோக்குடன்,
          சுற்றுச்சூழல் பாதுகாப்பு, மரநடுகை, தூய்மை மற்றும் தன்னிறைவு
          இந்தியா போன்ற முயற்சிகளில் ஒரு உண்மையான பாரதிய ஜனதா கட்சி
          தொண்டனாக தொடர்ந்து பாடுபடுவேன்.
        </p>

        <div
          className="
            mt-8
            p-5
            rounded-2xl
            bg-gradient-to-r
            from-orange-500
            to-green-600
            text-white
            font-bold
            text-center
            text-lg
            shadow-lg
          "
        >
          “நாடு முன்னேற மக்கள் விழிப்புணர்வே முதன்மை”
        </div>
      </div>
    </div>

  </div>
</section>

    );
}