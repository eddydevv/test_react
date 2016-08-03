//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic-ui
//= require react
//= require react_ujs
//= require components
//= require_tree .

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown').dropdown();

  ReactDOM.render(<Comment />, document.getElementById('haha'));
})
