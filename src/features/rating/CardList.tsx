import commentsData from "../../staticData/commentsData";
import { CommentCard } from "../../components/card/commentCard/CommentCard";
import "./cardList.scss";

const CardList = () => {
  return (
    <div className="list">
      <div className="list__card">
        {commentsData.map((card) => (
          <CommentCard
            key={card.id}
            rating={card.rating}
            comment={card.comment}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
