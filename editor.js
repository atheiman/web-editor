var editorTextarea = document.getElementById('editor')
var filesSelect = document.getElementById('files')

function correctTextareaSize() {
  editorTextarea.style.height = "";
  editorTextarea.style.height = editorTextarea.scrollHeight + "px";
}

function selectChange() {
  // limit the selected options to 1
}

function pageLoad() {
  correctTextareaSize();

  var loaded = JSON.parse(localStorage.getItem('file1.txt'));

  if (!loaded) {
    editorTextarea.value = "Welcome to your lightweight, in-browser text editor.\nYour text is saved to your browser's localStorage and will be here when you return.";
    textChange();
    return;
  }

  editorTextarea.value = loaded['value'];
  editorTextarea.selectionStart = loaded['selectionStart'];
  editorTextarea.selectionEnd = loaded['selectionEnd'];
}

function textChange() {
  localStorage.setItem(
    'file1.txt',
    JSON.stringify({
      value: editorTextarea.value,
      selectionStart: editorTextarea.selectionStart,
      selectionEnd: editorTextarea.selectionEnd,
    })
  );
}
