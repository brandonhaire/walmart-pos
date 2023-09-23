import { v4 } from 'uuid';

export class uuid {
    constructor(){
        return v4();
    }
}

export class Transaction {
    constructor() {}
    public id: uuid;
    public items: Item[];
    public subtotal: number;
    public tax: number;
    public total: number;
}

export type Item = { upc: uuid, description: string, price: number };
export type Receipt = { transaction_id: Transaction };