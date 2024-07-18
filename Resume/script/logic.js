document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to services section
    const exploreBtn = document.getElementById('exploreBtn');
    exploreBtn.addEventListener('click', () => {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });

    // Handle Order Now button clicks
    const orderButtons = document.querySelectorAll('.orderBtn');
    orderButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Order Now functionality is not implemented yet.');
        });
    });

    // Fetch and display dynamic content (Example: Fetch GitHub Repos)
    fetch('https://api.github.com/users/your-github-username/repos')
        .then(response => response.json())
        .then(repos => {
            const repoList = document.createElement('ul');
            repos.forEach(repo => {
                const repoItem = document.createElement('li');
                repoItem.textContent = repo.name;
                repoList.appendChild(repoItem);
            });
            document.body.appendChild(repoList);
        })
        .catch(error => console.error('Error fetching repos:', error));
});
