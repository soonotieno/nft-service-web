import React from "react";
import {Card} from "antd";
import Suggestion from "./Suggestion"
import "./SuggestionList.scss"

function SuggestionList(){
    return (
        <Card title="Suggestios for you" size="small">
            <Suggestion />
            <Suggestion />
            <Suggestion />
        </Card>
    )
};

export default SuggestionList;