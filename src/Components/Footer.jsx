// src/components/Footer/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap justify-start gap-4 sm:gap-10 text-base sm:text-lg text-center sm:text-left">
        {["About", "Insights", "Community", "Privacy & Policies"].map(
          (link, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              {link}
            </a>
          )
        )}
      </div>
    </footer>
  );
};

export default Footer;
