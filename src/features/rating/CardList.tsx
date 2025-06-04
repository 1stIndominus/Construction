import commentsData from "../../staticData/commentsData";
import { Card } from "../../components/card/CommentCard";
import "./cardList.scss";

const CardList = () => {
  return (
    <div className="list">
      <div className="list__card">
        {commentsData.map((card) => (
          <Card
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
