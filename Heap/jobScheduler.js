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
        return a[1] > b[1];
    }
}


function leastInterval(arr, x) {
    let counter = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in counter) {
            counter[arr[i]]++;
        }
        else {
            counter[arr[i]] = 1;
        }
    }
    const heap = new Heap();

    for (let key in counter) {
        heap.add([key, counter[key]])
    }

    let result = [];

    while (heap.size() > 0) {
        let backup = [];

        for (let i = 0; i <= x; i++) {
            if (heap.size() > 0) {
                let root = heap.peek();
                result.push(root[0]);
                heap.poll();
                root[1]--;
                if (root[1] > 0) {
                    backup.push(root);
                }
            } else {
                result.push("idle")
            }
            if (heap.size() == 0 && backup.length == 0) {
                break;
            }
        }
        for (let key in backup) {
            heap.add(backup[key])
        }
    }
    return result
}
const emp = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "E", "E"];

console.log(leastInterval(emp, 5));