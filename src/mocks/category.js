const category = [
    {
        id:1,
        title:"Taller"

    },
    {
        id:2,
        title:"Pintureria"
    },
    {
        id:3,
        title:"Pegamentos"
    },
    {
        id:4,
        title:"Cintas"
    },
    {
        id:5,
        title:"Aditivos"
    },
    {
        id:6,
        title:"Herramientas"
    },
    {
        id:7,
        title:"Escaleras"
    }

]

const getFetchCategory = new Promise((res =>{
    setTimeout(() =>{
        res(category)
    }, 2000)
}))
export default getFetchCategory;

