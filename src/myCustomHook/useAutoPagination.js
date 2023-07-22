import {useEffect, useRef, useState} from "react";
import axios from "axios";

function useFetching(callback, deps = 0) {

    const [ response, setResponse] = useState(null);
    const [ isLoading, setIsLoading] = useState(false);
    const [ data, setData] = useState([]);
    const [ error, setError] = useState(null);

    useEffect(()=>{
        (async function () {
            setIsLoading(true)
            try {
                const response = await callback;
                setResponse(response)
                setData(prevState => [...prevState,...response.data])
            }catch (e) {
                setError(e)
            }finally {
                setIsLoading(false)
            }
        }())
    },[deps])

    return { response, data, isLoading, error }
}

function useScrollPagination  (url,limit) {

    const lastElementRef = useRef();
    const observer = useRef();

    const [page,setPage] = useState(1)

    const {data,response,isLoading,error} = useFetching(axios.get(url,{params:{_page:page,_limit:limit}}),page)

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) observer.current?.disconnect();

        const callback = (entries, observer) => {
            if (entries[0].isIntersecting && page < Math.ceil(+response?.headers['x-total-count'] / limit) && limit >=10) {
                setPage((prevPage) => prevPage + 1);
            }
        };

        observer.current = new IntersectionObserver(callback);
        if (lastElementRef.current) {
            observer.current.observe(lastElementRef.current);
        }
    }, [isLoading]);

    return { lastElementRef,data,isLoading,error };
};

export { useScrollPagination };
