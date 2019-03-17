import axios from 'axios'

export const getList = () => {
    return axios
        .get('api/tasks', {
            headers: { "Content-type": "application/json" }
        })
        .then(res => {
            var data = []
            res.data.forEach((key) => {
                  data.push([key[6],key[5],key[4],key[3],key[2],key[1], key[0]])
            })

            return data
        })
}
/*
export const addToList = val => {
    return axios
        .post(
            'api/task', {
                title: val.term,
                firstname: val.firstname
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
}

export const deleteItem = term => {
    axios
        .delete(
            `api/task/${term}`, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
        .catch((res) => {
            console.log(res)
        })
}

export const updateItem = (term, id) => {
    return axios
        .put(
            `api/task/${id}`, {
                title: term
            }, {
                headers: { "Content-type": "application/json" }
            })
        .then((res) => {
            console.log(res)
        })
}
*/
