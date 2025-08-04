// src/components/FeaturesSection/FeaturesSection.jsx

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import featureImg from "../assets/images/feature-image.jpg"; // Replace with actual path

const services = [
  {
    title: "Flutter App Development",
    description:
      "Unlock endless possibilities with Flutter App Development. Build beautiful, high-performance applications for any platform - faster and easier than ever before. Ready to revolutionize your app experience?",
    linkText: "Let’s get started today!",
  },
  {
    title: "UI/UX Design",
    description:
      "Deliver seamless, engaging experiences with cutting-edge UI/UX design tailored for your audience and goals. From wireframes to final prototypes, we design with purpose.",
    linkText: "Design your vision with us!",
  },
  {
    title: "Customization & Integration",
    description:
      "Tailor software to your business needs and integrate third-party services smoothly to streamline operations and boost productivity.",
    linkText: "Customize your workflow now!",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Ensure your product works flawlessly with our comprehensive QA and testing services—functional, performance, security, and more.",
    linkText: "Secure your success today!",
  },
  {
    title: "Maintenance & Support",
    description:
      "Keep your applications running smoothly with our dedicated maintenance and support services, ensuring reliability and uptime.",
    linkText: "Stay worry-free with us!",
  },
  {
    title: "Consulting & Training",
    description:
      "Empower your team and optimize your processes with expert consulting and training services tailored to your tech stack.",
    linkText: "Book a consultation today!",
  },
  {
    title: "Migration & Upgrades",
    description:
      "Seamlessly move to modern platforms or upgrade your existing systems with zero downtime and full data integrity.",
    linkText: "Upgrade with confidence!",
  },
];

const FeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-[#0B0B0B] text-white">
      {/* Top Titles */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">Our Dynamic Services Suite!</h2>
        <p className="text-xl text-gray-300 mb-3">
          Embrace Innovation: Let’s Create Together!
        </p>
        <p className="text-gray-400">
          Step into innovation! Explore our range of services and let’s create
          something extraordinary together.
          <br />
          Your vision, our expertise. Let’s begin!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => toggleIndex(index)}
              className="cursor-pointer border-b border-gray-700 pb-4"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </div>

              {/* Accordion Content */}
              {openIndex === index && service.description && (
                <p className="text-gray-400 text-base mt-2">
                  {service.description}
                  <span className="text-cyan-400 underline cursor-pointer hover:text-cyan-300">
                    {service.linkText}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2">
          <img
            src={featureImg}
            alt="Features visual"
            className="rounded-lg shadow-lg w-full h-fixed object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
