interface reafFilesOptions {
    extensions?: string[];
    noPromise?: boolean;
}

export function readFiles(dirName: string, options: reafFilesOptions): Promise<string[]> | string[];

declare function get(dir: string, extensions: string[]): string[];