export default (props) => {
    return (
        <>
            <div class = "gradient">
                <h1>update</h1>
                <span> {props.sensor().name}</span>
            </div>
        </>
        
    );
}