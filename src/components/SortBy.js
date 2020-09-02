import React from "react";

const SortBy = (props) =>{
    return (
        <div className="ui segment">
            <h5>Sort Transactions By:</h5>
            <select name="sortBy" id="sort" onChange={(event) => props.handleSort(event.target.value)}>
            <option value="Category">Category</option>
            <option value="Description">Description</option>
            </select>
        </div>
    )
}

export default SortBy