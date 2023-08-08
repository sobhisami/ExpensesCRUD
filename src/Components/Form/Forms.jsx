import { useState } from "react"
import Input from "./Input"
import Label from "./Label"
import Swal from "sweetalert2";

const Forms = ({saveItem}) => {
    let [title,setTitle]=useState("");
    let [date,setDate]=useState("");
    let [value,setValue]=useState("");
    let [description,setDescription]=useState("");
    let submitHandler=(e)=>{
      e.preventDefault()
      console.log(Data);
        if (checkData()) {
          saveItem(Data);
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'success',
            title: 'successfully Add'
          })
        }
      EmptyData()
    }
    let EmptyData=()=>{
      setTitle("")
      setDate("")
      setValue("")
      setDescription("")
    }
    let checkData=()=>{
      if (title!="" && date!="" && value!="" && description!="") {
        return true;
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please Enter Data!',
        })
        return false;
      }
    }
    let id =  Math.floor(Math.random() * 100) + 1;
    let Data={id,title,date,value,description}
    return (
      <form className="row" onSubmit={submitHandler}>
      <div className="mb-3 col-md-6">
        <Label>Title</Label>
        <Input type={"text"} onChange={e=>setTitle(e.target.value)} value={title} className="form-control addTitle"/>
      </div>
      <div className="mb-3 col-md-6">
        <Label>Date</Label>
        <Input type={'date'} onChange={e=>setDate(e.target.value)} value={date} className="form-control addDate"/>
      </div>
      <div className="mb-3 col-md-6">
        <Label>Value</Label>
        <Input type={'number'} onChange={e=>setValue(e.target.value)} value={value} className="form-control addValue"/>
      </div>
      <div className="mb-3 col-md-6">
        <Label>Description</Label>
        <Input type={'text'} onChange={e=>setDescription(e.target.value)} value={description} className="form-control addDescrption"/>
      </div>
      <div className="mb-3 col-md-12 text-right p-3">
        <button type="submit" className="btn btn-primary addBtn px-5" >Add</button>
      </div>
    </form>
    )
}

export default Forms
