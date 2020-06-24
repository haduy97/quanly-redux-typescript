
const api = "http://jsonplaceholder.typicode.com";

export const fetchList = async () => {
    const data = await fetch(`${api}/users`)
    // const data=getMock();
    .then(res =>{
        return res.json();
    })
    .catch(err => console.log(err,"Error from fetchList"));
    return data;
};
