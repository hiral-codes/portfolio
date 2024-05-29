import React from "react";

const ResumeDownload = () => {
  const handleDownload = () => {
    fetch("/Resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Resume.pdf");
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
          document.body.removeChild(link);
          window.URL.revokeObjectURL(url);
        }, 100);
      })
      .catch((error) => {
        console.error("Error downloading resume:", error);
      });
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="text-white font-semibold cursor-pointer dark:text-black bg-black dark:bg-white px-4 py-2 md:px-6 md:py-4 rounded-2xl text-sm md:text-base lg:text-lg hover:bg-gray-800 dark:hover:bg-gray-200  ease-in-out"
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeDownload;
