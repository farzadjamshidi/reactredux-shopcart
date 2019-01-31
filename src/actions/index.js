export const increementCounter = (counter) =>({
    type : 'INCREEMENT_COUNTER',
    counter : counter

})

export const deleteCounter = (counter) =>({
    type : 'DELETE_COUNTER',
    counter : counter

})

export const resetCounters = () =>({
    type : 'RESET_COUNTERS'
})