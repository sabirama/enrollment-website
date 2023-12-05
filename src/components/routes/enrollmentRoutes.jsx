import OldStudent from "../pages/enrollment/enrollment-process/old-student/OldStudent";
import NewStudent from "../pages/enrollment/enrollment-process/new-student/NewStudent";
import EnrollmentForm from "../pages/enrollment/enrollment-process/enrollment-form/EnrollmentForm.";
import EnrollmentMain from "../pages/enrollment/main/EnrollmentMain";

const enrollmentRoutes = [
  {
    name: "",
    path: "",
    element: <EnrollmentMain />,
  },
  {
    name: "Old Student / Continuing / Returning",
    path: "old-student/*",
    element: <OldStudent />,
  },
  {
    name: "New Student / Transferees",
    path: "new-student/*",
    element: <NewStudent />,
  },
  {
    name: "Enrollment Form",
    path: "enrollment-form",
    element: <EnrollmentForm />,
  },
];

export default enrollmentRoutes;
