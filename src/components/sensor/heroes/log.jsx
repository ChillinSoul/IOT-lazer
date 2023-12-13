
export default (props) => {
    return (
        <>
            <div>
                <h1>Logs</h1>
                <span>for {props.sensor().name}</span>
            </div>
        </>
        
    );
}