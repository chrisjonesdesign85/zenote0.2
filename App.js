// 1. Application State
const state = {
    user: "Guest",
    clicks: 0
};

// 2. Views / UI Templates
const views = {
    home: () => `
    <div class="card">
        <h1>Welcome, ${state.user}!</h1>
        <p>You have clicked the button ${state.clicks} times.</p>
        <button onclick="actions.incrementClicks()">Click Me</button>
        <hr>
        <button onclick="actions.navigateTo('about')">Go to About Page</button>
    </div>
    `,

    about: () => `
        <div class="card">
            <h1>About THis App</h1>
            <p>This is a fast SPA built completely without frameworks!</p>
            <button onclick="actions.navigateTo('home')">Back Home</button>
        </div>
    `
}

// 3. State Modifiers and Routing Actions

const actions = {
    render: () => {
        const root = document.getElementById('app');
        // Simple client-side router based on URL hash patterns
        const route = window.location.hash.replace('#/', '') || 'home';
        const renderTemplate = views[route] || views.home;
        root.innerHTML = renderTemplate();
    },
    incrementClicks: () => {
        window.location.hash = `#/${home}`;
    }
};

// 4. Global Event Handlers and Initial Boot
window.addEventListener('hashchange', actions.render);
window.addEventListener('DOMContentLoaded', actions.render);

// Expose state mutator methods globally for standard HTML onclick attributes
window.actions = actions;

