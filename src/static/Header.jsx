import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";
import logo from "../assets/png/kudaLogo.png"
import { Link } from "react-router-dom";
const Header = () =>{

    return(

        <Container >
            <LogoNav>
                <Logo>
                    <img src={logo} alt="logo" />
                </Logo>
              
                <Navigations>
                    <Link to="/">
                    <nav>
                        <span>Personal</span>
                        <IoMdArrowDropdown/>
                    </nav>
                    </Link>
                    

                   <Link to="/business">
                   <nav>
                        <span>Business</span>
                        <IoMdArrowDropdown/>
                    </nav>
                   </Link>

                    <Link to="/company">
                    <nav>
                        <span>Company</span>
                        <IoMdArrowDropdown/>
                    </nav>
                    </Link>

                    <nav>
                        <span>Help</span>
                        <IoMdArrowDropdown/>
                    </nav>
                </Navigations>
            </LogoNav>

            <Buttons>
                <SignIn>Sign In</SignIn>
                <JoinBtn>Join Kuda</JoinBtn>

            </Buttons>
        </Container>        
    )

}

export default Header

const Container = styled.div`
    height: 70px;
    /* background-color: brown; */
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const LogoNav = styled.div`
    display: flex;
`
const Logo = styled.div`
    img{
        width: 90px;
    }
`
const Navigations = styled.div`
    display: flex;
    align-items: center;
    nav{
        margin-left: 40px;
        display: flex;
        align-items: center;
        color: rgb(70, 27, 119);
        font-weight: 600;
        font-size: 14px;

    }
`
const Buttons = styled.div``
const SignIn = styled.button``
const JoinBtn = styled.button``



