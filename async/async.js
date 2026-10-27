const statusDiv = document.getElementById("status");
const cardsContainer = document.getElementById("cards-container");
const btnGetAll = document.getElementById("btn-get-all");
const btnDeleteAll = document.getElementById("btn-delete-all");

const savedData = localStorage.getItem("users");
if (savedData === null) {
  statusDiv.textContent = "Данные загружаются...";
  loadUsers();
} else {
  const users = JSON.parse(savedData);
  renderUsers(users);
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function loadUsers() {
  await delay(1500);

  try {
    const response = await fetch("./users.json");

    if (!response.ok) {
      throw new Error("Ошибка HTTP: " + response.status);
    }

    const users = await response.json();
    localStorage.setItem("users", JSON.stringify(users));
    console.log("Данные загружены", users);
    renderUsers(users);
  } catch (error) {
    statusDiv.textContent = "Ошибка при загрузке данных";
    console.error(error);
  }
}

function renderUsers(users) {
  cardsContainer.innerHTML = "";

  statusDiv.textContent = "";

  users.forEach((user) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
    <h3>${user.name}  ${user.surname}</h3>
    <p>Email: ${user.email}</p>
    <p>Возраст: ${user.age}</p>
    <button class="delete-btn" data-id="${user.id}">Удалить</button>`;

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      const saved = localStorage.getItem("users");
      const users = JSON.parse(saved);

      const updatedUsers = users.filter((u) => u.id !== user.id);

      localStorage.setItem("users", JSON.stringify(updatedUsers));

      renderUsers(updatedUsers);
    });
    cardsContainer.append(card);
  });
}

btnDeleteAll.addEventListener("click", () => {
  if (confirm("Вы уверены?")) {
    localStorage.setItem("users", JSON.stringify([]));
    renderUsers([]);
    statusDiv.textContent = "Все пользователи удалены";
  }
});

btnGetAll.addEventListener("click", () => {
  const saved = localStorage.getItem("users");
  const users = JSON.parse(saved);

  if (users.length === 0) {
    statusDiv.textContent = "Нет пользователей для отображений";
    return;
  }

  if (cardsContainer.children.length === users.length) {
    statusDiv.textContent = "Все пользователи уже отображены";
  } else {
    renderUsers(users);
  }
});
