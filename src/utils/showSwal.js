import Swal from 'sweetalert2';

const showSwal = (title, confirmButtonText) => {
  Swal.fire({
    title: title,
    showCancelButton: false,
    confirmButtonText: confirmButtonText,
  });
};

export default showSwal;
