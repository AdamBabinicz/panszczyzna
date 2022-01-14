import React from "react";
import styled from "styled-components";
import blog1 from "../assets/9.jpg";
import blog2 from "../assets/10.jpg";
import blog3 from "../assets/11.jpg";
import { Projects } from "./Data";
import { FaLink } from "react-icons/fa";
import { GoBook } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

export default function Blogs() {
  const images = [blog1, blog2, blog3];

  return (
    <Section id="imperium">
      <div className="title">
        <h2>Czy Polska była imperium kolonialnym?</h2>
        <h5>
          <em>
            "Wierz mi i wiedz, że poza arystokracją nie ma w Polsce nic: ani
            zdolności, ani światłych umysłów, ani poświęcenia. Nasz trzeci stan
            to bzdura; nasi chłopi to maszyny. My tylko stanowimy Polskę."
          </em>
        </h5>
        <p>Zygmunt Krasiński - poeta</p>
      </div>
      <div className="blogs">
        {/* {images.map((img, index) => {
          return (
            <div className="blog" key={index}>
              <img src={img} alt="Blog Image" />
              <div className="data">
                <h6>31 Jan, 2021</h6>
                <h4>Rightmove Now Offering Click to Purchase Option</h4>
                <p>
                  Rightmove is now offering an option that enables buyers of
                  selected commercial properties the option to submit offers and
                  digitally exchange contracts online.
                </p>
              </div>
            </div>
          );
        })} */}

        {Projects &&
          Projects.map((project, index) => (
            <div key={index}>
              <div
                className="blog"
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.thumbnail} alt={project.title} />
                {/* <SlantedCard /> */}
                {/* </div>
              <div> */}
                <h2>{project.title}</h2>
                <div className="para">
                  {project.tags &&
                    project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex}>{tag}</span>
                    ))}
                </div>
                <p>{project.paragraph}</p>
                <div className="data">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GoBook />
                    <span>
                      <BsArrowRight />
                    </span>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink />
                    <span>{project.projectlinkText}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 4rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
  }
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* gap: 2rem; */

    .blog {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-direction: column;
      background: rgba(0, 0, 0, 0.3);
      border-bottom: 0.5rem solid transparent;
      transition: all 0.4s ease-in-out;
      padding: 0 1rem;

      &:hover {
        border-color: var(--primary-color);
      }

      img {
        max-width: 99%;
        height: 60vh;
        object-fit: cover;
      }

      .para {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;

        span {
          margin-bottom: 0.5rem;
          background: #8e213c;
          display: inline-block;
          padding: 7px;
          border-radius: 5px;
          font-size: 14px;
          margin-right: 1rem;

          p {
            font-size: 0.9rem;
            font-weight: 100;
            text-align: center;
          }
        }
      }
      .data {
        padding: 1rem;
        gap: 1rem;
        display: flex;

        a {
          text-decoration: none;
          color: #fff;

          svg {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 1rem;

    .title {
      h2 {
        font-size: 2.1rem;
        color: var(--primary-color);
      }
    }
    .blogs {
      gap: 2rem;
      grid-template-columns: 1fr;

      .blog {
        img {
          margin: 1rem 0;
        }
      }
    }
  }
`;
