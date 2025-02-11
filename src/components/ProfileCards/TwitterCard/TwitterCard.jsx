import React from "react";
import "./TwitterCard.css";

const TwitterCard = () => {
  const twitterProfileUrl = "https://twitter.com/yourusername"; // Replace with your Twitter profile URL

  return (
    <div className="twitter-card">
      {/* Twitter Cover Image */}
      <div className="twitter-cover"></div>

      {/* Share Link */}
      <a
        href={twitterProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="share-link"
      >
        Share my Twitter
      </a>
    </div>
  );
};

export default TwitterCard;