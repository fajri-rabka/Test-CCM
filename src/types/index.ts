export type ElementType = 'text' | 'textarea' | 'date';

export interface FormElement {
  id: string;
  type: ElementType;
  name: string;
  dateFormat?: 'dd/mm/yyyy' | 'mm/dd/yyyy';
}

export interface SavedForm {
  id: number;
  name: string;
  elements: FormElement[];
}