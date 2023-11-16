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
import { IstringID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEffect, useState } from "react";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { getData } from "../../core/api";

function FormikAddEdit() {
  // const navigate = useNavigate();
  const { employeeData } = useEmployeeContext();
  const [formData, setFormData] = useState({
    photoId: "",
    firstName: "",
    lastName: "",
    designation: "",
    department: "",
    location: "",
    email: "",
    dob: "",
    phone: "",
    address: "",
    skills: [] as IstringID[],
  });
  const location = useLocation();
  const [profilePicture, setProfilePicture] = useState<any>("placeholder");

  // console.log(employeeData, "data");

  const onSubmit = () => {};

  let heading;
  let buttonText;

  useEffect(() => {
    if (location.pathname.split("/")[1] == "edit-page") {
      let locID = location.pathname.split("/")[2];
      const fetchData = async () => {
        try {
          const response = await getData(`/employee/${locID}`);
          // console.log(response, "response");
          // console.log(response.data.data, "hohoho");
          const result = response.data.data;
          // console.log(result);
          setFormData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
      // const updatedDetails = {
      //   photoId: "",
      //   fName: `${formData?.fName}`,
      //   lName: `${formData?.lName}`,
      //   role: `${formData?.role}`,
      //   department: `${formData?.department}`,
      //   location: `${formData?.location}`,
      //   email: `${formData?.email}`,
      //   dob: `${formData?.dob}`,
      //   phoneNumber: `${formData?.phoneNumber}`,
      //   address: `${formData?.address}`,
      //   skills: formData?.skills as IstringID[],
      // };
      // setFormData(updatedDetails);
    }
  }, [employeeData]);

  if (location.pathname.split("/")[1] == "edit-page") {
    heading = "Edit Employee";
    buttonText = "Update Employee Profile";
  } else {
    heading = "Add Employee";
    buttonText = "Add Employee Profile";
  }

  const profilePictureInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const imgFile = e.target.files[0];
      console.log(URL.createObjectURL(imgFile));
      setProfilePicture(URL.createObjectURL(imgFile));
    }
  };

  console.log(formData, "formdata");
  return (
    <Formik
      enableReinitialize
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
              label={
                profilePicture === "placeholder" ? (
                  <AddPhotoIcon className="add-edit-profile-photo" />
                ) : (
                  <img
                    className="add-edit-profile-photo"
                    src={profilePicture}
                  />
                )
              }
              className="close"
              id="photo-id"
              name="photoId"
              type="file"
              accept="image/*"
              onChange={profilePictureInputHandler}
            />
            <h2 className="add-edit-heading">{heading}</h2>
          </div>
          <div className="flex-row details">
            <div className="flex-column field-space">
              <TextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter First Name"
              />

              <TextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter Last Name"
              />

              <DropDown
                label="Role"
                name="designation"
                type="text"
                placeholder="Select your Role"
                renderarray={roleArray}
                initialvalue={formData.designation}
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
                name="phone"
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
            <span>{buttonText}</span>
          </Button>
        </Form>
      </AddEditSection>
    </Formik>
  );
}

export default FormikAddEdit;
