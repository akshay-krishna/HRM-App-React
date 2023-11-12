// import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import AddPhotoIcon from "../../components/Icons/AddPhotoIcon";
import { Form, Formik } from "formik";
import TextInput from "../../components/FormComponents/TextInput";
import TextAreaInput from "../../components/FormComponents/TextAreaInput";
import { AddEditSection } from "./AddEditStyled";
import DropDown from "../../components/FormComponents/DropDown";
import { deptArray, locationArray, roleArray } from "./AddEditConstants";
import Filter from "../../components/Filter/Filter";
import { employeeArray, skills } from "../Dashboard/dashboardConstant";
import * as Yup from "yup";
import { useLocation } from "react-router";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";

function FormikAddEdit() {
  // const navigate = useNavigate();
  const onSubmit = () => {};

  let formData = {
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
    skills: "",
  };

  const location = useLocation();
  if (location.pathname.split("/")[1] == "edit-page") {
    const employeeDetails: IallTypeDataListing = employeeArray.find(
      (emp) => emp.id === location.pathname.split("/")[2]
    )!;
    formData = {
      photoId: "",
      fName: `${employeeDetails.fName}`,
      lName: `${employeeDetails.lName}`,
      role: `${employeeDetails.role}`,
      department: `${employeeDetails.dept}`,
      location: `${employeeDetails.loc}`,
      email: `${employeeDetails.emailID}`,
      dob: `${employeeDetails.dob}`,
      phoneNumber: `${employeeDetails.phnNo}`,
      address: `${employeeDetails.address}`,
      skills: `${employeeDetails.skill}`,
    };
    console.log("emp", employeeDetails.skill);
    console.log(formData.skills);
  }

  return (
    <Formik
      initialValues={formData}
      validationSchema={Yup.object({
        fName: Yup.string()
          .matches(/^[A-Za-z]+$/, "Only letters are allowed")
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        lName: Yup.string()
          .matches(/^[A-Za-z]+$/, "Only letters are allowed")
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        role: Yup.string().required("Required"),

        department: Yup.string().required("Required"),

        location: Yup.string().required("Required"),

        email: Yup.string().email("Invalid email address").required("Required"),

        phoneNumber: Yup.string()
          .matches(/^[0-9]{10}$/, "Phone number should have 10-digits")
          .required("Required"),

        address: Yup.string().required("Required"),
      })}
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
                renderarray={roleArray}
                initialvalue={formData.role}
              />

              <DropDown
                label="Department"
                name="department"
                type="text"
                placeholder="Select your Department"
                renderarray={deptArray}
                initialvalue={formData.department}
              />

              <DropDown
                label="Working Location"
                name="location"
                type="text"
                placeholder="Select your Role"
                renderarray={locationArray}
                initialvalue={formData.location}
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

              <div className="flex-column label-input skill-input">
                <label>Skills</label>
                <Filter
                  selectedValue={formData.skills}
                  className="skill-input-form"
                  dataSkills={skills}
                />
              </div>
            </div>
          </div>
          <Button
            id="submit"
            className="primary add-edit-btn"
            type="submit"
            // onClick={() => navigate("/")}
          >
            <span className="add-update-text">Add Employee Profile</span>
          </Button>
        </Form>
      </AddEditSection>
    </Formik>
  );
}

export default FormikAddEdit;
