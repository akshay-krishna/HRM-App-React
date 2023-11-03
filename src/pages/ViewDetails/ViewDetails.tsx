import avatar from "../../assets/images/avatar.svg";
import { ViewDetailsSection } from "./ViewDetailsStyled";
import { viewEmployee } from "./viewConstant";

const ViewDetails = () => {
  return (
    <ViewDetailsSection className="view-employee-modal flex-row ">
      <div className="flex-column left-bar">
        <span className="profile-photo-circle">
          <img className="profile-photo-view" src={avatar} />
        </span>

        <p className="emp-id-display">{viewEmployee.id}</p>
        <p className="dept-display">{viewEmployee.dept}</p>
        <p className="working-location-display">{viewEmployee.loc}</p>
      </div>
      <div className="flex-row right-bar">
        <div className="flex-column personal-details">
          <div>
            <p className="name-display">
              {viewEmployee.fName + " " + viewEmployee.lName}
            </p>
            <p className="role-display">{viewEmployee.role}</p>
          </div>
          <p className="doj-display">Date of Joining: {viewEmployee.doj}</p>
          <p className="dob-display">Date of Birth: {viewEmployee.dob}</p>
          <p className="phone-no-display">Phone Number: {viewEmployee.phnNo}</p>
          <p className="emailID-display">Email ID: {viewEmployee.emailId}</p>
          <div className="address-display-container flex-row">
            <label htmlFor="address-display">Address:&nbsp;</label>
            <div className="address-display">{viewEmployee.address}</div>
          </div>
        </div>
        <div className="flex-column skill-details">
          <p>Skills</p>
          <div className="show-skills">
            <p className="show-skills-p"></p>
          </div>
        </div>
      </div>
    </ViewDetailsSection>
  );
};

export default ViewDetails;
