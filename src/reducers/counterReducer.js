
export default (state = [], action) => {
    switch (action.type){

        case 'INCREEMENT_COUNTER':
            const prevcounters = [...state];
            prevcounters.find(c => c.id === action.counter.id).value = prevcounters.find(c => c.id === action.counter.id).value+1;
            const newcounters=[...prevcounters];
            return [...newcounters];

        case 'DELETE_COUNTER':
            const deletedcounters = state.filter(c => c.id !== action.counter.id);
            return [...deletedcounters];

        case 'RESET_COUNTERS':
            const resetcounters = state.map(c => {
                c.value = 0;
                return c;
            });
            return [...resetcounters];

        default :
            return state;


    }

}



//handleDecreement = selectedcounter => {
 //   const prevcounters = this.state.counters;
//    const newcounters = prevcounters.find(c => c.id === selectedcounter.id).value--;
//    this.setState({newcounters});
//}
