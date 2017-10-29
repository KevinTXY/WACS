function save_options(){
  var epichoice = document.getElementById('epi').value;
  var cbchoice = document.getElementById('cb').value;
  var iichoice = document.getElementById('ii').value;
  var cwchoice = document.getElementById('cw').value;
  chrome.storage.sync.set({
    myepichoice: epichoice,
    mycbchoice: cbchoice,
    myiichoice: iichoice,
    mycwchoice: cwchoice
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
    myiichoice: '',
    mycwchoice: 'disabled'
  }, function(items){
  document.getElementById('epi').value = items.myepichoice;
  document.getElementById('cb').value = items.mycbchoice;
  document.getElementById('ii').value = items.myiichoice;
  document.getElementById('cw').value = items.mycwchoice;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
