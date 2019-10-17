const API_URL = 'http://localhost:3002'


export function getAllProducts(){
    return fetch(API_URL)
    .then(res => res.json())
}