import React from "react";

interface CardProps {
  v: { [key: string]: string }[]; // Array of objects with string values
  title: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ v, title }) => {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      <ul className="card-list">
         {v.map((item, idx) => (
          <li key={idx} className="mb-6 last:mb-0"> {/* Increased spacing between items */}
            {Object.entries(item).map(([key, value]) => (
              <li key={key} className={key === 's1' ? "font-bold text-lg" : "text-base"}>
                {value}
              </li>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;