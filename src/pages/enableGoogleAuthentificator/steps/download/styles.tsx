import styled, { css } from 'styled-components'

type Props = {
  isActive: boolean
}

const DownloadStepPlatformsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`
const DownloadStepPlatform = styled.div<Props>`
  width: 100px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  padding: 10px;

  ${(p) =>
    p.isActive &&
    css`
      box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.middleGray};
    `}

  & > svg {
    width: 30px;
    height: 30px;
  }

  & > h6 {
    margin-top: 10px;
  }
`
const DownloadStepQrcodesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > p {
    font-weight: 400;

    & > span {
      font-weight: 300;
    }
  }
`
export { DownloadStepPlatformsWrapper, DownloadStepPlatform, DownloadStepQrcodesWrapper }
