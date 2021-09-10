import { toast } from 'react-toastify';
import { apiCallFailed } from '../api';

const toaster = (store) => (next) => (action) => {
  if (action.type === apiCallFailed.type) toast.error(action.payload);

  next(action);
};
export default toaster;