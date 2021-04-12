import './StatusPage.scss';
import React, { useEffect, useState, useContext } from 'react';


const StatusPage = (props) => {

    return (
        <div className="Message">
            <div>
                <h4>Report is successful submitted! </h4>
                <i class="far fa-smile-wink"></i>
            </div>
        </div>
    )
}

export default StatusPage;