import nextra from 'nextra';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

const nextConfig = {
  output: 'export', // Ensures the site is exported statically
  images: {
    unoptimized: true, // Disables image optimization for static export
  },
};

export default withNextra();
