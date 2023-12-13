export default ({ emptyObject, showSignal, submitHandler, handleChange }) => {
    const keys = Object.keys(emptyObject());
    return (
        <>
            {showSignal() && (
                <form>
                    <For each={keys}>
                        {(key) => (
                            <div key={key}>
                                <label htmlFor={key}>{key}:</label>
                                <input
                                    id={key}
                                    value={emptyObject()[key]}
                                    onInput={(event) => handleChange(key, event.currentTarget.value)}
                                />
                            </div>
                        )}
                    </For>
                    <button type="submit" onClick={submitHandler}>
                        Validate
                    </button>
                </form>
            )}
        </>
    );
};
