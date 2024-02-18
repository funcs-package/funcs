interface TimerInterface {
    duration: number;
    callback: () => void;
    key: string;
    isStarted: boolean;
    startedAt: number;
    kill(): boolean;
}

export declare class Timer {
    constructor(callback?: () => void, duration?: number, _init?: boolean, key?: string);
    static all: Map<string, TimerInterface>;
    duration: number;
    callback: () => void;
    key: string;
    isStarted: boolean;
    startedAt: number;
    static start(key: string): Timer | false;
    static stop(key: string): Timer | false;
    kill: () => boolean;
}