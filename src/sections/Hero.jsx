import me from "../images/me.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center">

      <div className="container-custom">
        <div className=" grid md:grid-cols-3 gap-12  items-start">
          
          <div className="relative flex justify-center md:justify-start">
            <img src={me} alt="Praveen Maramreddy"className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full hover:scale-105 transition"></img>
          </div>

          <div className="md:col-span-2 ">
            <h1 className="text-4xl md:text-6xl tracking-tight leading-tight">Hi, I'm</h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-highlight">Praveen Maramreddy</h2>
            <p className="mt-4 text-gray-400">
             CS Undergraduate | Java Developer | Full-Stack Enthusiast | Data Structures & Algorithms</p>
            <div className="flex items-center gap-10 py-6">             
                <a className="pill">Resume</a>             
                <a className="pill">See My Work</a>
            </div>           
          </div>
          
          <div className="col-span-3 col-start-2  text-1xl ">
            <h1>─────── L E A R N • C O D E • G R O W  ───────</h1>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;