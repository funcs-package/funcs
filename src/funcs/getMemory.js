import { getBytes } from './getBytes.js';
export function getMemory(value) {

    var objectList = [];
    var stack = [value];
    var bytes = 0;

    while (stack.length) {
        var v = stack.pop();

        if (typeof v === 'boolean') {
            bytes += 4;
        }
        else if (typeof v === 'string') {
            bytes += v.length * 2;
        }
        else if (typeof v === 'number') {
            bytes += 8;
        }
        else if
            (
            typeof v === 'object'
            && objectList.indexOf(v) === -1
        ) {
            objectList.push(v);

            for (var i in v) {
                stack.push(v[i]);
            }
        }
    }
    return getBytes(bytes);
}