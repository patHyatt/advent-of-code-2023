import fs from 'fs';

export class FileReader {
    constructor(filename) {
        this.filename = filename;
    }
    read() {
        return fs.readFileSync(this.filename, { encoding: 'utf8' });
    }
}