const ContactSection = () => {
  return (
    <section className="px-6 py-16 bg-[#0B0B0B] text-white">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-10">
          {/* Top Menu Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-lg">
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

          {/* Text Below Menu */}
          <div>
            <p className="text-3xl lg:text-4xl font-light leading-relaxed mb-4">
              For any collaborative projects or enquiries feel free to connect
              with us.
            </p>
            <p className="text-2xl text-white">vayuz.com</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-5xl font-bold mb-8 text-right">
            Connect
            <br />
            With Us
          </h2>
          <form className="space-y-6">
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
              className="mt-4 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white font-semibold float-right"
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
