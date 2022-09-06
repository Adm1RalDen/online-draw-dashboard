import { HOME_URL } from "const/urls";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfoSelector } from "store/selectors/user.selector";
import { useAppSelector } from "store/store";

import { Button } from "components/button";
import { Container } from "components/container";
import { HtmlText } from "components/htmlText";
import { Loader } from "components/loaders/loader";

import {
  Avatar,
  AvatarWrapper,
  Biography,
  ButtonWrapper,
  ImagesWrapper,
  UserCabinetSection,
  UserInfo,
  UserInfoWrapper,
  Wrapper,
} from "./styles";
import { UpdateUserModal } from "./updateUserModal";

export const UserCabinet = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const { data, isLoading } = useAppSelector(userInfoSelector);
  const handleEdit = () => setEditMode(!editMode);
  const handleNavigate = () => {
    navigate(HOME_URL);
  };

  return (
    <UserCabinetSection>
      <Container>
        {isLoading ? (
          <Loader position="absolute" />
        ) : (
          <>
            <Wrapper>
              <ImagesWrapper>
                <img
                  src={
                    data.backgroundFon +
                    `?id=${Math.floor(Math.random() * 100)}`
                  }
                  alt={data.name}
                />
                <AvatarWrapper>
                  <Avatar>
                    <img src={data.avatar} alt={data.name} />
                  </Avatar>
                  <div>{data.name}</div>
                </AvatarWrapper>
              </ImagesWrapper>

              <UserInfoWrapper>
                <UserInfo>
                  <div>
                    <span>Name</span> {data.name}
                  </div>
                  <div>
                    <span>Age</span> {data.age}
                  </div>
                  <div>
                    <span>Country</span> {data.country}
                  </div>
                  <div>
                    <span>City</span> {data.city}
                  </div>
                  <div>
                    <span>Color</span>
                    <span
                      style={{
                        display: "inline-block",
                        background: data.color,
                        width: "10px",
                        height: "10px",
                        borderRadius: "10px",
                        minWidth: "10px",
                      }}
                    ></span>
                  </div>
                  <div>
                    <span>Gender</span> {data.gender}
                  </div>
                  <div>
                    <span>Bithday</span> {data.date}
                  </div>
                </UserInfo>

                <Biography>
                  <p>Biography</p>
                  <HtmlText
                    str={
                      data.biography
                        ? data.biography
                        : "You`ve not a biography yet "
                    }
                  />
                </Biography>
              </UserInfoWrapper>

              <ButtonWrapper>
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleNavigate}>Back</Button>
              </ButtonWrapper>
            </Wrapper>
          </>
        )}

        {editMode && (
          <UpdateUserModal userData={data} handleEdit={handleEdit} />
        )}
      </Container>
    </UserCabinetSection>
  );
};
