import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="w-14 h-14 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
