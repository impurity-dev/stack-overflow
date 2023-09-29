import { Foo } from "./lib2";
import * as lib from './lib';

export interface Foo {};


export interface myInterface {
  foo: lib.Foo;
}

const foo: Foo = {}