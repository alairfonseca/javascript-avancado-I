class NegociacoesView {

  constructor(elemento) {
    this._elemento = elemento;
  }

  _template(negociacoes) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
        </tbody>
          ${negociacoes.negociacoes.map(n => {
            return `
              <tr>
                <td>${DateHelper.dataParaTexto(n.data)}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
              </tr>
            `;
          }).join('')}
        <tfoot>
        </tfoot>
    `;
  }

  update(negociacoes) {
    this._elemento.innerHTML = this._template(negociacoes);
  }

}
