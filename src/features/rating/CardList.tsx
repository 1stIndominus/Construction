import { CommentCard } from "../../components/card/commentCard/CommentCard";
import "./cardList.scss";
import { CommentsDataTypes } from "../../types/type";

type Props = {
  commentsData: CommentsDataTypes[];
};

const CardList: React.FC<Props> = ({ commentsData }) => {
  return (
    <div className="list">
      <div className="list__card">
        {commentsData.map((card) => (
          <CommentCard
            key={card.id}
            rating={card.stars}
            comment={card.comment}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
