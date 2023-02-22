import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
export const getEmp = createAsyncThunk('employe/getEmp',async(_,thunkAPI)=>{
    try {
        const res = await fetch('http://localhost:8000/employe');
        const data = await res.json()
        return data;
        }
    catch (err){
        return isRejectedWithValue(err.message)
    }
});

export const getEmpId = createAsyncThunk(
    'employe/updEmp',
    async (id, thunkAPI) => {
      try {
        const res = await fetch(`http://localhost:8000/employeModifier/${id}`, {
          method: 'GET',
        });
        const data = await res.json()
        return data;

    } catch (err) {
        return isRejectedWithValue(err.message);
      }
    }
  );
export const delEmp = createAsyncThunk(
    'employe/delEmp',
    async (id, thunkAPI) => {
      try {
        await fetch(`http://localhost:8000/delete/${id}`, {
          method: 'DELETE',
        });
        return id;
      } catch (err) {
        return isRejectedWithValue(err.message);
      }
    }
  );
export const insertEmp = createAsyncThunk("employe/insertEmp",async (dt, thunkAPI) => {
        try {
            console.log(dt)
        const res = await fetch("http://localhost:8000/ajouter", {
            method: "POST",
            body: JSON.stringify(dt),
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        });         
        console.log("dt")
        console.log(res)
        const data = await res.json();
        return data;
      } catch (err) {
        return isRejectedWithValue(err.message);
      }
    }
  );
  export const editEmp = createAsyncThunk(
    "employe/editEmp",
    async (dt) => {
      try {
        const res = await fetch(`http://localhost:8000/modifier/${dt._id}`, {
          method: "POST",
          body: JSON.stringify(dt),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const data = await res.json();

        return data;
      } catch (error) {
        return isRejectedWithValue(error.message);
      }
    }
  );
const initialState = {
    data : [],
    status : false,
};
const employeSlice = createSlice({
name :'employes',
initialState ,
reducers : {},
extraReducers : {
    [getEmp.fulfilled] :(state,{payload})=>{
        state.data = payload;
        state.status=true;
    },
    [getEmp.pending] :(state,)=>{  state.status=false;},
    [getEmp.rejected] :(state)=>{  state.status=false;},
    [insertEmp.fulfilled] :(state,{payload})=>{
        state.data.push(payload);
        state.status=true;
    },
    [insertEmp.pending] :(state)=>{  state.status=false;},
    [insertEmp.rejected] :(state)=>{  state.status=false;},
    [delEmp.pending]: (state) => {
        state.loading = false;
        },
    [delEmp.fulfilled]: (state, {payload}) => {
        state.data = state.data.filter((el) => el._id !== payload._id);
        state.loading = true;
        },
    [delEmp.rejected]: (state) => {
        state.loading = false;
        },
        [getEmpId.pending]: (state) => {
            state.loading = false;
        },
         
          [getEmpId.fulfilled] : (state, {payload}) => {
            state.loading = true;
            state.data = payload;
          },
          [getEmpId.rejected]: (state) => {
            state.loading = false;
          },
          [editEmp.pending]: (state) => {
            state.loading = false;
          },
          [editEmp.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.data = payload;
          },
          [editEmp.rejected]: (state) => {
            state.loading = false;
           
          },

},
});
export default employeSlice.reducer;