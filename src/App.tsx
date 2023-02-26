import React, {useState} from 'react';
import './App.module.css';
import s from "./App.module.css"
import {Button} from "./components/Button";
import {Desktop} from "./components/Desktop";

function App() {
    const initialState = 0
    const maxCount = 5
    const [count, setCount] = useState<number>(initialState)

    const increment = () => {
        count !== maxCount && setCount(count + 1)
    }

    const reset = () => setCount(initialState)
    const isDisabledInc = count === maxCount
    const isDisabledReset = count === initialState
    return (
        <div className={s.container}>
            <div className={s.App}>
                <Desktop count={count} error={isDisabledInc}/>
                <div className={s.buttonsWrapper}>
                    <Button callback={increment} title={'inc'} disabled={isDisabledInc}/>
                    <Button callback={reset} title={'reset'} disabled={isDisabledReset}/>
                </div>
            </div>
        </div>
    );
}

export default App;
