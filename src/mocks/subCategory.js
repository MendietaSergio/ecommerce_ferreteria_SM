const subCategory =[
    {
        id:1,
        title:"Uso Doméstico",
        id_category:1
    },
    {
        id:2,
        title:"Rodillo",
        id_category:2
    },
    {
        id:1,
        title:"Enduidos",
        id_category:2
    },
    {
        id:1,
        title:"A fines",
        id_category:3
    },
    {
        id:1,
        title:"Enmascarar",
        id_category:4
    },
    {
        id:1,
        title:"Agua",
        id_category:5
    },
    {
        id:1,
        title:"Aislar",
        id_category:4
    },
    {
        id:1,
        title:"Montaje",
        id_category:4
    },
    {
        id:1,
        title:"Empaque",
        id_category:4
    },
    {
        id:1,
        title:"Fijaciones",
        id_category:1
    },
    {
        id:1,
        title:"Accesorios",
        id_category:6
    },
    {
        id:1,
        title:"Articulada",
        id_category:7
    },
    {
        id:1,
        title:"Pintura Esmalte",
        id_category:2
    },
    {
        id:1,
        title:"Aerosol",
        id_category:1
    },
    {
        id:1,
        title:"Pinceles",
        id_category:2
    },
    {
        id:1,
        title:"Cierlorraso",
        id_category:2
    },
]

const getFetchSubCategory = new Promise((res =>{
    setTimeout(() =>{
        res(subCategory)
    }, 2000)
}))

export default getFetchSubCategory;