import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, icon, description }) => {
  return (
    <div className="card p-4 mb-5 border bg-white min-h-[280px]">
      {icon ? (
        <img
          src={icon}
          width={54}
          height={54}
          alt={title}
          className="card-icon"
        />
      ) : (
        <img
          src="https://api.iconify.design/material-symbols-light:lightbulb-circle.svg?color=%234682D7"
          width={54}
          height={54}
          alt={title}
          className="card-icon"
        />
      )}
      <p className="text-base font-normal">{description}</p>
    </div>
  );
};

export default Card;
