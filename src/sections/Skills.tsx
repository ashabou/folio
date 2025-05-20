const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
];

export const Skills = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="mt-8 space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <p>{skill.name}</p>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};