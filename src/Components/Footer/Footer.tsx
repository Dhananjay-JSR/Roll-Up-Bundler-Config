import React, { useContext } from "react";
import styled from "styled-components";
import type ThemeTypeGenerator from '../../types/responseType'
import { ThemeContext } from "../../Provider/ThemeProvider";
function Footer() {
    // @ts-ignore
  const data:ThemeTypeGenerator = useContext(ThemeContext);
  console.log(data.borderPresets)
  const breakpoints: any= [
    data.breakpoints.mobile,
    data.breakpoints.laptop,
    data.breakpoints.desktop,
  ];

  console.log(data)

  const FooterContainer = styled.div`
    background-color: ${data.colorPalettes.new_palette.neutral.N75};
    padding: 70px 120px 60px 120px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      padding: 70px 56px 90px 56px;
      gap: 36px;
    }
    @media (max-width: ${breakpoints[1]}) {
      padding: 72px 32px 98px 32px;
      gap: 30px;
    }
  `;

  const FooterTopContainer = styled.div`
    display: flex;
    justify-content: start;
    gap: 100px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      gap: 48px;
    }
    @media (max-width: ${breakpoints[1]}) {
      flex-direction: column;
      gap: 64px;
    }
  `;

  const FooterTopContainerFirstItemContainer = styled.div`
    width: 200px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* TODO: width not changed. Should I change it? */
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      width: 200px;
      max-width: 200px;
    }
    @media (max-width: ${breakpoints[1]}) {
      width: 100%;
    }
  `;

  const FooterTopContainerItemContainer = styled.div`
    width: 200px;
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 16px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      width: 128px;
      max-width: 128px;
      gap: 21px;
    }
    @media (max-width: ${breakpoints[1]}) {
      width: 100%;
      gap: 16px;
    }
  `;

  const FooterTopContainerItemContainerLogo = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    gap: 17.74px;
  `;

  const FooterFollowContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      gap: 16px;
    }
    @media (max-width: ${breakpoints[1]}) {
      display: none;
    }
  `;

  const FooterFollowContainerText = styled.div`
    font-size: ${data.textstyles["H6-desktop"].fontsize}px;
    line-height: ${data.textstyles["H6-desktop"].line_height}px;
    color: ${data.colorPalettes.new_palette.neutral.N0};
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-laptop"].fontsize}px;
      line-height: ${data.textstyles["H6-laptop"].line_height}px;
    }
    @media (max-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-mobile"].fontsize}px;
      line-height: ${data.textstyles["H6-mobile"].line_height}px;
    }
  `;

  const FooterFollowContainerIcons = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
    & > svg {
      cursor: pointer;
    }
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      gap: 12px;
    }
  `;

  const FooterTopContainerItemTitle = styled.div`
    font-size: ${data.textstyles["H6-desktop"].fontsize}px;
    line-height: ${data.textstyles["H6-desktop"].line_height}px;
    color: ${data.colorPalettes.new_palette.primary.P100};
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-laptop"].fontsize}px;
      line-height: ${data.textstyles["H6-laptop"].line_height}px;
    }
    @media (max-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-mobile"].fontsize}px;
      line-height: ${data.textstyles["H6-mobile"].line_height}px;
    }
  `;

  const FooterTopContainerItemLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    font-size: ${data.textstyles["H6-desktop"].fontsize}px;
    line-height: ${data.textstyles["H6-desktop"].line_height}px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-laptop"].fontsize}px;
      line-height: ${data.textstyles["H6-laptop"].line_height}px;
    }
    @media (max-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-mobile"].fontsize}px;
      line-height: ${data.textstyles["H6-mobile"].line_height}px;
      gap: 8px;
    }
  `;
  const FooterTopContainerItemLink = styled.div`
    color: ${data.colorPalettes.new_palette.neutral.N0};
  `;

  const FooterBottomContainer = styled.div`
    border-top: 1px solid ${data.colorPalettes.new_palette.neutral.N50};
    display: flex;
    flex-direction: column;
  `;

  const FooterBottomContainerFirstText = styled.div`
    margin: 20px 0px;
    font-size: ${data.textstyles["H6-desktop"].fontsize}px;
    line-height: ${data.textstyles["H6-desktop"].line_height}px;
    color: ${data.colorPalettes.new_palette.neutral.N50};
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      margin: 20px 0 16px 0;
      font-size: ${data.textstyles["H6-laptop"].fontsize}px;
      line-height: ${data.textstyles["H6-laptop"].line_height}px;
    }
    @media (max-width: ${breakpoints[1]}) {
      margin: 20px 0;
      font-size: ${data.textstyles["H6-mobile"].fontsize}px;
      line-height: ${data.textstyles["H6-mobile"].line_height}px;
    }
  `;

  const FooterBottomContainerSecondContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: start;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      gap: 16px;
    }
    @media (max-width: ${breakpoints[1]}) {
      gap: 8px;
    }
  `;

  const FooterBottomContainerSecondText = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: ${data.textstyles["H6-desktop"].fontsize}px;
    line-height: ${data.textstyles["H6-desktop"].line_height}px;
    color: ${data.colorPalettes.new_palette.neutral.N0};
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-laptop"].fontsize}px;
      line-height: ${data.textstyles["H6-laptop"].line_height}px;
    }
    @media (max-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-mobile"].fontsize}px;
      line-height: ${data.textstyles["H6-mobile"].line_height}px;
    }
  `;

  const FooterBottomContainerThirdText = styled.div`
    font-size: ${data.textstyles["H6-desktop"].fontsize}px;
    line-height: ${data.textstyles["H6-desktop"].line_height}px;
    color: ${data.colorPalettes.new_palette.neutral.N0};
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-laptop"].fontsize}px;
      line-height: ${data.textstyles["H6-laptop"].line_height}px;
    }
    @media (max-width: ${breakpoints[1]}) {
      font-size: ${data.textstyles["H6-mobile"].fontsize}px;
      line-height: ${data.textstyles["H6-mobile"].line_height}px;
    }
  `;

  const FooterTopContainerItemMobileContainer = styled.div`
    display: none;
    @media (max-width: ${breakpoints[1]}) {
      display: block;
    }
  `;

  const Logo = styled.img`
    height: 36.73px;
    width: 42.24px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      height: 26.4px;
      width: 22.95px;
    }
    @media (max-width: ${breakpoints[1]}) {
      height: 27.38px;
      width: 23.8px;
    }
  `;
  const LogoText = styled.img`
    height: 27.8px;
    width: 124.56px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      height: 17.38px;
      width: 77.85px;
    }
    @media (max-width: ${breakpoints[1]}) {
      height: 18.02px;
      width: 80.73px;
    }
  `;

  const HeartIcon = styled.img`
    height: 16px;
    width: 15px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      height: 12px;
      width: 12px;
    }
    @media (max-width: ${breakpoints[1]}) {
      height: 16px;
      width: 15px;
    }
  `;

  const FacebookIcon = styled.img`
    height: 25px;
    width: 25px;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      height: 16px;
      width: 16px;
    }
    @media (max-width: ${breakpoints[1]}) {
      height: 25px;
      width: 25px;
    }
  `;
  const YoutubeIcon = styled.img`
    width: 25px;
    height: auto;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      width: 16px;
      height: auto;
    }
    @media (max-width: ${breakpoints[1]}) {
      width: 25px;
      height: auto;
    }
  `;
  const InstagramIcon = styled.img`
    width: 25px;
    height: auto;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      width: 16px;
      height: auto;
    }
    @media (max-width: ${breakpoints[1]}) {
      width: 25px;
      height: auto;
    }
  `;
  const LinkedinIcon = styled.img`
    width: 25px;
    height: auto;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      width: 16px;
      height: auto;
    }
    @media (max-width: ${breakpoints[1]}) {
      width: 25px;
      height: auto;
    }
  `;
  const TwitterIcon = styled.img`
    width: 25px;
    height: auto;
    @media (max-width: ${breakpoints[2]}) and (min-width: ${breakpoints[1]}) {
      width: 16px;
      height: auto;
    }
    @media (max-width: ${breakpoints[1]}) {
      width: 25px;
      height: auto;
    }
  `;

  const FollowContainerMobile = styled.div`
    display: none;
    @media (max-width: ${breakpoints[1]}) {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `;

  const FollowIconsMobileText = styled.div`
    font-size: ${data.textstyles["H6-mobile"].fontsize}px;
    line-height: ${data.textstyles["H6-mobile"].line_height}px;
    color: ${data.colorPalettes.new_palette.neutral.N0};
  `;

  const FollowIconsMobile = styled.div`
    display: flex;
    justify-content: start;
    gap: 20px;
    align-items: center;
  `;

//   import logoImg from '../assets/desktop/logo.svg'
//   import LogoTextImg from '../assets/desktop/logo-text.svg'
//   import TwitterIcom from '../assets/desktop/twitter.svg'
//   import LinkedInIcon from '../assets/desktop/linkedin.svg'
//   import Instagram from '../assets/desktop/instagram.svg';
  return (
    <FooterContainer>
      <FooterTopContainer>
        <FooterTopContainerFirstItemContainer>
          <FooterTopContainerItemContainerLogo>
            <Logo
              src={require(`../assets/desktop/logo.svg`).default}
              alt="icon"
            ></Logo>
            <LogoText
              src={require(`../assets/desktop/logo-text.svg`).default}
              alt="icon"
            ></LogoText>
          </FooterTopContainerItemContainerLogo>
          <FooterFollowContainer>
            <FooterFollowContainerText>Follow</FooterFollowContainerText>
            <FooterFollowContainerIcons>
              <TwitterIcon
                src={require(`../assets/desktop/twitter.svg`).default}
                alt="youtube-icon"
              />
              <LinkedinIcon
                src={require(`../assets/desktop/linkedin.svg`).default}
                alt="youtube-icon"
              />
              <InstagramIcon
                src={require(`../assets/desktop/instagram.svg`).default}
                alt="youtube-icon"
              />
              <YoutubeIcon
                src={require(`../assets/desktop/youtube.svg`).default}
                alt="youtube-icon"
              />
              <FacebookIcon
                src={require(`../assets/desktop/facebook.svg`).default}
                alt="facebook-icon"
              />
            </FooterFollowContainerIcons>
          </FooterFollowContainer>
        </FooterTopContainerFirstItemContainer>
        <FooterTopContainerItemContainer>
          <FooterTopContainerItemTitle>Products</FooterTopContainerItemTitle>
          <FooterTopContainerItemLinks>
            <FooterTopContainerItemLink>AryaBot</FooterTopContainerItemLink>
            <FooterTopContainerItemLink>
              Property Connector
            </FooterTopContainerItemLink>
            <FooterTopContainerItemLink>
              Site Visit Coordinator
            </FooterTopContainerItemLink>
            <FooterTopContainerItemLink>EasyWeb</FooterTopContainerItemLink>
            <FooterTopContainerItemLink>Pricing</FooterTopContainerItemLink>
          </FooterTopContainerItemLinks>
        </FooterTopContainerItemContainer>
        <FooterTopContainerItemContainer>
          <FooterTopContainerItemTitle>Company</FooterTopContainerItemTitle>
          <FooterTopContainerItemLinks>
            <FooterTopContainerItemLink>About Us</FooterTopContainerItemLink>
            <FooterTopContainerItemLink>Contact Us</FooterTopContainerItemLink>
            <FooterTopContainerItemLink>Careers</FooterTopContainerItemLink>
            <FooterTopContainerItemLink>EasyWeb</FooterTopContainerItemLink>
          </FooterTopContainerItemLinks>
        </FooterTopContainerItemContainer>
        <FooterTopContainerItemContainer>
          <FooterTopContainerItemTitle>Policy</FooterTopContainerItemTitle>
          <FooterTopContainerItemLinks>
            <FooterTopContainerItemLink>
              Terms of Service
            </FooterTopContainerItemLink>
            <FooterTopContainerItemLink>
              Privacy Policy
            </FooterTopContainerItemLink>
            <FooterTopContainerItemLink>
              Cookies Policy
            </FooterTopContainerItemLink>
          </FooterTopContainerItemLinks>
        </FooterTopContainerItemContainer>
        <FollowContainerMobile>
          <FollowIconsMobileText>Follow</FollowIconsMobileText>
          <FollowIconsMobile>
            <TwitterIcon
              src={require(`../assets/desktop/twitter.svg`).default}
              alt="youtube-icon"
            />
            <LinkedinIcon
              src={require(`../assets/desktop/linkedin.svg`).default}
              alt="youtube-icon"
            />
            <InstagramIcon
              src={require(`../assets/desktop/instagram.svg`).default}
              alt="youtube-icon"
            />
            <YoutubeIcon
              src={require(`../assets/desktop/youtube.svg`).default}
              alt="youtube-icon"
            />
            <FacebookIcon
              src={require(`../assets/desktop/facebook.svg`).default}
              alt="facebook-icon"
            />
          </FollowIconsMobile>
        </FollowContainerMobile>
      </FooterTopContainer>
      <FooterBottomContainer>
        <FooterBottomContainerFirstText>
          © 2022 Web3 Platforms Private Limited. All rights reserved.
        </FooterBottomContainerFirstText>
        <FooterBottomContainerSecondContainer>
          <FooterBottomContainerSecondText>
            <span>Made with</span>
            <HeartIcon
              src={require(`../assets/desktop/heart.svg`).default}
              alt="heart-icon"
            />
            <span>in Bharat</span>
          </FooterBottomContainerSecondText>
          <FooterBottomContainerThirdText>
            Registered with Startup India {"("}DIPP96460{")"}
          </FooterBottomContainerThirdText>
        </FooterBottomContainerSecondContainer>
      </FooterBottomContainer>
    </FooterContainer>
  );
}

export default Footer;