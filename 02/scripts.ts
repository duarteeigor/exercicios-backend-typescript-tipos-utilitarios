type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

//1 JEITO: Criando um novo objeto carrinho, e fazendo as alteracoes requisitadas

type NovoCarrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: Lowercase<'credito' | 'Debito'>,
    cartao: Cartao,
    endereco: Endereco
}


//2 JEITO: REUTILIZAR O OBNJETO CARRINHO JA EXISTENTE UTILIZANDO A INTERSECAO, "&", QUE EXTENDE AS REFERENCIAS DE UM TIPO PARA O OUTRO TIPO

type NovoCarrinho2 = Omit<Carrinho, "tipoTransacao"> &{
    endereco: Endereco,
    tipoTransacao: Lowercase<'credito' | 'Debito'>
}


type Endereco = {
    cep: string, 
    rua: string,
    bairro: string,
    cidade: string,
    estado: string
}