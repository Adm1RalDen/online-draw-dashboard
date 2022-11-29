import { ColorCircle } from 'components/color-circle'
import { HtmlText } from 'components/htmlText'

import { useAppSelector } from 'store'
import { userDataSelector } from 'store/selectors/user.selector'

import { DasboardProperty } from './property'
import {
  DashboardContentWrapper,
  PropertiesTitle,
  PropertiesWrapper,
  PropertyWrapper
} from './styles'

export const DashboardContent = () => {
  const userData = useAppSelector(userDataSelector)

  return (
    <DashboardContentWrapper>
      <PropertiesWrapper>
        <PropertiesTitle>Location</PropertiesTitle>
        <DasboardProperty property='Country' value={userData.country} />
        <DasboardProperty property='City' value={userData.city} />
      </PropertiesWrapper>

      <PropertiesWrapper>
        <PropertiesTitle>About</PropertiesTitle>
        <DasboardProperty property='Date of birthday' value={userData.date} />
        <DasboardProperty
          property='Favorite color'
          value={<ColorCircle color={userData.color} />}
        />
        <DasboardProperty property='Gender' value={userData.gender} />
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
