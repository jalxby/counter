import React, {FC} from 'react';
import s from "./Desktop.module.css"

type DesktopType = {
    count: number
    error: boolean
}

export const Desktop: FC<DesktopType> = ({count, error}) => {
    return (
        <div className={s.desktop}>
            <span className={`${error ? s.overCount : s.counter}`}>{count}</span>
        </div>
    );
};

