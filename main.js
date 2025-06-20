const username = "LauraMilly";

async function carregarPerfil() {
    try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
    throw new Error("Erro ao buscar usuário");
    }

    const data = await response.json();

    document.querySelector('.profile-avatar').src = data.avatar_url;
    document.querySelector('.profile-name').textContent = data.name;
    document.querySelector('.profile-username').textContent = '@' + data.login;
    document.querySelectorAll('.numbers-item')[0].lastChild.textContent = data.public_repos;
    document.querySelectorAll('.numbers-item')[1].lastChild.textContent = data.followers;
    document.querySelectorAll('.numbers-item')[2].lastChild.textContent = data.following;
    document.querySelector('.profile-link').href = data.html_url;

    } catch (error) {
    console.error(error);
    alert("Não foi possível carregar os dados do GitHub.");
    }
}

carregarPerfil();