import React from "react";
import axios from "axios";

class MsgList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MsgList:[]
        };
    }


    handleClick = () => {
        axios.
        get("http://laravel.test/api/Samples").
        then(res => console.log(res)).
        catch(err => alert(err));
    };

    render() {
        return  (
            <>
                <button onClick={this.handleClick}>取得</button>
            </>
        );
    }
}

export default MsgList;