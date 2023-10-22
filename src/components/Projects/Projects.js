import React from "react";
import "./projects.css";
import Carousel from "better-react-carousel";

function Projects() {
  return (
    <div className="projects" id="section-3">
      <div className="projectsTitleContainer">
        <div className="projectsTitle">Projects</div>
        <div className="projectsCarousel">
          <Carousel cols={2} rows={1} gap={10}>
            <Carousel.Item className="carouselItem">
              <img width="100%" src="https://picsum.photos/800/600?random=1" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://picsum.photos/800/600?random=2" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://picsum.photos/800/600?random=3" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://picsum.photos/800/600?random=4" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="https://picsum.photos/800/600?random=4" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
