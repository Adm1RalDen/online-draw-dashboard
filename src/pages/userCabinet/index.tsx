import { Button } from "components/button/styles";
import { Container } from "components/container/styles";
import { useState } from "react";
import {
  UserCabinetSection,
  AvatarWrapper,
  Wrapper,
  UserInfo,
  Biography,
  UserInfoWrapper,
  Avatar,
  ImagesWrapper,
  ButtonWrapper,
} from "./styles";
import { useAppSelector } from "store/store";
import { userInfoSelector } from "store/selectors/user.selector";
import { UpdateUserModal } from "./updateUserModal";
import { HtmlText } from "components/htmlText";
import { useNavigate } from "react-router-dom";

export const UserCabinet = () => {
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const { data, isLoading } = useAppSelector(userInfoSelector);
  const handleEdit = () => setEditMode(!editMode);

  return (
    <UserCabinetSection>
      <Container>
        {isLoading ? (
          <h1 style={{ textAlign: "center" }}>Loading...</h1>
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
                    <span>Color</span>{" "}
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
                <Button onClick={handleEdit} color="#fff">
                  Edit
                </Button>
                <Button onClick={() => navigate("/")} color="#fff">
                  Back
                </Button>
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
