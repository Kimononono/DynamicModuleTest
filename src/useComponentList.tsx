import { useState, useEffect } from 'react';

const useComponentList = () => {
  const [componentList, setComponentList] = useState([]);

  useEffect(() => {
    // Dynamically import the module containing components
    import('./nodedirectory')
      .then(module => {
        const components = Object.keys(module).map(key => ({
          referenceToComponentFunction: module[key],
          metadata: module[key].metadata,  // Assuming metadata is attached to each component
        }));
        setComponentList(components);
      })
      .catch(err => {
        console.error('Failed to load components:', err);
      });
  }, []);
  
  return componentList;
};

export default useComponentList;

