import React from 'react';
import Axios from 'axios';
import { Context } from '../index'

export default ({ data, name }) => {
  const { user } = React.useContext(Context);
  const [isLoading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await Axios.post("http://localhost:5000/api/event/ticket/pay", {
        item: data
      }, { withCredentials: true });
      console.log(response.data)
      if (response.data.url) {
       window.location.href = response.data.url;
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={
          user.isAuth
            ? handleSubmit
            : () => {
              window.location.href = '/login';
              }
        }
        type="button"
        className="flex justify-center items-center mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
        disabled={isLoading}
      >
        {!isLoading ? (
          name
        ) : (
          <>
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="font-medium subpixel-antialiased">
              Processing...
            </span>
          </>
        )}
      </button>
    </>
  );
};
