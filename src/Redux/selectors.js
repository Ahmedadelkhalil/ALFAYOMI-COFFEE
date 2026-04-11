import { useRef } from 'react';

/**
 * Custom hook for creating memoized Redux selectors
 * Prevents unnecessary re-renders when using useSelector
 * @param {Function} selectorFn - The selector function
 * @param {Array} dependencies - Dependencies array for the selector
 * @returns {*} Memoized selector result
 */
export const useMemoziedSelector = (selectorFn, dependencies = []) => {
  const cacheRef = useRef({ deps: dependencies, result: null, selector: null });

  // Create selector if it doesn't exist
  if (!cacheRef.current.selector) {
    cacheRef.current.selector = selectorFn;
  }

  // Check if dependencies changed
  const depsChanged = JSON.stringify(cacheRef.current.deps) !== JSON.stringify(dependencies);

  if (depsChanged) {
    cacheRef.current.deps = dependencies;
    cacheRef.current.result = null;
  }

  return cacheRef.current.result;
};

/**
 * Utility to create memoized selectors for Redux
 * Returns the same object reference if the selected values haven't changed
 * @param {Function} selector - Redux selector function
 * @param {*} state - Redux state
 * @returns {*} Memoized result
 */
export const createMemoizedSelector = () => {
  let prevState = null;
  let prevResult = null;

  return (selector, state) => {
    if (prevState === state && prevResult !== null) {
      return prevResult;
    }
    const result = selector(state);
    prevState = state;
    prevResult = result;
    return result;
  };
};
