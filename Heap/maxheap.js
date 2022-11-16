class Maxheap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value);

        if (this.heap.length === 1)
            return;

        let n = this.heap.length - 1;
        while (n !== 0) {
            let parentIndex = Math.floor((n - 1) / 2)
            if (this.heap[parentIndex] > this.heap[n])
                return;

            [this.heap[parentIndex], this.heap[n]] = [this.heap[n], this.heap[parentIndex]]
            n = parentIndex
        }
    }

    extractMax() {
        if (!this.heap.length)
            return null;

        const lastVal = this.heap.pop()
        if (!this.heap)
            return lastVal;

        this.heap[0] = lastVal
        let n = 0

        while (n < this.heap.length) {
            const leftIndex = 2 * n + 1;
            const rightIndex = 2 * n + 2;

            if (leftIndex >= this.heap.length)
                break;
            if (rightIndex >= this.heap.length) {
                if (this.heap[leftIndex] < this.heap[n])
                    break;
                [this.heap[leftIndex], this.heap[n]] = [this.heap[n], this.heap[leftIndex]]
                n = leftIndex
            }
            else {
                const highestIndex = this.heap[leftIndex] > this.heap[rightIndex] ? leftIndex : rightIndex
                if (this.heap[highestIndex] < this.heap[n])
                    break;

                [this.heap[highestIndex], this.heap[n]] = [this.heap[n], this.heap[highestIndex]]
                n = highestIndex
            }
        }
    }

    KthElement(k) {
        for (let i = 0; i < k - 1; i++) {
            this.extractMax()
        }
        return this.heap[0]
    }
}
//[2,7,26,25,19,17,1,90,3,36]
const Heap = new Maxheap();
Heap.insert(2)
Heap.insert(7)
Heap.insert(26)
Heap.insert(25)
Heap.insert(19)
Heap.insert(17)
Heap.insert(1)
Heap.insert(90)
Heap.insert(3)
Heap.insert(36)
Heap.extractMax()
console.log(Heap)
console.log(Heap.KthElement(3))