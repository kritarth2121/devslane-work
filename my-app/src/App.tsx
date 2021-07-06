import React,{useState} from "react";
import { Transition, Dialog } from "@headlessui/react";

interface Props{
  open?: boolean;
title?:string;
description?:string;
okText?:string;
cancelText?:string;
}
const App: React.FC<Props> = ({title,description,okText,cancelText}) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed inset-0 flex items-center justify-center justify-items-center">
<a className="hover:text-blue-700 hover:underline" onClick={()=>setIsOpen(!isOpen)}>Click to Open Confirm Modal</a>
<Transition.Root show={isOpen} >
        <Dialog open={isOpen} onClose={setIsOpen}>
          <Transition.Child
            enter="duration-300"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="duration-300"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="opacity-0 translate-x-full"
          >
            <Dialog.Overlay className="fixed inset-0  z-20 bg-black opacity-10"></Dialog.Overlay>
            <div className=" p-4 top-1/4 left-1/3 border fixed flex flex-col  space-y-4 w-96 h-96 bg-white z-20">
            <div className="self-end m-3">
            <img className="h-6 w-6" onClick={()=>setIsOpen(false)}  src="https://img.icons8.com/material-outlined/24/000000/multiply--v1.png"/>
            </div>
            <div className=" self-center border-2 rounded-full  border-red-600">
            <img src="https://img.icons8.com/material-sharp/90/fa314a/multiply.png"/>            
            </div><div className="text-3xl self-center ">{title}</div>
            <div className="self-center text-center">{description}</div>

            <div className="flex self-center  text-white flex-row space-x-5 ">
              <button className="bg-gray-500 rounded-md w-40 h-10" onClick={()=>setIsOpen(false)}>{cancelText}</button>
               <button className="bg-red-500 rounded-md w-40 h-10">{okText}</button>
               </div>

            </div>
          </Transition.Child>
        </Dialog>
        </Transition.Root>
    </div>
  );
};
App.defaultProps={
  open: false,
  title:"Are you sure?",
  okText:"OK",
  description:'Do you really want to delete these records? This process cannot be undone.',
  cancelText:"Cancel",
};
export default App;
