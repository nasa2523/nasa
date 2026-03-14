let table;

fetch('questions.json')
  .then(res => res.json())
  .then(data => {
    table = data;
    showQuestion(1); // 从第一题开始
  });

function showQuestion(id){
  const rows = table.filter(r => r.id === id);
  document.getElementById("question").innerText = rows[0].question;
  const box = document.getElementById("options");
  box.innerHTML = "";
  rows.forEach(row => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerText = row.option;
    div.onclick = () => {
      if(row.next_id) showQuestion(row.next_id)
      else alert("问诊结束：" + row.option)
    }
    box.appendChild(div);
  });
}