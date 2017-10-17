export class Pagination {
    constructor(public total: number = 0, public page: number = 1, public limit = 10) { }

    get offset(): number {
        return (this.page - 1) * this.limit
    }

    get pageData(): any {
        return { limit: this.limit, offset: this.offset }
    }

    getpageDataWith(params: any = {}): any {
        params.limit = this.limit
        params.offset = this.offset
        return params
    }

    reset() {
        this.total = 0
        this.page = 1
        this.limit = 10
    }

    hasNext(): boolean {
        return this.offset < this.total
    }

    hasPrev(): boolean {
        return this.offset > 0
    }

    get maxPage(): number {
        return Math.ceil(this.total / this.limit)
    }

    clone(): Pagination {
        return new Pagination(this.total, this.page, this.limit)
    }
}