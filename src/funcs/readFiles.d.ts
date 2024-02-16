interface Options {
    extensions?: string[];
    noPromise?: boolean;
}

export function readFiles(dirName: string, options: Options): Promise<string[]> | string[];

declare function get(dir: string, extensions: string[]): string[];