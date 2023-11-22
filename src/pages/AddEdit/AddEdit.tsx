// import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import AddPhotoIcon from "../../components/Icons/AddPhotoIcon";
import { Form, Formik } from "formik";
import TextInput from "../../components/FormComponents/TextInput";
import TextAreaInput from "../../components/FormComponents/TextAreaInput";
import { AddEditSection } from "./AddEditStyled";
import DropDown from "../../components/FormComponents/DropDown";
import { locationArray } from "./AddEditConstants";
import Filter from "../../components/Filter/Filter";
import * as Yup from "yup";
import { useLocation } from "react-router";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEffect, useState } from "react";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { getData, postData, updateData } from "../../core/api";

function AddEdit() {
  // const navigate = useNavigate();
  const { employeeData, roleList, deptList } = useEmployeeContext();

  const [formData, setFormData] = useState({
    isActive: true,
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    // location: { id: "", location: "" },
    email: "",
    dob: "",
    dateOfJoining: "",
    phone: "",
    address: "",
    skills: [] as IskillID[],
    designation: "",
    moreDetails: "",
  });

  const location = useLocation();
  const [profilePicture, setProfilePicture] = useState<any>("placeholder");
  const date = new Date();

  let heading;
  let buttonText;
  let locID: string;
  useEffect(() => {
    if (location.pathname.split("/")[1] == "edit-page") {
      locID = location.pathname.split("/")[2];
      const fetchData = async () => {
        try {
          const response = await getData(`/employee/${locID}`);
          const result = response.data.data;
          setFormData({
            ...result,
            role: result.role.role,
            department: result.department.department,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [employeeData]);

  // console.log(formData, ":formdata", ":role", formData.role);
  // if (formData.role) {
  //   // console.log(formData.role.role, "inside if");
  //   setRole(formData.role.role);
  // }
  if (location.pathname.split("/")[1] == "edit-page") {
    heading = "Edit Employee";
    buttonText = "Update Employee Profile";
    if (!formData.firstName) {
      return <div>Loading...</div>;
    }
  } else {
    heading = "Add Employee";
    buttonText = "Add Employee Profile";
  }

  const profilePictureInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const imgFile = e.target.files[0];
      setProfilePicture(URL.createObjectURL(imgFile));
    }
  };

  const handleFormSubmit = (values: any) => {
    // console.log("submit function");
    // console.log(values);
    // console.log(values.firstName);
    // console.log(values.lastName);
    // console.log(values.role);
    // console.log(values.department);
    // console.log(values.role);
    console.log(values.role, "vavava");
    console.log(formData.dateOfJoining);
    let payload = {
      ...values,
      role: roleList.filter((r) => {
        return r.role == values.role;
      })[0].id,
      department: deptList.filter((d) => {
        return d.department == values.department;
      })[0].id,
      dateOfJoining: location.pathname.split("/")[1] == "edit-page"
        ? formData.dateOfJoining
        : date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
    };

    console.log(payload, "payload");
    // console.log(values.role, "values.role");
    if (location.pathname.split("/")[1] == "edit-page") {
      locID = location.pathname.split("/")[2];
      // console.log("submit clicked");
      // console.log(locID);
      // console.log(formData);
      const updateEmployee = async () => {
        try {
          const response = await updateData(`employee/${locID}`, payload);
          const result = response.data;
          console.log(result);
        } catch (error) {
          console.error("Error patching data:", error);
        }
      };
      updateEmployee();
    } else {
      const addEmployee = async () => {
        try {
          const response = await postData(`employee`, payload);
          const result = response.data;
          console.log(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      addEmployee();
    }
  };

  // console.log("formData.skills", formData.skills);
  // console.log(formData.role);
  return (
    <Formik
      enableReinitialize
      initialValues={formData}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .matches(/^[A-Za-z]+$/, "Only letters are allowed")
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        lastName: Yup.string()
          .matches(/^[A-Za-z]+$/, "Only letters are allowed")
          .max(15, "Must be 15 characters or less")
          .required("Required"),

        // role: Yup.string().required("Required"),

        // department: Yup.string().required("Required"),

        // location: Yup.string().required("Required"),

        email: Yup.string().email("Invalid email address").required("Required"),

        phone: Yup.string()
          .matches(/^[0-9]{10}$/, "Phone number should have 10-digits")
          .required("Required"),

        address: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        handleFormSubmit(values);
      }}
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
                name="role"
                type="text"
                placeholder="Select your Role"
                renderarray={roleList}
                // initialvalue={formData.role ? formData.role : ""}
                // initialvalueID={formData.role ? formData.role.id : ""}
              />

              <DropDown
                label="Department"
                name="department"
                type="text"
                placeholder="Select your Department"
                renderarray={deptList}
                // initialvalue={
                //   formData.department ? formData.department.department : ""
                // }
                // initialvalueID={
                //   formData.department ? formData.department.id : ""
                // }
              />

              <DropDown
                label="Working Location"
                name="location"
                type="text"
                placeholder="Select your Location"
                renderarray={locationArray}
                // initialvalue={formData.location.location}
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
                />
              </div>
            </div>
          </div>
          <Button id="submit" className="primary add-edit-btn" type="submit">
            <span>{buttonText}</span>
          </Button>
        </Form>
      </AddEditSection>
    </Formik>
  );
}

export default AddEdit;
