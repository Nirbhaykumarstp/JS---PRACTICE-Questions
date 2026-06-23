// class car{
//     constructor(brand,speed)  //initializes the properties when new is called
//     {
//         this.brand=brand
//         this.speed=speed
//     }
//     drive()  //method
//     {
//         return `${this.brand} is driving at speed ${this.speed}`
//     }
// }
// class auto extends car
// {
//     constructor(brand,speed)
//     {
//         super(brand,speed)          // super keyword is used to set the parent constructor
//         this.brand=brand
//         this.speed=speed
//     }
//     drive()
//     {
//         console.log(super.drive())
//         return `${this.brand} is driving at speed of ${this.speed}`
//     }

// }

// //object creation ft. instantiation
// let newauto=new auto("bajaj",50)
// console.log(newauto)
// console.log(newauto.drive())
// let mycar=new car()
// console.log(mycar.brand)


//Inheritance
// class vechile
// {
//     constructor(brand)
//     {
//         this.brand=brand
//     }
//     start()
//     {
//         return `${this.brand} is starting.`
//     }
// }
// class car extends vechile
// {
//     constructor(brand,model)
//     {
//         super(brand)
//         this.model=model
//     }
//     start()
//     {
//         return `${super.start()} the engine hums`
//     }
//     honk()
//     {
//         return `${this.brand} ${this.model} beeps!!`
//     }
// }
// const mycar=new car("toyota","fortuner")
// console.log(mycar.start())
// console.log(mycar.honk())

// class Node
// {
//     constructor(data)
//     {
//         this.data=data
//         this.next=null
//     }
// }

// class LinkedList
// {
//     constructor()
//     {
//         this.head=null
//         this.size=0
//     }
//     append(data)
//     {
//         const newNode=new Node(data)
//         if(!this.head)
//         {
//             this.head=newNode
//         }
//         else{
//             let current=this.head
//             while(current.next)
//             {
//                 current=current.next
//             }
//             current.next=newNode
//         }
//         this.size++
//     }
// }

// let myList=new LinkedList()
// myList.append(10)
// myList.append(20)
// myList.append(30)
// myList.append(40)
// myList.append(50)
// console.log(myList)
