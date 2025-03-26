import React from "react";
import { use } from "react";

function FetchData(props) {
    const data = use(fetch(props.url).then((res) => res.json()));
    return <pre> {JSON.stringify(data)}</pre>;
}

export default FetchData;
