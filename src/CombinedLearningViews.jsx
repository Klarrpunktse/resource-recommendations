import React from "react";
import {
  ChevronRight,
  Book,
  Video,
  CheckCircle,
  Clock,
  BookOpen,
  Code,
  Star,
} from "lucide-react";

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

  const LearningPathVisualizer = () => {
    const [selectedMilestone, setSelectedMilestone] = useState(null);

    // Sample data - this would come from your API
    const samplePath = {
      student: "John Doe",
      currentLevel: 2,
      targetLevel: 5,
      progress: 35,
      milestones: [
        {
          id: 1,
          title: "Basic JavaScript Fundamentals",
          status: "COMPLETED",
          resources: [
            { type: "video", title: "JavaScript Basics", duration: "45min" },
            { type: "reading", title: "JS Documentation", duration: "30min" },
          ],
        },
        {
          id: 2,
          title: "Advanced Functions",
          status: "IN_PROGRESS",
          resources: [
            { type: "video", title: "Closures Deep Dive", duration: "60min" },
            {
              type: "reading",
              title: "Functional Programming",
              duration: "45min",
            },
          ],
        },
        {
          id: 3,
          title: "Asynchronous Programming",
          status: "NOT_STARTED",
          resources: [
            { type: "video", title: "Promise Mechanics", duration: "55min" },
            { type: "reading", title: "Async/Await Guide", duration: "40min" },
          ],
        },
      ],
    };

    const getStatusColor = (status) => {
      switch (status) {
        case "COMPLETED":
          return "bg-green-500";
        case "IN_PROGRESS":
          return "bg-blue-500";
        case "NOT_STARTED":
          return "bg-gray-300";
        default:
          return "bg-gray-300";
      }
    };

    return (
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">
            Learning Path: {samplePath.student}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              Current Level: {samplePath.currentLevel}
            </div>
            <div className="text-sm">
              Target Level: {samplePath.targetLevel}
            </div>
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2"
                  style={{ width: `${samplePath.progress}%` }}
                />
              </div>
            </div>
            <div className="text-sm">{samplePath.progress}% Complete</div>
          </div>
        </div>

        {/* Milestones */}
        <div className="space-y-4">
          {samplePath.milestones.map((milestone, index) => (
            <div key={milestone.id} className="border rounded-lg">
              <div
                className="flex items-center p-4 cursor-pointer"
                onClick={() =>
                  setSelectedMilestone(
                    selectedMilestone === milestone.id ? null : milestone.id
                  )
                }
              >
                <div
                  className={`w-3 h-3 rounded-full mr-4 ${getStatusColor(
                    milestone.status
                  )}`}
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{milestone.title}</h3>
                </div>
                <ChevronRight
                  className={`transform transition-transform ${
                    selectedMilestone === milestone.id ? "rotate-90" : ""
                  }`}
                />
              </div>

              {/* Expanded Resource View */}
              {selectedMilestone === milestone.id && (
                <div className="p-4 pt-0 border-t">
                  {milestone.resources.map((resource, idx) => (
                    <div key={idx} className="flex items-center p-2 space-x-3">
                      {resource.type === "video" ? (
                        <Video className="w-5 h-5 text-blue-500" />
                      ) : (
                        <Book className="w-5 h-5 text-green-500" />
                      )}
                      <span className="flex-1">{resource.title}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {resource.duration}
                      </div>
                      {milestone.status === "COMPLETED" && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

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

const LearningPathVisualizer = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  // Sample data - this would come from your API
  const samplePath = {
    student: "John Doe",
    currentLevel: 2,
    targetLevel: 5,
    progress: 35,
    milestones: [
      {
        id: 1,
        title: "Basic JavaScript Fundamentals",
        status: "COMPLETED",
        resources: [
          { type: "video", title: "JavaScript Basics", duration: "45min" },
          { type: "reading", title: "JS Documentation", duration: "30min" },
        ],
      },
      {
        id: 2,
        title: "Advanced Functions",
        status: "IN_PROGRESS",
        resources: [
          { type: "video", title: "Closures Deep Dive", duration: "60min" },
          {
            type: "reading",
            title: "Functional Programming",
            duration: "45min",
          },
        ],
      },
      {
        id: 3,
        title: "Asynchronous Programming",
        status: "NOT_STARTED",
        resources: [
          { type: "video", title: "Promise Mechanics", duration: "55min" },
          { type: "reading", title: "Async/Await Guide", duration: "40min" },
        ],
      },
    ],
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-500";
      case "IN_PROGRESS":
        return "bg-blue-500";
      case "NOT_STARTED":
        return "bg-gray-300";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">
          Learning Path: {samplePath.student}
        </h2>
        <div className="flex items-center space-x-4">
          <div className="text-sm">
            Current Level: {samplePath.currentLevel}
          </div>
          <div className="text-sm">Target Level: {samplePath.targetLevel}</div>
          <div className="flex-1">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: `${samplePath.progress}%` }}
              />
            </div>
          </div>
          <div className="text-sm">{samplePath.progress}% Complete</div>
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-4">
        {samplePath.milestones.map((milestone, index) => (
          <div key={milestone.id} className="border rounded-lg">
            <div
              className="flex items-center p-4 cursor-pointer"
              onClick={() =>
                setSelectedMilestone(
                  selectedMilestone === milestone.id ? null : milestone.id
                )
              }
            >
              <div
                className={`w-3 h-3 rounded-full mr-4 ${getStatusColor(
                  milestone.status
                )}`}
              />
              <div className="flex-1">
                <h3 className="font-semibold">{milestone.title}</h3>
              </div>
              <ChevronRight
                className={`transform transition-transform ${
                  selectedMilestone === milestone.id ? "rotate-90" : ""
                }`}
              />
            </div>

            {/* Expanded Resource View */}
            {selectedMilestone === milestone.id && (
              <div className="p-4 pt-0 border-t">
                {milestone.resources.map((resource, idx) => (
                  <div key={idx} className="flex items-center p-2 space-x-3">
                    {resource.type === "video" ? (
                      <Video className="w-5 h-5 text-blue-500" />
                    ) : (
                      <Book className="w-5 h-5 text-green-500" />
                    )}
                    <span className="flex-1">{resource.title}</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {resource.duration}
                    </div>
                    {milestone.status === "COMPLETED" && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CombinedLearningViews = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Learning Path Visualization Examples
        </h1>

        {/* Example 1 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Example 1: Milestone-based Learning Path
          </h2>
          <div className="flex justify-center">
            <LearningPathVisualizer />
          </div>
        </div>

        {/* Example 2 */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Example 2: Resource Recommendations
          </h2>
          <ResourceRecommendation />
        </div>
      </div>
    </div>
  );
};

export default CombinedLearningViews;
