import { ViewDetailsSection } from "./ViewDetailsStyled";
import { IallTypeDataListing } from "../../interfaces/CommonInterfaces/Icommon";
import { useParams } from "react-router";
import { IskillID } from "../../interfaces/CommonInterfaces/IstringID";
import { useEmployeeContext } from "../../context/EmployeeContext";
import { CdataInvalid } from "../../utils/constant";
import initialLoader from "../../assets/LoaderGif/loader.gif";
import LoaderComponent from "../../components/LoaderComponent/LoaderComponent";
import ProgressiveImage from "react-progressive-graceful-image";
const ViewDetails = () => {
  const { employeeData } = useEmployeeContext();
  window.scrollTo({ top: 0 });
  const { id } = useParams();
  if (employeeData.length == 0) {
    return <LoaderComponent />;
  }
  const viewEmployee: IallTypeDataListing | undefined = employeeData.find(
    (emp) => emp.id === Number(id)
  );
  let locationVar;
  let photoVar;
  try {
    locationVar = JSON.parse(viewEmployee?.moreDetails).location;
  } catch {
    locationVar = `Location: ${CdataInvalid}`;
  }

  try {
    photoVar = JSON.parse(viewEmployee?.moreDetails).photoId;
  } catch {
    photoVar =
      "https://firebasestorage.googleapis.com/v0/b/hr-management-app-8caae.appspot.com/o/avatar.svg?alt=media&token=0639e6c3-720b-4c13-bd81-2dd70b4b5f56";
  }

  return (
    <ViewDetailsSection className="view-employee-modal flex-row ">
      <div className="flex-column left-bar">
        <span className="profile-photo-circle">
          <ProgressiveImage src={photoVar} placeholder={initialLoader}>
            {(src, loading) => (
              <img
                className={`image${loading ? " loading" : " loaded"}`}
                src={src}
                alt="profile picture"
                width="150"
                height="150"
              />
            )}
          </ProgressiveImage>
        </span>

        <p className="emp-id-display">{viewEmployee?.id}</p>
        <p className="dept-display">
          {viewEmployee?.department
            ? viewEmployee?.department.department
            : "Department: N/A"}
        </p>
        <p className="working-location-display">{locationVar}</p>
      </div>
      <div className="flex-row right-bar">
        <div className="flex-column personal-details">
          <div>
            <p className="name-display">
              {viewEmployee?.firstName + " " + viewEmployee?.lastName}
            </p>
            <p className="role-display">
              {viewEmployee?.role ? viewEmployee?.role.role : "Role: N/A"}
            </p>
          </div>
          <p className="doj-display">
            Date of Joining: {viewEmployee?.dateOfJoining}
          </p>
          <p className="dob-display">Date of Birth: {viewEmployee?.dob}</p>
          <p className="phone-no-display">
            Phone Number: {viewEmployee?.phone}
          </p>
          <p className="emailID-display">Email ID: {viewEmployee?.email}</p>
          <div className="address-display-container flex-row">
            <label htmlFor="address-display">Address:&nbsp;</label>
            <div className="address-display">{viewEmployee?.address}</div>
          </div>
        </div>
        <div className="flex-column skill-details">
          <p>Skills</p>
          <div className="show-skills">
            <p className="show-skills-p">
              {viewEmployee?.skills.map((sk: IskillID) => sk.skill).join(", ")}
            </p>
          </div>
        </div>
      </div>
    </ViewDetailsSection>
  );
};

export default ViewDetails;
