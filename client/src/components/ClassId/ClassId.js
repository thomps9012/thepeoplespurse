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
            <h2>Enter Class Code Below</h2>
            <div className="classId">
                
                <div class="input-group mb-3">
                    
                    <div class="col-auto">
                        
                        <br></br>
                        <input type="classid" class="form-control" id="classid" />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ClassId;