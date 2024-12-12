import React from "react";
// import "./index.css"; // Global styles
import "./GalleryPreview.css"; // Additional styles for gallery preview

const GalleryPreview = () => {
  const installations = [
    {
      id: 1,
      title: "Residential Installation",
      description: "A solar setup designed for homes, reducing electricity bills by 80%.",
      image: "install.jpg",
    },
    {
      id: 2,
      title: "Commercial Installation",
      description: "Large-scale solar installation for businesses to ensure sustainable energy.",
      image: "solargrid.jpg",
    },
    {
      id: 3,
      title: "Church Installation",
      description: "Solar systems optimized for uninterrupted power during services.",
      image: "church.jpeg",
    },
    {
      id: 4,
      title: "Industrial Installation",
      description: "Customized industrial solar solutions for high energy consumption facilities.",
      image: "enterprise.jpeg",
    },
  ];

  return (
    <section className="gallery-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        <h2 className="primaryText">Our Solar Installations</h2>
        <p className="secondaryText">
          Explore some of our recent solar installations and see the difference
          we make.
        </p>
        <div className="gallery-preview-grid">
          {installations.map((install) => (
            <div className="gallery-item" key={install.id}>
              <img
                src={install.image}
                alt={install.title}
                className="gallery-image"
              />
              <h3 className="orangeText">{install.title}</h3>
              <p className="secondaryText">{install.description}</p>
            </div>
          ))}
        </div>
        <button
          className="button"
          onClick={() => (window.location.href = "/gallery")}
        >
          View Full Gallery
        </button>
      </div>
    </section>
  );
};

export default GalleryPreview;
