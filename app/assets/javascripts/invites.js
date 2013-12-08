// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

jQuery(document).ready(function ($) { // wait until the document is ready
  $('div#chatroom').click(function(){
    $.ajax({
      type: 'GET',
      url: 'chatget.php',
      data: { chatroomid: '<?php echo $chatroomid; ?>'},
      datatype: 'html',
      cache: 'false',
      success: function(response) {
          $('#chatroom').append(response);
          alert('Load was performed.');
      },
      error: function(){
          alert('Fuuuuuuuuuuuuuu');
      }
    }); // End Ajax  
  alert('Fail');
  }); // End onclick
});

