class View {

    constructor(elemento) {
      this._elemento = elemento;
    }

    _template(model) {
      return ``;
    }

    update(model) {

      this._elemento.innerHTML = this._template(model);

    }

}
