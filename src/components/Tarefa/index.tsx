import * as S from './styles'

const Tarefa = () => (
  <S.Cartao>
    <S.Titulo>Nome da Tarefa</S.Titulo>
    <S.Tag>importante</S.Tag>
    <S.Tag>pendente</S.Tag>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editar</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Cartao>
)

export default Tarefa
