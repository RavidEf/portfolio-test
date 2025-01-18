import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Navbar from '../components/Navbar';

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              Portfolio
            </h1>
            <p className="description">
              This is the protfolio website of Ravid Efroni, welcome, humans.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Link
                  href="https://bench-my-salary.vercel.app/"
                  target="_blank"
                >
                  <img src="/chitchat.png" className="portfolio-image" alt="" />
                </Link>

                <h4 className="portfolio-name">Bench My Salary</h4>
                <div className="portfolio-category">
                  Web App - salary comparision for developers
                </div>
              </div>
              <div className="portfolio-item">
                <Link href="https://bsky-ranker.vercel.app/" target="_blank">
                  <img src="/kajian.jpg" className="portfolio-image" alt="" />
                </Link>
                <h4 className="portfolio-name">Bluesky ranker App</h4>
                <div className="portfolio-category">Web App Socail</div>
              </div>
              <div className="portfolio-item">
                <Link href="https://journaly.netlify.app/" target="_blank">
                  <img src="/kajian.jpg" className="portfolio-image" alt="" />
                </Link>
                <h4 className="portfolio-name">The Journaly App</h4>
                <div className="portfolio-category">Web App feel good app</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
