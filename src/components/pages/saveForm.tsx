import { useState } from 'react';
import { Button } from '../atoms';
import { FaPlus } from 'react-icons/fa';
import { useFormStorage } from '../../hooks/useFormStorage';
import CreateFormModal from '../organism/CreateFormModal';
import SavedFormList from '../organism/SavedFormList';

const SaveForm: React.FC = () => {
  const formStorage = useFormStorage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CreateFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        savedForms={formStorage.savedForms}
        onSubmit={formStorage.addForm}
      />

      <div className="bg-gray-200 p-4 flex justify-between items-center border-b">
        <p className="font-semibold text-lg">Saved Forms</p>
        <Button
          icon={FaPlus({}) as JSX.Element}
          label="Create Form"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <SavedFormList
        savedForms={formStorage.savedForms}
        setActiveFormId={formStorage.setActiveFormId}
        addElementToForm={formStorage.addElementToForm}
        updateFormElement={formStorage.updateFormElement}
      />
    </>
  );
};

export default SaveForm;
