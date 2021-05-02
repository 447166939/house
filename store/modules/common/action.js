import { createActions } from 'redux-actions'
const actions= createActions(
    {
        'TEMP_SET_INFO':(result)=>({result}),},
        'TEMP_GET_INFO',
)

export default actions