const skills = [
  { name: 'Python', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'TensorFlow', level: 75 },
  { name: 'Java', level: 70 },
  { name: 'SQL', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'OpenCV', level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        My Skills
      </h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-lg font-medium">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-gray-700/50 p-6 rounded-xl text-center hover:bg-gray-700 transition">
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-gray-300">React, Flask, HTML/CSS, JavaScript</p>
        </div>
        <div className="bg-gray-700/50 p-6 rounded-xl text-center hover:bg-gray-700 transition">
          <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
          <p className="text-gray-300">TensorFlow, CNN, OpenCV, Scikit-learn</p>
        </div>
        <div className="bg-gray-700/50 p-6 rounded-xl text-center hover:bg-gray-700 transition">
          <h3 className="text-xl font-bold mb-2">Data Science</h3>
          <p className="text-gray-300">Pandas, Matplotlib, Data Visualization</p>
        </div>
        <div className="bg-gray-700/50 p-6 rounded-xl text-center hover:bg-gray-700 transition">
          <h3 className="text-xl font-bold mb-2">Tools</h3>
          <p className="text-gray-300">Git, AWS, VS Code, Jupyter</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;