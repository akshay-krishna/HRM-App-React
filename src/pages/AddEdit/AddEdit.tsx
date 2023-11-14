import { AddEditSection } from "./AddEditStyled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import AddPhotoIcon from "../../components/Icons/AddPhotoIcon";

const AddEdit = () => {
  const navigate = useNavigate();
  const handleNaviagtion = () => {
    navigate("/");
  };
  return (
    <AddEditSection className="flex-column">
      <form
        className="add-edit-employee-form flex-column"
        noValidate
        autoComplete="off"
      >
        <div className="add-edit-employee-head flex-column">
          <label htmlFor="photo-id">
            <AddPhotoIcon className="add-edit-profile-photo" />
          </label>
          <input className="close" type="file" id="photo-id" accept="image/*" />
          <h2 className="add-edit-heading">Add Employee</h2>
        </div>
        <div className="flex-row details">
          <div className="flex-column field-space">
            <div className="flex-column label-input">
              <label htmlFor="fname">First Name</label>
              <div>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter your First Name"
                />
                <p id="fname-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input">
              <label htmlFor="lname">Last Name</label>
              <div>
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your Last Name"
                />
                <p id="lname-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input role-parent">
              <label htmlFor="role">Role</label>
              <div>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Select your Role"
                  readOnly
                />
                <ul className="list-style add-role-list close"></ul>
                <p id="role-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input department-parent">
              <label htmlFor="department">Department</label>
              <div>
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Enter your Department"
                  readOnly
                />
                <ul className="list-style add-department-list close"></ul>
                <p id="dept-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input work-location-parent">
              <label htmlFor="location">Working Location</label>
              <div>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter your Working Location"
                  readOnly
                />
                <ul className="list-style add-location-list close"></ul>
                <p id="location-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>
          </div>

          <div className="flex-column field-space">
            <div className="flex-column label-input">
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email ID"
                />
                <p id="email-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input">
              <label htmlFor="dob">Date Of Birth</label>
              <div>
                <input type="date" id="dob" name="dob" />
                <p id="date-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input">
              <label htmlFor="phone-number">Phone Number</label>
              <div>
                <input
                  type="tel"
                  id="phone-number"
                  name="phone-number"
                  placeholder="Enter your Phone Number"
                />
                <p id="phone-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input">
              <label htmlFor="address">Address</label>
              <div>
                <textarea
                  name="address"
                  placeholder="Enter your Permanent Address"
                  id="address"
                ></textarea>
                <p id="address-error" className="err close">
                  Error Placeholder
                </p>
              </div>
            </div>

            <div className="flex-column label-input skill-parent">
              <label htmlFor="skill-add-search">Skills</label>
              <div>
                <input
                  placeholder="Search By Skills"
                  name="skill-add-search"
                  id="skill-add-search"
                />
                <ul className="list-style add-skill-list close"></ul>
                <div className="add-selected-skills flex-row close"></div>
              </div>
            </div>
          </div>
        </div>
        <Button
          id="submit"
          className="primary"
          type="submit"
          onClick={handleNaviagtion}
        >
          <span className="add-update-text">Add Employee Profile</span>
        </Button>
      </form>
    </AddEditSection>
  );
};

export default AddEdit;
