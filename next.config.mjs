import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

const nextConfig = {
  output: 'export', // Ensures the site is exported statically
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

export default withNextra();
