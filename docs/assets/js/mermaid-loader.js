import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize({
  startOnLoad: false,
  securityLevel: 'loose',
  theme: 'default'
});

async function renderMermaidFromFiles() {
  const hosts = Array.from(document.querySelectorAll('[data-mermaid-src]'));

  await Promise.all(
    hosts.map(async (host) => {
      const sourcePath = host.getAttribute('data-mermaid-src');

      if (!sourcePath) {
        return;
      }

      try {
        const response = await fetch(sourcePath);

        if (!response.ok) {
          throw new Error(`Impossible de charger ${sourcePath}`);
        }

        const source = (await response.text()).trim();
        const diagram = document.createElement('div');
        diagram.className = 'mermaid';
        diagram.textContent = source;

        host.replaceChildren(diagram);
      } catch (error) {
        host.innerHTML = '';

        const title = document.createElement('p');
        title.className = 'text-sm font-semibold text-red-700';
        title.textContent = 'Erreur de chargement du diagramme';

        const detail = document.createElement('p');
        detail.className = 'mt-2 text-sm text-red-600';
        detail.textContent = error instanceof Error ? error.message : 'Erreur inconnue';

        host.append(title, detail);
      }
    })
  );

  const diagrams = document.querySelectorAll('.mermaid');

  if (diagrams.length > 0) {
    await mermaid.run({
      nodes: diagrams
    });
  }
}

renderMermaidFromFiles();
