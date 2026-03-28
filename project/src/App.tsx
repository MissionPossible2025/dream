import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaDraftingCompass, FaTools, FaLightbulb, FaGooglePlay } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/whatsapp_image_2025-12-11_at_23.48.39_53da4fda.jpg" alt="DreamSync Logo" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-lg font-semibold">DreamSync Creations</h1>
            <p className="text-xs text-gray-500">Web • Mobile • Brand</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#work" className="hover:text-blue-600">Our Work</a>
          <a href="#process" className="hover:text-blue-600">Our Process</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 text-sm">Hire Us</a>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold leading-tight">We build beautiful websites, apps, and brands that connect.</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-gray-600 max-w-xl">DreamSync Creations combines creative design with modern engineering to deliver engaging digital experiences — fast, reliable and tailored to your goals.</motion.p>

          <div className="mt-6 flex gap-3">
            <a href="#services" className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3 rounded-lg font-medium shadow hover:opacity-95">See What We Can Create</a>
            <a href="#contact" className="inline-block border border-gray-200 px-5 py-3 rounded-lg text-sm hover:bg-gray-100">Get a Quote</a>
          </div>

          <div className="mt-8">
            <div><div className="text-2xl font-bold">100%</div><div className="text-xs text-gray-500">Client Satisfaction</div></div>
          </div>
        </div>

        <div className="order-first md:order-last">
          <div className="bg-white rounded-2xl shadow overflow-hidden">
            <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="team working" className="rounded-lg w-full object-cover h-80" />
          </div>
        </div>
      </main>

      <section id="services" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Services</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">What we offer — from concept to launch.</p>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard title="Website Development" desc="Responsive websites, e-commerce, SEO & performance optimization." icon={<FaLaptopCode />} highlight />
          <ServiceCard title="Mobile Apps" desc="Cross-platform apps with real-time features, push notifications and analytics." icon={<FaMobileAlt />} highlight />
          <ServiceCard title="Logo & Branding" desc="Logo concepts, brand guides, social media assets, brouchers and print-friendly files." icon={<FaPaintBrush />} highlight />
          <ServiceCard title="UI/UX Design" desc="Wireframes, high-fidelity mockups and clickable prototypes to validate flows." icon={<FaDraftingCompass />} highlight />
          <ServiceCard title="Maintenance & Support" desc="Ongoing updates, security, monitoring and iterative improvements." icon={<FaTools />} highlight />
          <ServiceCard title="Consulting & Strategy" desc="Product discovery, tech stack selection, and launch roadmaps." icon={<FaLightbulb />} highlight />
        </div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h3 className="text-3xl font-extrabold text-gray-900">Featured Work</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">Delivering real value through thoughtful design and robust engineering.</p>
        </div>

        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative text-white pt-12 px-8 md:px-12 lg:flex lg:items-center lg:gap-12 lg:pt-0 lg:pl-16 lg:pr-0">
          <div className="lg:w-1/2 py-12 lg:py-20 z-10 relative">
            <div className="inline-block bg-blue-500/20 text-blue-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-500/30">
              E-Commerce Mobile App
            </div>
            <h4 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">DaiLynk: Store to Door.</h4>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We built DaiLynk to seamlessly connect clients with their products. Designed to streamline ordering, and present products beautifully – it brings full store accessibility right into your pocket.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.dreamsynccreations.dailynk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-6 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg"
            >
              <FaGooglePlay className="text-xl text-emerald-600" />
              <div className="text-left">
                <div className="text-[10px] leading-tight uppercase font-semibold text-gray-600">Get it on</div>
                <div className="text-lg leading-tight">Google Play</div>
              </div>
            </a>
            <div className="mt-8 flex flex-wrap gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-400">100+</div>
                <div className="text-sm text-gray-500 mt-1">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">Fast</div>
                <div className="text-sm text-gray-500 mt-1">Checkout Flow</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400">UI/UX</div>
                <div className="text-sm text-gray-500 mt-1">Premium Design</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative h-[450px] lg:h-[650px] mt-10 lg:mt-0 flex justify-center items-end lg:items-center">
            {/* Background design elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[80px]"></div>

            <div className="relative flex justify-center items-center w-full h-full pb-0.5 max-w-lg mx-auto transform xl:translate-y-12 xl:translate-x-12">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute z-20 transform -translate-x-16 lg:-translate-x-24 shadow-2xl rounded-[2.5rem]"
              >
                <PhoneMockup src="/dailynk-2.jpeg" alt="DaiLynk Auth Screen" />
              </motion.div>

              <motion.div
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute z-30 transform -translate-y-12 lg:-translate-y-16 shadow-2xl rounded-[2.5rem]"
              >
                <PhoneMockup src="/dailynk-0.jpeg" alt="DaiLynk Home Screen" />
              </motion.div>

              <motion.div
                initial={{ y: 110, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute z-10 transform translate-x-16 lg:translate-x-24 translate-y-8 lg:translate-y-12 shadow-2xl rounded-[2.5rem]"
              >
                <PhoneMockup src="/dailynk-3.jpeg" alt="DaiLynk Cart Screen" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Full App Gallery Marquee */}
        <div className="mt-20 overflow-hidden relative w-full pt-10 border-t border-gray-200">
          <div className="text-center mb-8">
            <span className="bg-gray-100 text-gray-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest">Full App Gallery</span>
          </div>

          {/* Fading edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none mt-20"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none mt-20"></div>

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8">
            {/* First Set of 8 */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`gallery1-${num}`} className="w-[180px] md:w-[220px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                <GalleryMockup src={`/dailynk-${num}.jpeg`} />
              </div>
            ))}
            {/* Duplicate Set for Infinite Scroll */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={`gallery2-${num}`} className="w-[180px] md:w-[220px] flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03]">
                <GalleryMockup src={`/dailynk-${num}.jpeg`} />
              </div>
            ))}
          </div>
        </div>

        {/* --- SELLER APP SECTION --- */}
        <div className="mt-32 bg-[#0f172a] rounded-[2.5rem] overflow-hidden shadow-2xl text-white pt-20 px-8 md:px-14 pb-0 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a] to-blue-900/20 pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            {/* Left Content */}
            <div className="lg:w-1/2 lg:pb-24 pt-4">
              <div className="inline-block bg-white/10 text-blue-200 font-semibold px-5 py-2 rounded-full text-sm mb-6 border border-white/10 backdrop-blur-md">
                B2B E-Commerce Platform
              </div>
              <h4 className="text-4xl md:text-5xl lg:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight">Seller App: Empowering Vendors.</h4>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Built exclusively for store owners, this platform provides a comprehensive dashboard to manage your entire catalog. Effortlessly track customers, orders in real-time, update inventory — giving you total control over your digital storefront.
              </p>

              <a
                href="https://seller-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-xl"
              >
                <div className="text-left">
                  <div className="text-[10px] leading-tight uppercase font-semibold text-gray-500 tracking-wider">Visit Live</div>
                  <div className="text-lg leading-tight font-extrabold">Web App</div>
                </div>
              </a>

              <div className="mt-16 flex flex-wrap gap-10">
                <div>
                  <div className="text-4xl font-extrabold text-blue-400 tracking-tight">50+</div>
                  <div className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-wider">Features</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-emerald-400 tracking-tight">Smart</div>
                  <div className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-wider">Dashboard</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-amber-400 tracking-tight">UI/UX</div>
                  <div className="text-sm font-medium text-gray-400 mt-2 uppercase tracking-wider">Premium Design</div>
                </div>
              </div>
            </div>

            {/* Right Auto Swiping Phone Mockup */}
            <div className="lg:w-1/2 relative w-full flex justify-center items-center py-12 lg:py-0">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 40 }}
                className="relative"
              >
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-blue-500/30 blur-[100px] rounded-full scale-150"></div>

                <div className="relative z-10">
                  <AutoSwipingPhoneMockup images={[
                    "/seller-1.jpeg",
                    "/seller-2.jpeg",
                    "/seller-3.jpeg",
                    "/seller-4.jpeg",
                    "/seller-5.jpeg",
                    "/seller-6.jpeg",
                    "/seller-7.jpeg",
                    "/seller-8.jpeg"
                  ]} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12 bg-white">
        <h3 className="text-2xl font-bold">About DreamSync</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">DreamSync Creations build real-world digital products for clients. We help startups and small businesses launch compelling digital products — from logo and identity to full-stack web and mobile applications.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Fast turnarounds</h4>
              <p className="text-gray-500 text-sm">MVPs ready in weeks</p>
            </div>
            <div>
              <h4 className="font-semibold">Clear communication</h4>
              <p className="text-gray-500 text-sm">Regular updates & demos</p>
            </div>
            <div>
              <h4 className="font-semibold">Design-led code</h4>
              <p className="text-gray-500 text-sm">Pixel-perfect UI</p>
            </div>
            <div>
              <h4 className="font-semibold">Post-launch care</h4>
              <p className="text-gray-500 text-sm">Maintenance & growth</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
            <h4 className="font-semibold text-gray-900 mb-4">Founders</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">PS</div>
                <div>
                  <div className="font-medium text-gray-900">Pranavi S</div>

                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">IC</div>
                <div>
                  <div className="font-medium text-gray-900">Iniya C</div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Our Process</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">How we transform your ideas into reality.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep number="1" title="Discovery & Planning" desc="We understand your goals, target audience, and technical requirements." />
          <ProcessStep number="2" title="Design & Strategy" desc="Wireframes, mockups, and strategic roadmaps aligned with your vision." />
          <ProcessStep number="3" title="Development & Build" desc="Clean code, modern tech stack, and iterative development cycles." />
          <ProcessStep number="4" title="Launch & Support" desc="Deployment, testing, and ongoing maintenance for long-term success." />
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold">Contact</h3>
        <p className="text-gray-600 mt-2 max-w-2xl">Tell us about your project and we'll reply within 24–48 hours.</p>
        <div className="mt-6">
          <div className="bg-white rounded-xl p-6 shadow">
            <h4 className="font-semibold">Get in touch</h4>
            <p className="text-sm text-gray-500 mt-2">Or email us directly.</p>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div><div className="text-xs text-gray-500">Email</div><div className="font-medium">dreamsynccreations@gmail.com</div></div>
              <div><div className="text-xs text-gray-500">Phone</div><div className="font-medium">7502732425, 9597919654</div></div>
              <div><div className="text-xs text-gray-500">Location</div><div className="font-medium">Coimbatore, Tamil Nadu</div></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/whatsapp_image_2025-12-11_at_23.48.39_53da4fda.jpg" alt="DreamSync Logo" className="w-8 h-8 object-contain" />
            <div>
              <div className="text-lg font-semibold">DreamSync Creations</div>
              <div className="text-xs text-gray-400">Web • Mobile • Brand</div>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-sm text-gray-400">© 2025 DreamSync Creations. All rights reserved.</div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white">LinkedIn</a>
            <a href="#" className="text-sm hover:text-white">Dribbble</a>
            <a href="#" className="text-sm hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

function ServiceCard({ title, desc, icon, highlight }: { title: string; desc: string; icon: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`bg-white p-5 rounded-xl shadow-sm ${highlight ? 'border-2 border-blue-500' : ''}`}>
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center ${highlight ? 'text-blue-700' : 'text-blue-600'}`}>{icon}</div>
        <div>
          <div className={`font-semibold ${highlight ? 'text-blue-700' : ''}`}>{title}</div>
          <div className="text-sm text-gray-500 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: Number(number) * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">{number}</div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function PhoneMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto border-gray-950 bg-gray-950 border-[8px] rounded-[2.5rem] h-[400px] w-[190px] md:h-[480px] md:w-[230px] shadow-2xl ring-1 ring-white/10 overflow-hidden">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-5 bg-gray-950 rounded-b-3xl w-24 mx-auto z-50 flex justify-center items-center gap-1.5">
        <div className="w-1 h-1 rounded-full bg-gray-800"></div>
        <div className="w-6 h-1 rounded-full bg-gray-800"></div>
      </div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-900 relative flex items-center justify-center border border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 opacity-50"></div>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover object-top relative z-10" />
        ) : (
          <div className="text-gray-500 text-sm relative z-10">Image missing</div>
        )}
      </div>
    </div>
  );
}

function GalleryMockup({ src }: { src: string }) {
  return (
    <div className="relative mx-auto border-gray-900 bg-gray-900 border-[6px] rounded-[1.75rem] h-[360px] md:h-[440px] w-full shadow-xl ring-1 ring-black/5 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-4 bg-gray-900 rounded-b-xl w-16 mx-auto z-50"></div>
      <div className="rounded-[1.25rem] overflow-hidden w-full h-full bg-gray-100 relative border border-gray-800 flex items-center justify-center">
        {src ? (
          <img src={src} alt="App Screen" className="w-full h-full object-cover object-top relative z-10" />
        ) : (
          <div className="text-gray-400 text-xs relative z-10">Empty</div>
        )}
      </div>
    </div>
  );
}



function AutoSwipingPhoneMockup({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mx-auto border-gray-950 bg-gray-950 border-[8px] rounded-[2.5rem] h-[500px] w-[240px] md:h-[600px] md:w-[280px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/10 overflow-hidden shrink-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-5 bg-gray-950 rounded-b-3xl w-28 mx-auto z-50 flex justify-center items-center gap-1.5 shadow-sm">
        <div className="w-1 h-1 rounded-full bg-gray-800"></div>
        <div className="w-6 h-1 rounded-full bg-gray-800"></div>
      </div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-100 relative flex border border-gray-800">
        <div className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`App screen ${i}`} className="w-full h-full object-cover object-top shrink-0" />
          ))}
        </div>
      </div>
    </div>
  );
}
