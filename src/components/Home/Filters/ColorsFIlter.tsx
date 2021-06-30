import React from "react";

const ColorsFilter = () =>{
    return(
        <div className="sidebar__item sidebar__item__color--option">
            <h4>Colors</h4>
                <div className={`sidebar__item__color sidebar__item__color--red`}>
                    <label>

                        <input type="checkbox" id={`color_red`} />
                    </label>
                </div>
            <div className={`sidebar__item__color sidebar__item__color--yellow`}>
                <label>
                    <input type="checkbox" id={`color_yellow`} />
                </label>
            </div>
            <div className={`sidebar__item__color sidebar__item__color--blue`}>
                <label>

                    <input type="checkbox" id={`color_blue`} />
                </label>
            </div>
            <div className={`sidebar__item__color sidebar__item__color--grey`}>
                <label>

                    <input type="checkbox" id={`color_grey`} />
                </label>
            </div>

        </div>
    )
}

export default ColorsFilter
