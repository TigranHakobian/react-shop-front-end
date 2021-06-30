// export const getProducts = async () => {
//     try {
//         const response = await fetch(`localhost:3333/fructs`);
//         const data = await response.json();
//         console.log('api data', data)
//         return data;
//     } catch (e) {
//         console.log(e)
//     }
// };


export const getProducts = async (sortBy:string) => {
    console.log('api sagas sortBy', sortBy)
    try {
        const response = await fetch(`http://localhost:3333/${sortBy}`);
        const data = await response.json();
        return data.data;
    } catch (e) {
        console.log(e)
    }
};



