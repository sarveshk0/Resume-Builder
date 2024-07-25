import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div style={bannerStyle} className='z-30'>
      <p>This website uses cookies to ensure you get the best experience.
         <button className='bg-sky-500 p-2 rounded-md' onClick={handleAcceptCookies}>Accept All Cookies</button></p>
    </div>
  );
};

const bannerStyle = {
  position: 'fixed',
 
  bottom: 0,
  width: '100%',
  backgroundColor: 'darkgreen',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',

};

export default CookieConsent;
