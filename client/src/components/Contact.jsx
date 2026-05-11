import contact from "../assets/contact.png";
import design from "../assets/design.png";
export default function Contact() {
  return (
    <section className="w-full py-4 px-4 scroll-mt-24" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[65%_35%] gap-2 items-center bg-orange-600 rounded-xl overflow-hidden">
        <div>
          <img
            src={contact}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-white text-sm md:text-base font-black text-center px-2">
            <p className="text-2xl">G.SENTHILKUMAR</p>
            <p>SMALL OFFICE HOME OFFICE</p>
            <p>Rayamangalam Village, Thiruporur Taluka</p>
            <p>Chengalpattu District, PIN - 603105.</p>
          </div>
          <div>
            <img
              src={design}
              alt="Design"
              className="w-full h-full object-cover"
            />
          </div>
         <div className="flex flex-col items-center justify-center text-center gap-4 p-4">
            <div className="flex items-center gap-3 text-white text-base font-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                <path d="M14.05 6A5 5 0 0 1 18 10"></path>
              </svg>
              <p>+91 97867 67506 / +91 84896 45716</p>
            </div>

            {/* Facebook */}
<div className="flex items-center gap-3 text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>

  <a
    href="https://www.facebook.com/senthilkumartnbjp/"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-orange-600 px-5 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
  >
    Senthilkumar BJP
  </a>
</div>

{/* YouTube */}
<div className="flex items-center gap-3 text-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>

  <a
    href="https://www.youtube.com/channel/UC4mBUO54ujLxBt4EKRJa5jQ"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white text-orange-600 px-5 py-2 rounded-lg font-bold hover:bg-gray-100 transition"
  >
    TNBJP
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
