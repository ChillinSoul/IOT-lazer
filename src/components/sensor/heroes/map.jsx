import Graph from "../graphs/graph";
import {createSignal} from "solid-js";
export default (props) => {
    const graphData = () => props.sensors.map(sensor => {
        return [{
          x: sensor.x1,
          y: sensor.y1,
          label: sensor.name,
          color: sensor.status === 'Active' ? '#acc12f' : '#9b2915'
        },
        {
            x: sensor.x2,
            y: sensor.y2,
            label: sensor.name,
            color: sensor.status === 'Active' ? '#77867f' : '#77867f'
          }];
      });

    

    
      return <Graph data={[graphData()]} />
}

