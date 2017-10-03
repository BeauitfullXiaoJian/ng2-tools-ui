export class UrlTool {
    public static parse(json: { [key: string]: string }): string {
        let key: any;
        let query: string[] = new Array<string>()
        let str = ""
        for (key in json) {
            query.push(key + "=" + json[key])
        }
        str = query.join('&')
        return str == "" ? str : '?' + str
    }
}