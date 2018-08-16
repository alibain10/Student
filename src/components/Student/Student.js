import React from "react";


const Student = (props) => (
    
            <div className="student">
                <p>ID: {props.id}</p>
                <p>Name: {props.name}</p>
                <p>Favorit Subject: {props.favoriteSubject}</p>
                <button onClick={() => props.rollCall(props.name, props.favoritSubject)}>Call on student</button>
            </div>
);

export default Student;