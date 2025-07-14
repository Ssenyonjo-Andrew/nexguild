
import React, { useState } from 'react';
import { Play, Clock, Users, Star } from 'lucide-react';

const Demo = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const demoVideos = [
    {
      id: 1,
      title: "Complete System Overview",
      description: "Comprehensive walkthrough of our smart biogas monitoring system, including hardware components and software features.",
      duration: "5:30",
      thumbnail: "/api/placeholder/640/360",
      category: "Overview",
      viewers: "2.1K"
    },
    {
      id: 2,
      title: "Mobile Dashboard Demo",
      description: "Detailed demonstration of our mobile application interface, real-time monitoring features, and alert systems.",
      duration: "4:15",
      thumbnail: "/api/placeholder/640/360",
      category: "Mobile App",
      viewers: "1.8K"
    },
    {
      id: 3,
      title: "Installation Process",
      description: "Step-by-step installation guide showing how our sensors integrate with existing biogas systems.",
      duration: "7:45",
      thumbnail: "/api/placeholder/640/360",
      category: "Installation",
      viewers: "1.5K"
    },
    {
      id: 4,
      title: "School Implementation Case Study",
      description: "Real-world case study of our biogas monitoring system deployed at Green Valley Academy.",
      duration: "6:20",
      thumbnail: "/api/placeholder/640/360",
      category: "Case Study",
      viewers: "1.2K"
    },
    {
      id: 5,
      title: "Hospital Energy Management",
      description: "How Riverside Medical Center uses our system to manage their biogas energy production and consumption.",
      duration: "5:55",
      thumbnail: "/api/placeholder/640/360",
      category: "Case Study",
      viewers: "980"
    },
    {
      id: 6,
      title: "Rural Farm Success Story",
      description: "Farmer testimonial and system performance at Johnson Family Farm's livestock biogas facility.",
      duration: "4:40",
      thumbnail: "/api/placeholder/640/360",
      category: "Case Study",
      viewers: "1.3K"
    },
    {
      id: 7,
      title: "Advanced Analytics Features",
      description: "Deep dive into our data analytics platform, predictive maintenance, and optimization algorithms.",
      duration: "8:10",
      thumbnail: "/api/placeholder/640/360",
      category: "Analytics",
      viewers: "875"
    },
    {
      id: 8,
      title: "Remote Monitoring Capabilities",
      description: "Demonstration of 24/7 remote monitoring, alert systems, and emergency response protocols.",
      duration: "5:25",
      thumbnail: "/api/placeholder/640/360",
      category: "Monitoring",
      viewers: "1.1K"
    }
  ];

  const categories = ["All", "Overview", "Mobile App", "Installation", "Case Study", "Analytics", "Monitoring"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVideos = activeCategory === "All" 
    ? demoVideos 
    : demoVideos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Product Demonstrations
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive video library showcasing the power and versatility 
            of Nexus Guild's smart biogas monitoring systems in real-world applications.
          </p>
        </div>
      </section>

      {/* Video Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <button 
                      onClick={() => setSelectedVideo(video)}
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white transition-all duration-200 group-hover:scale-110"
                    >
                      <Play className="h-8 w-8 text-green-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {video.viewers} views
                    </div>
                    <button 
                      onClick={() => setSelectedVideo(video)}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say About Our Demos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback from customers who experienced our demonstration process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The installation demo was incredibly thorough. We felt confident in our decision 
                after seeing exactly how the system would integrate with our existing setup."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Dr. Jada Francis</div>
                <div className="text-gray-600">Mukono General Hospital</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The mobile app demonstration convinced us this was the right choice. 
                The interface is intuitive and the real-time data is invaluable."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Chelimo </div>
                <div className="text-gray-600">Uganda Christian University</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "Seeing the case studies from other farms similar to ours gave us the confidence 
                to move forward. The ROI projections were spot on."
              </p>
              <div>
                <div className="font-semibold text-gray-900">Jennifer Wilson</div>
                <div className="text-gray-600">Wilson Dairy Farm</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for a Personalized Demo?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Schedule a one-on-one demonstration tailored to your specific biogas monitoring 
            needs. Our experts will show you exactly how our system can benefit your operation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ande.ssenyonjo@gmail.com?subject=Demo Request"
              className="bg-white text-green-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg"
            >
              Schedule Live Demo
            </a>
            <a
              href="/contact"
              className="bg-green-800 text-white px-8 py-4 rounded-full hover:bg-green-900 transition-all duration-200 font-semibold text-lg"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal (simplified placeholder) */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title}</h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p>Video Player Placeholder</p>
                <p className="text-sm opacity-75">Duration: {selectedVideo.duration}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{selectedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demo;
