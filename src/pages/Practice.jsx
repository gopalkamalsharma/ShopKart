import { useState, useEffect } from "react";
import {setItem, getItem} from '../utils/localStorage'
export default function Practice() {
    const [count, setCount] = useState(()=>{
        const item = getItem("count");
        return item || 0;
    });

    useEffect(()=>{
        setItem('count', count)
    }, [count])
    
    return (
        <>
            <div>
                <button onClick={()=>setCount(count + 1)}>Increament</button>
                <p>{count}</p>
                <button onClick={()=>setCount(count - 1)}>Decreament</button>
            </div>
        </>

    );
}