import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  padding-bottom: 48px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    cursor: pointer;
    width: 80px;
  }
`

export const Menus = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 40px;
`

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 12px;
  cursor: pointer;

  .icon {
    width: 24px;
    margin: 0 8px;
  }

  .title {
    color: rgb(249, 249, 249);
    font-family: Avenir-Heavy, sans-serif;
    font-size: 13px;
    text-transform: uppercase;
  }
`

export const Profile = styled(Header)`
  margin-left: auto;

  .profile {
    height: 48px;
    width: 48px;
    border-radius: 24px;
    cursor: pointer;
  }
`
