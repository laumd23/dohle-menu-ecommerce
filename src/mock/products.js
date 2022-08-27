import ItemCount from "../components/ItemCount/ItemCount";

const products = [
    {
        id: 1,
        title: 'Jean Connery, realismo blanco y negro',
        price: 250,
        stock: 10,
        category: "Cuadros en papel",
        img: "https://res.cloudinary.com/lauradohle/image/upload/v1661344969/img-reaperArt/mini-art8_xiyj1m.jpg",
        carrito: <ItemCount/>
    },
    {
        id: 2,
        title: 'El padrino, realismo blanco y negro',
        price: 300,
        stock: 10,
        category: "Cuadros en papel",
        img: "https://res.cloudinary.com/lauradohle/image/upload/v1661388524/img-reaperArt/mini-art10_bd7zok.jpg",
        carrito: <ItemCount/>
    },
    {
        id: 3,
        title: 'Milla Jovovich, en 5to elemento, realismo blanco y negro',
        price: 275,
        stock: 10,
        category: "Cuadros en papel",
        img: "https://res.cloudinary.com/lauradohle/image/upload/v1661566624/img-reaperArt/mini-art7_fgr1hg.jpg",
        carrito: <ItemCount/>
    },
];

export default products