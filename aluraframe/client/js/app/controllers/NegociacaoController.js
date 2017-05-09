class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');
  }

   adiciona(event) {
     event.preventDefault();

    //  let data = new Date(
    //    ...this._inputData.value.split('-')
    //    .map(function(item, index) {
    //      if (index == 2) {
    //        return item - 1;
    //      }
    //      return item;
    //    })
    //  );

    //  let data = new Date(
    //    ...this._inputData.value.split('-')
    //    .map((item, index) => return item - index % 2)
    //  );
    let helper = new DateHelper();

    let data = helper.textoParaData(this._inputData.value);

     let negociacao = new Negociacao(
       data,
       this._inputQuantidade.value,
       this._inputValor.value
     );

     console.log(negociacao);

     console.log(helper.dataParaTexto(negociacao.data));
    //  console.log(this.inputData.value);
    //  console.log(this.inputQuantidade.value);
    //  console.log(this.inputValor.value);
   }

}
