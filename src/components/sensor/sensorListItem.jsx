import { createSignal, createEffect, For } from 'solid-js';
import Form from './sensorForm';

export default (props) => {
    const optionList = ["update", "delete", ...props.heroList];
    const [open, setOpen] = createSignal(false);
    const [update, setUpdate] = createSignal(false);
    const handleOptionClick = (option) => {
        if (option === "update") {
            setUpdate(!update());
        } else if (option === "delete") {
            props.setSensors(props.sensors().filter((sensor) => sensor.id !== props.sensor.id));
        } else {
            props.setHero(option);
            props.setSensor(props.sensor);
        }
        setOpen(false);
    };

    return (
        <li class="sensor-list-item" onClick={() => setOpen(!open())}>
            <span>{props.sensor.name}</span>
            <span>{props.sensor.status}</span>
            {open() && !update() && (
                <For each={optionList}>
                    {(option) => (
                        <button class = "sensor-list-item-option" onClick={() => handleOptionClick(option)}>{option}</button>
                    )}
                </For>
            )}
            <Form
                emptySensor={props.sensor}
                setSensors={props.setSensors}
                sensors={props.sensors}
                add={update}
                setAdd={setUpdate}
            />
        </li>
    );
};
