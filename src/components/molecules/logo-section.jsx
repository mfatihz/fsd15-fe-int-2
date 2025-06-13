import React from 'react';

const LogoSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col gap-4">
      <a href="#">
        <img 
          src="/images/icon/chill-logo.svg" 
          alt="chill-logo" 
          className="h-6"
        />
      </a>
      <p className="text-xs">@{currentYear} Chill All Rights Reserved.</p>
    </div>
  );
};

export default LogoSection;