export class Tag {
    static readonly ANGULAR = new Tag('Angular')


    private constructor(private readonly key:string) {

    }

    toString() {
        return this.key
    }
}