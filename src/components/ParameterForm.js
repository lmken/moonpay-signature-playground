import React from 'react';

const ParameterForm = ({ params, paramConfig, onParamChange, apiKey }) => {
  return (
    <div className="parameter-form">
      {Object.entries(params).map(([name, value]) => (
        <div key={name} className="form-group">
          <label htmlFor={name}>
            {name} <span className="param-type">({paramConfig[name].type})</span>
          </label>
          <input
            type="text"
            id={name}
            value={name === 'apiKey' ? apiKey : value}
            onChange={(e) => onParamChange(name, e.target.value)}
            readOnly={paramConfig[name].readOnly}
            className={paramConfig[name].readOnly ? 'read-only' : ''}
          />
        </div>
      ))}
    </div>
  );
};

export default ParameterForm;
