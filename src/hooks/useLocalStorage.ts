'use client';

import { useEffect, useState } from 'react';

/***
 * @description Custom hook to manage localStorage with automatic JSON parsing and stringifying.
 * @returns Array with current value and setter function, just like useState (can be used the same way).
 * @param key: A string that identifies the localStorage item
 * @param initialValue: The default value to use if nothing exists in localStorage yet. Can be a direct value or a function that returns a value
 ***/
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
	// on first render, hooj tries to load existing data from localStorage
	// if it exists, it will parsed JSON back in original type and set it as state
	// if it doesn't exist, it will use the initialValue
	const [value, setValue] = useState<T>(() => {
		if (typeof window !== 'undefined') {
			const jsonValue = localStorage.getItem(key);
			if (jsonValue !== null) return JSON.parse(jsonValue);
		}
		// hook checks if initialValue is a function
		// if so, it calls the function and uses its return value as state
		// if not, it uses initialValue directly as state
		if (typeof initialValue === 'function') {
			return (initialValue as () => T)();
		}
		// if window is not defined, we are in a server environment (e.g. during SSR)
		// so we just use the initialValue directly
		else {
			return initialValue;
		}
	});

	// whenever value or key changes, useEffect is triggered and saves the changed current value to localStorage as JSON string
	// this ensures that localStorage is always in sync with the state
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as [typeof value, typeof setValue];
}
