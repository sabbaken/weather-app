import React, {Component} from 'react';
import { IoMdSearch } from "react-icons/io";


class SearchBar extends Component {
    state = {
        city:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className="flex bg-white shadow-md rounded-md m-2 p-4 mb-4">
                <div className="w-full">
                        <input
                            className="appearance-none w-full bg-transparent border-none text-gray-700 leading-tight focus:outline-none"
                            type="text" id="cityName" placeholder="City name" onChange={this.handleChange}/>
                </div>
                <div>
                    <button className="" onClick={this.handleSubmit}>
                        <IoMdSearch color="#A0AEC0" size="1.4rem"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;