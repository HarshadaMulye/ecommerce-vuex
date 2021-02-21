import axios from 'axios'
export const getProducts=({commit})=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>{
        commit('SET_PRODUCTS',response.data)
    })


}
export const getProduct=({commit},productID)=>{
    axios.get(`https://fakestoreapi.com/products/${productID}`)
    .then(response=>{
        commit('SET_PRODUCT',response.data)
    })
 
}