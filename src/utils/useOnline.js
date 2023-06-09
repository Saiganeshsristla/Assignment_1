import { off } from "process";
import { useEffect, useState } from "react";

const useOnline = function(){
    const [isOnline, setIsOnline] = useState(true);

    function onlineHelper(){
        setIsOnline(true);
    }

    function offlineHelper(){
        setIsOnline(false);
    }

    useEffect(() => {
        window.addEventListener("online", onlineHelper);
        window.addEventListener("offline", offlineHelper);

        return function(){
            window.removeEventListener("online", onlineHelper);
            window.removeEventListener("offline", offlineHelper);
        }
    },[])

    return isOnline;
}

export default useOnline;