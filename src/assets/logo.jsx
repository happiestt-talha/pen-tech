export default function SvgLogo() {
    return (
      <div className="p-8 bg-white">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Original PNG vs Generated SVG</h2>
  
          {/* Original PNG */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Original PNG:</h3>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mono-tKa3pqa7h632pRQTxejgryuGEeEagL.png"
              alt="Original Digital Web House Logo"
              className="border border-gray-200 rounded"
            />
          </div>
  
          {/* Generated SVG */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Generated SVG:</h3>
            <svg
              width="300"
              height="80"
              viewBox="0 0 300 80"
              xmlns="http://www.w3.org/2000/svg"
              className="border border-gray-200 rounded"
            >
              {/* Globe/World Icon */}
              <g>
                {/* Main circle background */}
                <circle cx="40" cy="40" r="30" fill="#8B1538" />
  
                {/* Globe grid lines */}
                <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
                  {/* Horizontal lines */}
                  <ellipse cx="40" cy="40" rx="30" ry="10" />
                  <ellipse cx="40" cy="40" rx="30" ry="20" />
  
                  {/* Vertical lines */}
                  <ellipse cx="40" cy="40" rx="10" ry="30" />
                  <ellipse cx="40" cy="40" rx="20" ry="30" />
  
                  {/* Center vertical line */}
                  <line x1="40" y1="10" x2="40" y2="70" />
                </g>
  
                {/* Small squares/pixels on the right */}
                <g fill="#8B1538">
                  <rect x="75" y="25" width="4" height="4" />
                  <rect x="80" y="25" width="4" height="4" />
                  <rect x="85" y="25" width="4" height="4" />
                  <rect x="75" y="30" width="4" height="4" />
                  <rect x="80" y="30" width="4" height="4" />
                  <rect x="75" y="35" width="4" height="4" />
                  <rect x="80" y="35" width="4" height="4" />
                  <rect x="85" y="35" width="4" height="4" />
                  <rect x="75" y="40" width="4" height="4" />
                  <rect x="80" y="40" width="4" height="4" />
                  <rect x="75" y="45" width="4" height="4" />
                  <rect x="80" y="45" width="4" height="4" />
                  <rect x="85" y="45" width="4" height="4" />
                  <rect x="75" y="50" width="4" height="4" />
                  <rect x="80" y="50" width="4" height="4" />
                  <rect x="85" y="50" width="4" height="4" />
                </g>
              </g>
  
              {/* DIGITAL text */}
              <text x="100" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#8B1538">
                DIGITAL
              </text>
  
              {/* WEB HOUSE text */}
              <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="normal" fill="#A0616A">
                WEB HOUSE
              </text>
            </svg>
          </div>
  
          {/* Scalability Demo */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">SVG Scalability Demo:</h3>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm mb-1">Small (150x40)</p>
                <svg
                  width="150"
                  height="40"
                  viewBox="0 0 300 80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border border-gray-200 rounded"
                >
                  <circle cx="40" cy="40" r="30" fill="#8B1538" />
                  <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
                    <ellipse cx="40" cy="40" rx="30" ry="10" />
                    <ellipse cx="40" cy="40" rx="30" ry="20" />
                    <ellipse cx="40" cy="40" rx="10" ry="30" />
                    <ellipse cx="40" cy="40" rx="20" ry="30" />
                    <line x1="40" y1="10" x2="40" y2="70" />
                  </g>
                  <g fill="#8B1538">
                    <rect x="75" y="25" width="4" height="4" />
                    <rect x="80" y="25" width="4" height="4" />
                    <rect x="85" y="25" width="4" height="4" />
                    <rect x="75" y="30" width="4" height="4" />
                    <rect x="80" y="30" width="4" height="4" />
                    <rect x="75" y="35" width="4" height="4" />
                    <rect x="80" y="35" width="4" height="4" />
                    <rect x="85" y="35" width="4" height="4" />
                    <rect x="75" y="40" width="4" height="4" />
                    <rect x="80" y="40" width="4" height="4" />
                    <rect x="75" y="45" width="4" height="4" />
                    <rect x="80" y="45" width="4" height="4" />
                    <rect x="85" y="45" width="4" height="4" />
                    <rect x="75" y="50" width="4" height="4" />
                    <rect x="80" y="50" width="4" height="4" />
                    <rect x="85" y="50" width="4" height="4" />
                  </g>
                  <text x="100" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#8B1538">
                    DIGITAL
                  </text>
                  <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="normal" fill="#A0616A">
                    WEB HOUSE
                  </text>
                </svg>
              </div>
  
              <div>
                <p className="text-sm mb-1">Large (450x120)</p>
                <svg
                  width="450"
                  height="120"
                  viewBox="0 0 300 80"
                  xmlns="http://www.w3.org/2000/svg"
                  className="border border-gray-200 rounded"
                >
                  <circle cx="40" cy="40" r="30" fill="#8B1538" />
                  <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
                    <ellipse cx="40" cy="40" rx="30" ry="10" />
                    <ellipse cx="40" cy="40" rx="30" ry="20" />
                    <ellipse cx="40" cy="40" rx="10" ry="30" />
                    <ellipse cx="40" cy="40" rx="20" ry="30" />
                    <line x1="40" y1="10" x2="40" y2="70" />
                  </g>
                  <g fill="#8B1538">
                    <rect x="75" y="25" width="4" height="4" />
                    <rect x="80" y="25" width="4" height="4" />
                    <rect x="85" y="25" width="4" height="4" />
                    <rect x="75" y="30" width="4" height="4" />
                    <rect x="80" y="30" width="4" height="4" />
                    <rect x="75" y="35" width="4" height="4" />
                    <rect x="80" y="35" width="4" height="4" />
                    <rect x="85" y="35" width="4" height="4" />
                    <rect x="75" y="40" width="4" height="4" />
                    <rect x="80" y="40" width="4" height="4" />
                    <rect x="75" y="45" width="4" height="4" />
                    <rect x="80" y="45" width="4" height="4" />
                    <rect x="85" y="45" width="4" height="4" />
                    <rect x="75" y="50" width="4" height="4" />
                    <rect x="80" y="50" width="4" height="4" />
                    <rect x="85" y="50" width="4" height="4" />
                  </g>
                  <text x="100" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#8B1538">
                    DIGITAL
                  </text>
                  <text x="100" y="55" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="normal" fill="#A0616A">
                    WEB HOUSE
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  