import { HOME_URL } from 'const/urls'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfoSelector } from 'store/selectors/user.selector'
import { useAppSelector } from 'store/store'
import { setLargeFirstLetter } from 'utils/setLargeFirstLetter'
import { toLocaleDateString } from 'utils/toLocaleDateString'

import { Button } from 'components/button'
import { Container } from 'components/container'
import { HtmlText } from 'components/htmlText'
import { Loader } from 'components/loaders/loader'

import {
  Avatar,
  AvatarWrapper,
  Biography,
  ButtonWrapper,
  ColorSpan,
  ImagesWrapper,
  InfoWrapper,
  UserCabinetSection,
  UserInfo,
  UserInfoWrapper,
  Wrapper
} from './styles'
import { UpdateUserModal } from './updateUserModal'

export const UserCabinet = () => {
  const { data, isLoading } = useAppSelector(userInfoSelector)
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate()
  const handleEdit = () => setEditMode(!editMode)
  const handleNavigate = () => {
    navigate(HOME_URL)
  }
  const backgroundFonSrc = `${data.backgroundFon}?id=${Math.floor(Math.random() * 100)}`

  const userInfoFields = [
    'name',
    'age',
    'country',
    'city',
    'color',
    'gender',
    'date'
  ] as (keyof typeof data)[]

  const setUserInfo = (key: string, value: string) => {
    switch (key) {
      case 'color':
        return (
          <p>
            Color <ColorSpan color={value} />
          </p>
        )
      case 'date':
        return (
          <p>
            Bithday <span>{toLocaleDateString(value)}</span>
          </p>
        )
      default:
        return (
          <p>
            {setLargeFirstLetter(key)} <span>{value}</span>
          </p>
        )
    }
  }

  return (
    <UserCabinetSection>
      <Container>
        {isLoading ? (
          <Loader position='absolute' />
        ) : (
          <Wrapper>
            <ImagesWrapper>
              <img src={backgroundFonSrc} alt={data.name} />
              <AvatarWrapper>
                <Avatar>
                  <img src={data.avatar} alt={data.name} />
                </Avatar>
                <div>{data.name}</div>
              </AvatarWrapper>
            </ImagesWrapper>

            <UserInfoWrapper>
              <UserInfo>
                {userInfoFields.map((key) => (
                  <InfoWrapper key={key}>{setUserInfo(key, data[key])}</InfoWrapper>
                ))}
              </UserInfo>
              <Biography>
                <p>Biography</p>
                <HtmlText
                  str={data.biography.length ? data.biography : 'You`ve not a biography yet '}
                />
              </Biography>
            </UserInfoWrapper>

            <ButtonWrapper>
              <Button onClick={handleEdit}>Edit</Button>
              <Button onClick={handleNavigate}>Back</Button>
            </ButtonWrapper>
          </Wrapper>
        )}
        {editMode && <UpdateUserModal userData={data} handleEdit={handleEdit} />}
      </Container>
    </UserCabinetSection>
  )
}
