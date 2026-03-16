import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "MedXprts",
    category: "Agentic AI · Healthcare Automation",
    description:
      "Multi-agent LLM platform that ingests 1,500+ page patient documents and autonomously generates 10-section Life Care Plan reports for a US medicolegal client. Reduced delivery from 3–4 days to under 1 hour with 95% accuracy vs manual baseline. Handles 400+ monthly workflows on AWS.",
    tools: "LangChain, FastAPI, AWS, Snowflake, MongoDB",
    image: "/images/medxprts.png",
  },
  {
    title: "CloudPilot",
    category: "Multi-Cloud Cost Intelligence SaaS",
    description:
      "AI-powered cost intelligence platform that aggregates spend across AWS, GCP, and Azure into a unified dashboard. Uses LLM agents for anomaly detection, cost forecasting, and automated optimization recommendations.",
    tools: "Python, FastAPI, LangChain, Snowflake, Vertex AI",
    image: "/images/cloudpilot.png",
    link: "https://github.com/Samarth0211/CloudPilot",
  },
  {
    title: "FeeViewer",
    category: "System Reverse Engineering & Automation",
    description:
      "Reverse-engineered a legacy fee-schedule system and built an automated CLI pipeline with COM threading. Achieved 10x processing speedup, eliminating hours of manual data extraction for the operations team.",
    tools: "Python, AWS, CLI, COM Threading",
    image: "/images/feeviewer.png",
  },
  {
    title: "myrashifal.in",
    category: "Freemium Web Application",
    description:
      "Full-stack Vedic astrology platform serving daily horoscopes, Kundali generation, and personalized predictions. Live in production with a growing freemium user base.",
    tools: "Full-Stack, Vedic Astrology Engine",
    image: "/images/myrashifal.png",
    link: "https://myrashifal.in",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
