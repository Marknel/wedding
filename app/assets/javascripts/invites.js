// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

jQuery(document).ready(function ($) { // wait until the document is ready
  $(".btn-success.ceremony").click(function(){
    var invite_id = $(this).data().inviteId;
    $.ajax({
      type: 'POST',
      url: '/invites/' + invite_id + '.json',
      data: { _method: "PUT", invite: { attending_ceremony: 1 } },
      datatype: 'json',
      cache: 'false',
      success: function(response) {
        location.reload();
      },
      error: function(){
        alert("There was an error - a group of trained monkeys will hopefully fix it soon. If they don't make it - please send us a message on Facebook");
      }
    });
  });
  
  $(".btn-link.danger.ceremony, .btn-danger.ceremony").click(function(){
    var invite_id = $(this).data().inviteId;
    $.ajax({
      type: 'POST',
      url: '/invites/' + invite_id + '.json',
      data: { _method: "PUT", invite: { attending_ceremony: 2 } },
      datatype: 'json',
      cache: 'false',
      success: function(response) {
        location.reload();
      },
      error: function(){
        alert("There was an error - a group of trained monkeys will hopefully fix it soon. If they don't make it - please send us a message on Facebook");
      }
    });
  });
  
  $(".btn-success.reception").click(function(){
    var invite_id = $(this).data().inviteId;
    $.ajax({
      type: 'POST',
      url: '/invites/' + invite_id + '.json',
      data: { _method: "PUT", invite: { attending_reception: 1 } },
      datatype: 'json',
      cache: 'false',
      success: function(response) {
        location.reload();
      },
      error: function(){
        alert("There was an error - a group of trained monkeys will hopefully fix it soon. If they don't make it - please send us a message on Facebook");
      }
    });
  });
  
  $(".btn-link.danger.reception, .btn-danger.reception").click(function(){
    var invite_id = $(this).data().inviteId;
    $.ajax({
      type: 'POST',
      url: '/invites/' + invite_id + '.json',
      data: { _method: "PUT", invite: { attending_reception: 2 } },
      datatype: 'json',
      cache: 'false',
      success: function(response) {
        location.reload();
      },
      error: function(){
        alert("There was an error - a group of trained monkeys will hopefully fix it soon. If they don't make it - please send us a message on Facebook");
      }
    });
  });
  
  $(".btn.btn-success.dietry_requirements").click(function() {
    var invite_id = $(this).data().inviteId;
    $.ajax({
      type: 'POST',
      url: '/invites/' + invite_id + '.json',
      data: { _method: "PUT", invite: { dietry_requirements: $(".form-control.dietry_requirements")[0].value } },
      datatype: 'json',
      cache: 'false',
      success: function(response) {
        location.reload();
      },
      error: function(){
        alert("There was an error - a group of trained monkeys will hopefully fix it soon. If they don't make it - please send us a message on Facebook");
      }
    });
  });
});

