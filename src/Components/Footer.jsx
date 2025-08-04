// src/components/Footer/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-start gap-10 text-lg">
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
