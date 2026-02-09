import { useEffect, useState } from 'react';
import { ElementType, FormElement, SavedForm } from './types';

const STORAGE_KEY = 'savedForms';

export function useFormStorage() {
   const [savedForms, setSavedForms] = useState<SavedForm[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [activeFormId, setActiveFormId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForms));
  }, [savedForms]);

  const activeForm = savedForms.find(f => f.id === activeFormId) ?? null;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForms));
  }, [savedForms]);

  const addForm = (name: string, elements: FormElement[]) => {
    const newForm: SavedForm = {
      id: Date.now(),
      name,
      elements,
    };

    setSavedForms(prev => [...prev, newForm]);
    setActiveFormId(newForm.id);
  };

  const deleteForm = (id: number) => {
    setSavedForms(prev => prev.filter(f => f.id !== id));
    if (activeFormId === id) setActiveFormId(null);
  };

  const addElementToForm = (formId: number, type: ElementType = 'text') => {
    setSavedForms(prev =>
      prev.map(form =>
        form.id === formId
          ? {
              ...form,
              elements: [
                ...form.elements,
                {
                  id: crypto.randomUUID(),
                  type,
                  name: '',
                },
              ],
            }
          : form
      )
    );
  };

  const updateFormElement = (
    formId: number,
    index: number,
    updated: Partial<FormElement>
  ) => {
    setSavedForms(prev =>
      prev.map(form =>
        form.id === formId
          ? {
              ...form,
              elements: form.elements.map((el, i) =>
                i === index ? { ...el, ...updated } : el
              ),
            }
          : form
      )
    );
  };

  const deleteElementFromForm = (formId: number, index: number) => {
    setSavedForms(prev =>
      prev.map(form =>
        form.id === formId
          ? {
              ...form,
              elements: form.elements.filter((_, i) => i !== index),
            }
          : form
      )
    );
  };

  return {
    savedForms,
    activeForm,
    activeFormId,
    setActiveFormId,
    addForm,
    deleteForm,
    addElementToForm,
    updateFormElement,
    deleteElementFromForm,
  };
}

export default useFormStorage;
