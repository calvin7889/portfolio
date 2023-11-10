import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import CrossfadeImage from 'react-crossfade-image';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  useEffect(() => {
    fetch(endpoints.about, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const isMobile = {
    Android: function a() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function b() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function c() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function d() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function e() {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function f() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS()
          || isMobile.Opera() || isMobile.Windows());
    },
  };
  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                    {isMobile.any() && <CrossfadeImage src={data?.imageSource[index]} duration={2000} style={{ height: '500px' }} alt="profile" />}

                  </Col>
                  { !isMobile.any() && (
                    <Col style={styles.introImageContainer}>
                      <CrossfadeImage src={data?.imageSource[index]} duration={2000} style={{ height: '500px' }} alt="profile" />
                    </Col>
                  )}
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
