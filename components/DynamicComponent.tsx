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

  console.log('props:', props);

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

  // this part is
  if (!Component) {
    return (
      <div className="border bg-slate-100 border border-white text-slate-900 w-32 p-6 h-full flex items-center justify-center">
        Component not found
      </div>
    );
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
};

export default DynamicComponent;
