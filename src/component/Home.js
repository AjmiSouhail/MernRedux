import React, {  } from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'; 
import axios from 'axios';
import Get_Emp, { Rem_Emp } from '../action/action';
import { useDispatch } from 'react-redux'; 
function Home () {
  const dispatch = useDispatch(); 
  const employe = useSelector((state) =>  state.employes) 
  const  deletEmp = (id)=> { 
    axios.delete(`/delete/${id}`)
      .then(function() {
        dispatch(Rem_Emp(employe._id));
        dispatch(Get_Emp());
    })
      .catch(function(error) { console.log('error', error) });
  }
 return (
<div>
  <h1 className=" bg-white text-center text-primary py-5 " >Liste  Employe</h1>
  <div className='container'>

  <a href="/ajout"><button className="btn btn-sm  btn-success" ><i className="fas fa-edit"></i> Ajouter</button></a>

  <table className='container'>
    <tr className='text-primary '>
      <th className="pb-2"></th>
      <th className="pb-2" >Num</th>
      <th className="pb-2">First Name</th>
      <th className="pb-2">Last Name</th>
      <th className="pb-2">Email</th>
      <th className="pb-2">Contact Number</th>
      <th className="pb-2">dob</th>
      <th className="pb-2">Action</th>
    </tr>      { employe.length && employe.map((item,index)=>

<tr key={item._id} >
 < td className="pb-2"> <Link to={"/detail/"+item._id}className="btn btn-outline-primary d-inline-block" ><i className="fas fa-info-circle "></i> </Link></td>
    <td className="pb-2">
{item.id} </td>
    <td className="pb-2">{item.firstName}</td>
    <td className="pb-2">{item.lastName}</td>
    <td className="pb-2">{item.email}</td>
    <td className="pb-2">{item.contactNumber}</td>
    <td className="pb-2">{item.dob}</td>
    <td className="pb-2">
    <Link to={"/edit/"+item._id}  className="btn btn-sm btn-warning d-inline-block" ><i className="fas fa-edit"></i> Modifier</Link>
<button className="btn btn-sm btn-danger d-inline-block" onClick={()=>deletEmp(item._id)} ><i className="fas fa-trash-alt"></i> Supprimer</button>
  </td>
    </tr> 
    )}
    </table>
    </div></div>
  )}
  export default Home;