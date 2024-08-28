import * as React from "react"
import styled from "styled-components"

const Header = () => {
  return (
    <HeadWrapper>
      <HeadContent>
        I WANT to become a
        <span style={{ fontWeight: "bold", marginLeft: "8px" }}> MVer</span>!
      </HeadContent>
    </HeadWrapper>
  )
}

export default Header

const HeadWrapper = styled.div`
  background: linear-gradient(135deg, #add8e6, #87cefa);
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid #4682b4; /* Add a border for more definition */
`

const HeadContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 50px;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7); /* Enhanced shadow effect */
  font-family: "Arial", sans-serif; /* Professional font */
`
