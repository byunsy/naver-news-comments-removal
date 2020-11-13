
// chrome.storage.sync.get('isExtensionActive', storage => {
//     toggleSomething(storage.isExtensionActive);
// });
  
// chrome.storage.onChanged.addListener(changes => {
//     if (changes.isExtensionActive) {
//       toggleSomething(changes.isExtensionActive.newValue);
//     }
// });
  
// function toggleSomething(state) {
//     console.log('new state:', state);
//     // ........... do something
// }

// // Simple JS to remove the comments section

// var switchToggle = document.getElementById("mySwitch");

// // Get the comment section
// var commentSection = document.getElementById("cbox_module");

// // The parent node is always the main_content
// let parentNode = document.getElementById("main_content");

// // The next node after comment section
// let nextNode = document.getElementById("cbox_module").nextSibling.innerHTML;

// // Variable to save the removed comment section
// var removed;

// // Turn on/off comment section based on toggle
// function eliminate() {

//     // If checked, remove the comment section and store it in 'removed'
//     if (switchToggle.checked) {
//         if (commentSection !== null) {
//             removed = commentSection.remove();
//         }
//     } 
//     // If not checked, return the comment section to where it was before
//     else {
//         parentNode.insertBefore(removed, nextNode);
//     }
// } 


var commentSection = document.getElementById("cbox_module");

if (commentSection !== null) {
    commentSection.remove();
}