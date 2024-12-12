/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export abstract class IQuery {
  abstract markets():
    | Nullable<Nullable<Market>[]>
    | Promise<Nullable<Nullable<Market>[]>>;

  abstract market(id: string): Nullable<Market> | Promise<Nullable<Market>>;
}

export class Market {
  id?: Nullable<number>;
  name?: Nullable<string>;
}

type Nullable<T> = T | null;
