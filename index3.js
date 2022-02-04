const toggle = document.querySelector('.toggle');
const sideBar = document.querySelector('.side');
toggle.addEventListener('click',()=> sideBar.classList.toggle('show-side'));

// let stocks = {
//     fruits: ['strawberry', 'chocolate', 'vanilla', 'mint'],
//     fruitsPrice: [500, 400, 600, 200],
//     toppings: ['sprinkles','cookie crumbs','chocolate chips','marshmallow'],
//     toppingsPrice: [1000, 2000, 2400, 1400]
// }

// let price = 0;

// const production = (fruit_name, Process) =>{
//     let fruit = stocks.fruits[fruit_name]
//     setTimeout(()=>{
//         console.log(`the order is ${fruit}, calling the production`);
//         Process(rand(stocks.toppings));
//     }, 2000);
//     price += stocks.fruitsPrice[fruit_name];
// }

// const process = (toppings)=>{
//     let topping = stocks.toppingsPrice[toppings]
//     console.log("order recieved, processing");
//     setTimeout(()=>{
//         console.log(`adding ${stocks.toppings[toppings]} `)
//     },2000)
//     setTimeout(()=>{
//         console.log('the order has finished, now serving...');
//     },3000);
//     setTimeout(()=>{
//         console.log(`the order has been served\ntotal Price: ${price}`);
//     }, 6000);
//     price += topping;
// }

// production(rand(stocks.toppings),process);

// function rand(argument){
//     return Math.floor(Math.random() * argument.length);
// }

// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let a = 1 + 1;
//         if(a == 2){
//             resolve('correct');
//         }else{
//             reject('wrong');
//         }
//     },2000);
// })

// p.then((message)=>{
//     console.log(`you're ${message}`)
// }).catch((message)=>{
//     console.log(`you're ${message}`)
// });

// const number = [85,84,85,89,87,88,85,52,89,88,86,87,82,83,84,80,81,88]
// console.log(number.sort((a,b)=> a-b))
//  const total = number.reduce((a,b)=>{return a + b},0)
//  let average = total / number.length;
//  console.log(average)
//  console.log(number.copyWithin((0,11)));

// const promise = ()=>{
//     return new Promise((resolve,reject)=>{
//         let a = 1 + 1;
//         if(a == 2){
//             resolve(`you're`);
//         }else{
//             reject();
//         }
//     });
// }

// promise().then((message)=>{
//     console.log(`${message} correct`);
// }).catch(()=>{
//     console.log('wrong');
// });
// const student = {
//     firstName: 'keifer',
//     lastName: 'Ramos',
//     isAlive: true
// }

// const employee = {
//     firstName: 'kenneth',
//     lastName: 'Santos',
//     isAlive: true
// }

// const promise = (age)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(student.isAlive && age > 18){
//                 resolve(student);
//             }else{
//                 reject(employee);
//             }
//         },2000);
//     })
// }

// promise(2).then((student)=>{
//     console.log(`${student.firstName} is alive!`);
// }).catch((error)=>{
//     console.log(`${error.lastName} is dead`);
// })


// const numbers = [120 ,  132 ,  111 ,  121,   122,   144 ,  133 ,  130  , 120 ,  132,   131, 

//     120 ,   110 ,  111   ,121  , 141  , 151,  126 ,  157,   124 ,  175 ,  151, 
    
//     140 ,  141 ,  111,   100 ,  100  , 100  , 100  , 121 ,  101 ,  103 ,  140 ,
    
//     151  , 140   ,121,   101 ,  144 ,  155  , 154 ,  150 ,  130 ,  133  , 144 ,
    
//     120  , 140,   144 ,  156  , 165 ,  120,   130 ,  140  , 144 ,  114,   155, 
    
//     101,   111,   100 ,  100  , 100  , 100  , 130 ,  144  , 156  , 155 ,  150 ]
// const sortednumbers = numbers.sort((a,b)=> a - b)


// let t = 0;
// sortednumbers.forEach((e)=>console.log(e))
// console.log("numbers: " + numbers.length)

// const phones = [
//     {name: 'lenovo',price: 459.00,amount: 3},{name: 'vivo',price: 259.00,amount: 1},
//     {name: 'oppo',price: 659.00,amount: 4},{name: 'lenovo',price: 459.00,amount: 4},
//     {name: 'vivo',price: 559.00,amount: 1},{name: 'cherry Mobile',price: 359.00,amount: 4},
//     {name: 'lenovo',price: 459.00,amount: 3},{name: 'vivo',price: 259.00,amount: 1},
//     {name: 'oppo',price: 159.00,amount: 4},{name: 'Microsoft',price: 459.00,amount: 3},
//     {name: 'vivo',price: 59.00,amount: 1},{name: 'Nokia',price: 659.00,amount: 4}
// ];

// const {totalPrice,phoneBrands} = phones.reduce((total,phone)=>{
//     let {name,price,amount} = phone;
//     total.totalPrice += price * amount;
//     if(!total.phoneBrands.includes(name)){
//         total.phoneBrands.push(name);
//     }
//     return total;
// },{
//     totalPrice: 0,
//     phoneBrands: []
// });

// function lowestPrice(phones){
//     let lowestPrice = phones[0].price;
//     phones.forEach(phone => {
//         if(phone.price < lowestPrice){
//             lowestPrice = phone.price
//         }
//     });
//     return lowestPrice;
// }

// const lowest = lowestPrice(phones);

// console.log(totalPrice.toFixed(2),phoneBrands,`$ ${lowest.toFixed(2)}`)

// function gradeEvaluation(studentName,grade){
//     return new Promise((resolve,reject)=>{
//         (grade >= 85) ? resolve(
//             student = {
//             studentName: studentName,
//             studentGrade: grade
//         }) : reject(studentName);
//     });
// }

// function uniSelection(grade){
//     return new Promise((resolve,reject)=> {
//         (grade.studentGrade >= 95) ? resolve() : reject();
//     });
// }

// gradeEvaluation('keifer',100)
//     .then((data)=> {
//         console.log(`${data.studentName} you passed`);
//         uniSelection(data)
//             .then(()=>console.log("youre going to harvard"))
//             .catch(()=> console.log(`you're going to PLMAR`));
//     }).catch((data)=> console.log(`${data} you failed`));

// const arrayList = [98,89,78,67,88];

// const reducedItem = Array.from(arrayList).reduce((total,item)=>{
//     return total += item;
// },0);

// let timeFirst = (item)=> setTimeout(()=>console.log(item),2000);


// timeFirst(reducedItem);

// const users = [
//     {id: 1, name: 'john'},
//     {id: 2, name: 'kenneth'},
//     {id: 3, name: 'joshua'}
// ];

// const userArticles = [
//     {userId: 1, article: ['one','two']},
//     {userId: 2, article: ['three','four']},
//     {userId: 3, article: ['five','six']}
// ]

// function userIdentification(name){
//     return new Promise((resolve,reject)=>{
//         let userName = users.find((user)=> user.name === name);
//         (userName) ? resolve(userName) : reject(`there's no name ${userName}`);
//     });
// }

// function getArticle(user){
//     return new Promise((resolve,reject)=>{
//         const userAtr = userArticles.find(((userArt)=> userArt.userId === user.id));
//         (userAtr) ? resolve(userAtr.article) : reject('no context with the id ' + userAtr.id);
//     });
// }

// const getArticleAndUser = async()=>{
//     try{
//         const user = await userIdentification('kenneth')
//         return  await getArticle(user);
//     }catch(error){
//         console.log(error);
//     }
// }

// getArticleAndUser().then((data)=> console.log(data));