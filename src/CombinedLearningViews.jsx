import React from "react";
import ResourceRecommendation from "./ResourceRecommendation";
import LearningPathVisualizer from "./LearningPathVisualizer";

const CombinedLearningViews = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Learning Path Visualization Examples
        </h1>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Example 1: Milestone-based Learning Path
          </h2>
          <LearningPathVisualizer />
        </div>

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
