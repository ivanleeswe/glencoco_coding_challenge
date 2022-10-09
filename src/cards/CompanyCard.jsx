import React from "react";

const CompanyCard = ({ company }) => {
  return (
    <div className="card">
      <div className="title">
        {company.name} <br />
      </div>
      {company.description} <br />
      {company.logo} <br />
      {company.lead_value} <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
        }}
      >
        {company.industry_tags.map((tag) => (
          <div>{tag.tag_name} &nbsp;</div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCard;
