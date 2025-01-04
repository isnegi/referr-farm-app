import React from 'react';
import { LoaderCircle } from 'lucide-react';

interface LoadingSpinnerProps {
    size?: number;  // Optional: Customize the size of the spinner
    color?: string; // Optional: Customize the color of the spinner
    className?: string; // Optional: Additional className for custom styling
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 22, color = '#fff', className = '' }) => {
    return (
        <>
            <style>
                {`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .loading-icon {
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
            <div className={`loading-container ${className}`}>
                <LoaderCircle
                    size={12}
                    className="loading-icon"
                    style={{ width: size, height: size, color: color }} // Customize size and color
                />
            </div>

        </>
    );
};

export default LoadingSpinner;