import React, { Component } from "react";

import students from "../../students.json";
import Student from "../Student";

class Classroom extends Component {

    state = {
        students: students
    };

    rollCall = (name, favoriteSubjec) => {
        alert(`Hellow my name is ${name} `)
    }
    render() {
        return (
            <div>
                <h1>Classroom</h1>
                {this.state.students.map(student => (

                    <Student
                        id={student.id}
                        name={student.name}
                        favoriteSubject={student.favoriteSubject}
                        rollCall={this.rollCall}
                    />
                ))}

            </div>
        )

    }
}

export default Classroom;