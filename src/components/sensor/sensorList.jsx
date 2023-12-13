import SensorListItem from "./sensorListItem";
import SensorAddForm from "./sensorForm";
import SensorAddButton from "./sensorAddButton";
import { greater } from "../utils/string";
import { For, createSignal, createEffect } from "solid-js";
export default (props) => {
    const emptySensor = { id: 0, name: "", status: "Inactive", x1: 0, y1: 0, x2: 0, y2: 0 };
    const [add, setAdd] = createSignal(false);
    createEffect(() => {
      const sorted = props.sensors.sort((a, b) =>greater( a.name > b.name));
      props.setSensors(sorted);
    });
    return (
      <ul class="sensor-list">
        <SensorAddButton
        add={add}
        setAdd={setAdd}
        />
        <SensorAddForm
        emptySensor={emptySensor}
        setSensors={ props.setSensors}
        add={add}
        setAdd={setAdd}
        sensors={props.sensors}
        /> 
        <For each = {props.sensors()}>
            {(sensor) => (
                <SensorListItem
                sensor={sensor}
                status={sensor.status}
                heroList={props.heroList}
                setHero={props.setHero}
                setSensor={props.setSensor}
                setSensors={props.setSensors}
                sensors={props.sensors}
                />
            )}
        </For>
      </ul>
    );
  }
  