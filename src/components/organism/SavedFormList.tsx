import { Accordion, Button, Dropdown, Input, DateInput, Textarea } from '../atoms';
import { FaPlus } from 'react-icons/fa';
import { ElementType, FormElement, SavedForm } from '../../types';

interface Props {
  savedForms: SavedForm[];
  setActiveFormId: (id: number) => void;
  addElementToForm: (formId: number) => void;
  updateFormElement: (
    formId: number,
    index: number,
    data: Partial<FormElement>
  ) => void;
}

const SavedFormList: React.FC<Props> = ({
  savedForms,
  setActiveFormId,
  addElementToForm,
  updateFormElement,
}) => {
  return (
    <div className="p-5 bg-gray-200 space-y-3">
      {savedForms.map(form => (
        <Accordion key={form.id} title={form.name}>
          <div className="space-y-4">
            <Button
              icon={FaPlus({}) as any}
              label="Add Element"
              onClick={() => {
                setActiveFormId(form.id);
                addElementToForm(form.id);
              }}
            />

            {form.elements.length === 0 ? (
              <p className="text-gray-400 italic">
                No elements in this form
              </p>
            ) : (
              form.elements.map((el, idx) => (
                <div
                  key={el.id}
                  className="bg-white p-4 rounded-lg shadow-sm space-y-3"
                >
                  <Dropdown
                    label="Element Type"
                    value={el.type}
                    options={['text', 'textarea', 'date']}
                    onChange={e => {
                      setActiveFormId(form.id);
                      updateFormElement(form.id, idx, {
                        type: e.target.value as ElementType,
                        dateFormat:
                          e.target.value === 'date'
                            ? el.dateFormat ?? 'dd/mm/yyyy'
                            : undefined,
                      });
                    }}
                  />

                  <Input
                    label="Element Name"
                    value={el.name}
                    onChange={e => {
                      setActiveFormId(form.id);
                      updateFormElement(form.id, idx, {
                        name: e.target.value,
                      });
                    }}
                  />

                 {el.type === 'textarea' && (
                    <Textarea
                        label="Placeholder"
                        value={(el as any).placeholder ?? ''}
                        onChange={e => {
                        setActiveFormId(form.id);
                        updateFormElement(form.id, idx, {
                            placeholder: e.target.value,
                        } as any);
                        }}
                    />
                    )}

                  {el.type === 'date' && (
                    <DateInput
                      // label="Date Format"
                      name={`date-format-${form.id}-${el.id}`}
                      value={el.dateFormat ?? 'dd/mm/yyyy'}
                      onChange={value => {
                        setActiveFormId(form.id);
                        updateFormElement(form.id, idx, {
                          dateFormat: value,
                        });
                      }}
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </Accordion>
      ))}
    </div>
  );
};

export default SavedFormList;
