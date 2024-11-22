import styled from 'styled-components'

export const Cartao = styled.div`
  background-color: #fdfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Tag = styled.span`
  padding: 4px 8px;
  font-size: 10px;
  font-weight: bold;
  background: #e1a32a;
  margin-right: 16px;
  border-radius: 8px;
  color: #fff;
  display: inline-block;
`

export const Descricao = styled.textarea`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #8b8b8b;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
