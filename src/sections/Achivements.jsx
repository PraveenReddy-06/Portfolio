const achievementsData = [
  {
    title: "Global Certifications",
    certifications: [
      "Oracle Cloud Infrastructure – Generative AI Professional",
      "GitHub Copilot – Microsoft"
    ],
  },
  {
    title: "Course Certifications",
    certifications: [
      "Tailwind CSS Crash Course",
      "IBM Machine Learning",
      "University of Michigan – Database Design & SQL"
    ],
  },
  {
    title: "Hackathons",
    certifications: [
      "Smart India Hackathon Participant",
      "Kharagpur Data Science Hackathon",
      "BITS Pilani AI Challenge"
    ],
  },
  {
    title: "Workshops",
    certifications: [
      "BITS Pilani AI Workshop"
    ]
  },
];

const Achievements = () => {
  return (
    <section>
      <div className="container-custom">
        
        <h2 className="heading py-5">
          Certifications & Achievements
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievementsData.map((item) => (
            <div key={item.title} className="card">

              <div>
                <h3 className="text-lg font-semibold mb-4">
                  {item.title}
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
                  {item.certifications.map((cert) => ( <li key={cert}> {cert} </li>))}
                </ul>
              </div>

              <a href="#" className="mt-6 text-sm font-medium underline hover:text-white" >More Details →</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
