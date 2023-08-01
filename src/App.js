import React, {useEffect, useRef} from 'react';

const App = () => {
    let count = 1;
let object = useRef();


  useEffect(()=>{
      console.log(count)
  })
    const handleIncrement = () => {
        count += 1;
        console.log(count);
    };

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={handleIncrement}>Increment Count</button>
        </div>
    );
};

export { App };
