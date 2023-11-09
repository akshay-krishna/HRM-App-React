import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import AddPhotoIcon from "../../components/Icons/AddPhotoIcon";
import { Form, Formik } from "formik";
import TextInput from "../../components/FormComponents/TextInput";
import TextAreaInput from "../../components/FormComponents/TextAreaInput";
import { AddEditSection } from "./FormikAddEditStyled";
import DropDown from "../../components/FormComponents/DropDown";
import { deptArray, locationArray, roleArray } from "./AddEditConstants";
import Filter from "../../components/Filter/Filter";
import { skills } from "../Dashboard/dashboardConstant";

function FormikAddEdit() {
  const navigate = useNavigate();
  const onSubmit = () => {};

  return (
    <Formik
      initialValues={{
        photoId: "",
        fName: "",
        lName: "",
        role: "",
        department: "",
        location: "",
        email: "",
        dob: "",
        phoneNumber: "",
        address: "",
      }}
      onSubmit={onSubmit}
    >
      <AddEditSection className="flex-column">
        <Form
          className="add-edit-employee-form flex-column"
          noValidate
          autoComplete="off"
        >
          <div className="add-edit-employee-head flex-column">
            <TextInput
              label={<AddPhotoIcon className="add-edit-profile-photo" />}
              className="close"
              id="photo-id"
              name="photoId"
              type="file"
              accept="image/*"
            />
            <h2 className="add-edit-heading">Add Employee</h2>
          </div>
          <div className="flex-row details">
            <div className="flex-column field-space">
              <TextInput
                label="First Name"
                name="fName"
                type="text"
                placeholder="Enter First Name"
              />

              <TextInput
                label="Last Name"
                name="lName"
                type="text"
                placeholder="Enter Last Name"
              />

              <DropDown
                label="Role"
                name="role"
                type="text"
                placeholder="Select your Role"
                renderArray={roleArray}
              />

              <DropDown
                label="Department"
                name="department"
                type="text"
                placeholder="Select your Department"
                renderArray={deptArray}
              />

              <DropDown
                label="Working Location"
                name="location"
                type="text"
                placeholder="Select your Role"
                renderArray={locationArray}
              />
            </div>

            <div className="flex-column field-space">
              <TextInput
                label="Email"
                name="email"
                type="text"
                placeholder="Enter your Email"
              />

              <TextInput label="Date Of Birth" name="dob" type="date" />

              <TextInput
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                placeholder="Enter your Phone Number"
              />

              <TextAreaInput
                label="Address"
                name="address"
                placeholder="Enter your Permanent Address"
              />

              {/* <TextInput
                label="Skills"
                name="skill-add-search"
                type="text"
                placeholder="Search By Skills"
              /> */}
              <div
                className="flex-column label-input"
                style={{ maxWidth: "300px", height: "50px" }}
              >
                <label>Skills</label>
                <Filter dataSkills={skills} />
              </div>
            </div>
          </div>
          <Button
            id="submit"
            className="primary"
            type="submit"
            onClick={() => navigate("/")}
          >
            <span className="add-update-text">Add Employee Profile</span>
          </Button>
        </Form>
      </AddEditSection>
    </Formik>
  );
}

export default FormikAddEdit;
