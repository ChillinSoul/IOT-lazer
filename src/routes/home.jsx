import { createSignal, createEffect } from "solid-js";

import "../App.css";
import Navbar from "../components/navbar/navbar";

import SensorList from "../components/sensor/sensorList";
import SensorMap from "../components/sensor/heroes/map";
import Sensorlogs from "../components/sensor/heroes/log";

const sensorList = [
    { id: 1, name: "sensor one", status: "Active", x1: "10", y1: "10", x2: "100", y2: "100" },
    { id: 2, name: "sensor two", status: "Active", x1: "150", y1: "150", x2: "200", y2: "175" },
    { id: 3, name: "sensor three", status: "Inactive", x1: "230", y1: "175", x2: "350", y2: "120" },
    { id: 4, name: "sensor four", status: "Active", x1: "400", y1: "100", x2: "450", y2: "10" }
];

const sensorLogs = [
    { sensorId: 1, logs: [
        {id:1, time: "2021-09-01T12:00:00.000Z" },
        {id:2, time: "2021-09-11T12:00:00.000Z" },
        {id:3, time: "2021-10-01T12:00:00.000Z" }]
    },
    { sensorId: 2, logs: [
        {id:1, time: "2021-09-06T12:00:00.000Z" },
        {id:2, time: "2021-09-21T12:00:00.000Z" },
        {id:3, time: "2021-10-11T12:00:00.000Z" }]
    },
    { sensorId: 3, logs: [
        {id:1, time: "2021-09-01T12:00:00.000Z" },
        {id:2, time: "2021-09-11T12:00:00.000Z" },
        {id:3, time: "2021-10-01T12:00:00.000Z" }]
    },
    { sensorId: 4, logs: [
        {id:1, time: "2021-09-01T12:00:00.000Z" },
        {id:2, time: "2021-09-11T12:00:00.000Z" },
        {id:3, time: "2021-10-01T12:00:00.000Z" }]
    }];
export default function Home() {
    const [sensors, setSensors] = createSignal(sensorList);
    const [sensor, setSensor] = createSignal("");
    const [logs, setLogs] = createSignal(sensorLogs);
    const [hero, setHero] = createSignal("map");

    var heroComponents = {
        map: <SensorMap sensors={sensors()} />,
        logs: <Sensorlogs 
                        sensor={sensor} 
                        sensorLogs={logs}
        />
    };

    

    const handleHeroChange = (name) => {
        setHero(name);
    };

    return (
        <div className="main-container">
            <div className="grid-container">
                <Navbar/>
            </div>
            <div className="grid-container">
                <SensorList
                    sensors={sensors}
                    setSensors={setSensors}
                    heroList={Object.keys(heroComponents)}
                    setHero={handleHeroChange}
                    setSensor={setSensor}
                />
            </div>
            <div className="grid-container">{heroComponents[hero()]}</div>
        </div>
    );
}