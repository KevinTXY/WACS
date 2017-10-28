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

function restore_options(){
  chrome.storage.sync.get({
    mychoice: 'disabled'
  }, function(items){
  document.getElementById('epi').value = items.mychoice;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
