export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red')

    private constructor(private readonly key:string, public readonly color: string) {

    }

    toString() {
        return this.key
    }
}