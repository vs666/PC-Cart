import React, { Component } from 'react';
import { InputGroup, FormControl, Dropdown, DropdownButton, Button } from 'react-bootstrap'
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value

        this.setState({
            query: value
        });
    }
    find = (event) => {
        event.preventDefault();
        console.log();
        const q = this.state.query;
        var data = { query: q.toString() };
        console.log(data);
        axios
            .post('http://192.168.0.105:5000/search', data)
            .then((response) => {
                console.log(response);
                if (response.data.url == '///') {
                    alert("Search failed because : ");
                }
                else {
                    window.location.href = response.data.url
                    // window.location.href = 'localhost:3000/'; // add the website url here
                }
            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <FormControl aria-describedby="basic-addon1" value={this.state.query} onChange={this.handleChange} name="searchbox" placeholder="Search" />
                    <Button onClick={this.find}>Go</Button>
                </InputGroup>

            </div>
        );
    }

}


export default SearchBar;