export class ResponseImpl {
    public err: any;
    public errno: number;
    public errmsg: string;

    constructor() {
        this.err = {};
        this.errno = 0;
        this.errmsg = '';
    }
}
