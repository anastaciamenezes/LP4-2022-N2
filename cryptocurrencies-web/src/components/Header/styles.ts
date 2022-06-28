import styled from "styled-components";

export const HeaderBar = styled.div`
  display: flex;
  background-color: #24252a;
  padding: 30px 20px;
  align-items: center;
`
export const AppTitle = styled.h1`
  color: white;
  font-family: 'bold';
  margin: 0;
`

export const ProfilePic = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin: 0 20px 0 auto;
`

export const ProfileName = styled.h4`
  font-family: 'bold';
  color: white;
`

export const SignOutButton = styled.button`
  border: none;
  background-color: #24252a;
`

export const SignOutIcon = styled.img`
  width: 24px;
  filter: invert(100%);
`