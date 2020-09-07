import React, { useState } from 'react';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const formStates = {
    NENHUM: "NENHUM",
    CLIENTE: "CLIENTE",
    RESTAURANTE: "RESTAURANTE",
};

const JoinUs = (
    className,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    ...props
) => {

    const [formSelecionado, setFormSelecionado] = useState(formStates.NENHUM);

    const onChangeForm = (selected) => {
        if (formStates !== selected) setFormSelecionado(selected);
    };

    const outerClasses = classNames(
        'features-tiles section',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const sectionHeader = {
        title: 'Junte-se ao pavê',
        paragraph: 'Seja um dos primeiros a usar o nosso app. Escolha o perfil que te caracteriza e seja muito bem-vindo!'
    };

    const restaurantTitle = {
        title: 'Restaurantes',
    }

    const clientTitle = {
        title: 'Clientes',
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container mt-72">
                <div>
                    <SectionHeader data={sectionHeader} className="center-content" />
                </div>
                <div className="join-buttons">
                    <div className="costumer-box join-hover" hidden={formSelecionado === formStates.RESTAURANTE} onClick={() => onChangeForm(formStates.CLIENTE)}>
                        <SectionHeader data={clientTitle} tag={'h3'} className="center-content" />
                        <Image
                            src={require('./../../assets/images/clientes.svg')}
                            alt="Botão para pré-cadastro de clientes"
                            width={300}
                            height={300} />
                    </div>
                    <div className="restaurant-box join-hover" hidden={formSelecionado === formStates.CLIENTE} onClick={() => onChangeForm(formStates.RESTAURANTE)}>
                        <SectionHeader data={restaurantTitle} tag={'h3'} className="center-content" />
                        <Image
                            src={require('./../../assets/images/restaurantes.svg')}
                            alt="Botão para pré-cadastro de estabelecimentos"
                            width={300}
                            height={300} />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default JoinUs;