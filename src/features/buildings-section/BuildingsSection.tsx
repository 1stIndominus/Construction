import { PlanCard } from "../../components/card/planCard/PlanCard";
import "./buildingsSection.scss";
import { useGetPlansData } from "../../hooks/useGetPlansData";

export const BuildingsSection = () => {
  const { data: plansData } = useGetPlansData();

  if (!plansData || !plansData.length) {
    return null;
  }

  return (
    <div className="building" id="Plans">
      <div className="building__header">
        <h2 className="building__title">Signature Homes & Plans</h2>
        <p className="building__subtitle">
          Explore our completed and in-progress projects — each designed with
          precision, modern style, and lasting quality to turn every blueprint
          into a place you can call home.
        </p>
      </div>

      <div className="building__content">
        {plansData.map((plan, index) => (
          <PlanCard key={plan.id || index} plan={plan} />
        ))}
      </div>
    </div>
  );
};
