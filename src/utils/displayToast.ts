import { toast } from "react-toastify";

const displayToast = (text: string, type: string) => {
  switch (type) {
    case "success":
      toast.success(text);
      break;

    case "error":
      toast.error(text);
      break;
  }
};

export default displayToast;
