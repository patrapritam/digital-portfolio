const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio to showcase my work and skills using React and Tailwind.',
      link: 'https://github.com/yourgithub/portfolio'
    },
    {
      title: 'E-commerce App',
      description: 'Built a full-stack e-commerce website with shopping cart, payment gateway, and admin panel.',
      link: 'https://github.com/yourgithub/ecommerce-app'
    },
    {
      title: 'Chat App',
      description: 'Real-time chat application using Socket.io and Node.js backend.',
      link: 'https://github.com/yourgithub/chat-app'
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectList.map((proj, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-3">{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
