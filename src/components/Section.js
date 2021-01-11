export class Section {
    constructor({items, renderer}, container){
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }
    addItemStart(element) {
        this._container.append(element);
    }
    addItemEnd(element) {
        this._container.prepend(element);
    }
    renderItems() {
        this._items.forEach((item)=> {
            this._renderer(item);
        }); 

    }
}