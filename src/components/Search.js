import React from 'react';

export default function Search(props) {
    return (
        <form>
            <input onChange={props.handleSearchChange} type='text' value={props.suchwort}></input>
        </form>
    )
}