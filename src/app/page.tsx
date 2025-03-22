import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Genki Kimura</h1>
            <div className="space-x-6">
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-5xl font-bold">Welcome to My Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              I&apos;m a passionate developer focused on creating elegant
              solutions to complex problems. I specialize in web development and
              love building modern applications.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-600 mb-4">
                Description of your first project goes here.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Demo
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold">Frontend</h3>
              <p className="text-gray-600">React, Next.js, TypeScript</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold">Backend</h3>
              <p className="text-gray-600">Node.js, Express, Python</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold">Database</h3>
              <p className="text-gray-600">PostgreSQL, MongoDB</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-bold">Tools</h3>
              <p className="text-gray-600">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            I&apos;m always open to new opportunities and collaborations.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/gutto79"
              className="text-3xl text-gray-700 hover:text-blue-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/genki-kimura"
              className="text-3xl text-gray-700 hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-3xl text-gray-700 hover:text-blue-600"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
