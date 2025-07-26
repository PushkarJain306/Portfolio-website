import { useState } from 'react';

// Import project images
import brainTumorImg from '../assets/images/brain-tumor.jpg';
import plantDiseaseImg from '../assets/images/plant-disease.jpg';
import wildlifeImg from '../assets/images/wildlife.jpg';
import emotionDetectorImg from '../assets/images/emotion-detector.jpg';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Brain Tumor Detection",
      description: "Deep learning model using CNN to detect brain tumors from MRI scans with 80%+ accuracy.",
      technologies: ["Python", "TensorFlow", "CNN", "OpenCV", "Flask"],
      image: brainTumorImg,
      link: "https://github.com/PushkarJain306/Brain-Tumor-Detection-Site"
    },
    {
      title: "Plant Disease Detection",
      description: "CNN model to classify plant leaf diseases with 85%+ accuracy using advanced image preprocessing.",
      technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],
      image: plantDiseaseImg,
      link: "https://github.com/PushkarJain306/Plant-Disease-Detection"
    },
    {
      title: "Wildlife Site",
      description: "Responsive and interactive website showcasing wildlife with modern frontend technologies.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: wildlifeImg,
      link: "https://github.com/PushkarJain306/Wildlife-Site"
    },
    {
      title: "Emotion Detector App",
      description: "AI-powered application detecting human emotions from real-time video input.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      image: emotionDetectorImg,
      link: "https://github.com/PushkarJain306/Emotion-Detector-App"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        My Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-64">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: hoveredProject === index ? 0.7 : 1 }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-500 ${hoveredProject === index ? 'opacity-90' : 'opacity-70'}`} />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;