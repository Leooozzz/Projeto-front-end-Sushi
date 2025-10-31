import { create } from "zustand";

type State={
    name:string;
    address:{
        street:string,
        number:string,
        complement?:string|undefined,
        district:string,
        city:string,
        state:string
    }
}
type Actions={
    setName:(name:State['name'])=>void;
    setAddress:(address:State['address'])=>void

}
const InitialState:State={
    name:'',
    address:{
        street:'',
        number:'',
        complement: '',
        district:'',
        city:'',
        state:''
    }
}
export const UseCheckutStore=create<State & Actions>()(set=>({
    ...InitialState,
    setName:(name)=>set(state=>({...state,name})),
    setAddress:(address)=>set(state=>({...state,address}))
}))