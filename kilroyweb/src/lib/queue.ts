export default class AsyncBlockingQueue<T> implements AsyncIterable<T> {
  private _promises: Promise<T>[];
  private _resolvers: ((t: T) => void)[];

  constructor() {
    this._resolvers = [];
    this._promises = [];
  }

  get length() {
    return this._promises.length - this._resolvers.length;
  }

  enqueue(t: T) {
    if (!this._resolvers.length) this._add();
    const resolve = this._resolvers.shift()!;
    resolve(t);
  }

  dequeue() {
    if (!this._promises.length) this._add();
    return this._promises.shift()!;
  }

  isEmpty() {
    return !this._promises.length;
  }

  isBlocked() {
    return !!this._resolvers.length;
  }

  [Symbol.asyncIterator](): AsyncIterator<T> {
    return {
      next: () => this.dequeue().then((t) => ({ done: false, value: t })),
    };
  }

  private _add() {
    this._promises.push(
      new Promise((resolve) => {
        this._resolvers.push(resolve);
      })
    );
  }
}
