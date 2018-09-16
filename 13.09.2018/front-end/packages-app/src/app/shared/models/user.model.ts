export class User{
    constructor(
        public id: string,
        public name: string,
        public password: string,
        public age: number,
        public isMale: boolean,
        public visitedCountries: string[]
    ){}
}