const fs = require('fs');
const path = require('path');

function inlineAssets() {
  const htmlPath = path.join(process.cwd(), 'out', 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');

  // 内联 CSS
  const cssRegex = /<link[^>]*href="([^"]*\.css)"[^>]*>/g;
  html = html.replace(cssRegex, (match, cssPath) => {
    const fullPath = path.join(process.cwd(), 'out', cssPath.replace(/^\/Compare_text\/out/, ''));
    if (fs.existsSync(fullPath)) {
      const css = fs.readFileSync(fullPath, 'utf8');
      return `<style>${css}</style>`;
    }
    return match;
  });

  // 内联 JavaScript
  const jsRegex = /<script[^>]*src="([^"]*\.js)"[^>]*><\/script>/g;
  html = html.replace(jsRegex, (match, jsPath) => {
    const fullPath = path.join(process.cwd(), 'out', jsPath.replace(/^\/Compare_text\/out/, ''));
    if (fs.existsSync(fullPath)) {
      const js = fs.readFileSync(fullPath, 'utf8');
      return `<script>${js}</script>`;
    }
    return match;
  });

  // 保存修改后的 HTML
  fs.writeFileSync(htmlPath, html);
}

inlineAssets(); 