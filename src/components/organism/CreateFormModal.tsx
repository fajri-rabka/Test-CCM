import { useState } from 'react';
import { useFormik } from 'formik';
import { Button, Modal, Input, Dropdown, DateInput } from '../atoms';
import { FaPlus } from 'react-icons/fa';
import { FormElement, ElementType } from '../../types';
import { formValidationSchema } from '../../validationSchema';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  savedForms: { name: string }[];
  onSubmit: (name: string, elements: FormElement[]) => void;
}

const CreateFormModal: React.FC<Props> = ({
  isOpen,
  onClose,
  savedForms,
  onSubmit,
}) => {
  const [elements, setElements] = useState<FormElement[]>([]);

  const formik = useFormik({
    initialValues: { formName: '' },
    validationSchema: formValidationSchema,
    onSubmit: values => {
      const isDuplicate = savedForms.some(
        f => f.name.toLowerCase() === values.formName.toLowerCase()
      );

      if (isDuplicate) {
        formik.setFieldError('formName', 'Form name must be unique');
        return;
      }

      if (elements.some(el => !el.name.trim())) {
        alert('All elements must have a name');
        return;
      }

      onSubmit(values.formName, elements);
      setElements([]);
      formik.resetForm();
      onClose();
    },
  });

  const addElement = () =>
    setElements(prev => [
      ...prev,
      { id: `temp-${Date.now()}`, type: 'text', name: '' },
    ]);

  const updateElement = (index: number, data: Partial<FormElement>) => {
    setElements(prev =>
      prev.map((el, i) => (i === index ? { ...el, ...data } : el))
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-lg">New Form</p>
        <Button label="Add Element" icon={FaPlus({}) as JSX.Element} onClick={addElement} />
      </div>

      <Input
        label="Form Name"
        name="formName"
        placeholder='Form Name'
        value={formik.values.formName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      {formik.touched.formName && formik.errors.formName && (
        <p className="text-red-500 text-sm">{formik.errors.formName}</p>
      )}

      <div className="mt-6 space-y-4">
        {elements.map((el, idx) => (
          <div key={el.id} className="space-y-2">
            <Dropdown
              label="Type"
              value={el.type}
              options={['text', 'textarea', 'date']}
              onChange={e =>
                updateElement(idx, {
                  type: e.target.value as ElementType,
                })
              }
            />

            <Input
              label="Form Element Name"
              value={el.name}
              placeholder='Name'
              onChange={e =>
                updateElement(idx, { name: e.target.value })
              }
            />

            {el.type === 'date' && (
                <DateInput
                    label="Date Format"
                    name={`date-format-${el.id}`} 
                    value={el.dateFormat ?? 'dd/mm/yyyy'}
                    onChange={(value: any) =>
                    updateElement(idx, { dateFormat: value })
                    }
                />
                )}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-2 mt-6">
        <Button label="Cancel" onClick={onClose} />
        <Button label="Create Form" onClick={formik.submitForm} />
      </div>
    </Modal>
  );
};

export default CreateFormModal;
