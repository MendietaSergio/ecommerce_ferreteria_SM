//Hacer json mas amplio, con categoria y subcategoria

const products = [
    {
        id:1,
        title:"Rejilla De Acero Inoxidable Univers",
        description: "Rejilla de acero inoxidable para ducha",
        price: 329.00,
        pictureUrl: "Rejilla_De_Acero_Inoxidable_Univers.jpg",
        offer: true,
        stock: 10,
        category:"Taller",
        subCategory:"Uso doméstico"
    },
    {
        id:2,
        title:"Mini Rodillo El Galgo Forrado 5 Cm",
        description: "Mini Rodillo El Galgo Forrado 5 Cm",
        price: 119.00,
        pictureUrl: "Mini_Rodillo_El_Galgo_Forrado_5Cm.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Rodillo"
    },
    {
        id:3,
        title:"Enduido Interior 1ltr Andina",
        description: "Enduido Interior 1ltr Andina",
        price: 359.00,
        pictureUrl: "Enduido_Interior_1ltr_Andina.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Enduidos"
    },
    {
        id:4,
        title:"Poxipol 10 Minutos Transp. 1 Un",
        description: "Poxipol 10 Minutos Transp. 1 Un",
        price: 410.00,
        pictureUrl: "Poxipol_10_Minutos_Transp.1Un.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:5,
        title:"Adhesivo Para Calzado Deportivo 3grs Pegamil",
        description: "Adhesivo Para Calzado Deportivo 3grs Pegamil",
        price: 135.00,
        pictureUrl: "Adhesivo_Para_Calzado_Deportivo_3grs_Pegamil.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:6,
        title:"3M cinta de enmascarar 18mm x 40m",
        description: "3M cinta de enmascarara 8mm x 40m",
        price: 185.00,
        pictureUrl: "Set_pinceles_3uni_top_home.jpg",
        offer: true,
        stock: 10,
        category:"Cintas",
        subCategory:"Enmascarar"
    },
    {
        id:7,
        title:"Adhesivo Para Calzado Deportivo 3grs Pegamil",
        description: "Adhesivo Para Calzado Deportivo 3grs Pegamil",
        price: 135.00,
        pictureUrl: "Adhesivo_Para_Calzado_Deportivo_3grs_Pegamil.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:8,
        title:"Adhesivo Para Zapatillas 9grs Eccole",
        description: "Adhesivo Para Zapatillas 9grs Eccole",
        price: 399.00,
        pictureUrl: "Adhesivo_zapatillas_9grs_Eccole.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:9,
        title:"Agua 5lt Desmineralizada Match 1",
        description: "Agua 5lt Desmineralizada Match 1",
        price: 249.00,
        pictureUrl: "Agua_5lts_desmineralizada.jpg",
        offer: true,
        stock: 10,
        category:"Aditivos",
        subCategory:"Agua"
    },
    {
        id:10,
        title:"3m Cinta Aisladora Temflex 1550 Negra 18mm X 10m",
        description: "3m Cinta Aisladora Temflex 1550 Negra 18mm X 10m",
        price: 99.00,
        pictureUrl: "3M_cinta_de_enmascarara_18mmx40m.jpg",
        offer: true,
        stock: 10,
        category:"Cintas",
        subCategory:"Aislar"
    },
    {
        id:11,
        title:"Cinta De Montaje 25mmx1.27m 3m Scotch",
        description: "Cinta De Montaje 25mmx1.27m 3m Scotch",
        price: 419.00,
        pictureUrl: "Cinta_Montaje_25mmx1.27M_3M_Scotch.jpg",
        offer: true,
        stock: 10,
        category:"Cintas",
        subCategory:"Montaje"
    },
    {
        id:12,
        title:"Cinta Scotch Empaque Transp 48mmx40m 3m Scotch",
        description: "Cinta Scotch Empaque Transp 48mmx40m 3m Scotch",
        price: 239.00,
        pictureUrl: "Cinta_Scotch_Empaque_48mmx40m_3M.png",
        offer: true,
        stock: 10,
        category:"Cintas",
        subCategory:"Empaque"
    },
    {
        id:13,
        title:"Cinta Scotch Empaque Transp 24 Mm X 50 Mts",
        description: "Cinta Scotch Empaque Transp 24 Mm X 50 Mts",
        price: 149.00,
        pictureUrl: "Cinta_Scotch_Empaque_Trans_24mmx50Mts.jpg",
        offer: true,
        stock: 10,
        category:"Cintas",
        subCategory:"Empaque"
    },
    {
        id:14,
        title:"Clavos De Hierro 10 X 35 - 68 uni.",
        description: "Clavos De Hierro 10 X 35 - 68 uni.",
        price: 145.00,
        pictureUrl: "Clavos_Hierro_10x35_68uni.jpg",
        offer: true,
        stock: 10,
        category:"Taller",
        subCategory:"Fijaciones"
    },
    {
        id:15,
        title:"Disco Corte Metal 115 1.6 Mm",
        description: "Disco Corte Metal 115 1.6 Mm",
        price: 79.00,
        pictureUrl: "Disco_Corte_Metal_115_1.6Mm.jpg",
        offer: true,
        stock: 10,
        category:"Herramientas",
        subCategory:"Accesorios"
    },
    {
        id:16,
        title:"Enduido Interior 1ltr Andina",
        description: "Enduido Interior 1ltr Andina",
        price: 359.00,
        pictureUrl: "Enduido_Interior_1ltr_Andina.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Enduidos"
    },
    {
        id:17,
        title:"Escalera Articulada 12 Escalones Aluminio",
        description: "Escalera Articulada 12 Escalones Aluminio",
        price: 14.000,
        pictureUrl: "Escalera_Articulada_12Escalones_alumin.jpg",
        offer: true,
        stock: 10,
        category:"Escaleras",
        subCategory:"Articulada"
    },
    {
        id:18,
        title:"Escalera Articulada 16 Escalones Aluminio",
        description: "Escalera Articulada 16 Escalones Aluminio",
        price: 18.889,
        pictureUrl: "Escalera_Articulada_16Escalones_aluminio.jpg",
        offer: true,
        stock: 10,
        category:"Escaleras",
        subCategory:"Articulada"
    },
    {
        id:19,
        title:"Esmalte Mate Satinplas Sintético Blanco 1l Sinteplast",
        description: "Esmalte Mate Satinplas Sintético Blanco 1l Sinteplast",
        price: 1.625,
        pictureUrl: "Set_pinceles_3uni_top_home.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Pintura Esmalte"
    },
    {
        id:20,
        title:"Mini Rodillo El Galgo Forrado 5 Cm",
        description: "Mini Rodillo El Galgo Forrado 5 Cm",
        price: 119,
        pictureUrl: "Mini_Rodillo_El_Galgo_Forrado_5Cm.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Rodillo"
    },
    {
        id:21,
        title:"Lubricante Wd-40 Aerosol Aerosol 155grs",
        description: "Lubricante Wd-40 Aerosol Aerosol 155grs",
        price: 489,
        pictureUrl: "Lubricante_WD-40_aerosol_155grs.jpg",
        offer: true,
        stock: 10,
        category:"Aerosol",
        subCategory:"Lubricantes"
    },
    {
        id:22,
        title:"Pegamento En Gel 2ml La Gotita",
        description: "Pegamento En Gel 2ml La Gotita",
        price: 189,
        pictureUrl: "Pegamento_en_gel_2ml_la_gotita.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:23,
        title:"Pegamento Instantaneo 2 Gramos Pegamil",
        description: "Pegamento Instantaneo 2 Gramos Pegamil",
        price: 97,
        pictureUrl: "Pegamento_inst_2grs_pegamil.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:24,
        title:"Pegamento La Gotita 2ml La Gotita",
        description: "Pegamento La Gotita 2ml La Gotita",
        price: 155,
        pictureUrl: "Pegamento_la_gotita_2ml.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:25,
        title:"Pincel Obra Nro.10 Top Home",
        description: "Pincel Obra Nro.10 Top Home",
        price: 130,
        pictureUrl: "Pincel_nro10_home.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Pinceles"
    },
    {
        id:26,
        title:"Pincel Persianero Cerda Gris-10",
        description: "Pincel Persianero Cerda Gris-10",
        price: 199,
        pictureUrl: "Pincel_persianero_cerda_gris.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Pinceles"
    },
    {
        id:27,
        title:"Poxipol 10 Minutos Transp. 1 Un",
        description: "Poxipol 10 Minutos Transp. 1 Un",
        price: 410,
        pictureUrl: "Poxipol_10_Minutos_Transp.1Un.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:28,
        title:"Poxiran Sin Tolueno 0,25 Ml 1 uni",
        description: "Poxiran Sin Tolueno 0,25 Ml 1 uni",
        price: 295,
        pictureUrl: "Poxiran_0.25M.jpg",
        offer: true,
        stock: 10,
        category:"Pegamentos",
        subCategory:"A fines"
    },
    {
        id:29,
        title:"Set Pinceles 3u. Top Home",
        description: "Set Pinceles 3u. Top Home",
        price: 569,
        pictureUrl: "Set_pinceles_3uni_top_home.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Pinceles"
    },
    {
        id:30,
        title:"Tarugos Plasticos De 8 Mm. 25",
        description: "Tarugos Plasticos De 8 Mm. 25",
        price: 145,
        pictureUrl: "Tarugos_Plasticos_8Mm_25unid.jpg",
        offer: true,
        stock: 10,
        category:"Taller",
        subCategory:"Fijaciones"
    },
    {
        id:31,
        title:"Latex 1lt.Cielo Rraso Sinteplast ",
        description: "Latex 1lt.Cielo Rraso Sinteplast ",
        price: 845,
        pictureUrl: "Simteplast_1lt.jpg",
        offer: true,
        stock: 10,
        category:"Pintureria",
        subCategory:"Cielorraso"
    }
];

const getFetch = new Promise((res)=>{
    //aca tareas asincronicas
   
        setTimeout(()=>{
            res(products)
        }, 2000)    
})
export default getFetch