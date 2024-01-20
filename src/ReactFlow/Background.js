import { useContext } from 'react';
import { FlowContext } from './index';
import { MAX_CIRCLE_R, MAX_WIDTH_HEIGHT, MAX_SCALE } from './constant';

const Background = () => {
  const { translatePosition: { x, y }, scale } = useContext(FlowContext);

  const pattenWidthHeight = MAX_WIDTH_HEIGHT / MAX_SCALE * scale;
  const circleR = MAX_CIRCLE_R / MAX_SCALE * scale;

  return (
    <svg className="react-flow-background">
      <defs>
        <pattern
          id="circle"
          x={x}
          y={y}
          width={pattenWidthHeight}
          height={pattenWidthHeight}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={circleR} cy={circleR} r={circleR} />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#circle)" />
    </svg>
  );
};

export { Background }