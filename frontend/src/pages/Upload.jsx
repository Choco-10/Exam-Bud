import React, { useState, useRef } from 'react';

export default function Upload() {
  const [stage, setStage] = useState('initial'); // 'initial', 'uploading', 'success'
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef();

  const handleFileSelect = (file) => {
    if (!file) return;
    setFileName(file.name);
    setStage('uploading');
    simulateUpload();
  };

  const simulateUpload = () => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(() => setStage('success'), 500);
      }
    }, 300);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white shadow-lg rounded-xl p-6 text-center">
      {stage === 'initial' && (
        <div
          className="border-2 border-dashed border-gray-300 p-8 rounded-lg cursor-pointer"
          onClick={() => fileInputRef.current.click()}
        >
          <p className="text-gray-500 mb-3">Drag & drop your file here</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Browse Files</button>
          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={(e) => handleFileSelect(e.target.files[0])}
          />
        </div>
      )}

      {stage === 'uploading' && (
        <div>
          <p className="mb-2 font-medium">{fileName}</p>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>{progress}%</p>
        </div>
      )}

      {stage === 'success' && (
        <div>
          <p className="text-green-600 text-lg font-semibold mb-4">✅ Upload Successful!</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
        </div>
      )}
    </div>
  );
}