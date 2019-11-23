import React from "react";

const People = ({name, surname, age, street}) => (
    <div className="people">
            <div>{surname + " " + name}</div>
            <div>Age:{age}</div>
            <div>Street:{street}</div>
    </div>
);


export default People;