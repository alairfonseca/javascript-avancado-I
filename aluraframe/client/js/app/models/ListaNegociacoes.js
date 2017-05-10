class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  adiciona(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // retornando uma nova lista de negociacoes para que
    // a lista original nao possa ser modificada.
    return [].concat(this._negociacoes);
  }
}
