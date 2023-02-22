import axios from "axios";

export const GET_EMP = 'GET_EMP';
export const ADD_EMP = 'ADD_EMP';
export const SET_EMP = 'SET_EMP';
export const REM_EMP = 'REM_EMP';
export const UPD_EMP = 'UPD_EMP';

export function Get_Emp() {
    return function(dispatch) {
      return axios.get('/employe')
        .then((response) =>{
          dispatch({type: GET_EMP, employes : response.data})
        })
        .catch(function(error) { console.log('error', error); });
    };
  };
  export function Add_Emp(employe) {
    return {
      type: ADD_EMP,
      employe: employe,
    };
  };
  export function Set_Emp(employe) {
    return {
      type: SET_EMP,
      employe: employe,
    };
  };
  export function Rem_Emp(_id) {
    console.log(_id)
    return {
      type: REM_EMP,
      _id: _id,
    };
  };
  export function Udp_Emp(employe) {
    return {
      type: UPD_EMP,
      employe: employe,
    };
  }
  


export default Get_Emp ;