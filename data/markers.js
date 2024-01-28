
const MARKERS = [
    {
        id: 1,
        latlng:{latitude: -38.7343079, longitude: -72.602612},
        title: "Plaza Poblacion Carabineros",
        rating: 4.5,
        user_rating: 200,
        imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipNnVqBz7Aqxq4bf41rPIdbwvAGZK1vs0916LYIR=w408-h544-k-no',
    },
    {
        id: 2,
        latlng:{latitude: -38.7335343, longitude: -72.6018212},
        title: "Para La Paz Park",
        rating: 4.2,
        user_rating: 33,
        imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipPb-4ubp7JRRiVkukh5ZIgNISR8L1t2Xr1-uBfP=w408-h544-k-no',
    },
    {
        id: 3,
        latlng:{latitude: -38.733825, longitude: -72.60496899},
        title: "Pinto Puelma",
        rating: 4.0,
        user_rating: 12,
        imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipOi-05LG_4TmyTFGYxjMJ5VY2jYPZxh0PqfjwqC=w408-h306-k-no',
    },
    {
        id: 4,
        latlng:{latitude: -38.7349715, longitude:-72.6028661},
        title: "Monumento La Familia",
        rating: 3.7,
        user_rating: 45,
        imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
    },
    {
        id: 5,
        latlng:{latitude: -38.7337444, longitude: -72.6027894},
        title: "Plaza Emilia Bau",
        rating: 3.7,
        user_rating: 45,
        imageMarker: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=IHFh-6Mtsc-hICIVIQaM-g&cb_client=search.gws-prod.gps&w=408&h=240&yaw=164.9868&pitch=0&thumbfov=100',
    }
]

export const getMarkersByLatAndLon = () => {
    return MARKERS
}