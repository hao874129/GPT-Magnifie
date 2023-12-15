// const rotateEvent = () => {
//     var elements = document.querySelectorAll('.xl\\:max-w-\\[48rem\\]');

//     // 遍历所有元素并设置新的最大宽度样式
//     elements.forEach(function(element) {
//         element.style.maxWidth = '100%';
//     });
    
// };
// const reset = () => {
//     var elements = document.querySelectorAll('.xl\\:max-w-\\[48rem\\]');

//     // 遍历所有元素并设置新的最大宽度样式
//     elements.forEach(function(element) {
//         element.style.maxWidth = '48rem';
//     });
// };

// const onMessage = (message) => {
//   switch (message.action) {
//     case "ROTATE":
//       rotateEvent();
//       break;
//     case "RESET":
//       reset();
//       break;
//     default:
//       break;
//   }
// };

// chrome.runtime.onMessage.addListener(onMessage);
const rotateEvent = () => {
  // 选择所有具有特定类名的元素
var elements = document.querySelectorAll('.xl\\:max-w-\\[48rem\\]');

// 遍历所有元素并设置新的最大宽度样式
elements.forEach(function(element) {
    element.style.maxWidth = '100%';
});
};
const reset = () => {
  // 选择所有具有特定类名的元素
var elements = document.querySelectorAll('.xl\\:max-w-\\[48rem\\]');

// 遍历所有元素并设置新的最大宽度样式
elements.forEach(function(element) {
    element.style.maxWidth = '48rem';
});
}

const onMessage = (message) => {
  switch (message.action) {
    case 'ROTATE':
      rotateEvent();
      break;
    case 'RESET':
      reset();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);