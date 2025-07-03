
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Three.js", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "GraphQL", level: 78 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Docker", level: 82 },
        { name: "AWS", level: 75 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 88 }
      ]
    }
  ];

  const achievements = [
    "🏆 Winner - TechCrunch Hackathon 2023",
    "🥇 1st Place - University Coding Competition",
    "📜 AWS Certified Solutions Architect",
    "🌟 Google Developer Expert - Web Technologies",
    "📝 Published 50+ Technical Articles on Medium",
    "🎤 Speaker at 10+ Tech Conferences"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Constantly learning and evolving with the latest technologies
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Achievements & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/5"
              >
                <span className="text-2xl">{achievement.split(' ')[0]}</span>
                <span className="text-lg">{achievement.substring(achievement.indexOf(' ') + 1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
