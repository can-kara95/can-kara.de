import { useState, useEffect } from 'react';

const DelayedTitle = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <h2 className={`${show ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 text-textclr-x text-2xl md:text-3xl mb-8`}>
      {children}
    </h2>
  );
};

export default DelayedTitle;
