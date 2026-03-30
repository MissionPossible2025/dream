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
          <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl font-bold leading-tight text-gray-800">We build beautiful websites, apps, and brands that connect.</motion.h2>
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

      <section id="services" className="bg-white pt-12 pb-16 mx-4 md:mx-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 rounded-[3.5rem] mt-4 mb-6 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></motion.div>
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></motion.div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 shadow-sm">Capabilities</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed">Everything you need to launch and grow your digital presence, delivered with pristine quality and performance.</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ServiceCard title="Web Development" desc="Responsive, lightning-fast websites and robust web applications built with modern tools." icon={<FaLaptopCode />} />
            <ServiceCard title="Mobile Apps" desc="Native-feeling cross-platform applications for iOS and Android with delightful UX." icon={<FaMobileAlt />} />
            <ServiceCard title="Brand Identity" desc="Memorable logos, typography, and cohesive brand guidelines that stand out." icon={<FaPaintBrush />} />
            <ServiceCard title="UI/UX Design" desc="Intuitive, accessible, and gorgeous user interfaces designed for conversion." icon={<FaDraftingCompass />} />
            <ServiceCard title="Maintenance" desc="Reliable hosting, security updates, and performance monitoring for peace of mind." icon={<FaTools />} />
            <ServiceCard title="Strategy" desc="Technical consulting and clear roadmaps to scale your product efficiently." icon={<FaLightbulb />} />
          </motion.div>
        </div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-6 pt-6 pb-16">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-800">Featured Work</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base md:text-lg">Delivering real value through thoughtful design and robust engineering.</p>
        </div>

        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl relative text-white pt-12 px-8 md:px-12 lg:flex lg:items-center lg:gap-12 lg:pt-0 lg:pl-16 lg:pr-0">
          <div className="lg:w-1/2 py-12 lg:py-20 z-10 relative">
            <div className="inline-block bg-blue-500/20 text-blue-300 font-semibold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-500/30">
              E-Commerce Mobile App
            </div>
            <h4 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">DaiLynk: Store to Door.</h4>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
              We built DaiLynk to seamlessly connect clients with their products. Designed to streamline ordering, and present products beautifully – it brings full store accessibility right into your pocket.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.dreamsynccreations.dailynk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-xl font-semibold transition-transform hover:-translate-y-1 shadow-md"
            >
              <FaGooglePlay className="text-lg text-emerald-600" />
              <div className="text-left">
                <div className="text-[10px] leading-tight uppercase font-semibold text-gray-600">Get it on</div>
                <div className="text-base leading-tight font-bold">Google Play</div>
              </div>
            </a>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-blue-400">100+</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-semibold">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">Fast</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-semibold">Checkout Flow</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">UI/UX</div>
                <div className="text-xs text-gray-500 mt-1 uppercase tracking-wide font-semibold">Premium Design</div>
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
              <h4 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">Seller App: Empowering Vendors.</h4>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                Built exclusively for store owners, this platform provides a comprehensive dashboard to manage your entire catalog. Effortlessly track customers, orders in real-time, update inventory — giving you total control over your digital storefront.
              </p>

              <a
                href="https://seller-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-5 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-1 shadow-md"
              >
                <div className="text-left">
                  <div className="text-[10px] leading-tight uppercase font-semibold text-gray-600 tracking-wider">Visit Live</div>
                  <div className="text-base leading-tight font-bold">Web App</div>
                </div>
              </a>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="text-2xl font-bold text-blue-400 tracking-tight">50+</div>
                  <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">Features</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400 tracking-tight">Smart</div>
                  <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">Dashboard</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-400 tracking-tight">UI/UX</div>
                  <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wide">Premium Design</div>
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

      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-50 border border-blue-100 text-blue-600 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 shadow-sm">Get in Touch</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">extraordinary.</span></h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Choose how you'd like to connect. We're responsive, ready, and excited to turn your vision into reality.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.a
            href="mailto:dreamsynccreations@gmail.com"
            whileHover={{ y: -5 }}
            className="group relative bg-[#fcfcfc] p-8 rounded-[2rem] border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] hover:border-blue-100 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
            <div className="w-14 h-14 rounded-[1rem] bg-white shadow-sm border border-gray-50 text-blue-600 flex items-center justify-center shrink-0 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 relative z-10">Email Us</h4>
            <div className="text-gray-500 text-sm font-medium transition-opacity duration-300 relative z-10">dreamsynccreations@gmail.com</div>
          </motion.a>

          <motion.div
            whileHover={{ y: -5 }}
            className="group relative bg-[#fcfcfc] p-8 rounded-[2rem] border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] hover:border-emerald-100 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
            <div className="w-14 h-14 rounded-[1rem] bg-white shadow-sm border border-gray-50 text-emerald-500 flex items-center justify-center shrink-0 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 relative z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 relative z-10">Call Us</h4>
            <div className="text-gray-500 text-sm font-medium transition-opacity duration-300 relative z-10 flex flex-col items-center gap-1.5 mt-1">
              <a href="tel:+917502732425" className="hover:text-emerald-500 transition-colors inline-block">+91 75027 32425</a>
              <a href="tel:+919597919654" className="hover:text-emerald-500 transition-colors inline-block">+91 95979 19654</a>
            </div>
          </motion.div>

          <motion.a
            href="https://www.linkedin.com/in/dreamsync-creations"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group relative bg-[#fcfcfc] p-8 rounded-[2rem] border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.2)] hover:border-sky-100 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-sky-400 to-sky-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
            <div className="w-14 h-14 rounded-[1rem] bg-white shadow-sm border border-gray-50 text-sky-500 flex items-center justify-center shrink-0 mb-6 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300 relative z-10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 relative z-10">LinkedIn</h4>
            <div className="text-gray-500 text-sm font-medium transition-opacity duration-300 truncate w-full relative z-10">in/dreamsync-creations</div>
          </motion.a>

          <motion.a
            href="https://www.instagram.com/dreamsync_creations?igsh=MXB4YzJ1ZXVvOTd4bg=="
            target="_blank" rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="group relative bg-[#fcfcfc] p-8 rounded-[2rem] border border-gray-100/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.2)] hover:border-pink-100 transition-all duration-300 overflow-hidden flex flex-col items-center text-center"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-pink-400 to-rose-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20"></div>
            <div className="w-14 h-14 rounded-[1rem] bg-white shadow-sm border border-gray-50 text-pink-500 flex items-center justify-center shrink-0 mb-6 group-hover:bg-gradient-to-br group-hover:from-pink-500 group-hover:to-rose-500 group-hover:text-white transition-colors duration-300 relative z-10">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 relative z-10">Instagram</h4>
            <div className="text-gray-500 text-sm font-medium transition-opacity duration-300 truncate w-full relative z-10">@dreamsync_creations</div>
          </motion.a>
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
            <a href="https://www.linkedin.com/in/dreamsync-creations" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/dreamsync_creations?igsh=MXB4YzJ1ZXVvOTd4bg==" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-sm hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
      }}
      className="bg-[#fcfcfc] flex flex-col items-center text-center relative px-5 py-4 md:px-6 md:py-5 rounded-[1.75rem] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100/80 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] hover:border-blue-200 transition-all duration-500 group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 z-0"></div>

      <motion.div
        whileHover={{ scale: 1.15, rotate: 10 }}
        className="w-14 h-14 rounded-[1rem] bg-white shadow-sm border border-gray-50 text-blue-600 flex items-center justify-center text-2xl mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 relative z-10"
      >
        {icon}
      </motion.div>
      <h4 className="text-xl font-bold text-gray-900 mb-1.5 tracking-tight relative z-10">{title}</h4>
      <p className="text-gray-500 text-base leading-snug relative z-10 group-hover:text-gray-700 transition-colors">{desc}</p>
    </motion.div>
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
