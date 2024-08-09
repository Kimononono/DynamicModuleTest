import React from 'react';
import useComponentList from './useComponentList';

const ComponentGallery = ({ createNode }) => {
  const componentList = useComponentList();

  return (
    <div>
      {componentList.map((component, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{component.metadata.name}</h3>
          <p>{component.metadata.description}</p>
          <component.referenceToComponentFunction />
          <button onClick={() => createNode(component.metadata.name)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ComponentGallery;

