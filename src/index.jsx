import React from "react";
import ReactDom from "react-dom";

const App = () => {
    return (
        <>
            <div style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#252525"
            }}>
                <p></p>

            </div>
        </>
    )
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);