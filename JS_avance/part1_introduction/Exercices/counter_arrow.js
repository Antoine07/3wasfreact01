function Counter() {
    this.count = 0;

    setInterval(() => {
        this.count++;
        console.log(this.count)
    }, 1000);

}


let counter = new Counter;