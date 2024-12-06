'use client';

import { useRouter } from 'next/navigation';

const ResultPage = ({ models, makeId, year, error }) => {
  const router = useRouter();

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      {/* Go Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 px-6 py-2 bg-gray-500 text-white rounded-md"
      >
        Go Back
      </button>
      <h1 className="text-2xl font-bold mb-6">
        Vehicle Models for ID: {makeId} - Year: {year}
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        {models.length === 0 ? (
          <div className="flex items-center justify-center min-h-[200px] text-xl font-semibold text-gray-500">
            <p>No models found for the selected make and year.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model) => (
              <div
                key={model.Model_ID}
                className="p-4 bg-white shadow-md rounded-md border"
              >
                <h2 className="text-lg font-semibold">{model.Model_Name}</h2>
                <p>Model ID: {model.Model_ID}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultPage;
