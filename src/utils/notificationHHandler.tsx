import { toast } from "react-toastify";

const showErrorMessage = (message: any, options?) => {
  message =
    message instanceof Error ? message.message || message.toString() : message;

  toast.error(message, options);
};

const showInfoMessage = (message, options?) => {
  toast.info(message, options);
};

const showSuccessMessage = (message, options?) => {
  toast.success(message, options);
};

const showWarningMessage = (message, options?) => {
  toast.warning(message, options);
};

const showMessage = (message, options?) => {
  toast(message, options);
};
const promise = (promise, options) => {
  toast.promise(promise, options);
};

const notificationHandler = {
  promise,
  showMessage,
  showErrorMessage,
  showInfoMessage,
  showSuccessMessage,
  showWarningMessage,
};

export default notificationHandler;
