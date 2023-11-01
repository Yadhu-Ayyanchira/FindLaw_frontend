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

function DefaultSidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("currentAdmin");
    navigate("/admin/login");
  };
  return (
    <Card className="h-[calc(100vh-2rem)] w-full fixed bg-[#1d6143] rounded-none max-w-[18.7rem] p-4 text-red shadow-xl shadow-blue-gray-900/5">
      <List className="text-blue-gray-100 text-lg font-bold mt-8">
        <ListItem onClick={() => navigate("/lawyer")}>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem onClick={() => navigate("/lawyer")}>
          <ListItemPrefix>
            <UserGroupIcon className="h-5 w-5" />
          </ListItemPrefix>
          Notifications
        </ListItem>
        <ListItem onClick={() => navigate("/lawyer/timeslot")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Time Slot
        </ListItem>
        <ListItem onClick={() => navigate("/lawyer/appointmentrequest")}>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Lawyer Requests
          {/* <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="deep-orange"
              className="rounded-full"
            />
          </ListItemSuffix> */}
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Departments
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

export default DefaultSidebar;