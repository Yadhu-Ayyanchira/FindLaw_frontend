import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("currentAdmin");
    navigate("/admin/login");
  };
  return (
    <Card className="h-[calc(100vh-2rem)] w-full fixed bg-[#0a2125] rounded-none max-w-[18.7rem] p-4 text-red shadow-xl shadow-blue-gray-900/5">
      <List className="text-white text-base font-medium mt-8">
        <ListItem onClick={() => navigate("/admin")}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem onClick={() => navigate("/admin/lawyers")}>
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Lawyers
        </ListItem>
        <ListItem onClick={() => navigate("/admin/users")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Users
        </ListItem>
        <ListItem onClick={() => navigate("/admin/lawyerRequests")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Lawyer Requests
        
        </ListItem>
        
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}

export default Sidebar;