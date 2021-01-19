export class Section {
    constructor({renderer}, container){
        // this._items = items;
        this._renderer = renderer;
        this._container = container;
    }
    addItemStart(element) {
        this._container.append(element);
    }
    addItemEnd(element) {
        this._container.prepend(element);
    }
    renderItems(cards) {
        cards.forEach((item)=> {
            this._renderer(item);
        }); 

    }
}