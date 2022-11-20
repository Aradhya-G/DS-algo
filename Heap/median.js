class Heap {
    constructor(comparator) {
        this.data = [];
        this.comparator = comparator
    }

    swap(index1, index2) {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    bottomUp(index) {
        if (index === 0) return;
        const data = this.data;

        const parentIndex = Math.floor((index - 1) / 2);

        if (this.comparator(data[index], data[parentIndex])) {
            this.swap(parentIndex, index);
            this.bottomUp(parentIndex);
        }
    }

    topBottom(index) {
        const n = this.data.length;
        const data = this.data;

        let nextIndexTochoose = index;
        const lefti = index * 2 + 1;
        const righti = lefti + 1;

        if (lefti < n && this.comparator(data[lefti], data[nextIndexTochoose])) {
            nextIndexTochoose = lefti;
        }

        if (righti < n && this.comparator(data[righti], data[nextIndexTochoose])) {
            nextIndexTochoose = righti;
        }

        if (nextIndexTochoose !== index) {
            this.swap(index, nextIndexTochoose);
            this.topBottom(nextIndexTochoose);
        }
    }

    size() {
        return this.data.length;
    }

    peek() {
        if (this.size() <= 0) return null;
        return this.data[0];
    }

    add(val) {
        this.data.push(val);
        this.bottomUp(this.data.length - 1);
    }

    // delete top element
    poll() {
        if (this.size() <= 0) return;

        if (this.size() === 1) {
            this.data.pop();
            return;
        }

        const data = this.data;

        data[0] = data[data.length - 1];
        data.pop();
        this.topBottom(0);
    }

}
class Median {
    constructor() {
        const minComparator = (a, b) => {
            return a > b;
        };

        const maxComparator = (a, b) => {
            return a < b;
        };
        this.minHeap = new Heap(minComparator);
        this.maxHeap = new Heap(maxComparator);
    }

    addNumber(val) {
        this.maxHeap.add(val)
        this.minHeap.add(this.maxHeap.peek())
        this.maxHeap.poll()
        if (this.maxHeap.size() != this.minHeap.size()) {
            this.maxHeap.add(this.minHeap.peek());
            this.minHeap.poll();
        }
    }
    findMedian() {
        if (this.maxHeap.size() == this.minHeap.size()) {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
        else return this.maxHeap.peek();
    }
}

const median = new Median();
//let median = new median();
median.addNumber(1)
console.log(median.findMedian());
median.addNumber(2);
console.log(median.findMedian());
median.addNumber(5);
console.log(median.findMedian());
median.addNumber(3);
console.log(median.findMedian());
median.addNumber(7);
console.log(median.findMedian());
median.addNumber(4);
console.log(median.findMedian());