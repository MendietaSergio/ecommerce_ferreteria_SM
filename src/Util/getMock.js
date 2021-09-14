const product = {
    id:1,
    title:"Rejilla De Acero Inoxidable Univers",
    description: "Rejilla de acero inoxidable para ducha",
    price: 329.00,
    pictureUrl: "Rejilla_De_Acero_Inoxidable_Univers.jpg",
    offer: true,
    stock: 10
}
export const getFetchUno = new Promise((res)=>{
    //aca tareas asincronicas
   
        setTimeout(()=>{
            res(product)
        }, 2000)    
})