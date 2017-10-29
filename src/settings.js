function save_options(){
  var gifstop = document.getElementById('gifstop').value; //Epilepsy
  var color = document.getElementById('color').value; //Color Blindness
  var ptsdtext = document.getElementById('ptsdtext').value; // PTSD Text Box
  var ptsdbox = document.getElementById('ptsdbox').value; // PTSD Enable/Disable
  var caption = document.getElementById('caption').value; //Caption Writer
  chrome.storage.sync.set({
    gifstopchoice: gifstop,
    colorchoice: color,
    ptsdtextinput: ptsdtext,
    ptsdboxchoice: ptsdbox,
    captionchoice: caption
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
    gifstopchoice: 'disabled',
    colorchoice: 'disabled',
    ptsdtextinput: '',
    ptsdboxchoice: 'disabled',
    captionchoice: 'disabled'
  }, function(items){
  document.getElementById('gifstop').value = items.gifstopchoice;
  document.getElementById('color').value = items.colorchoice;
  document.getElementById('ptsdtext').value = items.ptsdtextinput;
  document.getElementById('ptsdbox').value = items.ptsdboxchoice;
  document.getElementById('caption').value = items.captionchoice;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
