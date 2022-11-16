function oddeve(head) {
    let odd = head;
    let even = head.next;
    let evenfirst = even;

    while (true) {
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
}