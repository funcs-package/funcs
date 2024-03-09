import fs from 'fs';

export function readFiles(dirName, options) {
    var files = [];
    var extensions = options.extensions?.flat(Infinity) || [];
    fs.readdirSync(dirName).forEach(dir => {
        if (fs.statSync(`${dirName}/${dir}`).isFile()) {
            if (!extensions[0])
                files.push(`${dirName}/${dir}`);
            else if (extensions.find(e => dir.endsWith(e)))
                files.push(`${dirName}/${dir}`);
        }
        else {
            files.push(get(`${dirName}/${dir}`, extensions));
        }
    })
    if (options.noPromise)
        return files.flat(Infinity).filter(e => e);;
    return new Promise((resolve, rejects) => resolve(files.flat(Infinity).filter(e => e)));
}

function get(dir, extensions) {
    return fs.readdirSync(dir).map(e => {
        if (fs.statSync(`${dir}/${e}`).isFile()) {
            if (!extensions[0]) return `${dir}/${e}`;
            if (extensions.find(dot => e.endsWith(dot))) return `${dir}/${e}`;
        }
        else
            return get(`${dir}/${e}`, extensions);
    })
}