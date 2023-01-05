import React from "react";
//import { useState } from "react";
export default function Page2(props) {
  // let pagetwodatainit = {
  //   Award1: "Venture Cup, USA",
  //   Award2: "IES - Institute of Excellence in Sales",
  //   Course1: "Leading People and Teams- Specialisation",
  //   Course2: "eMetrics Summit (09/2016)",
  //   Course3: "Project Management Principles and Practices (01/2015 - 09/2015)",
  //   Degree: "MSc in Economics and Business Administration",
  //   Description:
  //     "      Professional Business Developer with more than four years of\n experience in the business development process. Involved in product\n testing, management, and development of new business oportunitites.",
  //   Designation: "",
  //   Designation1: "Business Development Manager",
  //   Designation2: "Business Development Assistant",
  //   Email: "john.doe@gmail.com",
  //   End: "2010-06",
  //   End1: "2017-06",
  //   End2: "2014-09",
  //   Honour1: "Jury Member, Venture Cup Entreprenuership Competition (2016)",
  //   Honour2: "Sales Individual & Business Development Award (2015)",
  //   Honour3: "Excellence in Customer Parterning Awards",
  //   Language1: "English",
  //   Language2: "Spanish",
  //   Language3: "French",
  //   Language1i: "50",
  //   Language2i: "50",
  //   Language3i: "50",
  //   Location: "New York, USA",
  //   Location1: "New York, USA",
  //   Location2: "Chicago, USA",
  //   Name: "John Doe",
  //   Organisation1: "American Management Association",
  //   Organisation2: "Association of Private Enterprise Education",
  //   Organisation3: "eBusiness Association(eBA)",
  //   Organization1: "AirState Solutions",
  //   Organization2: "AirState Solutions",
  //   Phone: "202-555-0166",
  //   Skills:
  //     "SEO, Public Speaking, Negotiation, Teamwork, Decision Making, Research & strategy, Emotional Intelligence, Outbound Marketing, Google Analytics, Sales and Marketing, Social Media Marketing, Email Marketing",
  //   Start: "2008-09",
  //   Start1: "2014-04",
  //   Start2: "2012-08",
  //   Subtitle1: "Online course on Coursera.org",
  //   Subtitle2: "Rising Media, Inc. and eMetrics Summit",
  //   Subtitle3: "Online course on Coursera.org",
  //   University: "The University of Chicago",
  //   fromyear1: "2015-01",
  //   fromyear2: "2014-01",
  //   fromyear3: "2013-01",
  //   linkedinurl: "linkedin.com/in/john.doe",
  //   skypeurl: "john.doe",
  //   toyear1: "2015-01",
  //   toyear2: "2014-01",
  //   toyear3: "2013-01",
  //   volume: "50",
  // };
  let { pagetwodata } = props;
  console.log(pagetwodata);

  return (
    <div className="container" style={{ backgroundColor: "beige" }}>
      <div className="row">
        <div className="col-6">
          <h2 style={{ color: "maroon" }}>{pagetwodata.Name}</h2>
          <p className="breadcrumb-item active" aria-current="page">
            {pagetwodata.Designation1}
          </p>
          <p>{pagetwodata.Description}</p>
        </div>
        <div className="col-4"></div>
        <div className="col-2">
          <p>{pagetwodata.Email}</p>
          <p>{pagetwodata.Phone}</p>
          <p>{pagetwodata.Location}</p>
          <p>{pagetwodata.linkedinurl}</p>
          <p> {pagetwodata.skypeurl}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-5">
          <hr />
          <h5 style={{ color: "maroon" }}>WORK EXPERIENCE</h5>
          <hr />
          <h4> {pagetwodata.Designation1}</h4>
          <p>{pagetwodata.Organization1}</p>
          <p>
            {pagetwodata.Start1} to {pagetwodata.End1} at{" "}
            {pagetwodata.Location1}
          </p>

          <ul>
            Successfully managed $2 - $3 million budget projects and
            succcessfully achieved the projects scheduled goals.
          </ul>
          <ul>
            Developed and implmented new marketing and sales plans and defined
            strategy for the next 5 years.
          </ul>
          <ul>
            Reviewed constantly the customer feedback and then suggested ways to
            improve the processes and customer service levels which increased
            the satisfaction rate from 81% to 95%.
          </ul>
          <ul>
            Ensured that new clients will grow into a loyal customer base in a
            specialist niche market by implementing a new loyalty program.
          </ul>

          <h4> {pagetwodata.Designation2}</h4>
          <p>{pagetwodata.Organization2}</p>
          <p>
            {pagetwodata.Start2} to {pagetwodata.End2} at{" "}
            {pagetwodata.Location2}
          </p>
          <ul>
            Increased the customer satisfaction rate by 25% by improving the
            customer service.
          </ul>
          <ul>
            Planned, supervised and coordinated daily activity of 3 junior
            business analysts.
          </ul>
          <ul>
            Improved the communication with the Marketing department to better
            understand the competitive position.
          </ul>
          <ul>
            Directed the creation and implementation of a Business Continuity
            Plan, and the management of audit programs.
          </ul>

          <hr />
          <h5 style={{ color: "maroon" }}>EDUCATION</h5>
          <hr />
          <h4>{pagetwodata.Degree}</h4>
          <p>{pagetwodata.University}</p>
          <p>
            {" "}
            {pagetwodata.Start} to {pagetwodata.End}
          </p>
          <hr />
          <h5 style={{ color: "maroon" }}>LANGUAGES</h5>
          <hr />

          <p>
            {pagetwodata.Language1}{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>
          </p>
          <p>
            {pagetwodata.Language2}{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>
          </p>
          <p>
            {pagetwodata.Language3}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>{" "}
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDisabled"
              id="flexRadioDisabled"
            ></input>
          </p>
        </div>
        <div className="col-3"></div>
        <div className="col-4 " style={{ lineHeight: " 80%" }}>
          <hr />
          <h5 style={{ color: "maroon" }}>SKILLS</h5>
          <hr />
          {pagetwodata.Skills.split(",").map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                className="btn btn-danger my-2 mx-2"
              >
                {item}
              </button>
            );
          })}
          <hr />
          <h5 style={{ color: "maroon" }}>ORGANIZATIONS</h5>
          <hr /> <p>{pagetwodata.Organisation1}</p>
          <p>{pagetwodata.fromyear1}-present</p>
          <br />
          <p>{pagetwodata.Organisation2}</p>
          <p>{pagetwodata.fromyear2}-present</p>
          <br />
          <p>{pagetwodata.Organisation3}</p>
          <p>{pagetwodata.fromyear3}-present</p>
          <hr />
          <h5 style={{ color: "maroon" }}>HONOURS AND AWARDS</h5>
          <hr /> <p>{pagetwodata.Honour1}</p>
          <p>{pagetwodata.Award1}</p>
          <br />
          <p>{pagetwodata.Honour2}</p>
          <p>{pagetwodata.Award2}</p>
          <br />
          <p>{pagetwodata.Honour3}</p>
          <p>{pagetwodata.Award3}</p>
          <br />
          <hr />
          <h5 style={{ color: "maroon" }}>CONFERENCES AND COURSES</h5>
          <hr />
          <p>{pagetwodata.Course1}</p>
          <p>{pagetwodata.Subtitle1}</p>
          <br />
          <p>{pagetwodata.Course2}</p>
          <p>{pagetwodata.Subtitle2}</p>
          <br />
          <p>{pagetwodata.Course3}</p>
          <p>{pagetwodata.Subtitle3}</p>
          <br />
        </div>
      </div>
    </div>
  );
}
