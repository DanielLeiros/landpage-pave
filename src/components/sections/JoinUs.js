import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import PreForm from './PreForm.js';
import { formStates } from "./../../utils/FormStates.js"; 
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

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

    const onCancel = () => {
        setFormSelecionado(formStates.NENHUM);
    }

    useEffect(() => {console.log("atualizou")}, [formSelecionado]);

    const outerClasses = classNames(
        'features-tiles section',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const sectionHeader = {
        title: 'Junte-se ao pavê',
        paragraph: 'Faça seu pré-cadastro e receba prêmios especiais. Escolha o perfil que mais te caracteriza e seja muito bem-vindo a essa experiência!'
    };

    const restaurantTitle = {
        title: 'Restaurante',
    }

    const clientTitle = {
        title: 'Cliente',
    }

    return (
        <section
            {...props}
            className={`${outerClasses} mb-72`}
            id="join-us"
        >
            <div className="container mt-72">
                <div>
                    <SectionHeader data={sectionHeader} className="center-content" />
                </div>
                <div className="join-buttons">
                    <div className={`costumer-box ${formSelecionado !== formStates.CLIENTE && "join-hover"}`} hidden={formSelecionado === formStates.RESTAURANTE} onClick={() => onChangeForm(formStates.CLIENTE)}>
                        <SectionHeader data={clientTitle} tag={'h3'} className="center-content" />
                        <div className="join-button-form">
                            <Image
                                src={require('./../../assets/images/clientes.svg')}
                                alt="Botão para pré-cadastro de clientes"
                                width={300}
                                height={300} />
                                
                            {formSelecionado === formStates.CLIENTE && <PreForm formCategory={formStates.CLIENTE} />}
                        </div>
                    </div>
                    <div className={`restaurant-box ${formSelecionado !== formStates.RESTAURANTE && "join-hover"}`} hidden={formSelecionado === formStates.CLIENTE} onClick={() => onChangeForm(formStates.RESTAURANTE)}>
                        <SectionHeader data={restaurantTitle} tag={'h3'} className="center-content" />
                        <div className="join-button-form">
                            <Image
                                src={require('./../../assets/images/restaurantes.svg')}
                                alt="Botão para pré-cadastro de estabelecimentos"
                                width={300}
                                height={300} />

                            {formSelecionado === formStates.RESTAURANTE && <PreForm formCategory={formStates.RESTAURANTE} />}
                        </div>
                    </div>
                </div>
            </div>
            { formSelecionado !== formStates.NENHUM && 
                <div className="join-us-buttons">
                    <ButtonGroup>
                        <Button tag="button" color="dark" wideMobile onClick={onCancel}>
                            Voltar
                        </Button>
                        <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                            Confirmar
                        </Button>
                    </ButtonGroup>
                </div>
            }
        </section>
    );

}

export default JoinUs;