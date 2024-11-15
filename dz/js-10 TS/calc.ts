type Operation = 'multiply' | 'add' | 'divide';

const calculator = (a: number, b:number, op: Operation): number => {
    switch(op) {
        case 'multiply':
            return a*b;
        case 'add':
            return a+b;
        case 'divide':
            if (b === 0) return 0.0000;
            return a/b;
        default:
        return 1.1111;
    }
}