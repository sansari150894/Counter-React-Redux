export const INCREMENT_COUNTER = 'INCREMENT-COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT-COUNTER';

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  };
}
export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  };
}
