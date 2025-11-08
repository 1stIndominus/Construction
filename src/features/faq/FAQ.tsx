import { useState, useRef, useEffect } from "react";
import "./faq.scss";
import { scrollHandler } from "../../helpers/scrollHandler";
import { BsChevronUp } from "react-icons/bs";
import { useGetFAQData } from "../../hooks/useGetFAQData";
import { ContentTypes } from "../../types/type";

type Props = {
  contentType: ContentTypes;
};

export const FAQ: React.FC<Props> = ({ contentType }) => {
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const { data } = useGetFAQData({
    contentType,
  });

  useEffect(() => {
    scrollHandler(faqRef);
  }, []);

  const toggleActiveItem = (index: number) => {
    setActiveItems((prevItems) => {
      if (prevItems.includes(index)) {
        return prevItems.filter((item) => item !== index);
      } else {
        return [...prevItems, index];
      }
    });
  };
  return (
    <div className="faq" ref={faqRef} id="FAQ">
      <h1 className="faq__title">
        <span className="about__content--me-highlight">FAQ</span>s
      </h1>
      {data?.map((faq, index) => {
        const isActive = activeItems.includes(index);

        return (
          <div className="faq__content" key={faq.id}>
            <div
              className="faq__question"
              onClick={() => toggleActiveItem(index)}
            >
              <h3 className="faq__question--title">{faq.question}</h3>
              <BsChevronUp
                size={24}
                color={"#fff"}
                className={
                  isActive ? "faq__question--svg-active" : "faq__question--svg"
                }
              />
            </div>
            <div className={isActive ? "faq__answer--active" : "faq__answer"}>
              <p className="faq__answer--description">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
