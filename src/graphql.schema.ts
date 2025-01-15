
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
    abstract markets(): Nullable<Nullable<Market>[]> | Promise<Nullable<Nullable<Market>[]>>;

    abstract market(id: string): Nullable<Market> | Promise<Nullable<Market>>;

    abstract shoppingItems(userId: string): Nullable<Nullable<ShoppingItem>[]> | Promise<Nullable<Nullable<ShoppingItem>[]>>;
}

export class Market {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

export abstract class IMutation {
    abstract addShoppingItem(userId: string, name: string): Nullable<ShoppingItem> | Promise<Nullable<ShoppingItem>>;

    abstract deleteShoppingItem(userId: string, shoppingItemId: number): Nullable<ShoppingItem> | Promise<Nullable<ShoppingItem>>;
}

export class ShoppingItem {
    id?: Nullable<number>;
    name?: Nullable<string>;
}

type Nullable<T> = T | null;
