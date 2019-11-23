import React from 'react';
import '../App.css';
import names from '../assets/name.json'
import surnames from '../assets/secondname.json'
import ages from '../assets/age.json'
import streets from '../assets/streets.json'
import getRandom from "./random";

class App extends React.Component{
    state = {
        people: [
            {
                name: "NAME",
                surname: "SURNAME",
                street: "STREET",
                age: "AGE"
            }
        ],
    };

    getRandomName = () => getRandom(names);
    getRandomSurname = () => getRandom(surnames);
    getRandomAge = () => getRandom(ages);
    getRandomStreet = () => getRandom(streets);

    createPeople = () => {
        this.setState({
            people: [
                ...this.state.people,
                {
                    name: this.getRandomName(),
                    surname: this.getRandomSurname(),
                    age: this.getRandomAge(),
                    street: this.getRandomStreet(),
                }
            ]
        })
    };

    handleClicked = () => this.createPeople();

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const people: Array<object> = this.state.people.map((people) => (
            <div>
                <People name={people.name} surname={people.surname} street={people.street} age={people.age}/>
            </div> ));
        return (
            <div>
                <div className="header">
                    Radnomize
                    <button className="button" onClick={this.handleClicked}>click</button>
                </div>
                <ul style={{listStyleType:"none"}}>
                    {people}
                </ul>
            </div>
        );
    }
}

// @ts-ignore
const People = ({name, surname, age, street}) => (
    <div className="people">
        <div>{surname + " " + name}</div>
        <div>Age:{age}</div>
        <div>Street:{street}</div>
    </div>
);

export default App;