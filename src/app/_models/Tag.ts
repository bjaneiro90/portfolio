export class Tag {
    static readonly ANGULAR = new Tag('Angular')


    private constructor(private readonly key:any) {

    }

    toString() {
        return this.key
    }
}