import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
    {
        nombre: "Bombilla LED WiFi",
        precio: 1500,
        img: ["/img-productos/bombilla-led-1.png", "/img-productos/bombilla-led-2.png", "/img-productos/bombilla-led-3.png"],
        descripcion: "Controla la iluminación de tu hogar desde tu smartphone. Compatible con Alexa y Google Home.",
        categoria: "iluminacion",
        stock: 25
    },
    {
        nombre: "Tira LED RGB",
        precio: 2500,
        img: ["/img-productos/tira-led-rgb-1.png", "/img-productos/tira-led-rgb-2.png", "/img-productos/tira-led-rgb-3.png"],
        descripcion: "Cambia los colores y ajusta el brillo de tus luces con comandos de voz.",
        categoria: "iluminacion",
        stock: 30
    },
    {
        nombre: "Lámpara de Mesa con Control Remoto",
        precio: 3200,
        img: ["/img-productos/lampara-mesa-1.png", "/img-productos/lampara-mesa-2.png", "/img-productos/lampara-mesa-3.png"],
        descripcion: "Iluminación ajustable y temporizador, controlados desde tu dispositivo móvil.",
        categoria: "iluminacion",
        stock: 28
    },
    {
        nombre: "Cámara de Seguridad WiFi",
        precio: 4500,
        img: ["/img-productos/camara-seguridad-1.png", "/img-productos/camara-seguridad-2.png", "/img-productos/camara-seguridad-3.png"],
        descripcion: "Supervisión 24/7 con visión nocturna y alertas en tiempo real a tu teléfono.",
        categoria: "seguridad",
        stock: 40
    },
    {
        nombre: "Sensor de Puertas y Ventanas",
        precio: 1800,
        img: ["/img-productos/sensor-puerta-1.png", "/img-productos/sensor-puerta-2.png", "/img-productos/sensor-puerta-3.png"],
        descripcion: "Recibe alertas cuando una puerta o ventana se abre inesperadamente.",
        categoria: "seguridad",
        stock: 35
    },
    {
        nombre: "Timbre con Video",
        precio: 5200,
        img: ["/img-productos/timbre-1.png", "/img-productos/timbre-2.png", "/img-productos/timbre-3.png"],
        descripcion: "Monitorea quién está en la puerta y habla con los visitantes desde cualquier lugar.",
        categoria: "seguridad",
        stock: 22
    },
    {
        nombre: "Termostato WiFi",
        precio: 7500,
        img: ["/img-productos/termostato-1.png", "/img-productos/termostato-2.png", "/img-productos/termostato-3.png"],
        descripcion: "Ajusta la temperatura de tu hogar desde cualquier parte con control por voz.",
        categoria: "control_clima",
        stock: 27
    },
    {
        nombre: "Ventilador con Control App",
        precio: 3800,
        img: ["/img-productos/ventilador-1.png", "/img-productos/ventilador-2.png", "/img-productos/ventilador-3.png"],
        descripcion: "Controla la velocidad y la oscilación del ventilador con comandos de voz o desde tu móvil.",
        categoria: "control_clima",
        stock: 33
    },
    {
        nombre: "Calefactor Programable",
        precio: 6300,
        img: ["/img-productos/calefactor-1.png", "/img-productos/calefactor-2.png", "/img-productos/calefactor-3.png"],
        descripcion: "Regula el calor de tu habitación de manera eficiente desde una app.",
        categoria: "control_clima",
        stock: 26
    },
    {
        nombre: "Robot Aspirador",
        precio: 8900,
        img: ["/img-productos/robot-aspirador-1.png", "/img-productos/robot-aspirador-2.png", "/img-productos/robot-aspirador-3.png"],
        descripcion: "Limpieza automática de pisos, controlada por tu smartphone y compatible con asistentes de voz.",
        categoria: "electrodomesticos",
        stock: 29
    },
    {
        nombre: "Horno con Conectividad WiFi",
        precio: 12000,
        img: ["/img-productos/horno-1.png", "/img-productos/horno-2.png", "/img-productos/horno-3.png"],
        descripcion: "Cocina de manera eficiente con control remoto desde tu móvil.",
        categoria: "electrodomesticos",
        stock: 20
    },
    {
        nombre: "Cafetera Inteligente",
        precio: 6800,
        img: ["/img-productos/cafetera-1.png", "/img-productos/cafetera-2.png", "/img-productos/cafetera-3.png"],
        descripcion: "Prepara tu café favorito de forma automática y contrólala desde tu dispositivo móvil.",
        categoria: "electrodomesticos",
        stock: 25
    }
];

const seedProductos = () => {
    const productosRef = collection(db, "Productos")
    productos.map(({id, ...dataProducto}) => {
        addDoc(productosRef, dataProducto);
        return;
    })
}

seedProductos();