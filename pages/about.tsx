import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              Originally from Israel moved to Vienna to study business and
              stayed for longer than I expected. I like everything fitness,
              tried many different types of workouts, some F1 if it does not get
              too boring. I have two cats which I trained how to sit down and
              give a paw before they are allowed to eat their meals. In my free
              time I obv like traveling to new cities, snowboarding, cycling,
              running. I like reading business books (weird right?), I like
              talking startups, new product ideas, marketing, UX and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
