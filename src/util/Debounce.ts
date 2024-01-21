import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, ms = 300) => {

    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value)
        }, ms)
        
        return () => {
            clearTimeout(timer)
        }

    }, [value, ms])
    return debouncedValue;


    // let timeoutId: ReturnType<typeof setTimeout>;
    // return function (this: any, ...args: any[]) {
    //   clearTimeout(timeoutId);
    //   timeoutId = setTimeout(() => fn.apply(this, args), ms);
    // };
  };