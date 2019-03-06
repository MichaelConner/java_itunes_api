import React from 'react';

const ChartSelector = (props) => {
    return(
        <select id="chart-selector" onChange={props.handleSelectChange}>
           {props.genres.map(genre => {
               return <option key={genre.name} value={genre.url}>{genre.name}</option>
           })}
        </select>
    )
}

export default ChartSelector;