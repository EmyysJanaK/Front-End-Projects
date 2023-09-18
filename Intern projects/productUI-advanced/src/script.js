// Show preview
function showImgPreview() {
  $('.preview-container').show();
  $('#prev-img').attr('src', 'https://idealz.lk/wp-content/uploads/2022/09/iPhone-14-Pro-Max-Purple-768x768.jpg');
}

// Hide Preview
function hidePreview() { $('.preview-container').hide(); }
function showAlert(mess) { 
  Swal.fire({ position: 'center', icon: 'success', title: '', text: mess, showConfirmButton: false, timer: 1500 }); 
}