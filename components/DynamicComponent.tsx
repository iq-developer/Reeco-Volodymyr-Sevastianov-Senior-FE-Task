'use client';

import React, { useState, useEffect } from 'react';

interface DynamicComponentProps {
  props: { componentName: string };
  [key: string]: any;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ props }) => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const importedComponent = await import(`./${props.componentName}`);
        setComponent(() => importedComponent.default);
      } catch (error) {
        console.error(`Component ${props.componentName} not found`, error);
        setComponent(null);
      }
    };

    loadComponent();
  }, [props.componentName]);

  if (!Component) {
    return <div>Component not found</div>;
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default DynamicComponent;
