// import {init, exit} from "./myPackage";

// init({
//     url: "true"
// });

// exit(1);

// console.log('hi');

import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }

    static calculateHash(prevHash: string, height: number, data: string): string {
        const toHash: string = `${prevHash}${height}${data}`;

        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}