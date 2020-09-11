import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'É pavê, comer e amar',
    paragraph: 'Sabemos o quão difícil tem sido o período de isolamento social, mas nosso sonho é fazer com que as pessoas voltem a curtir e festejar presencialmente. Para auxiliar nesse processo, seja você usuário ou estabelecimento, use o pavê e aproveite:  '
  };

  const descriptions = {
    list: 'Versão totalmente digital do cardápio, de rápido acesso pelo cliente e manutenção rápida pelo estabelecimento.',
    coin: 'Permite que os clientes consultem os preços e escolham destino e prato que cabem no estômago. Ou melhor, bolso!',
    tree: 'A melhor publicidade é um bom atendimento e bucho cheio. Compartilhamento rápido e fácil entre clientes.',
    ticket: 'Promoções exclusivas fazem o movimento no salão aumentar, só confia!',
    clock: 'Sem espera de cardápio e com pedidos já idealizados o tempo diminui e a satisfação do cliente aumenta.',
    rocket: 'Quanto melhor avaliado, melhor sua posição em nossos rankings, consequentemente  maior a visibilidade. A meta é o topo!',
    bubbles: 'Os feedbacks são imprescindíveis para a evolução e consolidação do negócio. Alinhe seu produto às expectativas.',
    leaf: 'Diminuir a produção de cardápios impressos além de economizar ainda ajuda o planeta!',

  }

  return (
    <section
      {...props}
      className={outerClasses}
      id="feature-tiles"
    >
      <div className="container mt-72">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/list.svg')}
                      alt={descriptions.list}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Cardápio digital
                    </h4>
                  <p className="m-0 text-sm">
                    {descriptions.list}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/coin-dollar.svg')}
                      alt={descriptions.coin}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Consulta de preços
                    </h4>
                  <p className="m-0 text-sm">
                      {descriptions.coin}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/tree.svg')}
                      alt={descriptions.tree}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Rede de compartilhamento
                    </h4>
                  <p className="m-0 text-sm">
                    {descriptions.tree}
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/ticket.svg')}
                      alt={descriptions.ticket}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Promoções exclusivas
                    </h4>
                  <p className="m-0 text-sm">
                    {descriptions.ticket}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/stopwatch.svg')}
                      alt={descriptions.clock}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Atendimento otimizado
                    </h4>
                  <p className="m-0 text-sm">
                      {descriptions.clock}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/rocket.svg')}
                      alt={descriptions.rocket}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Rankeamento
                    </h4>
                  <p className="m-0 text-sm">
                    {descriptions.rocket}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/bubbles.svg')}
                      alt={descriptions.bubbles}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Feedbacks
                    </h4>
                  <p className="m-0 text-sm">
                    {descriptions.bubbles}
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/leaf.svg')}
                      alt={descriptions.leaf}
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Sustentável
                    </h4>
                  <p className="m-0 text-sm">
                      {descriptions.leaf}
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;