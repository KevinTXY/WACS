function save_options(){
  var epichoice = document.getElementById('epi').value; //Epilepsy
  var cbchoice = document.getElementById('cb').value; //Color Blindness
  var iichoice = document.getElementById('ii').value; // PTSD Text Box
  var iechoice = document.getElementById('ie').value; // PTSD Enable/Disable
  var cwchoice = document.getElementById('cw').value; //Caption Writer
  chrome.storage.sync.set({
    myepichoice: epichoice,
    mycbchoice: cbchoice,
    myiichoice: iichoice,
    myiechoice: iechoice,
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
    myiechoice: 'disabled',
    mycwchoice: 'disabled'
  }, function(items){
  document.getElementById('epi').value = items.myepichoice;
  document.getElementById('cb').value = items.mycbchoice;
  document.getElementById('ii').value = items.myiichoice;
  document.getElementById('ie').value = items.myiechoice;
  document.getElementById('cw').value = items.mycwchoice;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
