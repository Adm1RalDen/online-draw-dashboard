import { ColorCircle } from 'components/color-circle'
import { HtmlText } from 'components/htmlText'

import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import {
  DashboardContentWrapper,
  PropertiesTitle,
  PropertiesWrapper,
  PropertyText,
  PropertyWrapper
} from './styles'

export const DashboardContent = () => {
  const userData = useAppSelector(userDataSelector)

  return (
    <DashboardContentWrapper>
      <PropertiesWrapper>
        <PropertiesTitle>Location</PropertiesTitle>
        <PropertyWrapper>
          <strong>Country</strong> <PropertyText>{userData.country}</PropertyText>
        </PropertyWrapper>
        <PropertyWrapper>
          <strong>City</strong> <PropertyText>{userData.city}</PropertyText>
        </PropertyWrapper>
      </PropertiesWrapper>

      <PropertiesWrapper>
        <PropertiesTitle>About</PropertiesTitle>
        <PropertyWrapper>
          <strong>Date of birthday</strong> <PropertyText>{userData.date}</PropertyText>
        </PropertyWrapper>

        <PropertyWrapper>
          <strong>Favorite color</strong>
          <PropertyText>
            <ColorCircle color={userData.color} />
          </PropertyText>
        </PropertyWrapper>

        <PropertyWrapper>
          <strong>Gender</strong> <PropertyText>{userData.gender}</PropertyText>
        </PropertyWrapper>
      </PropertiesWrapper>

      <PropertiesWrapper>
        <PropertiesTitle>Biography</PropertiesTitle>
        {userData.biography && (
          <PropertyWrapper>
            <HtmlText str={userData.biography} />
          </PropertyWrapper>
        )}
      </PropertiesWrapper>
    </DashboardContentWrapper>
  )
}
