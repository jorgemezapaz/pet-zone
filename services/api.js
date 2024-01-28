
import { addUser, getUsers } from '../data/users'
import { getMarkersByLatAndLon } from '../data/markers'
import { setUserData } from '../hooks/useUserData'
import { getReviews, addNewReview } from '../data/reviews'

export function getMarkersByLocation(lat, long){
    return getMarkersByLatAndLon(lat, long)
}

export function getReviewsByLocationId(id){
    const reviews = getReviews().filter((r) => r.markerId == id)
    console.log('api->getReviewsByLocationId('+id+')', reviews)
    return reviews
}

export function addReview(userName, rating, reviewText, markerId){
  addNewReview(userName, rating, reviewText, markerId)
}

export function login(user, pwd){
  const userAuth = getUsers().find((u) => u.email == user)
  console.log('api->login:', userAuth)
  if(user == userAuth?.email && pwd == userAuth?.password) {
    setUserData(userAuth)
    return true
  }else{
    return false
  }
}

export function register(name, mail, pwd){
    console.log('api->register {name:'+name+' , mail:'+mail+' , pwd:'+pwd+'}')
    return addUser(name, mail, pwd)
}