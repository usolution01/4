// Future animations can go here
console.log("Welcome to the $4 Meme Coin Website!");
<script>
  (function() {
    // Detect whether the iframe loads and whether it likely allows wallet injection.
    // We can't detect wallet injection directly (security restrictions), so we implement a simple timeout: if iframe doesn't respond/resize quickly, show the notice.
    const iframe = document.getElementById('pancakeFrame');
    const notice = document.getElementById('iframeNotice');

    // If iframe fails to load within 5 seconds, suggest opening in new tab (useful for mobile wallets / browser blocking).
    let loaded = false;
    iframe.addEventListener('load', () => {
      loaded = true;
      // hide notice if visible
      notice.style.display = 'none';
      // small safety: We still keep fallback button visible
    });

    setTimeout(() => {
      if (!loaded) {
        notice.style.display = 'block';
      }
    }, 5000);

    // Optional: detect if user clicks 'Open PancakeSwap' so we can show a message
    document.getElementById('openPancake').addEventListener('click', () => {
      // nothing intrusive — just a debug log
      console.log('User chose to open PancakeSwap in new tab for buying $4.');
    });
  })();
</script>
