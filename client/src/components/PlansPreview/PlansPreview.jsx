import React from "react";
// import "./index.css";
import "./PlansPreview.css";

const PlansPreview = () => {
  const plans = [
    {
      id: 1,
      name: "Starter Plan",
      image: "r1.png",
      description: "Ideal for basic needs like charging phones and small lights.",
      powerCapacity: "500W",
      duration: "5 hours for 5 phones",
      summary: "Perfect for small-scale use.",
    },
    {
      id: 2,
      name: "Home Plan",
      image: "r2.png",
      description: "Power for basic household appliances like fans and TVs.",
      powerCapacity: "2kW",
      duration: "4 hours for a fan, TV, and lights.",
      summary: "Reliable power for everyday home use.",
    },
    {
      id: 3,
      name: "Business Plan",
      image: "r3.png",
      description:
        "Supports medium businesses with energy for computers and lighting.",
      powerCapacity: "5kW",
      duration: "6 hours for computers, lighting, and other equipment.",
      summary: "Power solutions for small to medium businesses.",
    },
    {
      id: 4,
      name: "Premium Plan",
      image: "r1.png",
      description:
        "Designed for high power demands in offices or large homes.",
      powerCapacity: "10kW",
      duration: "10 hours for multiple appliances and devices.",
      summary: "Advanced energy for large-scale needs.",
    },
  ];

  return (
    <section className="plans-preview paddings wrapper">
      <div className="innerWidth flexColStart">
        <h2 className="primaryText">Our Solar Plans</h2>
        <p className="secondaryText">
          Choose from our range of solar installation plans tailored to your
          energy needs.
        </p>
        <div className="plans-grid">
          {plans.map((plan) => (
            <div className="plan-card" key={plan.id}>
              <img src={plan.image} alt={plan.name} className="plan-image" />
              <h3 className="orangeText">{plan.name}</h3>
              <p className="secondaryText">{plan.description}</p>
              <p className="powerCapacity">Power Capacity: {plan.powerCapacity}</p>
              <p className="duration">Estimated Duration: {plan.duration}</p>
              <button
                className="buttonn"
                onClick={() => (window.location.href = `/plans/${plan.id}`)}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansPreview;
