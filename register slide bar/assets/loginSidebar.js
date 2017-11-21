$().ready(function() {
  $('#loginLink').on('click', function(event) {
    event.preventDefault();
    $('#loginSidebar').addClass('loginSidebar--visible');
  })

  $('#loginSidebarCloseButton').on('click', function(event) {
    event.preventDefault();
    $('#loginSidebar').removeClass('loginSidebar--visible');
  })
})
