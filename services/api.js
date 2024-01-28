
import { addUser, getUsers } from '../data/users'
import { getMarkersByLatAndLon } from '../data/markers'

export function getMarkersByLocation(lat, long){
    return getMarkersByLatAndLon(lat, long)
}

export function getReviewsByLocationId(id){
    return REVIEWS
}

export function login(user, pwd){
  const userAuth = getUsers().find((u) => u.email == user)
  console.log('api->login:', userAuth)
  if(user == userAuth?.email && pwd == userAuth?.password) {
    return true
  }else{
    return false
  }
}

export function register(name, mail, pwd){
    console.log('api->register {name:'+name+' , mail:'+mail+' , pwd:'+pwd+'}')
    return addUser(name, mail, pwd)
}




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