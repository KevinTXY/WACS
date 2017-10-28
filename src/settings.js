function save_options(){
  var choice = document.getElementById('epi').value;
  chrome.storage.sync.set({
    mychoice: choice
  }, function(){
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
  }, 750);
});
}




document.addEventListener('DOMContentLoaded', function() {
document.getElementById('save').addEventListener('click', save_options);
});
