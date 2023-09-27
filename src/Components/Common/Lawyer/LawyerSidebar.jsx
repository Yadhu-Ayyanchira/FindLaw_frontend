// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
// } from "@material-tailwind/react";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";

// function DefaultSidebar() {
//   return (
//     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
//       <div className="mb-2 p-4">
//         <Typography variant="h5" color="blue-gray">
//           Sidebar
//         </Typography>
//       </div>
//       <List>
//         <ListItem>
//           <ListItemPrefix>
//             <PresentationChartBarIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Dashboard
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <ShoppingBagIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           E-Commerce
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <InboxIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Inbox
//           <ListItemSuffix>
//             <Chip
//               value="14"
//               size="sm"
//               variant="ghost"
//               color="blue-gray"
//               className="rounded-full"
//             />
//           </ListItemSuffix>
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <UserCircleIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Profile
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <Cog6ToothIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Settings
//         </ListItem>
//         <ListItem>
//           <ListItemPrefix>
//             <PowerIcon className="h-5 w-5" />
//           </ListItemPrefix>
//           Log Out
//         </ListItem>
//       </List>
//     </Card>
//   );
// }

// export default DefaultSidebar;

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
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
      <List className="text-black mt-8">
        <ListItem onClick={() => navigate("/admin")}>
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
        <ListItem onClick={() => navigate("/lawyer")}>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Users
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Lawyer Requests
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="deep-orange"
              className="rounded-full"
            />
          </ListItemSuffix>
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