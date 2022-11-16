class singlell {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}
class singlelinklist {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }
    size(){
		return `hello I am LL, My Size is ${this.length}`;
	}
    prepend(data) {
        const Newnode = new singlell(data)
        if (!this.head) {
            this.head = Newnode;
            this.tail = Newnode;
            this.length++;
            return this.printnode()
        }
        else{
        let temp = this.head;
        Newnode.next = temp
        this.head = Newnode;
        this.length++;
        return this.printnode()
    }
    }
    deleteAtfirst(){
        if(!this.head){
            return false
        }
        let temp=this.head.next;
        this.head=null
        this.head=temp
        this.length--;
        return this.printnode()
    }
    deleteAtlast(){
        	let prev, current = this.head;
        	while(current.next){
        		prev = current
        		current = current.next;
        	}	
        	current = null;
        	prev.next = null;
        	this.tail = prev;
        	this.length--;
        	return this.printnode();
    
        }
    printnode() {
        let temp = this.head
        console.log('LL', temp);
        while (temp) {
            console.log(temp.data)
            console.log("-->")
            temp = temp.next;
        }
        console.log("end")
    }
}
const ll = new singlelinklist()
ll.prepend(3)
ll.prepend(4)
ll.prepend(5)
ll.prepend(6)
//console.log(ll)
//ll.deleteAtfirst()
//ll.deleteAtlast()
//console.log(ll)
function oddeve(head) {
    if(!head){
        return head
    }
    let odd = head;
    let even = head.next;
    let evenfirst = even;

    while (1==1) {
        if (!even || even.next === null) {
            odd.next = evenfirst;
            break;
        }
        odd.next = even.next;
        odd = even.next;

        if (odd.next === null) {
            even.next = null;
            odd.next = evenfirst;
            break;
        }

        even.next = odd.next;
        even = odd.next;
    }
    console.log(head)
    return head;
}
console.log(oddeve(ll))
ll.printnode()