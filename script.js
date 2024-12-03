const menuItems = [
  { text: 'Home', href: '#home' },
  { text: 'Skills', href: '#skills' },
  { text: 'Contact Me', href: '#contact', class: 'button' },
];

const nav = document.createElement('nav');
const ul = document.createElement('ul');
ul.id = 'menu';

menuItems.forEach((item) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.text;
  if (item.class) a.classList.add(item.class);
  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
document.querySelector('header').appendChild(nav);



const imagesData = [
  { src: './imgs/html.png', alt: 'HTML' },
  { src: './imgs/css.png', alt: 'CSS' },
  { src: './imgs/javascript.png', alt: 'JavaScript' },
  { src: './imgs/vscode.png', alt: 'VS Code' },
  { src: './imgs/sass.png', alt: 'SASS' },
  { src: './imgs/react.png', alt: 'React' },
  { src: './imgs/nextjs.png', alt: 'Next.js' },
  { src: './imgs/azure.png', alt: 'Azure' },
  { src: './imgs/python.png', alt: 'Python' },
];

const logosContainer = document.querySelector('.logos');
const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper');
logosContainer.appendChild(contentWrapper);

// 初始化图标并复制两次，确保滚动循环
imagesData.forEach((image) => {
  const imgElement = document.createElement('img');
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  contentWrapper.appendChild(imgElement);
});

imagesData.forEach((image) => {
  const imgElement = document.createElement('img');
  imgElement.src = image.src;
  imgElement.alt = image.alt;
  contentWrapper.appendChild(imgElement);
});

// 滚动逻辑
let translateX = 0;
const speed = 1; // 滚动速度

function startMarquee() {
  translateX -= speed;

  // 获取第一个图标的位置信息
  const firstImage = contentWrapper.querySelector('img');
  const firstImageRight = firstImage.getBoundingClientRect().right;
  const containerLeft = logosContainer.getBoundingClientRect().left;

  // 如果第一个图标完全滚出视口，则将其移动到末尾
  if (firstImageRight < containerLeft) {
    contentWrapper.appendChild(firstImage); // 移动第一个图标到末尾
    translateX += firstImage.offsetWidth + parseFloat(getComputedStyle(contentWrapper).gap); // 修正偏移量
  }

  contentWrapper.style.transform = `translateX(${translateX}px)`;

  requestAnimationFrame(startMarquee); // 递归调用动画
}

// 启动动画
startMarquee();


document.addEventListener('DOMContentLoaded', () => {
  // 获取表单、按钮和消息显示区域
  const form = document.getElementById('myform');
  const submitBtn = document.querySelector('.btn2');
  const thankYouMessage = document.getElementById('thankYouMessage');



  // 添加点击事件监听
  submitBtn.addEventListener('click', (event) => {
    // 阻止默认提交行为
    event.preventDefault();

    // 验证表单内容
    if (!form.checkValidity()) {
      form.reportValidity(); // 显示验证提示
      return;
    }

    // 如果表单有效，清空表单内容
    form.reset();

    // 显示感谢信息
    thankYouMessage.style.display = 'block'; // 让隐藏的文字显示
    thankYouMessage.textContent = 'Thank you! You have submitted the information!';

    // 可选：在几秒钟后隐藏消息
    setTimeout(() => {
      thankYouMessage.style.display = 'none';
    }, 5000); // 5秒后隐藏消息
  });
});