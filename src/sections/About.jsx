import { memo } from 'react';

const About  = () => {
  return (
    <section className="container-custom">
      <h1 className="heading"> About  Me </h1>

      <p className="tracking-wide">I am a Computer Science undergraduate specializing in Java, Spring Boot, and database-driven application development, with a strong foundation in <span className="font-bold">Data Structures and Algorithms.</span> I enjoy writing code with intention and prioritize understanding the underlying logic and architecture behind the systems I build.
          I actively strengthen my problem-solving abilities through consistent practice, having solved<span className="font-bold"> 150+</span> pattern-based LeetCode problems across core algorithmic domains. My development approach focuses on writing clean, maintainable code while continuously deepening my technical expertise.
          I am particularly interested in backend engineering and artificial intelligence, and I have maintained strong academic performance throughout my education, reflecting discipline and a commitment to mastering computer science fundamentals. I aspire to contribute to impactful software solutions while evolving as an engineer.
      </p>
    </section>
  );
};

export default memo(About);