export class TaskHandle {

    constructor(private doFunc: Function) { }

    ready(params: any = null): TaskHandle {
        this.doFunc(params)
        return this
    }
}

export class Task {

    constructor(doFunc: (handle: TaskHandle) => void) { this._task = doFunc }

    next(doFunc: Function) {
        this._next = doFunc
        this._task(new TaskHandle(this._next))
    }
    private _next = new Function
    private _task = new Function
}

export class TaskQuery {
    private _ready = new Function
    private taskCx = 0
    private taskQuery = new Array<Task>()
    private params = new Array<any>()
    push(task) { this.taskQuery.push(task) }
    run() {
        this.taskCx = 0
        for (var i = 0; i < this.taskQuery.length; i++) {
            this.params.push(null)
        }
        this.do()
    }
    do() {
        let i = this.taskCx
        if (i < this.taskQuery.length && i >= 0) {
            this.taskQuery[i].next(param => {
                this.params[i] = param
                this.taskCx++
                this.do()
            })
        }
        else {
            this._ready(this.params)
        }
    }
    ready(doFunc: Function) { this._ready = doFunc }
}