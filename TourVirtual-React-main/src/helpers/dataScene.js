// import insideOne from '';
// import insideTwo from '../images/Sitios_Turisticos_ de_Salcaja.png';

const Scenes = {
    insideOne: {
        title: 'Parque San Luis.',
        image: '../images/Parque San luis.jpg',
        pitch: -11,
        yaw: -3,
        hotSpot: {
            flowerVase: {
                type: 'custom',
                
                pitch: 8,
                yaw: 126,
                nameModel: 'flowerVase',
                cssClass: 'hotSpotElement',
            },

            nexScene: {
                type: 'custom',
                
                pitch: 1,
                yaw: -157,
                cssClass: 'moveScene',
                scene: 'insideTwo',
            },
        },
    },
    insideTwo: {
        title: 'Mercado Antiguo',
        image: '../images/Mercado_Auntiguo.jpg',
        pitch: 10,
        yaw: 180,
        hotSpot: {
            
            flowerVase: {
                type: 'custom',
                pitch: 18,
                yaw: -1.26,
                nameModel: 'flowerVase',
                cssClass: 'hotSpotElement',
            },

            nexScene: {
                type: 'custom',
                
                pitch: -16.28,
                yaw: -1.66,
                cssClass: 'moveScene',
                scene: 'interiorThree',
            },
        },
    },
    interiorThree: {
        title: 'Castillo Real ',
        image: '../images/castillo.jpg',
        pitch: 12,
        yaw: 150,
        hotSpot: {
            flowerVase: {
                type: 'custom',
                
                pitch: -8,
                yaw: 126,
                nameModel: 'flowerVase',
                cssClass: 'hotSpotElement',
            },

            nexScene: {
                type: 'custom',
                
                pitch: -16.28,
                yaw: -1.66,
                cssClass: 'moveScene',
                scene: 'interiorFour',
            },
        },
    },
    interiorFour: {
        title: 'interior 4',
        image: '../images/panorama2.jpg',
        pitch: -5,
        yaw: 60,
            hotSpot: {
            flowerVase: {
                type: 'custom',
                
                pitch: -8,
                yaw: 126,
                nameModel: 'flowerVase',
                cssClass: 'hotSpotElement',
            },

            nexScene: {
                type: 'custom',
                
                pitch: -16.28,
                yaw: -1.66,
                cssClass: 'moveScene',
                scene: 'insideTwo',
            },
        },
    },
    interiorFive: {
        title: 'interior 5',
        image: '../images/castillo.jpg',
        pitch: 8,
        yaw: 30,
        hotSpot: {
            flowerVase: {
                type: 'custom',
                
                pitch: -8,
                yaw: 126,
                nameModel: 'flowerVase',
                cssClass: 'hotSpotElement',
            },

            nexScene: {
                type: 'custom',
                
                pitch: -16.28,
                yaw: -1.66,
                cssClass: 'moveScene',
                scene: 'insideTwo',
            },
        },
    },
    interiorSix: {
        title: 'interior 6',
        image: '../images/interior6.jpg',
        pitch: -10,
        yaw: 90,
        hotSpot: {},
    },
    interiorSeven: {
        title: 'interior 7',
        image: '../images/Mercado_Antiguo.jpg',
        pitch: 15,
        yaw: 110,
        hotSpot: {},
    },
    interiorEight: {
        title: 'interior 8',
        image: '../images/interior8.jpg',
        pitch: 20,
        yaw: 130,
        hotSpot: {},
    },
    interiorNine: {
        title: 'interior 9',
        image: '../images/interior9.jpg',
        pitch: -15,
        yaw: 70,
        hotSpot: {},
    },
    interiorTen: {
        title: 'interior 10',
        image: '../images/interior10.jpg',
        pitch: 5,
        yaw: 40,
        hotSpot: {},
    },
    interiorEleven: {
        title: 'interior 11',
        image: '../images/interior11.jpg',
        pitch: 0,
        yaw: 0,
        hotSpot: {},
    },
};

export default Scenes;
