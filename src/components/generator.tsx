import React, { Component } from 'react';
import '../App.css';
import names from '../assets/name.json'
import surnames from '../assets/secondname.json'
import ages from '../assets/age.json'
import streets from '../assets/streets.json'
import getRandom from "./Random/random";
import People from "./People/people";

class Generator extends Component {
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
            name: this.getRandomName(),
            surname: this.getRandomSurnames(),
            age: this.getRandomSurnames(),
            street: this.getRandomStreet()
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
                    <button onClick={this.handleClick}></button>
                </div>
            </div>
        );
    }
}