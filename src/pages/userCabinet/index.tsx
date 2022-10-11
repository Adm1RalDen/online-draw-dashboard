import { HOME_URL } from 'const/urls'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'store'
import { userInfoSelector } from 'store/selectors/user.selector'
import { setImageUrl } from 'utils/setImageUrl'
import { setLargeFirstLetter } from 'utils/setLargeFirstLetter'
import { toLocaleDateString } from 'utils/toLocaleDateString'

import { Container } from 'components/container'
import { HtmlText } from 'components/htmlText'
import { Loader } from 'components/loaders/loader'

import {
  Avatar,
  AvatarWrapper,
  Biography,
  ButtonWrapper,
  CabinetButton,
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

  const handleEdit = () => setEditMode((prev) => !prev)
  const handleNavigate = () => navigate(HOME_URL)

  const backgroundFonSrc = `${data.backgroundFon}?id=${Math.floor(Math.random() * 1000)}`
  const avatarSrc = `${data.avatar}?id=${Math.floor(Math.random() * 1000)}`

  const userInfoFields = ['name', 'country', 'city', 'color', 'gender', 'date'] as Exclude<
    keyof typeof data,
    'isUse2FA'
  >[]

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
              <img src={setImageUrl(backgroundFonSrc)} alt={data.name} />
              <AvatarWrapper>
                <Avatar>
                  <img src={setImageUrl(avatarSrc)} alt={data.name} />
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
              <CabinetButton onClick={handleEdit}>Edit</CabinetButton>
              <CabinetButton onClick={handleNavigate}>Back</CabinetButton>
            </ButtonWrapper>
          </Wrapper>
        )}
        {editMode && <UpdateUserModal userData={data} handleEdit={handleEdit} />}
      </Container>
    </UserCabinetSection>
  )
}
