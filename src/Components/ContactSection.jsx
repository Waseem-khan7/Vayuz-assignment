const ContactSection = () => {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-[#0B0B0B] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        {/* Left Side */}
        <div className="space-y-8 sm:space-y-10">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-base sm:text-lg">
            {["Events", "Gen AI", "Careers", "Case study", "SME Talks"].map(
              (item, i) => (
                <span
                  key={i}
                  className="hover:text-cyan-400 cursor-pointer transition-colors"
                >
                  {item}
                </span>
              )
            )}
          </div>
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-4">
              For any collaborative projects or enquiries feel free to connect
              with us.
            </p>
            <p className="text-xl sm:text-2xl text-white">vayuz.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 text-center lg:text-right">
            Connect
            <br />
            With Us
          </h2>
          <form className="space-y-5 sm:space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none py-2 text-white placeholder-gray-400"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-4 px-6 sm:px-8 py-2 sm:py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white font-semibold float-right"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
