import { CodeBlock } from '@/components/code-block';

const embedCode = `<script>
  (function() {
    window.Hir3dWidgetId = 'YOUR_WIDGET_ID';
    window.Hir3dWidgetDarkMode = true;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'widget.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })();
</script>`;

export const WidgetGraphic = () => (
  <CodeBlock language="html" code={embedCode} />
);
