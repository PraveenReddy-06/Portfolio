import data from "../data/data.jsx";


const Skills = () => {
  return (
    <section className="container-custom ">

      <h2 className="heading">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-3">
        
        {data.map((section) => ( 
        <div key={section.category} className="card">           
            
          <h3 className="px-1 py-3 text-center font-bold">
            {section.category}
          </h3>

          {section.skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="skill-row">
                <Icon />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </div>
        ))}
      </div>     
    </section>
  );
};

export default Skills;
