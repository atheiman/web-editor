var editor = document.getElementById('editor')

function pageLoad() {
  var loaded = JSON.parse(localStorage.getItem('file1.txt'))

  if (!loaded) {
    editor.value = "Welcome to your lightweight, in-browser text editor.\nYour text is saved to your browser's localStorage and will be here when you return.";
    textChange()
    return;
  }

  editor.value = loaded['value'];
  editor.selectionStart = loaded['selectionStart'];
  editor.selectionEnd = loaded['selectionEnd'];
}

function textChange() {
  localStorage.setItem(
    'file1.txt',
    JSON.stringify({
      value: editor.value,
      selectionStart: editor.selectionStart,
      selectionEnd: editor.selectionEnd,
    })
  );
}
