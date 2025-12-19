import { get } from "node:http";
import { apiSlice } from "./base-query";


// payload digunakan untuk data yang dikirim itu bersifat bebas/umum 
export const transactionApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        checkAvailability: builder.mutation({
            query: (payload) => ({
                url: '/transaction/is-available',
                method: "POST",
                body: payload
            })
        }),
        transaction: builder.mutation({
           query: (payload)  => ({
            url: `/transaction`,
            method: 'POST',
            body: payload
           }),
        }),
        getTransaction: builder.query({
            query: () =>({
                url:'/transaction',
                method: 'GET'
            }),
        }),
        getDetailTransaction: builder.query({
            query: (id) => ({
                url: `/transaction/${id}`,
                method: "GET",

            }),
        }),
    }),
})

export const {
    useCheckAvailabilityMutation, 
    useTransactionMutation, 
    useGetTransactionQuery,
    useGetDetailTransactionQuery } = transactionApi
