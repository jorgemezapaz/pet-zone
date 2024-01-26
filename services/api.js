
export function getMarkersByLocation(lat, long){
    return MARKERS
}

export function getReviewsByLocationId(id){
    return REVIEWS
}

export function login(user, pwd){
    if(user == 'J@gmail.com' && pwd == '1234')
      return true
    return false
}

export function register(name, mail, pwd){
    return true
}


const MARKERS = [
    {
      id: 1,
      latlng:{latitude: -38.7651141, longitude: -72.7643479},
      title: "Santa Isabe Labranza",
      rating: 4.5,
      user_rating: 200,
      imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
    },
    {
      id: 2,
      latlng:{latitude: -38.7636417, longitude: -72.7691973},
      title: "Complejo Deportivo Labranza",
      rating: 4.2,
      user_rating: 33,
      imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
    },
    {
      id: 3,
      latlng:{latitude: 38.7627717, longitude: -72.7663649},
      title: "Skatepark Labranza",
      rating: 4.0,
      user_rating: 12,
      imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
    },
    {
      id: 4,
      latlng:{latitude: -38.7638425, longitude: -72.7706564},
      title: "Berlin Bears Recreation Center",
      rating: 3.7,
      user_rating: 45,
      imageMarker: 'https://lh5.googleusercontent.com/p/AF1QipM6iU_PykRSBmkmm1q2YH_M_pVU51HyWs22Bwq0=s435-k-no',
    }
  ]

const REVIEWS = [
    {
      id: 1,
      userName: 'Jorge',
      avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=robohash&r=x',
      rating: 3.7,
      createdAt: '11-10-2023',
      review: 'Está mal diseñado lo único destacable es su manualera y el piso en la parte de arriba del pasto cintetico lo demás todo mal diseñado.',
      markerId: 1
    },
    {
      id: 1,
      userName: 'Andres',
      avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
      rating: 4.0,
      createdAt: '07-09-2023',
      review: 'No entre al lugar ,pero en otro momento iré',
      markerId: 1
    },
    {
      id: 1,
      userName: 'Maria',
      avatar: 'https://gravatar.com/avatar/0216d4a5fbe2c21343d60982fa8cdd4d?s=400&d=mp&r=x',
      rating: 3,
      createdAt: '16-08-2023',
      review: 'Excelente lugar para hacer deportes y disfrutar con la familia',
      markerId: 1
    }
  ]