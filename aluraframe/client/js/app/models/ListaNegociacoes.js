class ListaNegociacoes {

  constructor(armadilha) {
    this._negociacoes = [];
    this._armadiilha = armadilha;
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
    this._armadiilha(this);
  }

  get negociacoes() {
    // retornando uma nova lista de negociacoes para que
    // a lista original nao possa ser modificada.
    return [].concat(this._negociacoes);
  }

  esvazia() {
    this._negociacoes = [];
    this._armadilha(this);
  }

}
