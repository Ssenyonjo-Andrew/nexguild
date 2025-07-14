
import React from 'react';
import { Linkedin, Mail, Award, Users, Target, Heart } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Bukenya Ken",
      role: "Team Lead",
      bio: "Environmental engineer with 15+ years in renewable energy. Led multiple biogas projects across Africa and Europe.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      email: "bukenya@nexusguild.com",
      specialties: ["Biogas Systems", "Project Management", "Sustainability"]
    },
    {
      name: "Ahebwa Bob",
      role: "IoT Engineer",
      bio: " engineer specializing in IoT sensors and mobile applications. Expert in renewable energy technology.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      email: "ahebwa@nexusguild.com",
      specialties: ["IoT Development", "Mobile Apps", "Sensor Technology"]
    },
    {
      name: "Namaggwa Harriet",
      role: "Head of Research",
      bio: "Chemical Engineering. Leading researcher in biogas optimization and advanced monitoring systems.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      email: "harris@nexusguild.com",
      specialties: ["Research & Development", "Chemical Engineering", "Process Optimization"]
    },
    {
      name: "Ssendagire Baker",
      role: "VP of Operations",
      bio: "Operations expert with background in scaling renewable energy solutions across emerging markets.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      email: "baker@nexusguild.com",
      specialties: ["Operations Management", "Supply Chain", "Market Expansion"]
    },
   
    {
      name: "Ssenyonjo Andrew",
      role: "Lead Software Engineer",
      bio: "Full-stack developer focused on creating intuitive mobile and web applications for biogas monitoring.",
      image: "/api/placeholder/300/400",
      linkedin: "#",
      email: "david.kim@nexusguild.com",
      specialties: ["Software Development", "Data Analytics", "User Experience"]
    }
  ];

  const companyValues = [
    {
      icon: <Target className="h-12 w-12" />,
      title: "Innovation",
      description: "Pushing the boundaries of biogas monitoring technology to create smarter, more efficient systems."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Collaboration",
      description: "Working closely with our clients to understand their unique needs and deliver tailored solutions."
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Sustainability",
      description: "Committed to environmental responsibility and helping create a cleaner, more sustainable future."
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Excellence",
      description: "Maintaining the highest standards in product quality, customer service, and technical support."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            A diverse group of engineers, researchers, and sustainability experts 
            passionate about revolutionizing biogas monitoring technology.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2025, Nexus Guild emerged from a shared vision to make biogas 
                  monitoring more intelligent, accessible, and reliable. Our founders, 
                  Bukenya Jawadhu and Namaggwa Harriet, recognized the potential of combining 
                  advanced sensor technology with mobile applications.
                </p>
                <p>
                  What started as a research project has grown into a leading provider of 
                  smart biogas monitoring solutions, serving over 250 installations across 
                  schools, hospitals, farms, and residential properties.
                </p>
                <p>
                  Today, we continue to innovate at the intersection of renewable energy 
                  and digital technology, helping our clients optimize their biogas systems 
                  while contributing to a more sustainable future.
                </p>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To democratize access to intelligent biogas monitoring technology, 
                empowering individuals and organizations to maximize their renewable 
                energy potential while minimizing environmental impact.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where every biogas system operates at peak efficiency through 
                smart monitoring, contributing to global energy sustainability and 
                environmental preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals driving innovation in biogas monitoring technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                  <div className="w-full h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-green-600 font-semibold mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            We're always looking for passionate individuals who share our vision 
            for sustainable energy solutions. Explore career opportunities with Nexus Guild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@nexusguild.com"
              className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg"
            >
              View Open Positions
            </a>
            <a
              href="mailto:ande.ssenyonjo@gmail.com"
              className="bg-green-800 text-white px-8 py-4 rounded-full hover:bg-green-900 transition-all duration-200 font-semibold text-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
