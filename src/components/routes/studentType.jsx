import OldStudent from "../pages/enrollment/enrollment-process/old-student/OldStudent";
import NewStudent from "../pages/enrollment/enrollment-process/new-student/NewStudent";

const studentType = [
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
];

export default studentType;
