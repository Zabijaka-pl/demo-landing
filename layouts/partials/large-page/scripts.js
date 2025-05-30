<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{ .Title }}</title>
  <link rel="stylesheet" href="/assets/css/styles.css">
</head>
<body>
  {{ partial "hero.html" . }}
  {{ partial "utp.html" . }}
  {{ partial "problem-solution.html" . }}
  {{ partial "features.html" . }}
  {{ partial "offer.html" . }}
  {{ partial "faq.html" . }}
  {{ partial "cta.html" . }}
  {{ partial "modal.html" . }}
  <script src="/assets/js/scripts.js"></script>
</body>
</html>
