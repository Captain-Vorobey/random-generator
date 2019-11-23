import React from "react";

// @ts-ignore
const People = ({name, surname, age, street}) => (
    <div className="people">
            <div>{surname + " " + name}</div>
            <div>Age:{age}</div>
            <div>Street:{street}</div>
    </div>
);

export default People;