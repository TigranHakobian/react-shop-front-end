import React from "react";

const CategoryFilter = () =>{
    return(
        <div className="sidebar__item">
            <h4>Categories</h4>
            <ul>
                    <li >
                        <span>"{"category.title"}"</span>
                    </li>
            </ul>
        </div>
    )
}

export default CategoryFilter
