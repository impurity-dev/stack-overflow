import lib from 'lib';

export type Builder = ReturnType<typeof lib.from>;
declare let b: Builder;
export type Foo = NonNullable<Parameters<Parameters<typeof b.getResource>[0]>[2]>;