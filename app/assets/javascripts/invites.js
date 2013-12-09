// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

jQuery(document).ready(function ($) { // wait until the document is ready
  $(".btn-success.ceremony").click(function(){
    var invite_id = $(".btn-success.ceremony").data().inviteId;
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
  
  $(".btn-link.danger.ceremony").click(function(){
    var invite_id = $(".btn-link.danger.ceremony").data().inviteId;
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
    var invite_id = $(".btn-success.reception").data().inviteId;
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
  
  $(".btn-link.danger.reception").click(function(){
    var invite_id = $(".btn-link.danger.reception").data().inviteId;
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
});

