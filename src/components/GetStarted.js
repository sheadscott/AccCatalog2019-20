import React from 'react';
import Link from 'gatsby-link';
import { css } from 'glamor';

const get_started__container = css({
  background: 'radial-gradient(at center center, rgb(91, 44, 111), rgb(61, 30, 74))',
  height: '13em',
  paddingBottom: '3em'
});
const get_started__title = css({
  color: 'white',
  textAlign: 'center',
  paddingTop: '1em',
  textTransform: 'uppercase',
  fontWeight: 700,
  display: 'block',
  letterSpacing: '1px',
  fontSize: '3.35em',
  marginTop: 0,
  textShadow: '2px 2px 0 #3D1E4A',
});
const button_group = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',

});
const button = css({
  backgroundColor: '#5b2c6f',
  letterSpacing: '0.5px',
  textAlign: 'center',
  color: 'white',
  border: '1px solid #BDBDBD',
  transition: 'background 200ms',
  fontWeight: '400',
  padding: '0 2rem',
  borderRadius: '2px',
  fontFamily: "'Montserrat', sans-serif",
  textDecoration: 'none',
  textTransform: 'uppercase',
  margin: '0em 1em 2em 1em',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  height: '54px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': { boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)', backgroundColor: 'white', color: 'rgb(61, 30, 74)' }
});
const GetStarted = () => {
  return (
    <div className={get_started__container}>
      <h3 className={get_started__title}>
        Get Started</h3>
      <div className={button_group}>
        <a href="https://austincc.elluciancrmrecruit.com/Admissions/Pages/createaccount.aspx?f=02858ff2-646e-45b6-a474-16e71e2445d0&o=be123df8-a9b8-4a76-993b-6e7223cda83a"
          className={button}>Apply Now</a>
        <a href="https://austincc.elluciancrmrecruit.com/Admissions/Pages/prospectinquiry.aspx?f=c85fc4a9-caad-4b56-8280-91905eed6a7a&o=87a85a1b-89ce-480f-b3dc-82b37657599f"
          className={button}>Request Info</a>

      </div>
    </div>
  );
}
export default GetStarted;