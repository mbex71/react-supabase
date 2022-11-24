import AppLayout from '../../components/Layouts/AppLayout'
import ImgReact from '../../assets/react.svg'
import React,{useState, useEffect, useContext} from 'react'
import {AuthContext} from '../../contexts/AuthContext'

import { useQuiz } from '../../hooks/quiz'



const ButonCustom = (props) =>{
    
    return(
        <button className='w-32 h-6 bg-white text-black mt-6' onClick={props.onClick}>{props.children}</button>
    )
}


class TestComponent extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <h1 className='text-4xl'>Test Component</h1>
        )
    }
}

const Home = () => {
    const [params, setParams] = useState({amount:'5', type:'boolean'})

    const {data, isLoading, isError, error,refetch } = useQuiz(params)

    const handleChangeAmount = (e) => setParams(prevState => ({...prevState, amount:e.target.value}))
    
    useEffect(()=>{
        console.log('Data: ',data)
    },[data])
    return(
        <AppLayout>
            <div className='flex flex-col min-h-screen w-full justify-center items-center'>
                <TestComponent />
                <div>
                    <input type="text" onChange={handleChangeAmount} value={params.amount} className="text-black"/>
                </div>
                {
                    isLoading ? <h1>Loading</h1> : null
                }
                <ul>
                {
                    data && data?.data?.results?.map((item,index) => <li key={index}>{item.category}</li>)
                }
               </ul>
            </div>
        </AppLayout>
    )
}

export default Home