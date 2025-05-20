import { FaBook } from "react-icons/fa";

const education = [
  { year: "2021-2025", degree: "Computer Science", university: "Technical University of Munich" },
];

export const Studium = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold flex items-center gap-2">
        <FaBook /> Studium
      </h2>
      <div className="mt-8 space-y-4">
        {education.map((item) => (
          <div key={item.year} className="border-l-2 border-blue-500 pl-4">
            <p className="font-bold">{item.year}</p>
            <p>{item.degree} - {item.university}</p>
          </div>
        ))}
      </div>
    </section>
  );
};