import React from "react";

function CardFilter({filterChange}) {
    return(
        <div className="filter">
            <a className="icon" href="#" data-bs-toggle='dropdown'>
                <i className="bi bi-three-dots"></i>
            </a>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                </li>
                <li>
                    <a className="dropdown-item" onClick={() => filterChange('Hoje')}>
                        Hoje 
                    </a>
                </li>
                <li>
                    <a className="dropdown-item"
                    onClick={() => filterChange('Esse mês')}
                    >
                        Esse mês
                    </a>
                </li>
                <li>
                    <a className="dropdown-item"
                    onClick={() => filterChange('Esse ano')}
                    >
                        Esse ano
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CardFilter;