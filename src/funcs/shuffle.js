import { randomInt } from './randomInt.js';

export function shuffle() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var arrayClone = [...array];
    var m = arrayClone.length;
    while (m) {
        m -= 1;
        var random = randomInt(0, m);
        [arrayClone[m], arrayClone[random]] = [arrayClone[random], arrayClone[m]];
    }
    return arrayClone;
}