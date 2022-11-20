class Heap {
    constructor() {
        this.data = [];
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

    comparator(a, b) {
        return a[0] < b[0];
    }
}
function mergeKSortedArray(arr,heap) {
    for (i = 0; i < arr.length; i++) {
        heap.add([arr[i][0], i, 1])
    }
    let result = [];

    for (let i = 0; i < arr.length * arr[0].length; i++) {
        let root = heap.peek();
        heap.poll();
        result.push(root[0]);    
        if (root[2] < arr[root[1]].length) {
            heap.add([arr[root[1]][root[2]], root[1], root[2] + 1])
        } // root [1] depecting in which row that element exist
        // and arr[] of that basically tell gives u access of that whole row 
    }
    return result;
}
const heap = new Heap();
let arr = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11],
];
console.log(mergeKSortedArray(arr,heap));