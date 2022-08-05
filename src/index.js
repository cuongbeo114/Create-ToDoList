import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// them vao danh sach chua lam
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "Done";
  completeButton.addEventListener("click", () => {
    deleteFormIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    //lay noi dung cua to do
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    // noi dung list
    const li = document.createElement("li");
    li.innerText = text;
    // back button
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    // thiet lap chuc nang cua nut back
    backButton.addEventListener("click", () => {
      //xoa list khi bam nut back
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // truyen noi dung tro ve Not Yet
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //thiet lap thanh phan con cua div
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //them vao danh sach da hoan thanh
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    deleteFormIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

const deleteFormIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
