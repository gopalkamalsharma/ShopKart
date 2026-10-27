import React from "react";
import { useState, useEffect } from "react";

export default function Practice() {
    const [value, setValue] = useState("");
    console.log(value);
    const submit = e => {e.preventDefault();console.log(value);};
    return (
        <div>
            <form onSubmit={submit}>
                <label> First Name: </label>
                <input value={value} onChange={e => setValue(e.target.value)} />
                <input type="submit"/>
            </form>
        </div>

    );
}



