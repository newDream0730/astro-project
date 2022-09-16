This package provides the necessary layouts for the gpm-lds-astro template.

Layouts are usefull to create reusable pages. 
Using layouts, you will be able to choose a graphic interface for your markdown files.
To set a layout for your markdown file set the "layout" property at the top of the frontmatter to specify it.

Example 

```
---    
    layout: '../../../layouts/GlobalNavOnlyLayout.astro'
    linkLabel: mycontent
---

Your content will be here! 
```

You can find more information here: https://docs.astro.build/en/core-concepts/layouts/
