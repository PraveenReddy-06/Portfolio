import leetcode from "../images/leetcode.jpeg";
import github from "../images/github.jpeg";
import linkedin from "../images/linkedin.jpg";

const Proflink = () => {
  return (
    
    <section className="container-custom">
      <h2 className="heading">
        Professional Links
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-10 mt-3">

        <div className="flex items-center gap-4">
          <img
            className="icons"
            src={leetcode}
            alt="LeetCode"
          />
          <a className="link" href="https://leetcode.com/u/KL2400032662/" target="_blank" rel="noopener noreferrer">
            <span>LeetCode</span>
          </a>
        </div>

        <p className="sm:col-span-2 lg:col-span-3 text-sm leading-relaxed">
          150+ Pattern-Based Problems Solved across Two-Pointers, Sliding Window, Binary Search & More
        </p>

        <div className="flex items-center gap-4">
          <img
            className="icons"
            src={github}
            alt="GitHub"
          />
          <a className="link" href="https://github.com/PraveenReddy-06" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
          </a>
        </div>

        <p className="sm:col-span-2 lg:col-span-3 text-sm leading-relaxed">
          Developer workspace featuring full-stack applications, backend systems, small projects, and a curated collection of LeetCode solutions for continuous improvement.
        </p>

        <div className="flex items-center gap-4">
          <img
            className="icons"
            src={linkedin}
            alt="LinkedIn"
          />
          <a className="link" href="https://www.linkedin.com/in/praveen-maramreddy-000b11374/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="sm:col-span-2 lg:col-span-3 text-sm leading-relaxed">
          Professional platform highlighting achievements, hackathons, certifications, and active engagement in the tech community.
        </p>

      </div>
    </section>

  );
};

export default Proflink;
