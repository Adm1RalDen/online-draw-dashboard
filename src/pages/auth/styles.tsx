import styled from "styled-components";

const AuthSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4361ee;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto minmax(300px, 500px);
  gap: 50px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  flex-flow: column wrap;
  gap: 20px;
  border: 4px solid #fff;
  box-shadow: 0px 0px 2px 0px #989898;
  padding: 20px;
`;

const Title = styled.h2`
  color: #ffffff;
  font-weight: 400;
`;
const Logo = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  display: flex;
  align-items: center;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin: 0;
  }
  & > a {
    width: max-content;
    display: inline-block;
    padding: 10px 5px;
    transition: all 0.3s;
    border-bottom: 2px solid transparent;

    &:hover {
      border-color: ${(p) => p.theme.colors.link};
    }
  }
`;
const Form = styled.form``;

export { AuthSection, Form, FormWrapper, Container, Logo, Wrapper, Title };
