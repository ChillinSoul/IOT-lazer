import { createEffect, createSignal } from "solid-js";
import "./sensorList.css";
export default (props) => {
    const [buttonText, setButtonText] = createSignal("Add Sensor");
    createEffect(() => {
        if (props.add()) {
            setButtonText("Cancel");
        }else{
            setButtonText("Add Sensor");
        }
    });
    return (
        <button class="sensor-list-item" onClick={() => props.setAdd(!props.add())}>{buttonText()}</button>
    );
}
