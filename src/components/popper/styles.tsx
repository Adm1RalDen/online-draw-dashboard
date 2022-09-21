import styled from 'styled-components'

const PopperWrapper = styled.div`
  position: relative;
  display: inline-block;
`
const PopperModal = styled.div`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  border-radius: 5px;
  padding: 15px;
  right: 0;
  top: 20px;
  width: 250px;
  min-height: 110px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.popper};
  box-shadow: 1px 1px 14px -2px ${({ theme }) => theme.colors.middleGray};
`
const PopperButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: right;
  gap: 5px;
`
const PopperButton = styled.button`
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 2px;
  padding: 5px 10px;
  border: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`
export { PopperWrapper, PopperModal, PopperButtonsWrapper, PopperButton }
