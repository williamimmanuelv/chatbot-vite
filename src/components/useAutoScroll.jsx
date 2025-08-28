import { useEffect, useRef } from "react";

export function useAutoScroll(dependency){
    const containerRef = useRef(null);

    useEffect(() => {
        const containerElm = containerRef.current;

        if(containerElm){
        containerElm.scrollTop = containerElm.scrollHeight;
        }
    },[dependency])
    return containerRef
}
/////////////////////////////////////////// 
