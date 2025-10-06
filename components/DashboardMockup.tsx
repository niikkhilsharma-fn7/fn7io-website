"use client";

interface DashboardMockupProps {}

export const DashboardMockup = ({}: DashboardMockupProps) => {
  return (
    <div className="relative flex overflow-hidden flex-col p-8 mx-auto w-full rounded-2xl max-md:mt-10 max-md:max-w-full">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-purple-200/40 to-purple-300/40 rounded-2xl" />
      
      {/* Glass effect overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30 rounded-2xl border border-white/50 shadow-xl" />
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-light text-gray-800 mb-8">LinkedIn</h3>
        
        <div className="flex gap-4 mb-10">
          {/* Stats cards */}
          <div className="flex flex-col items-center px-5 py-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-md min-w-[80px]">
            <div className="text-3xl font-normal text-gray-800">135</div>
            <div className="mt-2 text-sm text-gray-600">New</div>
          </div>
          
          <div className="flex flex-col items-center px-5 py-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-md min-w-[80px]">
            <div className="text-3xl font-normal text-gray-800">135</div>
            <div className="mt-2 text-sm text-gray-600">Posted</div>
          </div>
          
          <div className="flex flex-col items-center px-5 py-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-md min-w-[80px]">
            <div className="text-3xl font-normal text-gray-800">135</div>
            <div className="mt-2 text-sm text-gray-600">Queued</div>
          </div>
          
          <div className="flex flex-col items-center px-5 py-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-md min-w-[80px]">
            <div className="text-3xl font-normal text-gray-800">0</div>
            <div className="mt-2 text-sm text-gray-600">Retry</div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4 items-center">
          <button 
            className="flex-1 px-8 py-3 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:opacity-90"
            style={{
              background: 'linear-gradient(90deg, #4E63A7 0%, #8F76BD 100%)'
            }}
          >
            Scout More
          </button>
          
          <button 
            className="flex-1 px-8 py-3 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:opacity-80"
            style={{
              backgroundColor: '#C3C3C3'
            }}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};