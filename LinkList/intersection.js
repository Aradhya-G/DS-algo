class LLNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class SingleLL {
	constructor() {
		this.head = null;
		this.tail = this.head;
		this.length = 0;
	}
	addnode(value) {
		const newNode = new LLNode(value);
		if (!this.head) {
			this.head = newNode;
			return;
		}
		let temp = this.head
		while (temp.next)
			temp = temp.next;
		temp.next = newNode
	}
	printList() {
		let current = this.head;
		console.log('LL', current);
		while (current) {
			console.log(current.value)
			console.log('--->');
			current = current.next;
		}
		return 'No LL exists'
	}
}
function present(val, head) {
	let temp = head
	while (temp) {
		if (temp.value == val)
			return true;
		temp = temp.next;
	}
	return false;
}

function getIntersection(head1, head2, result) {
	let temp = head1;
	while (temp) {
		if (present(temp.value, head2))
			result.addnode(temp.value)
		temp = temp.next;
	}
}

values = [1, 5, 8, 9, 12];
values2 = [1, 4, 5, 6, 7, 9, 10, 12];
let l1 = new SingleLL()
let l2 = new SingleLL()
let result = new SingleLL()
for (let i of values) {
	l1.addnode(i);
}
for (let i of values2) {
	l2.addnode(i);
}
getIntersection(l1.head, l2.head, result)
result.printList();