import React, { Component } from 'react';
import '../App.css';
import names from '../assets/name.json'
import surnames from '../assets/secondname.json'
import ages from '../assets/age.json'
import streets from '../assets/streets.json'
import getRandom from "./Random/random";

export default class Generator extends Component {
    state = {
        people: [
            {
                name: "Egor",
                surname: "Vorobyov",
                age: "19",
                street: "Jakubova"
            }
        ]
    };

    getRandomName = () => getRandom(names);
    getRandomSurnames = () => getRandom(surnames);
    getRandomAge = () => getRandom(ages);
    getRandomStreet = () => getRandom(streets);

    createPeople = () => {
        this.setState({
            people: [
                ...this.state.people,
                {
                    name: this.getRandomName(),
                    surname: this.getRandomSurnames(),
                    age: this.getRandomSurnames(),
                    street: this.getRandomStreet()
                }
            ]
        })
    };

    handleClick = () => this.createPeople();

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const people: Array<object> = this.state.people.map((people) => (
            <div>
                <People name={people.name} surname={people.surname} street={people.street} age={people.age}/>
            </div> ));

        return (
            <div>
                <div>
                    <div className="header">
                        Radnomize
                        <button className="button" onClick={this.handleClick}>click</button>
                    </div>
                    <ul style={{listStyleType:"none"}}>
                        {people}
                    </ul>
                </div>
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
)