import educationData from "../data/edudata.jsx";


const Education = () => {
  return (
    <section>

      <div className="container-custom">
        <h1 className="heading">Education</h1>

        <div className="relative grid grid-cols-2 gap-8 py-10"> {/*relative-absoulte says -“for line Use THIS box as the coordinate system above the grid”*/}

          <span className="absolute left-1/2 top-5 w-0.5 -translate-x-1/2 h-full bg-highlight/40"></span>

          {educationData.map((details,i) => (
            <div key={details.id} className="contents">{
              i%2 === 0 ? (
                <>
                  <div className="card relative text-left"> 
                    <span className="card-dot -right-6"></span> 
                    <h3 className="text-sm md:text-xl font-bold text-right " >{details.duration}</h3>
                    <p >{details.degree}</p>
                    <p>{details.institute}</p>
                    <p>{details.location}</p> 
                    <p className="font-bold">{details.result.label}: {details.result.value}</p>
                  </div>
                  <div></div>
                </>
              )
              :
              (
                <>             
                  <div></div>
                  <div className="card relative text-right"> 
                    <span className="card-dot -left-6"></span> 
                    <h3 className="font-bold text-left">{details.duration}</h3>
                    <p>{details.degree}</p>
                    <p>{details.institute}</p>
                    <p>{details.location}</p> 
                    <p className="font-bold">{details.result.label}: {details.result.value}</p>
                  </div>
                </>
              )
            }</div>
          )
          )
        }
          
        </div>
      </div>

    </section>
  );
};

export default Education;
