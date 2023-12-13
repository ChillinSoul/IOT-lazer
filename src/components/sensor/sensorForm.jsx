import { createSignal, createEffect } from "solid-js";
import { greater } from "../utils/string";
import DynamicForm from "../utils/form";
export default (props) => {
    const [newSensor, setNewSensor] = createSignal(props.emptySensor);
    const [nameError, setNameError] = createSignal("");

    createEffect(() => {
        if (!props.add()) {
            setNameError("");
        }
    });

    const sort = () => {
        const sorted = props.sensors().sort((a, b) => greater(a.name, b.name));
        props.setSensors(sorted);
    };

    const handleChange = (key, value) => {
        setNewSensor({ ...newSensor(), [key]: value });
        if (key === "name" && value === "") {
            setNameError("Name cannot be empty");
        } else {
            setNameError("");
        }
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (newSensor().name === "") {
            setNameError("Name cannot be empty");
            return;
        }

        props.setAdd(!props.add());

        const sensorId = newSensor().id;
        const sensorList = props.sensors();
        const existingSensorIndex = sensorList.findIndex((sensor) => sensor.id === sensorId);

        if (existingSensorIndex !== -1) {
            const updatedSensorList = [
                ...sensorList.slice(0, existingSensorIndex),
                newSensor(),
                ...sensorList.slice(existingSensorIndex + 1),
            ];
            props.setSensors(updatedSensorList);
        } else {
            props.setSensors([...sensorList, newSensor()]);
        }
        sort();
        setNewSensor(props.emptySensor);
        setNameError("");
    };

    return (
        <>
            <DynamicForm
                emptyObject={newSensor}
                showSignal={props.add}
                submitHandler={submitHandler}
                handleChange={handleChange}/>
        
        </>
    );
};
