import { combineReducers } from 'redux';
import employes from "./Reducer"
import employe from './ReducerEmp'
export default combineReducers({
employes: employes,
employe : employe,
});