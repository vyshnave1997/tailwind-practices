import React from 'react';

function ObjectPosition() {
  return (
    <div className="p-10 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Object-Position</h1>

      {/* Object Position: Bottom */}
      <div className="bg-blue-100 p-4">
        <h2 className="font-semibold mb-2">Object at Bottom</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-bottom w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Bottom"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>bottom</strong> of the container.
        </p>
      </div>

      {/* Object Position: Top */}
      <div className="bg-green-100 p-4">
        <h2 className="font-semibold mb-2">Object at Top</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-top w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Top"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>top</strong> of the container.
        </p>
      </div>

      {/* Object Position: Center */}
      <div className="bg-yellow-100 p-4">
        <h2 className="font-semibold mb-2">Object at Center</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-center w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Center"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>center</strong> of the container.
        </p>
      </div>

      {/* Object Position: Left */}
      <div className="bg-red-100 p-4">
        <h2 className="font-semibold mb-2">Object at Left</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-left w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Left"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>left</strong> of the container.
        </p>
      </div>

      {/* Object Position: Right */}
      <div className="bg-purple-100 p-4">
        <h2 className="font-semibold mb-2">Object at Right</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-right w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Right"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>right</strong> of the container.
        </p>
      </div>

      {/* Object Position: Left Bottom */}
      <div className="bg-pink-100 p-4">
        <h2 className="font-semibold mb-2">Object at Left Bottom</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-left-bottom w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Left Bottom"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>bottom-left</strong> corner of the container.
        </p>
      </div>

      {/* Object Position: Right Bottom */}
      <div className="bg-orange-100 p-4">
        <h2 className="font-semibold mb-2">Object at Right Bottom</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-right-bottom w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Right Bottom"
          />
        </div>
        <p className="mt-2">
          The image is positioned at the <strong>bottom-right</strong> corner of the container.
        </p>
      </div>
    </div>
  );
}

export default ObjectPosition;
