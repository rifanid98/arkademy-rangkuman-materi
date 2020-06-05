/**
 * asyncronous
 */

setTimeout(() => {
    console.log('awal yeay');
}, 1000);
console.log('kok saya dulu sih!');

/**
 * syncronous
 */

const data =  new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('harusnya ini dulu!');
    }, 3000);

    setTimeout(() => {
        reject('rejected!');
    }, 2000);
})

data.then(() => {
    console.log('Baru ini nih!');
}).catch((error) => {
    console.log(error);
})

//outputnya akan berupa 'rejected!' karena time dari
//reject() lebih cepat dari resolve();
