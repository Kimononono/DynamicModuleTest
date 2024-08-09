import { useState, useEffect } from 'react';

const useFlowComponents = () => {
  const [nodeTypes, setNodeTypes] = useState({});

  useEffect(() => {
    // Dynamically import the module containing components
    import('./nodedirectory')
      .then(module => {
        const components = Object.keys(module).reduce((acc, key) => {
          const component = module[key];
          const componentName = component.name;
          acc[componentName] = component;
          return acc;
        }, {});

        setNodeTypes(components);
      })
      .catch(err => {
        console.error('Failed to load components:', err);
      });
  }, []);

  return { nodeTypes };
};

export default useFlowComponents;

