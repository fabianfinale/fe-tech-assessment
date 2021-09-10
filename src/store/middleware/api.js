import axios from 'axios';
import { toast } from 'react-toastify';
import { apiCallFailed, apiCallInitiated, apiCallSucceed } from '../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallInitiated.type) return next(action);

    const { baseURL, url, method, onStart, onSuccess, onError } =
      action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);

    try {
      const { data: responseData } = await toast.promise(
        axios.request({
          method,
          baseURL,
          url,
        }),
        {
          pending: 'We are loading the products',
          success: 'Products loaded successfully',
          error: 'Oops! Something went wrong',
        }
      );

      dispatch(apiCallSucceed(responseData));
      if (onSuccess) dispatch({ type: onSuccess, payload: responseData });
    } catch (error) {
      dispatch(apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
