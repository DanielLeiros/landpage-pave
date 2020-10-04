import React, {useState, useEffect} from 'react';
import { brazilianStatesOptions } from "../../utils/BrazilianStates";
import Select from 'react-select';
import { formStates } from '../../utils/FormStates';

const PreForm = ({formCategory, getData}) => {

    const [nomePrincipal, setNomePrincipal] = useState('');
    const [email, setEmail] = useState('');
    const [nomeSecundario, setNomeSecundario] = useState('');
    const [estado, setEstado] = useState(brazilianStatesOptions[1]);
    const [contato, setContato] = useState('');

    const setParam = (e, func) => {
        func(e.target.value);
    }

    useEffect(() => {
        getData({nomePrincipal, nomeSecundario, email, estado, contato})
    }, [nomePrincipal, nomeSecundario, email, estado, contato]);

    return (
        <div className="form-container">
            <div>
                <label>Nome{formCategory === formStates.RESTAURANTE && " do estabelecimento"}<span className="required">*</span></label>
                <input className="input-field text-15" placeholder="Nome" type="text" value={nomePrincipal} onChange={(e)=> setParam(e, setNomePrincipal)} />
            </div>
            {formCategory === formStates.RESTAURANTE ?
                (<div>
                    <label>Nome{formCategory === formStates.RESTAURANTE && " do responsável"}<span className="required">*</span></label>
                    <input className="input-field text-15" placeholder="Nome" type="text" value={nomeSecundario} onChange={(e)=> setParam(e, setNomeSecundario)} />
                </div>) : null
            }
            <div>
                <label>E-mail<span className="required">*</span></label>
                <input className="input-field text-15" placeholder="app-pave@pave.com" type="email" value={email} onChange={(e)=> setParam(e, setEmail)} />
            </div>
            <div>
                <label>Estado<span className="required">*</span></label>
                <Select className="text-15" value={estado} options={brazilianStatesOptions} onChange={(e)=> setEstado(e)} />
            </div>
            <div>
                <label>Contato{formCategory === formStates.RESTAURANTE && <span className="required">*</span>}</label>
                <input className="input-field text-15" placeholder="(xx) xxxxx-xxxx" type="tel" value={contato} onChange={(e)=> setParam(e, setContato)} />
            </div>
        </div>
    );
}

export default PreForm;

