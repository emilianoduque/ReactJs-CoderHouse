const productos = [
    {
        id: 1,
        nombre: "Bombilla LED WiFi",
        precio: 1500,
        img: "../../public/img/bombilla-led.jpg",
        descripcion: "Controla la iluminación de tu hogar desde tu smartphone. Compatible con Alexa y Google Home.",
        categoria: "iluminacion"
    },
    {
        id: 2,
        nombre: "Tira LED RGB",
        precio: 2500,
        img: "../../public/img/tira-led.jpg",
        descripcion: "Cambia los colores y ajusta el brillo de tus luces con comandos de voz.",
        categoria: "iluminacion"
    },
    {
        id: 3,
        nombre: "Lámpara de Mesa con Control Remoto",
        precio: 3200,
        img: "../../public/img/lampara-mesa.jpg",
        descripcion: "Iluminación ajustable y temporizador, controlados desde tu dispositivo móvil.",
        categoria: "iluminacion"
    },

    // Categoría: Seguridad
    {
        id: 4,
        nombre: "Cámara de Seguridad WiFi",
        precio: 4500,
        img: "../../public/img/camara.jpg",
        descripcion: "Supervisión 24/7 con visión nocturna y alertas en tiempo real a tu teléfono.",
        categoria: "seguridad"
    },
    {
        id: 5,
        nombre: "Sensor de Puertas y Ventanas",
        precio: 1800,
        img: "../../public/img/sensor-puertas.jpg",
        descripcion: "Recibe alertas cuando una puerta o ventana se abre inesperadamente.",
        categoria: "seguridad"
    },
    {
        id: 6,
        nombre: "Timbre con Video",
        precio: 5200,
        img: "../../public/img/timbre-video.jpg",
        descripcion: "Monitorea quién está en la puerta y habla con los visitantes desde cualquier lugar.",
        categoria: "seguridad"
    },

    // Categoría: Control de Clima
    {
        id: 7,
        nombre: "Termostato WiFi",
        precio: 7500,
        img: "../../public/img/termostato.jpg",
        descripcion: "Ajusta la temperatura de tu hogar desde cualquier parte con control por voz.",
        categoria: "control_clima"
    },
    {
        id: 8,
        nombre: "Ventilador con Control App",
        precio: 3800,
        img: "../../public/img/ventilador.jpg",
        descripcion: "Controla la velocidad y la oscilación del ventilador con comandos de voz o desde tu móvil.",
        categoria: "control_clima"
    },
    {
        id: 9,
        nombre: "Calefactor Programable",
        precio: 6300,
        img: "../../public/img/calefactor.jpg",
        descripcion: "Regula el calor de tu habitación de manera eficiente desde una app.",
        categoria: "control_clima"
    },

    // Categoría: Electrodomésticos
    {
        id: 10,
        nombre: "Robot Aspirador",
        precio: 8900,
        img: "../../public/img/robot-aspirador.jpg",
        descripcion: "Limpieza automática de pisos, controlada por tu smartphone y compatible con asistentes de voz.",
        categoria: "electrodomesticos"
    },
    {
        id: 11,
        nombre: "Horno con Conectividad WiFi",
        precio: 12000,
        img: "../../public/img/horno.jpg",
        descripcion: "Cocina de manera eficiente con control remoto desde tu móvil.",
        categoria: "electrodomesticos"
    },
    {
        id: 12,
        nombre: "Cafetera Automática",
        precio: 5400,
        img: "../../public/img/cafetera.jpg",
        descripcion: "Programa y personaliza tu café desde la app o con comandos de voz.",
        categoria: "electrodomesticos"
    }
];

const getProductos = ()=> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(productos);
        }, 1000)
    });
}

export { getProductos }
