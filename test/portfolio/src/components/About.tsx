
import React from 'react';
import { Code, Palette, Zap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Expert in React, Node.js, Python, and modern web technologies"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences with modern design principles"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "3D & Animation",
      description: "Bringing websites to life with Three.js and advanced animations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Award Winner",
      description: "Recognized for excellence in hackathons and coding competitions"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with 5+ years of experience creating innovative digital solutions. 
            I specialize in modern web technologies and love bringing creative ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Started as a curious student fascinated by technology, I've evolved into a full-stack developer 
            who believes in the power of clean code and beautiful design. My experience spans from building 
            enterprise applications to creating interactive 3D experiences. I'm always excited to take on 
            new challenges and push the boundaries of what's possible on the web.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
