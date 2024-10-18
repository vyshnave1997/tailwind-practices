import React from 'react';

function ObjectFitExamples() {
  return (
    <div className="p-10 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Tailwind Object-Fit Examples</h1>

      {/* Object Contain */}
      <div className="bg-blue-100 p-4">
        <h2 className="font-semibold mb-2">.object-contain</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-contain w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Contain"
          />
        </div>
        <p>The image is scaled to maintain its aspect ratio and fit within the container.</p>
      </div>

      {/* Object Cover */}
      <div className="bg-green-100 p-4">
        <h2 className="font-semibold mb-2">.object-cover</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-cover w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Cover"
          />
        </div>
        <p>The image is scaled to cover the entire container while maintaining its aspect ratio, some parts may be cropped.</p>
      </div>

      {/* Object Fill */}
      <div className="bg-yellow-100 p-4">
        <h2 className="font-semibold mb-2">.object-fill</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-fill w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Fill"
          />
        </div>
        <p>The image is stretched to fill the container without maintaining the aspect ratio, so it may look distorted.</p>
      </div>

      {/* Object None */}
      <div className="bg-red-100 p-4">
        <h2 className="font-semibold mb-2">.object-none</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-none w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object None"
          />
        </div>
        <p>The image is not resized at all, and it stays at its original size.</p>
      </div>

      {/* Object Scale Down */}
      <div className="bg-purple-100 p-4">
        <h2 className="font-semibold mb-2">.object-scale-down</h2>
        <div className="w-full h-64 bg-gray-300">
          <img
            className="object-scale-down w-full h-full"
            src="https://via.placeholder.com/300"
            alt="Object Scale Down"
          />
        </div>
        <p>The image is scaled down to fit inside the container, but it won't grow larger than its original size.</p>
      </div>
    </div>
  );
}

export default ObjectFitExamples;
