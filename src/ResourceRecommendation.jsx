import React from "react";
import { BookOpen, Video, Code, Star } from "lucide-react";

const ResourceRecommendation = () => {
  const recommendations = [
    {
      title: "Advanced MongoDB Aggregation",
      source: "MongoDB University",
      type: "tutorial",
      relevance: "Based on your recent work with database queries",
      url: "#",
      icon: BookOpen,
      difficulty: "Intermediate",
    },
    {
      title: "Building RESTful APIs with Express",
      source: "freeCodeCamp",
      type: "video",
      relevance: "Recommended for your API development skills",
      url: "#",
      icon: Video,
      difficulty: "Beginner",
    },
    {
      title: "Authentication Best Practices",
      source: "MDN Web Docs",
      type: "documentation",
      relevance: "Related to your current project focus",
      url: "#",
      icon: Code,
      difficulty: "Advanced",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full p-8">
        <div className="w-full bg-white">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">
              Personalized Learning Recommendations
            </h2>
            <p className="text-gray-600 text-lg">
              Based on your recent progress and learning goals
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="max-w-3xl w-full grid gap-6 mb-8">
              {recommendations.map((item, index) => (
                <div
                  key={index}
                  className="w-full bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="p-4 bg-blue-100 rounded-lg">
                        <item.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {item.difficulty}
                          </span>
                        </div>
                        <p className="text-base text-gray-700 mb-1">
                          Source: {item.source}
                        </p>
                        <p className="text-base text-gray-600">
                          {item.relevance}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < 4
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">
                        View Resource
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full bg-blue-50 p-6">
            <h3 className="text-xl font-semibold mb-3">
              Why these recommendations?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              These resources are selected based on your current skill level,
              learning style, and recent progress in the platform. They're
              designed to help you improve in areas where you've shown interest
              or need additional practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceRecommendation;
