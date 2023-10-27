import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export const GenerateError = (err) => {
  toast.error(err, {
    position: "top-center",
    theme: "colored",
    autoClose: 2000,
  });
};

export const GenerateSuccess = (success) => {
  toast.success(success, {
    position: "top-center",
    theme: "colored",
    autoClose: 5000,
  });
};