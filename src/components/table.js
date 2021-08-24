import React, { useState } from 'react'
import { data } from '../data'

// const GetKeys = () => {
//     return Object.keys(data[0]); // each obj has to have same properties
// }

// const RenderJobs = () => {

// }

const Table = () => {
    // const test = data;
    // const keys = GetKeys();
    // for (var i = 0; i < test.length; i++) {
    //     var row = document.createElement('tr');
    //     for (var j = 0; j < keys.length; j++) {
    //         var cell = row.insertCell(j);
    //         cell.innerHTML = data[i][keys[j]];
    //     }
    // }
    return (
        <table id='table'>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Past Opening</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((data, key) => {
                        return (
                          <tr key={key}>
                            <td>{data.company}</td>
                          </tr>
                        );
                })}
                <tr>
                    <td>qweert</td>
                    <td>tyui</td>
                    <td>uipi</td>
                    <td>asdf</td>
                </tr>
                <tr>
                    <td>fghfd</td>
                    <td>hjklhjk</td>
                    <td>zxcv</td>
                    <td>nbmbv</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table
