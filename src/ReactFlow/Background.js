import { useContext } from 'react';
import { FlowContext } from './index';

const Background = () => {
  const context = useContext(FlowContext);
  console.log('context', context)
  return (
    <svg className="react-flow-background">
      <defs>
        <pattern id="circle" x="10" y="10" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="10" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#circle)" />
    </svg>
  );
};

export { Background }