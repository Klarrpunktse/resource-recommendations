import React, { useState } from "react";
import { ChevronRight, Book, Video, CheckCircle, Clock } from "lucide-react";

const LearningPathVisualizer = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

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
    <div className="bg-white text-gray-900 rounded-lg p-6 shadow-md">
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">
          Learning Path: {samplePath.student}
        </h2>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            Current Level: {samplePath.currentLevel}
          </div>
          <div className="text-sm">Target Level: {samplePath.targetLevel}</div>
          <div className="flex-1">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 rounded-full h-2"
                style={{ width: `${samplePath.progress}%` }}
              />
            </div>
          </div>
          <div className="text-sm">{samplePath.progress}% Complete</div>
        </div>
      </div>

      <div className="space-y-3">
        {samplePath.milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="border rounded-lg bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div
              className="flex items-center p-4 cursor-pointer"
              onClick={() =>
                setSelectedMilestone(
                  selectedMilestone === milestone.id ? null : milestone.id
                )
              }
            >
              <div
                className={`w-2 h-2 rounded-full mr-3 ${getStatusColor(
                  milestone.status
                )}`}
              />
              <div className="flex-1">
                <h3 className="font-medium">{milestone.title}</h3>
              </div>
              <ChevronRight
                className={`transform transition-transform ${
                  selectedMilestone === milestone.id ? "rotate-90" : ""
                }`}
              />
            </div>

            {selectedMilestone === milestone.id && (
              <div className="border-t p-4 bg-gray-100">
                {milestone.resources.map((resource, idx) => (
                  <div
                    key={idx}
                    className="flex items-center py-2 space-x-3 text-gray-700"
                  >
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
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3" />
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

export default LearningPathVisualizer;
