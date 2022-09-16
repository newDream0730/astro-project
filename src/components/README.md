This package provides the components (independent, reusable UI pieces) for the gpm-lds-astro template.

See components as the basic "blocks" to build your application. 

Components are structured in two parts, the component Template (plane HTML code) and the component Script (javaScript code).
Components renders their HTML code in build time, if they have code inside, is gonna be executed during this build time, and they are not gonna be sended to the final user, this behavior represents a faster web-site without javaScript footprint on it. 

The script section of a component can carry the expensive logic for you, like fetching an API or a database. 
This section is gonna be encapsulated by a code fence (---)

Example

```
---
// Component Script (JavaScript)
---
<!-- Component Template (HTML + JS Expressions) -->
```

You can find more information here: https://docs.astro.build/en/core-concepts/astro-components/

