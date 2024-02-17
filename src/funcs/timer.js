import { randomKey } from './randomKey.js';

export class Timer {
    static all = new Map();

    constructor(callback = () => { }, duration = 0, _init = true, key = randomKey(16)) {
        if (typeof callback !== 'function') throw new TypeError('Callback must be a function');
        if (typeof duration !== 'number') throw new TypeError('Duration must be a number');
        if (typeof _init !== 'boolean') throw new TypeError('_init must be a boolean');
        if (typeof key !== 'string') throw new TypeError('Key must be a string');
        this.duration = duration;
        this.callback = callback;
        this.key = key;
        this.isStarted = false;
        Timer.all.set(key, this);
        if (_init) {
            this._init();
            this.startedAt = Date.now();
        }
        return this;
    }

    static start(key) {
        if (typeof key !== 'string') throw new TypeError('Key must be a string');
        if (!Timer.all.has(key)) return false;
        if (Timer.all.get(key).isStarted) return false;
        Timer.all.set(key, { ...Timer.all.get(key), isStart: true });
        return Timer.all.get(key)._init();
    }

    _init() {
        if (this.isStarted) return false;
        setTimeout(() => {
            if (!Timer.all.get(this.key)) return;
            Timer.all.delete(this.key);
            this.callback();
        }, this.duration);
        this.isStarted = true;
        return this;
    }

    static stop(key) {
        if (typeof key !== 'string') throw new TypeError('Key must be a string');
        if (!Timer.all.has(key)) return false;
        return Timer.all.get(key).kill();
    }

    kill() {
        if (!Timer.all.has(this.key)) return false;
        return Timer.all.delete(this.key);
    }
}