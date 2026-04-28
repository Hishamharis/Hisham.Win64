import fs from 'fs';
import path from 'path';

/**
 * Pre-build script: Scans public/blog/ for CMS-created JSON posts
 * and generates a manifest file that the app can fetch at runtime.
 */
const BLOG_DIR = path.resolve('public/blog');
const OUTPUT = path.resolve('public/blog/index.json');

function main() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
    fs.writeFileSync(OUTPUT, '[]', 'utf-8');
    console.log('[blog-index] No blog directory — created empty index.');
    return;
  }

  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.json') && f !== 'index.json');

  const posts = files.map(file => {
    try {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
      const data = JSON.parse(raw);
      return {
        title: data.title || 'Untitled',
        category: data.category || 'General',
        description: data.description || '',
        readTime: data.readTime || '5 min read',
        fullContent: data.fullContent || data.body || '',
        comingSoon: data.comingSoon === true,
        date: data.date || null,
        slug: file.replace('.json', ''),
        placeholder: false
      };
    } catch (e) {
      console.warn(`[blog-index] Skipping malformed file: ${file}`);
      return null;
    }
  }).filter(Boolean);

  fs.writeFileSync(OUTPUT, JSON.stringify(posts, null, 2), 'utf-8');
  console.log(`[blog-index] Indexed ${posts.length} CMS post(s).`);
}

main();
