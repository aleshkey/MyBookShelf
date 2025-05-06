export class StorageModel {
    public static instance: StorageModel;
    private _array: any[] = []


    get array(): any[] {
        return this._array;
    }

    public push(value: any) {
        this._array.push(value);
        return this._array
    }

    set array(value: any[]) {
        this._array = value;
    }
}