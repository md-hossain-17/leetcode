/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
const findDelayedArrivalTime = (arrivalTime, delayedTime) => {
    return (arrivalTime + delayedTime) % 24;
};
