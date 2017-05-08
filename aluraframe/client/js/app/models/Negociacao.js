class Negociacao {

  constructor(data, quantidade, valor) {
    // cria um novo objeto do tipo Date para que seja
    //armazenada uma referencia segura.
    this._data = new Date(data.getTime);
    this._quantidade = quantidade;
    this._valor = valor;

    // congela o objeto para que os atributos sejam imutaveis.
    Object.freeze(this);
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  get data() {
    // retornando uma copia da data, pois o objeto Date pode ser mutado.
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

}
