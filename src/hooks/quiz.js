import { useQuery } from '@tanstack/react-query'
import api from '../configs/axios'

// const triviaUrl = 'https://opentdb.com/api.php?amount=10&type=boolean'

//Amount
//type

const getTrivia = ({amount, type})=>  api.get('/',{params:{amount:amount, type:type}}) 

const useQuiz = (params) => useQuery(['getQuiz',params], () => getTrivia(params),{
    enabled:!!params
})

export{
    useQuiz
}