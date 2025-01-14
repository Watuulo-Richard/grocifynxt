"use server"
import { product } from "@/Types"

export async function fetchProducts() {
    try {
        const API = "https://inventory-app-ten-gilt.vercel.app/api/v1/products"
        const response = await fetch(API)
        const fetchedProducts = await response.json()
        return fetchedProducts.data as product[]
    }
    catch (error){
        console.log(error)
    }
}