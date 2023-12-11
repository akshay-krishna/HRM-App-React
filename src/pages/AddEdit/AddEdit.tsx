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
import { useNavigate, useParams } from "react-router";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEffect, useState } from "react";
import { getData, postData, updateData } from "../../core/api";
import displayToast from "../../utils/displayToast";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import { CdataInvalid } from "../../utils/constant";
import { uploadImage } from "../../utils/firebase";
import ProgressiveImage from "react-progressive-graceful-image";
import initialLoader from "../../assets/LoaderGif/loader.gif";
import { IemployeeContext } from "../../interfaces/CommonInterfaces/IemployeeContext";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import {
  setChange,
  setFilters,
  setPageNumber,
} from "../../redux/actionTypes";

function AddEdit() {
  const navigate = useNavigate();
  const state = useSelector((state: IemployeeContext) => state);
  const dispatch = useDispatch<Dispatch>();

  const [formData, setFormData] = useState({
    isActive: true,
    firstName: "",
    lastName: "",
    role: "",
    department: "",
    email: "",
    dob: "",
    dateOfJoining: "",
    phone: "",
    address: "",
    skills: [] as IskillID[],
    designation: "",
    location: "",
  });
  const { id } = useParams();

  const [profilePicture, setProfilePicture] = useState<any>("placeholder");
  const date = new Date();
  const [selSkills, setselSkills] = useState(formData.skills);
  let heading;
  let buttonText;
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await getData(`/employee/${id}`);
          const result = response.data.data;
          if (!result) {
            navigate("/error");
          }
          let locationVar;
          try {
            locationVar = JSON.parse(result.moreDetails).location;
          } catch {
            locationVar = CdataInvalid;
          }
          try {
            const photoURL = JSON.parse(result.moreDetails).photoId;
            if (typeof photoURL === "string" && photoURL !== "")
              setProfilePicture(photoURL);
            else setProfilePicture("placeholder");
          } catch (error) {
            console.error(error, "error");
          }
          setFormData({
            ...result,
            role: result.role?.role,
            department: result.department?.department,
            location: locationVar,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [id]);

  if (id) {
    heading = "Edit Employee";
    buttonText = "Update Employee Profile";
    if (!formData.firstName) {
      return <LoaderComponent />;
    }
  } else {
    heading = "Add Employee";
    buttonText = "Add Employee Profile";
  }

  const profilePictureInputHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const imgFile = e.target.files[0];
      const imgUrl = URL.createObjectURL(imgFile);
      setProfilePicture(imgUrl);
      try {
        const url = await uploadImage(imgFile);
        setProfilePicture(url);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleFormSubmit = (values: any) => {
    let payload = {
      ...values,
      role: values.role
        ? state.roleList.filter((r) => {
            return r.role == values.role;
          })[0].id
        : null,
      department: values.department
        ? state.deptList.filter((d) => {
            return d.department == values.department;
          })[0].id
        : null,
      dateOfJoining: id
        ? formData.dateOfJoining
        : date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
      skills: selSkills,
      moreDetails: JSON.stringify({
        location: values.location,
        photoId: profilePicture === "placeholder" ? "" : profilePicture,
      }),
    };
    delete payload.location;
    delete payload.photoId;
    if (id) {
      const updateEmployee = async () => {
        try {
          await updateData(`employee/${id}`, payload);
          dispatch(setFilters([]));
          dispatch(setChange(1));
          navigate(`/employee-details/${id}`);
          displayToast("Employee updated successfully", "success");
        } catch (error) {
          displayToast("Error updating data", "error");
          console.error("Error patching data:", error);
        }
      };
      updateEmployee();
    } else {
      const addEmployee = async () => {
        try {
          await postData(`employee`, payload);
          dispatch(setFilters([]));
          dispatch(setPageNumber("1"));
          dispatch(setChange(1));
          navigate("/?sortBy=id&sortDir=desc");
          displayToast("Employee added successfully", "success");
        } catch (error) {
          console.error(error);
          displayToast("Error adding data", "error");
        }
      };
      addEmployee();
    }
  };
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

        email: Yup.string().email("Invalid email address").required("Required"),

        dob: Yup.date()
          .max(new Date(), "Date of Birth cannot be in the future")
          .required("Required"),

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
                  <ProgressiveImage
                    src={profilePicture}
                    placeholder={initialLoader}
                  >
                    {(src, loading) => {
                      return (
                        <img
                          className={`image${loading ? "loading" : "loaded"}`}
                          src={src}
                          alt="profile picture"
                          width="150"
                          height="150"
                        />
                      );
                    }}
                  </ProgressiveImage>
                )
              }
              className="close"
              id="photoId"
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
                renderarray={state.roleList}
              />

              <DropDown
                label="Department"
                name="department"
                type="text"
                placeholder="Select your Department"
                renderarray={state.deptList}
              />

              <DropDown
                label="Working Location"
                name="location"
                type="text"
                placeholder="Select your Location"
                renderarray={locationArray}
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
                  name="skills"
                  setselSkills={setselSkills}
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
