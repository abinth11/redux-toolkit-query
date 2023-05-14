import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface Breed {
    id:string;
    name:string;
    image:{
        url:string
    }
}
const DOG_API_KEY = 'live_H8dWeGQ6cfXUQFvJG0HQtNqh6gKPgElec6FvelbT7VkTuPFGQVnWRBnDB6V70eqr'
export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://api.thedogapi.com/v1",
        prepareHeaders(headers){
            headers.set('x-api-key',DOG_API_KEY)
            return headers
        }    
    }),
    endpoints(builder){
        return {
            fetchBreeds:builder.query<Breed[],number|void>({
                query(limit=10){
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})
export const { useFetchBreedsQuery }  = apiSlice
export default apiSlice.reducer