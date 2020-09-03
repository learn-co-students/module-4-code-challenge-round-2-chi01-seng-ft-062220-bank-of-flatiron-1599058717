import React from "react";

const Sort = (props) =>{
    return (
        <div className="ui segment">
            <h5>Sort:</h5>
            <select name="sortBy" id="sort" onChange={(e) => props.handleSort(e.target.value)}>
            <option value="Category">Cat.</option>
            <option value="Description">Desc</option>
            </select>
        </div>
    )
}

export default Sort 