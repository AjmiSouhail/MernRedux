import { ADD_EMP, GET_EMP, REM_EMP, UPD_EMP } from "../action/action";

const initialState = {
    employes : []
}
const Reducer = (state=initialState,action) =>{
    switch (action.type ){
        case GET_EMP : 
            return action.employes ; 
        case ADD_EMP:
            return [action.employe, ...state];
        case REM_EMP:
            return state.filter(employe => employe._id !== action._id);
        case UPD_EMP:
            return state.map(function(employe)
            {
            if (employe._id === action.employe._id) 
            {
                console.log(employe._id)
                return {
                    ...employe,
                    id: action.employe.id,
                    firstName: action.employe.firstName,
                    lastName: action.employe.lastName,
                    email: action.employe.email,
                    contactNumber: action.employe.contactNumber,
                    dob: action.employe.dob,

                    }
            }
            else return employe;
        })
        default : 
                    return state;
    }
}
export default Reducer ;