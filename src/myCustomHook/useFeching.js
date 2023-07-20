import {useEffect, useState} from "react";

export const useFetching = ( callback , deps= 0 )=> {

   const [response,setResponse] = useState(null)
   const [error,setError] = useState('')
   const [isLoading,setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        callback
            .then(({data}) => setResponse(data))
            .catch((e) => setError(e.message))
            .finally(()=> setIsLoading(false))
    },[deps])

    return {response,error,isLoading}
}


