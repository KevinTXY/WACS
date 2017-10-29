function save_options(){
  var epichoice = document.getElementById('epi').value;
  var cbchoice = document.getElementById('cb').value;
  var iichoice = document.getElementById('ii').value;
  chrome.storage.sync.set({
    myepichoice: epichoice,
    mycbchoice: cbchoice,
    myiichoice: iichoice
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
    myepichoice: 'disabled',
    mycbchoice: 'disabled',
    myiichoice: ''
  }, function(items){
  document.getElementById('epi').value = items.myepichoice;
  document.getElementById('cb').value = items.mycbchoice;
  document.getElementById('ii').value = items.myiichoice;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
