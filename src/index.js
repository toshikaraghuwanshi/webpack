import "./styles/index.css"

const fruits = {
    apple: 2,
    kiwi: 5,
    pawPaw: 3,
    orange: 9,
    mango: 5

}

const winterFruits ={
    ...fruits,
    custardApple: 5,
}
console.log(fruits)
console.log(winterFruits)
