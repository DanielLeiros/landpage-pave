import React, { useState, useEffect } from 'react';
import { brazilianStatesOptions } from "../../utils/BrazilianStates";
import Select from 'react-select';

const PreForm = ({cancel, submit,formCategory}) => {

    return (
        <div className="form-container">
            <div>
                <label>Nome<span className="required">*</span></label>
                <input className="input-field text-15" placeholder="Nome" type="text" onChange={(e)=> console.log(e)} />
            </div>
            <div>
                <label>E-mail<span className="required">*</span></label>
                <input className="input-field text-15" placeholder="app-pave@pave.com" type="email" onChange={(e)=> console.log(e)} />
            </div>
            <div>
                <label>Estado<span className="required">*</span></label>
                <Select className="text-15" value={brazilianStatesOptions[1]} options={brazilianStatesOptions} onChange={(e)=> console.log(e)} />
            </div>
            <div>
                <label>Contato</label>
                <input className="input-field text-15" placeholder="(xx) xxxxx-xxxx" type="tel" onChange={(e)=> console.log(e)} />
            </div>
        </div>
    );
}

export default PreForm;

