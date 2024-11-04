import React from 'react';

const UrlDisplay = ({ url, signedUrl }) => {
  const openUrl = (urlToOpen) => {
    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="url-display">
      <div className="url-section">
        <h3>Constructed URL:</h3>
        <pre>{url}</pre>
        <button className="open-url-button" onClick={() => openUrl(url)}>
          Open Constructed URL
        </button>
      </div>
      
      {signedUrl && (
        <>
          <div className="url-divider"></div>
          <div className="url-section">
            <h3>Signed URL:</h3>
            <pre>{signedUrl}</pre>
            <button className="open-url-button" onClick={() => openUrl(signedUrl)}>
              Open Signed URL
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UrlDisplay;
