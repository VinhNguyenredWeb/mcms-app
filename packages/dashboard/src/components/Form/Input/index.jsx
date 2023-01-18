import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({ field }) => {
  const handleChange = (e) => {
    if (Object.prototype.hasOwnProperty.call(field, 'changed')) {
      e.target.value = e.target.value.normalize('NFKC');
      field.changed(e);
    }
  };
  return (
    <>
      <Form.Control
        as="input"
        defaultValue={field.value ?? ''}
        type={field.typeFormat ? (field.typeFormat === 11 ? 'password' : 'text') : 'text'}
        id={field.key}
        onChange={(e) => handleChange(e)}
        onPaste={field.pasted ?? undefined}
        className={`${field.classNameInput}`}
        onBlur={field.blurred ?? undefined}
        placeholder={field.placeholder ?? undefined}
        readOnly={field.readOnly}
        disabled={field.disabled}
      />
    </>
  );
};

export default Input;
