import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://api.chucknorris.io/jokes/random`,
  })

export const randomPhrase = {
    getPhrase(){
        return instance.get()
            .then(response => {
                return console.log(response.data)
            })
    }
}

