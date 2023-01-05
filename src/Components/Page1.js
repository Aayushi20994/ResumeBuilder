import React from "react";
import Page2 from "./Page2";

import { useState } from "react";

export default function Page1() {
  const pagetwodatainit = {
    Award1: "Venture Cup, USA",
    Award2: "IES - Institute of Excellence in Sales",
    Course1: "Leading People and Teams- Specialisation",
    Course2: "eMetrics Summit (09/2016)",
    Course3: "Project Management Principles and Practices (01/2015 - 09/2015)",
    Degree: "MSc in Economics and Business Administration",
    Description:
      "      Professional Business Developer with more than four years of\n experience in the business development process. Involved in product\n testing, management, and development of new business oportunitites.",
    Designation: "",
    Designation1: "Business Development Manager",
    Designation2: "Business Development Assistant",
    Email: "john.doe@gmail.com",
    End: "2010-06",
    End1: "2017-06",
    End2: "2014-09",
    Honour1: "Jury Member, Venture Cup Entreprenuership Competition (2016)",
    Honour2: "Sales Individual & Business Development Award (2015)",
    Honour3: "Excellence in Customer Parterning Awards",
    Language1: "English",
    Language2: "Spanish",
    Language3: "French",
    Language1i: "50",
    Language2i: "50",
    Language3i: "50",
    Location: "New York, USA",
    Location1: "New York, USA",
    Location2: "Chicago, USA",
    Name: "John Doe",
    Organisation1: "American Management Association",
    Organisation2: "Association of Private Enterprise Education",
    Organisation3: "eBusiness Association(eBA)",
    Organization1: "AirState Solutions",
    Organization2: "AirState Solutions",
    Phone: "202-555-0166",
    Skills:
      "SEO, Public Speaking, Negotiation, Teamwork, Decision Making, Research & strategy, Emotional Intelligence, Outbound Marketing, Google Analytics, Sales and Marketing, Social Media Marketing, Email Marketing",
    Start: "2008-09",
    Start1: "2014-04",
    Start2: "2012-08",
    Subtitle1: "Online course on Coursera.org",
    Subtitle2: "Rising Media, Inc. and eMetrics Summit",
    Subtitle3: "Online course on Coursera.org",
    University: "The University of Chicago",
    fromyear1: "2015-01",
    fromyear2: "2014-01",
    fromyear3: "2013-01",
    linkedinurl: "linkedin.com/in/john.doe",
    skypeurl: "john.doe",
    toyear1: "2015-01",
    toyear2: "2014-01",
    toyear3: "2013-01",
    volume: "50",
  };
  const [datafromprops, setDataFromProps] = useState(pagetwodatainit);
  const [condition, setcondition] = useState(false);

  const handledata = async (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = await Object.fromEntries(formdata.entries());
    setcondition(true);
    if (data.Name === "") {
      setDataFromProps(pagetwodatainit);
    } else {
      setDataFromProps(data);
    }
  };

  return (
    <div className="container">
      <form align="left" onSubmit={handledata}>
        <h2>Name</h2>
        <input
          className="form-control"
          type="text"
          name="Name"
          placeholder="John Doe"
          onChange={() => {}}
        />

        <h2>Designation</h2>
        <input
          className="form-control"
          type="text"
          name="Designation"
          placeholder="Business Development Manager"
          onChange={() => {}}
        />

        <h2>Description</h2>
        <textarea
          className="form-control"
          name="Description"
          cols="30"
          rows="10"
          value="Professional Business Developer with more than four years of experience in the business development process. Involved in product testing, management, and development of new business oportunitites."
          onChange={() => {}}
        >
          Professional Business Developer with more than four years of
          experience in the business development process. Involved in product
          testing, management, and development of new business oportunitites.
        </textarea>

        <h2>Phone</h2>
        <input
          className="form-control"
          type="phone"
          name="Phone"
          placeholder="202-555-0166"
          onChange={() => {}}
        />

        <h2>Email</h2>
        <input
          className="form-control"
          type="email"
          name="Email"
          onChange={() => {}}
          placeholder="john.doe@gmail.com"
        />

        <h2>Location</h2>
        <input
          className="form-control"
          type="text"
          name="Location"
          onChange={() => {}}
          placeholder="New York, USA"
        />

        <h2>LinkedIN URL</h2>
        <input
          className="form-control"
          type="text"
          name="linkedinurl"
          placeholder="linkedin.com/in/john.doe"
          onChange={() => {}}
        />

        <h2>Skype URL</h2>
        <input
          className="form-control"
          type="text"
          name="skypeurl"
          placeholder="john.doe"
          onChange={() => {}}
        />

        <h2>Work Experience</h2>
        <span className="d-flex">
          {" "}
          <input
            className="form-control w-25 "
            type="text"
            name="Designation1"
            placeholder="Business Development Manager"
            onChange={() => {}}
          />
          <input
            className="form-control w-25 "
            type="text"
            name="Organization1"
            placeholder="AirState Solutions"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="month"
            name="Start1"
            placeholder="2014-04"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="month"
            name="End1"
            placeholder="2017-06"
            onChange={() => {}}
          />
          <input
            className="form-control w-25 "
            type="location"
            name="Location1"
            placeholder="New York, USA"
            onChange={() => {}}
          />
        </span>

        <ul>
          Successfully managed $2 - $3 million budget projects and succcessfully
          achieved the projects scheduled goals.
        </ul>
        <ul>
          Developed and implmented new marketing and sales plans and defined
          strategy for the next 5 years.
        </ul>
        <ul>
          Reviewed constantly the customer feedback and then suggested ways to
          improve the processes and customer service levels which increased the
          satisfaction rate from 81% to 95%.
        </ul>
        <ul>
          Ensured that new clients will grow into a loyal customer base in a
          specialist niche market by implementing a new loyalty program.
        </ul>
        <span className="d-flex">
          <input
            className="form-control w-25"
            type="text"
            name="Designation2"
            placeholder="Business Development Assistant"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="text"
            name="Organization2"
            placeholder="AirState Solutions"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="month"
            name="Start2"
            placeholder="2012-08"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="month"
            name="End2"
            placeholder="2014-09"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="location"
            name="Location2"
            placeholder="Chicago, USA"
            onChange={() => {}}
          />
        </span>

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

        <h2>Education</h2>
        <span className="d-flex">
          <input
            className="form-control w-25"
            type="text"
            name="Degree"
            placeholder="MSc in Economics and Business Administration"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="text"
            name="University"
            placeholder="The University of Chicago"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="month"
            name="Start"
            placeholder="2008-09"
            onChange={() => {}}
          />
          <input
            className="form-control w-25"
            type="month"
            name="End"
            placeholder="2010-06"
            onChange={() => {}}
          />
        </span>

        <h2>Languages</h2>

        <input
          type="text"
          id="m_Language-1"
          name="Language1"
          placeholder="English"
          onChange={() => {}}
        />
        <input
          type="range"
          id="m_volume"
          name="Language1i"
          onChange={() => {}}
        />
        <br />

        <input
          type="text"
          id="m_Language-2"
          name="Language2"
          placeholder="Spanish"
          onChange={() => {}}
        />
        <input
          type="range"
          id="m_Language-2"
          name="Language2i"
          onChange={() => {}}
        />
        <br />

        <input
          type="text"
          id="m_Language-3"
          name="Language3"
          placeholder="French"
          onChange={() => {}}
        />
        <input
          type="range"
          id="m_Language-3"
          name="Language3i"
          onChange={() => {}}
        />
        <br />

        <h2>Skills</h2>
        <input
          className="form-control"
          type="text"
          id="m_Skills"
          onChange={() => {}}
          name="Skills"
          placeholder="SEO, Public Speaking, Negotiation, Teamwork, Decision Making, Research &amp; strategy, Emotional Intelligence, Outbound Marketing, Google Analytics, Sales and Marketing, Social Media Marketing, Email Marketing"
        />

        <h2>Organizations</h2>

        <input
          className="form-control"
          type="text"
          name="Organisation1"
          onChange={() => {}}
          placeholder="American Management Association"
        />

        <div className="d-flex">
          {" "}
          <input
            className="form-control w-50"
            type="month"
            name="fromyear1"
            onChange={() => {}}
            placeholder="2015-01"
          />
          <input
            className="form-control w-50"
            type="month"
            name="toyear1"
            placeholder="2015-01"
            onChange={() => {}}
          />
        </div>

        <br />

        <input
          className="form-control"
          type="text"
          name="Organisation2"
          onChange={() => {}}
          placeholder="Association of Private Enterprise Education"
        />

        <div className="d-flex">
          <input
            className="form-control w-50"
            type="month"
            name="fromyear2"
            placeholder="2014-01"
            onChange={() => {}}
          />
          <input
            className="form-control  w-50"
            type="month"
            name="toyear2"
            placeholder="2014-01"
            onChange={() => {}}
          />
        </div>
        <br />
        <input
          className="form-control"
          type="text"
          name="Organisation3"
          placeholder="eBusiness Association(eBA)"
          onChange={() => {}}
        />
        <div className="d-flex">
          {" "}
          <input
            className="form-control w-50"
            type="month"
            name="fromyear3"
            placeholder="2013-01"
            onChange={() => {}}
          />
          <input
            className="form-control w-50"
            type="month"
            name="toyear3"
            placeholder="2013-01"
            onChange={() => {}}
          />
        </div>

        <br />

        <h2>Honours and Awards</h2>
        <div className="d-flex">
          {" "}
          <input
            className="form-control  w-50 "
            type="text"
            name="Honour1"
            onChange={() => {}}
            placeholder="Jury Member, Venture Cup Entreprenuership Competition (2016)"
          />
          <input
            className="form-control w-50"
            type="text"
            name="Award1"
            placeholder="Venture Cup, USA"
            onChange={() => {}}
          />
        </div>

        <br />
        <div className="d-flex">
          {" "}
          <input
            className="form-control  w-50"
            type="text"
            name="Honour2"
            placeholder="Sales Individual &amp; Business Development Award (2015)"
            onChange={() => {}}
          />
          <input
            className="form-control w-50"
            type="text"
            name="Award2"
            onChange={() => {}}
            placeholder="AirState Business Awards"
          />
        </div>

        <br />
        <div className="d-flex">
          <input
            className="form-control w-50"
            type="text"
            name="Honour3"
            placeholder="Excellence in Customer Parterning Awards"
            onChange={() => {}}
          />
          <input
            className="form-control w-50"
            type="text"
            name="Award3"
            placeholder="IES - Institute of Excellence in Sales"
            onChange={() => {}}
          />
        </div>
        <br />

        <h2>Conferences &amp; Courses</h2>
        <div className="d-flex">
          <input
            className="form-control w-50"
            type="text"
            name="Course1"
            placeholder="Leading People and Teams- Specialisation"
            onChange={() => {}}
          />
          <input
            className="form-control w-50"
            type="text"
            name="Subtitle1"
            onChange={() => {}}
            placeholder="Online course on Coursera.org"
          />
        </div>
        <br />
        <div className="d-flex">
          <input
            className="form-control w-50"
            type="text"
            name="Course2"
            placeholder="eMetrics Summit (09/2016)"
            onChange={() => {}}
          />
          <input
            className="form-control w-50"
            type="text"
            name="Subtitle2"
            placeholder="Rising Media, Inc. and eMetrics Summit"
            onChange={() => {}}
          />
        </div>
        <br />
        <div className="d-flex">
          <input
            className="form-control w-50"
            type="text"
            name="Course3"
            placeholder="Project Management Principles and Practices (01/2015 - 09/2015)"
            onChange={() => {}}
          />
          <input
            className="form-control w-50"
            type="text"
            name="Subtitle3"
            placeholder="Online course on Coursera.org"
            onChange={() => {}}
          />
        </div>
        <br />
        <button className="btn btn-danger" type="reset">
          Reset
        </button>

        <button className="btn btn-success ">
          Please click here for Resume Creation below
        </button>
      </form>
      <br />
      {condition ? <Page2 pagetwodata={datafromprops} /> : null}
    </div>
  );
}
