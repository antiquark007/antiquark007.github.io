
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Youtube, FileText } from 'lucide-react';

const Social = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={32} />,
      url: "https://github.com",
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-600/20"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600/20"
    },
    {
      name: "Twitter",
      icon: <Twitter size={32} />,
      url: "https://twitter.com",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-600/20"
    },
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      url: "https://instagram.com",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-600/20"
    },
    {
      name: "YouTube",
      icon: <Youtube size={32} />,
      url: "https://youtube.com",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-600/20"
    },
    {
      name: "Medium",
      icon: <FileText size={32} />,
      url: "https://medium.com",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-600/20"
    }
  ];

  const mediumPosts = [
    {
      title: "Building Modern Web Applications with React and Three.js",
      excerpt: "Explore how to integrate 3D graphics into your React applications for stunning user experiences...",
      readTime: "8 min read",
      date: "Dec 15, 2023"
    },
    {
      title: "The Future of Web Development: AI Integration",
      excerpt: "Discover how artificial intelligence is revolutionizing the way we build and interact with web applications...",
      readTime: "12 min read",
      date: "Dec 10, 2023"
    },
    {
      title: "Optimizing Performance in Large-Scale React Applications",
      excerpt: "Learn advanced techniques for maintaining high performance in complex React applications...",
      readTime: "6 min read",
      date: "Dec 5, 2023"
    }
  ];

  return (
    <section id="social" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Connect & Follow
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's connect and share ideas about technology, development, and innovation
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 transition-all duration-300 hover:scale-105 ${social.bgColor}`}
            >
              <div className={`text-white transition-colors duration-300 ${social.color} mb-3`}>
                {social.icon}
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        {/* Medium Articles */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">Latest Articles</h3>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
            >
              View All on Medium
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mediumPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-gray-300">GitHub Stars</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">15K+</div>
            <div className="text-gray-300">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">100+</div>
            <div className="text-gray-300">Articles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">25+</div>
            <div className="text-gray-300">Open Source Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
