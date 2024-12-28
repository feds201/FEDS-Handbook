(async () => {
    const withNextra = await import('nextra').then(mod => mod.default);
    module.exports = withNextra({
        theme: 'nextra-theme-docs',
        themeConfig: './theme.config.jsx'
    });
})();