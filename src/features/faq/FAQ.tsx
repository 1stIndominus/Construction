import { useState, useRef, useEffect } from "react";
import "./faq.scss";
import { faqData } from "../../staticData/faqData";
import { scrollHandler } from "../../helpers/scrollHandler";
import { BsChevronUp } from "react-icons/bs";

export const FAQ = () => {
  const [activeItems, setActiveItems] = useState<number[]>([]);
  const faqRef = useRef<HTMLDivElement | null>(null);

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
      {faqData.map((faq, index) => {
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
