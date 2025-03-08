type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

//1 PASSO: EXCLUINDO O RG
type UsuarioSemRg = Omit<Usuario, "rg">

//2 PASSO: TORNANDO TODOS OS CAMPOS OBRIGATORIOS (data nscimento esta como opcional)
type CamposObrigatorios = Required<UsuarioSemRg>;

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}