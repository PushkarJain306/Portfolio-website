const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    duration: "July 2022 - June 2025",
    details: "CGPA: 7.65 | Relevant Coursework: Algorithms, Data Structures, Machine Learning"
  },
  {
    degree: "Intermediate (12th)",
    institution: "Dr. Virendra Swarup Education Centre, Kanpur",
    duration: "2022",
    details: "Subjects: Physics, Chemistry, Mathematics (PCM)"
  },
  {
    degree: "High School (10th)",
    institution: "Dr. Virendra Swarup Education Centre, Kanpur",
    duration: "2020",
    details: "Subjects: Science, Mathematics"
  }
];

const certifications = [
  {
    title: "Web Designing and Development",
    issuer: "Aptech Learning",
    date: "March 2023"
  },
  {
    title: "Python Programming",
    issuer: "Aptech Learning",
    date: "November 2024"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-800">
      <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Education
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((item, index) => (
          <div key={index} className="bg-gray-700/50 p-6 rounded-xl border-l-4 border-blue-500 hover:bg-gray-700 transition">
            <h3 className="text-2xl font-bold mb-1">{item.degree}</h3>
            <p className="text-lg text-gray-300 mb-2">{item.institution}</p>
            <p className="text-blue-400 mb-3">{item.duration}</p>
            <p className="text-gray-400">{item.details}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-700/50 p-8 rounded-xl max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-600/30 p-4 rounded-lg">
              <h4 className="text-xl font-semibold">{cert.title}</h4>
              <p className="text-gray-400">{cert.issuer} | {cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;