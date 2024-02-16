export function isArray(value) {
    return Array.isArray(value);
}

export function isBoolean(value) {
    return typeof value === 'boolean';
}

export function isFunction(value) {
    return typeof value === 'function';
}

export function isNull(value) {
    return value === null;
}

export function isNumber(value) {
    return typeof value === 'number';
}

export function isObject(value) {
    return typeof value === 'object' && value !== null;
}

export function isPromise(value) {
    if (typeof value !== 'object') return false;
    if (value === null) return false;
    if (typeof value['then'] !== 'function') return false;
    return true;
}

export function isString(value) {
    return typeof value === 'string';
}

export function isUndefined(value) {
    return value === undefined;
}

export function isUrl(value) {
    if (typeof value !== 'string') return false;
    var reg = /^https?:\/\/.+/;
    return reg.test(value);
}