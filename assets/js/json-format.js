// 定义一个通用的函数来加载并显示 JSON 数据
function loadAndDisplayJSON(filePath) {
  fetch(filePath)  // 从给定路径加载 JSON 文件
    .then(response => response.json())
    .then(data => {
      const jsonContent = formatJSON(data);
      const codeElement = document.querySelector(`[data-path="${filePath}"]`);
      if (codeElement) {
        codeElement.innerHTML = jsonContent;
      }
    })
    .catch(error => console.error('Error loading the JSON file:', error));
}

// 格式化 JSON 数据，并将键和值应用 CSS 类
function formatJSON(jsonData) {
  const jsonString = JSON.stringify(jsonData, null, 2);
  const formattedJSON = jsonString.replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:'); // 格式化键
  return formattedJSON.replace(/: "(.*?)"/g, ': <span class="json-value">"$1"</span>'); // 格式化值
}

// 执行加载 JSON 数据的操作
document.addEventListener('DOMContentLoaded', function() {
  const jsonElements = document.querySelectorAll('[data-path]');
  jsonElements.forEach(element => {
    const filePath = element.getAttribute('data-path');
    loadAndDisplayJSON(filePath); // 调用函数来加载每个指定路径的 JSON 文件
  });
});
