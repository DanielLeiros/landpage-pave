import React from 'react';
import Logo from '../layout/partials/Logo';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={`${outerClasses} illustration-element-pic`}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              <Logo />
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom w-text" data-reveal-delay="400">
                Pratos, preços e promoções dos lugares que você mais quer ir.  <br/> E dos que nem sabia que queria tanto.
                </p>
              <div >
                <ButtonGroup>
                  <Button tag="a" color="dark" wideMobile href="#feature-split">
                    Saber mais
                    </Button>
                  <Button tag="a" color="primary" wideMobile href="#join-us">
                    Junte-se ao pavê
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;