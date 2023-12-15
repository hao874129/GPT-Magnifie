// const enlargeEvent = () => {
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
//     case "ENLARGE":
//       enlargeEvent();
//       break;
//     case "RESET":
//       reset();
//       break;
//     default:
//       break;
//   }
// };

// chrome.runtime.onMessage.addListener(onMessage);
const enlargeEvent = () => {
  // 选择所有具有特定类名的元素
  var elements = document.querySelectorAll(".xl\\:max-w-\\[48rem\\]");

  // 遍历所有元素并设置新的最大宽度样式
  elements.forEach(function (element) {
    element.style.maxWidth = "100%";
  });

  enlargeNewEvent();
};

// observe new conversation zone
const enlargeNewEvent = () => {
  var conversationElement = document.querySelector(
    '[data-testid*="conversation-turn-"]'
  ).parentElement;

  if (conversationElement) {
    var observer = new MutationObserver(function (mutations) {
      var childElements = conversationElement.children;
      if (childElements.length < 2) {
        return;
      }

      function setMaxWidth(element) {
        var targetElement = element.children[0].querySelector(
          ".xl\\:max-w-\\[48rem\\]"
        );
        if (targetElement) {
          targetElement.style.maxWidth = "100%";
        }
      }

      for (var i = childElements.length - 2; i < childElements.length; i++) {
        setMaxWidth(childElements[i]);
      }
    });

    var config = { childList: true };
    observer.observe(conversationElement, config);

    // 解監聽
    window.addEventListener('beforeunload', function () {
      observer.disconnect();
    });
    
  console.log("T");
  }
};

const reset = () => {
  // 选择所有具有特定类名的元素
  var elements = document.querySelectorAll(".xl\\:max-w-\\[48rem\\]");

  // 遍历所有元素并设置新的最大宽度样式
  elements.forEach(function (element) {
    element.style.maxWidth = "48rem";
  });
};

const onMessage = (message) => {
  switch (message.action) {
    case "ENLARGE":
      enlargeEvent();
      break;
    case "RESET":
      reset();
      break;
    default:
      break;
  }
};

chrome.runtime.onMessage.addListener(onMessage);
