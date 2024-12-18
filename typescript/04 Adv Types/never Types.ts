type paymentAction = 'refund' | 'checkout'| 'reject';

function processAction(action: paymentAction) {
    switch (action){
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            const _:never = action;
            throw new Error('no such action');
    }
} 


function generateError(message: string): never {
    throw new Error(message);
}


function isString(x: string | number) : boolean {
    if ( typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false
    }
    generateError('number or string must be provided')
}