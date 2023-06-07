import React from "react";

const ProgressBar = ({ values }) => {
    const total = values.reduce((sum, value) => sum + value, 0);
    const hasValues = values.some((value) => value !== 0);
    const percentages = values.map((value) => (value / total) * 100);

    return (
        <div className="w-full h-2 bg-blue-200 relative">
        {!hasValues && (
            <div className="h-full absolute top-0 bg-blue-200 w-full" />
        )}
        {hasValues &&
            percentages.map((percentage, index) => (
            <div
                key={index}
                className={`h-full absolute top-0 ${
                index === 0
                    ? "bg-red-500"
                    : index === 1
                    ? "bg-yellow-400"
                    : "bg-green-400"
                }`}
                style={{
                width: `${percentage}%`,
                left:
                    index === 0
                    ? "0"
                    : index === 1
                    ? `${percentages[0]}%`
                    : `${percentages[0] + percentages[1]}%`,
                }}
            />
            ))}
        </div>
    );
};

export default ProgressBar;
