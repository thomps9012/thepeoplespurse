import React, { Component } from 'react';
import "./ClassId.css";

class ClassId extends Component {
    constructor() {
        super();
        this.state = {
            checkBoxDefaultStatus: false
        }
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect() {
        this.setState({
            checkBoxDefaultStatus: !this.state.checkBoxDefaultStatus
        })
    }

    render() {
        return (
            <>
                <br></br>
                <h2>Enter Class Code Below</h2>
                <div className="classId">

                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" id="classid" />
                    </div>
                </div>
            </>
        )
    }
}

export default ClassId;