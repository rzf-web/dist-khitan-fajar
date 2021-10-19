/* ------------------------------------------------------------------------------
@name: FormGuestBook
@description: FormGuestBook
--------------------------------------------------------------------------------- */


// --- utilities
import {
  Validation
} from 'utilities';

// Form Validation
const ElementSelector = [
  {
    id: 'name',
    validation: {
      required: true,
    }
  },
  {
    id: 'message',
    validation: {
      required: true,
    }
  },
];
const ElementEvents = ['input', 'blur'];

const FormGuestBook = (() => {

  // Handle Run Validation
  const handleRunValidation = () => {
    Validation.config(ElementEvents, ElementSelector);
  }

  // Handle Click Validation
  const handleClickValidation = () => {
    $('button[type="submit"]').on('click', (e) => {
      $.each(ElementSelector, (i, v) => {
        $('#'+v.id).blur();
      });

      if ($('.error').length > 0) {
        e.preventDefault();
      }
    });
  }

  // init
  const init = () => {
    handleRunValidation();
    handleClickValidation();
  }

  return {
    init
  }

})();

export default FormGuestBook
