import { useState, useRef, useEffect } from "react";
import { StarRating } from "../../starRate/StarRating";
import "./commentCard.scss";

type Props = {
  rating: number;
  comment: string;
  name: string;
};

export const CommentCard: React.FC<Props> = ({ rating, comment, name }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const commentRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (measureRef.current && commentRef.current && !isExpanded) {
        const fullHeight = measureRef.current.scrollHeight;
        const lineHeight = 28.8;
        const maxLines = 6;
        const maxClampedHeight = lineHeight * maxLines;
        const tolerance = 10;

        setShowReadMore(fullHeight > maxClampedHeight + tolerance);
      }
    };

    requestAnimationFrame(() => {
      setTimeout(checkOverflow, 50);
    });
  }, [comment, isExpanded]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="cards">
      <StarRating totalStars={rating} onRate={() => {}} active={true} />
      <div className="cards__comment-wrapper">
        <div
          ref={commentRef}
          className={`cards__comment ${
            isExpanded ? "cards__comment--expanded" : ""
          }`}
        >
          {comment}
        </div>
        <div ref={measureRef} className="cards__comment-measure">
          {comment}
        </div>
        {showReadMore && (
          <button
            className="cards__read-more"
            onClick={handleToggle}
            type="button"
          >
            {!isExpanded && "Read more"}
          </button>
        )}
      </div>
      <span className="about__content--me-highlight">{name}</span>
    </div>
  );
};
