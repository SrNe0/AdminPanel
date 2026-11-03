import { useState } from 'react';

const inputClass =
  'w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500';

const ResourceForm = ({ fields, initialValues, onSubmit, onCancel }) => {
  const [values, setValues] = useState(
    () => Object.fromEntries(fields.map((f) => [f.key, initialValues?.[f.key] ?? f.options?.[0] ?? '']))
  );
  const [errors, setErrors] = useState({});

  const handleChange = (key) => (event) => setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    fields.forEach((field) => {
      const value = String(values[field.key]).trim();
      if (!value) nextErrors[field.key] = 'Este campo es obligatorio';
      else if (field.type === 'email' && !/^\S+@\S+\.\S+$/.test(value)) nextErrors[field.key] = 'Correo no válido';
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      onSubmit(Object.fromEntries(Object.entries(values).map(([k, v]) => [k, String(v).trim()])));
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {fields.map((field) => (
        <div key={field.key}>
          <label htmlFor={`field-${field.key}`} className="mb-1 block text-sm font-semibold text-gray-700">
            {field.label}
          </label>
          {field.options ? (
            <select id={`field-${field.key}`} className={inputClass} value={values[field.key]} onChange={handleChange(field.key)}>
              {field.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              id={`field-${field.key}`}
              type={field.type ?? 'text'}
              className={inputClass}
              value={values[field.key]}
              onChange={handleChange(field.key)}
              aria-invalid={Boolean(errors[field.key])}
            />
          )}
          {errors[field.key] && <p className="mt-1 text-sm text-red-600">{errors[field.key]}</p>}
        </div>
      ))}
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onCancel} className="rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
          Cancelar
        </button>
        <button type="submit" className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default ResourceForm;
