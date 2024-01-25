import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-gray-700">An error occurred.</p>
      </div>
    </div>
  );
};

export default ErrorPage;