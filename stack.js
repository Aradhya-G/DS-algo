class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(ele) {
        this.data.push(ele)
        this.top++
    }
    isEmpty() {
        return this.top === 0;
    }
    peak() {
        if (this.isEmpty()) {
            return null;
        }
        return this.data[this.top - 1];
    }
    pop() {
        if (this.isEmpty()) {
            return "stack is underflow "
        }
        this.top--;
        return this.data.pop()
    }
    print() {
        let index = this.top - 1;
        while (index >= 0) {
            console.log(this.data[index]);
            index--;
        }
    }
    insertElementAtBottom(value) {
        if (this.isEmpty()) {
            this.push(value)
            return;
        }
        let temp = this.data[this.top - 1]
        this.pop()
        this.insertElementAtBottom(value)
        this.push(temp)
        return;
    }
    reverse(){
        if(!this.isEmpty()){
            let temp=this.peak()
            this.pop()
            this.reverse()
            this.insertElementAtBottom(temp)
        }
    }
}

let stack = new Stack()
stack.push(8)
stack.push(1)
stack.push(5)
stack.push(3)
stack.push(7)
stack.push(2)
stack.pop()
stack.print()
console.log("...")
stack.insertElementAtBottom(10)
stack.print()
//console.log(stack)

function sortslack(s) {
    if (!s.isEmpty()) {
        let temp = s.peak()
        s.pop()
        sortslack(s)
        sortInsert(s, temp)
    }
    return;
}
function sortInsert(s, x) {
    if (s.isEmpty() || s.peak() < x) {
        s.push(x);
        return;
    }
    else {
        let temp = s.peak()
        s.pop()
        sortInsert(s, x)
        s.push(temp)
        return;
    }
}
sortslack(stack)
console.log("....")
stack.reverse()
stack.print()

let max = stack.peak();
let min = stack.peak();
const maxMin = (stack) => {
  if(!stack.isEmpty()){
	let temp = stack.peak();
	stack.pop();
	maxMin(stack)
	if(temp > max){
		max = temp;
	}else if(temp < min){
		min = temp;
	}
	stack.push(temp);
  }
  return;
};

maxMin(stack)

console.log(max, min);
stack.print()