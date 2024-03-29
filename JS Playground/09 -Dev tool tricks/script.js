const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular

    // Interpolated

    // Styled
    console.log('%c I am some great text', 'font-size:50px; color:red;')

    // warning!
    console.warn('oh nooo')

    // Error :|
    console.error("SHit!")

    // Info
    console.info("My teeth are yellow")

    // Testing
    const p = document.querySelector('p');

    console.assert(1===1, "That is wrong")

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p)
    console.dir(p)

    // Grouping together
   console.groupCollapsed();
   console.groupEnd();

    // counting
    console.count('wes');
    console.count('wes');
    console.count('steve');
    console.count('steve');
    console.count('wes');
    console.count('wes');
    console.count('steve');
    console.count('steve')
    console.count('wes');
    console.count('steve')
    console.count('steve')
    console.count('steve')
    console.count('steve')

    // timing
    console.time('fetching data');
    fetch(`https://api.github.com/users/wesbos`)
      .then(data => data.json())
      .then(data => {
        console.timeEnd('fetching data')
      });

      // 10--> 5 --> 16

      // let myLinkedList = {
      //   head: {
      //     value: 10,
      //     next: {
      //       value: 5,
      //       next: {
      //         value: 16,
      //         next: null
      //       }
      //     }
      //   }
      // }


// Building my first linked List


      // class Node {
      //   constructor(value) {
      //     this.value = value;
      //     this.next = null;
      //   }
      // }
      // class LinkedList {
      //   constructor(value) {
      //     this.head = {
      //       value: value,
      //       next: null
      //     }
      //     this.tail = this.head;
      //     this.length = 1
      //   }
      //   append(value) {
      //     const newNode = new Node(value);
      //     this.tail.next = newNode;
      //     this.tail = newNode;
      //     this.length++;

      //     return this;
      //   }
      // }

      // let myLinkedList = new LinkedList(10);

      // myLinkedList.append(5);
      // myLinkedList.append(16);

      // console.log(myLinkedList)

      // class LinkedList {
      //   constructor(value) {
      //     this.head = {
      //       value: value,
      //       next: null
      //     }
      //     this.tail = this.head;
      //     this.length = 1
      //   }
      //   append(value) {
      //     const newNode = {
      //       value: value,
      //       next: null
      //     };
      //     if ( head === null) {
      //     head = node;
      //   } else {
      //     let currentNode = head;
      //     while (currentNode.next != null) {
      //       currentNode = currentNode.next
      //     }
      //     currentNode.next = node;
      //   }
      //   length++
      // }

      // const myLinkedList = new LinkedList(10);

      // myLinkedList.append(5);
      // myLinkedList.append(16);

      // console.log(myLinkedList)

      class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null
    };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList

  }

  traverseToIndex(index) {
    // check for params
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode
  }


  remove(index) {
    const leader = this.traverseToIndex(index-1);
    const follower = this.traverseToIndex(index+1);
    const unwantedNode = leader.next;
    follower = unwantedNode.prev;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

// reverse a linked list

  reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
      while(current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      node = prev;
      return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
myLinkedList.insert(2, 99);
myLinkedList.insert(2, 99);
// myLinkedList.remove(5);

console.log(myLinkedList);

// var arr = [myLinkedList.val]
// while(myLinkedList.next !== null){
//     myLinkedList = myLinkedList.next;
//     arr.push(myLinkedList.val)
// }
// console.log(arr)


arr = [123, -99, 57, 9, 12, 0, 3]

// function min(arr) {
//   arr.sort((a, b) => a - b);
//   // return smallest;

// }

// const min = min((a,b) => a - b);

// console.log(min)

// var smallest = arr.reduce((prev,next) => prev>next ? next : prev);

// console.log(smallest)

// let firstName = 'claire'

// // Write your function here
// function hello(name){
//   return "Hello ${firstName}"
// }

// console.log(hello(name))

console.clear();
