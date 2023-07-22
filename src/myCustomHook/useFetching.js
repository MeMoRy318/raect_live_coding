import {useEffect, useState} from "react";

export function useFetching  (callback,deps = 0)  {

    const [ isLoading, setIsLoading] = useState(false);
    const [ data, setData] = useState(null);
    const [ error, setError] = useState('');

    useEffect(()=>{
        (async function () {
            setIsLoading(true)
            try {
                const {data} = await callback;
                setData(data)
            }catch (e) {
                setError(e)
            }finally {
                setIsLoading(false)
            }
        }())
    },[deps])

    return { data, isLoading, error }
}
