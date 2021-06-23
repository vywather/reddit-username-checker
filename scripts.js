function getReddit(username) {

  var jqxhr = $.get(`https://old.reddit.com/user/${username}.json`, function() {
      console.log('fetching');
    })
    .done(function() {
      $('#result').text(`${username} is not available`);
    })
    .fail(function() {
      $('#result').text(`${username} is available`);
    })

}

$(function() {
  $('#submit').click(function() {
    var username = $('#username').val();
    getReddit(username);
  });
});