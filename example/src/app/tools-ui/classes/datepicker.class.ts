export class PickerDate {
    public year: number
    public month: number
    public day: number
    constructor() {
        const date = new Date()
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
    }
    toString(): string {
        return `${this.year}-${this.month}-${this.day}`
    }

    toJson(): { year: number, month: number, day: number } {
        return { year: this.year, month: this.month, day: this.day }
    }

}