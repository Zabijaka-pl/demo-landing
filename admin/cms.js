if (window.CMS) {
  CMS.registerPreviewStyle('/css/styles.css');
  CMS.registerPreviewStyle('/js/scripts.js', { raw: false });

  function addDuplicateButton(entry) {
    const actions = document.querySelector('.nc-entryEditor-actions');
    if (!actions || actions.querySelector('#duplicate-page')) return;
    const btn = document.createElement('button');
    btn.id = 'duplicate-page';
    btn.type = 'button';
    btn.innerText = 'Zduplikować';
    btn.className = 'nc-button';
    btn.addEventListener('click', async () => {
      const backend = CMS.getBackend();
      const collection = entry.get('collection');
      const slug = entry.get('slug');
      const data = entry.get('data').set('is_copy', true);
      const newSlug = `${slug}-copy`;
      const path = entry.get('path').replace(slug, newSlug);
      await backend.persistEntry({
        collection,
        slug: newSlug,
        path,
        data,
      });
      window.location.hash = `#/collections/${collection}/entries/${newSlug}`;
    });
    actions.appendChild(btn);
  }

  CMS.registerEventListener({
    name: 'entry-loaded',
    handler: ({ entry }) => {
      setTimeout(() => addDuplicateButton(entry), 500);
    },
  });
}
