import { For } from 'solid-js';
import './graph.css';
export default ({ data }) => {
  const renderGrid = () => {
    return (
      <g>
        <For each={[...Array(10).keys()]}>
          {(i) => (
            <>
              <line
                x1={i * 50}
                y1="0"
                x2={i * 50}
                y2="450"
                strokeWidth="1"
                stroke="black"
              />
              <line
                x1="0"
                y1={i * 50}
                x2="450"
                y2={i * 50}
                strokeWidth="1"
                stroke="black"
              />
              <text x={i * 50 } y="470" fontSize="12" fill="black">
                {i * 50}
              </text>
              { i !== 9 && (
                <text x="470" y={i * 50 } fontSize="12" fill="black">
                  {i * 50}
                </text>
              )}
              
            </>
          )}
        </For>
      </g>
    );
  };

  const renderLine = (point1, point2) => {
    
    return (
      <line
        x1={point1.x}
        y1={point1.y}
        x2={point2.x}
        y2={point2.y}
        stroke-width="5"
        stroke="black"
      />
    );
  };

  const renderCircle = (point) => {
    return (
      <circle
        cx={point.x}
        cy={point.y}
        r="10"
        fill={point.color}
      />
    );
  };

  const renderLabel = (point) => {
    return point.label ? (
      <text x={point.x + 10} y={point.y + 5}>
        {point.label}
      </text>
    ) : null;
  };

  return (
    <svg viewBox="0 0 500 500">
      {renderGrid()}
      <For each={data}>
        {(points) => (
          <For each={points}>
            {(point) => (
              <>
                {renderLine(point[0], point[1])}
                {renderCircle(point[0])}
                {renderCircle(point[1])}
                {renderLabel(point[0])}
                {renderLabel(point[1])}
              </>
            )}
          </For>
        )}
      </For>
    </svg>
  );
}


