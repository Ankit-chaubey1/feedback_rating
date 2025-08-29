import React from "react";

function Analytics({ aggregate }) {
  if (!aggregate) return <div>Loading analytics...</div>;

  const { averageRating, totalFeedbacks } = aggregate;

  return (
    <div>
      <h3>Analytics</h3>
      <p>Average Rating: {averageRating ? averageRating.toFixed(2) : "N/A"}</p>
      <p>Total Feedbacks: {totalFeedbacks}</p>
    </div>
  );
}

export default Analytics;