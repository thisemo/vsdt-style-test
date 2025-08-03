
const questions = [
  { q: "你觉得穿搭最重要的作用是?", options: ["展示态度/传达立场", "营造自我世界观", "获得认同和归属感", "建立个人边界与安全感", "玩乐、自我探索", "留下视觉印象，让人记住", "治愈自己"] },
  { q: "你如果只能长期穿一种风格，你会选哪种?", options: ["日系森女/法式文艺", "病娇暗黑甜美/娃娃感", "朋克哥特/暗黑亚文化", "功能机能风/中性工装", "Y2K辣妹/亮眼强烈", "韩系简约温柔", "复古混搭拼贴", "少女可爱/洛丽塔", "街头潮流/滑板风"] },
  { q: "如果出门只能保留一个穿搭重点，你最在意什么?", options: ["鞋子", "配饰", "叠穿/层次设计", "妆容发型搭配一致性", "面料质感 &配色感觉", "上装设计(图案/剪裁)", "下装廓形(裙装/裤线)", "整体气场统一"] },
  { q: "当你看到别人穿“很特别”的衣服时，你的第一反应?", options: ["真羡慕，这才是我想表达的感觉", "赞，但心里想“他们也太特别了吧”", "不太在意，我觉得自己更重要", "会想“我如果这样穿会不会太奇怪了”"] },
  { q: "你更享受哪种穿搭方式?", options: ["每件都很契合，像拼图完成", "某个细节很惊艳，其他顺着它延展", "整体氛围对了，细节反而可以松", "穿着像情绪的延伸，不必对称"] },
  { q: "你对于穿搭的动力更多源于?", options: ["自我表达与创造", "帮助或影响别人", "达成某种人设/形象/氛围的营造", "情绪调节", "社交认可"] },
  { q: "你知道自己的MBTI人格吗？", options: ["ISTJ","ISFJ","INFJ","INTJ","ISTP","ISFP","INFP","INTP","ESTP","ESFP","ENFP","ENTP","ESTJ","ESFJ","ENFJ","ENTJ","不确定"] },
  { q: "你更喜欢怎样的社交方式?", options: ["小圈子亲密交往", "广泛交友，活跃社交", "时而独处时而社交", "以自己为主，不主动寻求社交"] },
  { q: "以下哪一个是你想要尝试但还未尝试的风格?", options: ["哥特", "朋克", "嬉皮", "e-girl/e-boy", "cosplay", "没有想好自己适合什么"] },
  { q: "你想尝试但没有开始的原因是?", options: ["没钱买", "担心/觉得自己不适合", "怕他人评价", "不知道如何开始", "观察探索中"] }
];

function createForm() {
  const container = document.getElementById("questions-container");
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p><strong>Q${i + 1}.</strong> ${q.q}</p>`;
    q.options.forEach((opt, j) => {
      const id = `q${i}_${j}`;
      div.innerHTML += `<label><input type="radio" name="q${i}" value="${j}" required /> ${opt}</label>`;
    });
    container.appendChild(div);
  });
}

function evaluate(answers) {
  // Mock logic: always return same profile for demo
  return "🔤 最终人格代码：V7-S1-D1-T3\n🧾 人格风格报告...（演示结果）";
}

document.getElementById("vsdt-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const answers = [];
  for (let i = 0; i < questions.length; i++) {
    answers.push(formData.get(`q${i}`));
  }
  const result = evaluate(answers);
  document.getElementById("vsdt-form").style.display = "none";
  const resultBox = document.getElementById("result-container");
  resultBox.innerText = result;
  resultBox.style.display = "block";
});

createForm();
