import styled from 'styled-components'

import { Input } from 'components/input'

const PrivacyMainFieldset = styled.fieldset`
  width: 250px;
  border: none;
  padding-left: 0px;
`
const PrivacyMainInput = styled(Input)`
  border-radius: 10px;
`
export { PrivacyMainInput, PrivacyMainFieldset }
