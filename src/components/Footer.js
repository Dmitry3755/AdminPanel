import React, { useEffect, useState } from 'react';
import { Component } from "react";

function footer() {
    return (
        <div class="footer row-1">
            <div >
                <div class="row-1">
                    <div class="footer-text"><small>&#9400;2023 Панель администратора Россия, Ивановская обл., г. Иваново.</small></div><div class="col-md-3 col-auto "></div><div class="col-md-3 col-auto"></div>
                </div>
            </div>
        </div>
    )
}

export class Footer extends Component {
    render() {
        return (
            <div>{footer()}</div>
        )
    }
}

export default Footer
