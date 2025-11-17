let formatValue = (num1:number | string | boolean) =>{
    if(typeof num1 === "number"){
        return num1 * 10;
    }
    else if(typeof num1 === "string"){
        return num1.toUpperCase();
    }
    else{
        return !num1;
    }
}







let getLength = (num1:string | any[]): number =>{
    
    if(typeof num1 === 'string'){
        return num1.length;
    }
    else if(Array.isArray(num1)){
        return num1.length;
    }
    return 0;
}











class Person{
    name: string;
    age: number;

    constructor(name: string,age: number){
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1 = new Person('John Doe', 30);












interface Books{
    title: string;
    rating: number;
}

function filterByRating(book:Books[]):Books[]{
    return book.filter( book => book.rating > 4.0)
}


let books: Books[] =[
    
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },

]


















interface User{
    id:number;
    name: string;
    email:string;
    isActive: boolean;

}

function filterActiveUsers(user:User[]):User[]{
    return user.filter(user => user.isActive === true)
}

let users: User[] =[
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];










interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: Boolean;
}

function printBookDetails(book: Book): void {
    
        console.log(`Title: ${book.title}, Author: ${book.author}, PublishYear: ${book.publishedYear}, isAvailable: ${book.isAvailable}`);
    
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};












function getUniqueValues(arr1:(number | string)[],arr2:(number | string)[]):(number | string)[]{

    let test: {[key:string]:Boolean} ={};
    let box : (number | string)[] = [];

    for(let i = 0;i < arr1.length; i++){
        let key = arr1[i];
        if(!test[key]){
               test[key] = true;
               box[box.length] = arr1[i];
        }
    }

    for(let i = 0; i < arr2.length;i++){
        let key = arr2[i];
        if(!test[key]){
            test[key] = true;
            box[box.length] = arr2[i]
        }
    }
    return box;
}











interface Users{
    name:string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(user:Users[]):number{
    let result = user.map(user =>{
        let total = user.price * user.quantity
        let discount = user.discount ? (total *(user.discount) / 100): 0;
        return total - discount;
    });
    return result.reduce((sum,val) => sum + val,0 );
    
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

