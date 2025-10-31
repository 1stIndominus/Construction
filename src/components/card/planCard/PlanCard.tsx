import { Badge, BadgeVariant } from "../../badge/Badge";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { BuildingPlansType } from "../../../hooks/useGetPlansCollectionData";
import "./planCard.scss";
import Carousel from "../../carousels/Carousel";
import { Link } from "react-scroll";
import { getBadgeVariant } from "../../../helpers/getBadgeVariant";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform, centerView } = useControls();

  return (
    <div className="plan-card__controls">
      <button
        className="plan-card__control-btn"
        onClick={() => zoomIn()}
        title="Zoom In"
      >
        +
      </button>
      <button
        className="plan-card__control-btn"
        onClick={() => zoomOut()}
        title="Zoom Out"
      >
        -
      </button>
      <button
        className="plan-card__control-btn"
        onClick={() => centerView()}
        title="Center View"
      >
        ⊞
      </button>
      <button
        className="plan-card__control-btn"
        onClick={() => resetTransform()}
        title="Reset View"
      >
        ↺
      </button>
    </div>
  );
};

export const PlanCard = ({ plan }: { plan: BuildingPlansType }) => {
  const {
    sold,
    title,
    buildingStatus,
    address,
    description,
    imageUrl,
    portfolio,
  } = plan;

  return (
    <div className="plan-card">
      <div className="plan-card__header">
        <div className="plan-card__badges">
          <Badge
            text={buildingStatus}
            variant={getBadgeVariant(buildingStatus)}
          />
          <Badge
            text={sold ? "Sold" : "Available for Sale"}
            variant={sold ? BadgeVariant.DANGER : BadgeVariant.SUCCESS}
          />
        </div>
      </div>

      {title && <h3 className="plan-card__title">{title}</h3>}
      {address && <p className="plan-card__address">📍 {address}</p>}
      {description && <p className={"plan-card__text"}>{description}</p>}

      {!sold && (
        <div className="plan-card__preorder">
          <Link
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="plan-card__preorder-btn"
          >
            <span className="plan-card__preorder-text">Pre-order House</span>
          </Link>
        </div>
      )}

      <div className="plan-card__image-container">
        <TransformWrapper
          initialScale={2}
          centerOnInit={true}
          wheel={{ step: 0.1 }}
          pinch={{ step: 5 }}
          doubleClick={{ disabled: false, step: 0.7 }}
          panning={{ disabled: false }}
          minScale={0.1}
          centerZoomedOut={true}
        >
          {() => (
            <>
              <Controls />
              <TransformComponent
                wrapperClass="plan-card__transform-wrapper"
                contentClass="plan-card__transform-content"
              >
                <img src={imageUrl} alt={title} className="plan-card__image" />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>

      {portfolio && <Carousel portfolio={portfolio} />}
    </div>
  );
};
