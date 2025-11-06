import React from "react";
import SiffImage from "./assets/siff.jpg";
import Sif from "./assets/tt.jpg";

function App() {
  const skills = [
    { name: "Python", icon: "🐍" },
    { name: "Scikit-learn", icon: "📚" },
    { name: "Pandas", icon: "🐼" },
    { name: "Numpy", icon: "🔢" },
    { name: "Matplotlib", icon: "📊" },
    { name: "Seaborn", icon: "🌊" },
    { name: "HTML", icon: "🌐" },
    { name: "Tailwind CSS", icon: "🎨" },
  ];

  const projects = [
    {
      name: "Credit Card Fraud Detection",
      description:
        "Detects fraudulent credit card transactions using machine learning models for secure financial operations.",
      github: "https://github.com/sifatullah05/Credit-Card-Fraud-Detection",
    },
    {
      name: "SMS Spam Classifier",
      description:
        "Classifies SMS messages as spam or legitimate using natural language processing and machine learning.",
      github: "https://github.com/sifatullah05/sms-spam-classifier",
    },
    {
      name: "Heart Disease Prediction",
      description:
        "Predicts risk of heart disease from patient data using machine learning for early intervention.",
      github: "https://github.com/sifatullah05/Heart-Disease-Prediction",
    },
    {
      name: "Car Price Prediction",
      description:
        "Estimates used car prices based on features using regression models for accurate market evaluation.",
      github:
        "https://github.com/sifatullah05/Car-Price-Prediction-ML-Regression-Project-using-Scikit-learn-",
    },
    {
      name: "Salary Prediction",
      description:
        "Predicts employee salaries using data-driven regression models to provide insights into compensation trends.",
      github: "https://github.com/sifatullah05/Salary-Prediction",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-100 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl sm:text-2xl font-bold text-blue-600">
              MD SIFATULLAH
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-600">
                Home
              </a>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gray-100 min-h-screen flex flex-col justify-center items-center px-4 pt-24 md:pt-32"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-10 md:space-y-0">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I'm <span className="text-blue-500">Sifatullah</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg">
              I’m a passionate Machine Learning Engineer building predictive
              models that transform raw data into smart, scalable, and impactful
              solutions.
            </p>
            <a
              href="#projects"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              View Projects
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={Sif}
              alt="Profile"
              className="rounded-full shadow-lg w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-400 to-blue-200 text-white rounded-lg p-6 flex flex-col items-center justify-center font-semibold text-lg shadow-lg transform transition duration-300 hover:scale-105"

              >
                <span className="text-3xl mb-2">{skill.icon}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              I’m a passionate Machine Learning Engineer who loves turning data
              into smart solutions. I enjoy building predictive models,
              analyzing data, and developing intelligent systems that make real
              impact. Using Python, Scikit-learn, and modern ML tools, I focus
              on creating simple, efficient, and innovative data-driven
              solutions.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Contact Me
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={SiffImage}
              alt="siff"
              className="rounded-lg shadow-lg w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            My Projects
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between h-80"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition mt-auto text-center"
                >
                  View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-700 text-base sm:text-lg">
            Have a project or just want to say hi? Feel free to reach out!
          </p>
          <div className="space-y-3">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:mdsifatullah292@gmail.com"
                className="text-blue-600 hover:underline"
              >
                mdsifatullah292@gmail.com
              </a>
            </p>
            <p>
              🔗 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/md-sifatullah-05/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/md-sifatullah-05
              </a>
            </p>
            <p>
              🐙 GitHub:{" "}
              <a
                href="https://github.com/sifatullah05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/sifatullah05
              </a>
            </p>
            <p>
              📞 Phone:{" "}
              <a
                href="tel:+8801521767825"
                className="text-blue-600 hover:underline"
              >
                01521767825
              </a>
            </p>
            <p>
              💬 WhatsApp:{" "}
              <a
                href="https://wa.me/8801521767825"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p>© 2025 Sifatullah. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/md-sifatullah-05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sifatullah05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/"
              className="hover:text-blue-500"
            >
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
