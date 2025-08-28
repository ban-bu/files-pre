const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');

// Serve static files from /public
app.use(
  express.static(path.join(__dirname, 'public'), {
    extensions: ['html'],
    maxAge: '1d',
    setHeaders: (res, servedPath) => {
      if (servedPath.endsWith('.docx')) {
        res.setHeader(
          'Content-Type',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        );
        // Encourage inline open but keep download filename sensible
        res.setHeader('Content-Disposition', 'inline; filename="Case Study1.docx"');
      }
    },
  })
);

// Fallback to index.html for any non-file route (single page)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


