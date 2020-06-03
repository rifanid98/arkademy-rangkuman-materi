
/**
 * syncronous
 */

const data = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('harusnya ini dulu!');
    }, 2000);

    setTimeout(() => {
        reject('rejected!');
    }, 3000);
})

const asyncFunc = async () => {
    try {
        const getData = await data
        console.log(getData);
        console.log('sesudah promise');
    } catch (error) {
        console.log(error);
    }
}

asyncFunc();