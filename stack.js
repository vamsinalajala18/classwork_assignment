class stack{
    constructor(){
        this.data=[];
        this.top=0;
    }
    push(ele){
        this.data[this.top] = ele;
        this.top++;
    }
    pop(){
        if(this.top !== 0){
            this.top = this.top-1;
            return this.data.pop();
        }
    }
}
let stack1 = Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1.pop());