import React, { AllHTMLAttributes } from "react";
import "../Styles/ComponentStyles/CaseStudies.scss";

interface CaseStudyProps extends AllHTMLAttributes<HTMLDivElement> {
  image: any;
  cardHeader: string;
  cardText: string;
  detailHeader: string;
  detailText: string;
}

const CaseStudies: React.FC<CaseStudyProps> = ({image, cardHeader, cardText, detailHeader, detailText}) => {

  return (
    <div className="card-container">
      <div className="card">
        <img src={image} alt="image" />
        <div className="card-content">
          <h3>{cardHeader}</h3>
          <p>{cardText}</p>
        </div>
      </div>
      <div className="card-details">
        <p>{detailHeader}</p>
        <small>{detailText}</small>
      </div>
    </div>
  );
}
 
export default CaseStudies;
