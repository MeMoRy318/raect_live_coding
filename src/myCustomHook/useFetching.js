import {useEffect, useState} from "react";

export const useFetching = (callback,deps = 0) => {

    const [ response, setResponse] = useState(null);
    const [ isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState('');

    useEffect(()=>{
        (async function () {
            setIsLoading(true)
            try {
                const response = await callback;
                 setResponse(response)
            }catch (e) {
                setError(e.message)
            }finally {
                setIsLoading(false)
            }
        }())
    },[deps])

    return { response, isLoading, error }
}
