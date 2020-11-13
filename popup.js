
// document.addEventListener("DOMContentLoaded", function() {

//     var switchToggle = document.getElementById("mySwitch");

//     if (switchToggle.checked) {

//         setToggleState();
//         console.log('toggled');
//     } 
// });


// function setToggleState() {

//     chrome.storage.sync.get('isExtensionActive', storage => {

//         chrome.storage.sync.set({

//             isExtensionActive: !storage.isExtensionActive,
//         });
//     });
// }