## **[ 21AUG26 ]**

<!-- #region UPDATED FRAMEWORK NOTES -->

<details>
<summary><strong>Updated CSS Framework Notes</strong></summary>

# **CSS FRAMEWORK**

## **General Approach**

- 1 classname/element (clean markup)
- 1 app-specific stylesheet fed by config/util modules

## **Files**

- `index.scss` only style module imported in app
- `app.scss` single app stylesheet
- `resets.scs` reset default tag styles at block level (BEM approach)
- `utilities.scss` layout-specific rules
- `components.scss` stlye-specific rules
- `baseline.scss` project-agnostic rules
- `config.scss` variables

## **Color/Font Management**

- app-specific, hard-coded values (colors, fonts) assigned to literal variables
- literal variables assigned to semantic variables (ipw: never change since they're use-case-based)

**- Scheme**

_\* have these figured out BEFORE styling anything_

- harmony: relationship of primary colors
  - monocromatic, triadic, etc.
- pallete: web-safe color values

**- Color & Font Values**

- app-specific color palette / font values assigned hard-coded values

**- Semantic Color & Font Values**

- semantic variables that get consumed by app stylesheet
- \<semantic variable\> <--> \<value variable\> relationship theoretically should never change

</details>

<!-- #endregion /UPDATED FRAMEWORK NOTES -->

<!-- #region NEXT.JS -->

- need to figure out how to wrap code block text in .md files when the render

<!-- #endregion /NEXT.JS -->

## **[ 21AUG24 ]**

<!-- #region INITIAL FRAMEWORK NOTES -->

<details>
<summary><strong>Initial CSS Framework Notes</strong></summary>

# **_CSS FRAMEWORK HIGH-LEVEL IDEA_**

> _in order to minimize mental overhead of managing CSS/UI design from app-to-app, create my own framework with opinionated components & highly-customizable styles_

APP_BLOCK classes are built using **ONLY** pre-built library (%placeholder) components

- **_APP_BLOCK classes (specific to THAT app) are the only 'classes' created and used in markup_**

```
styles/app_block.scss

@use './component_library.scss';

.app_block_card {
  @extend %library_component1
  @extend %library_component2
}
```

library components are built by `@extend`ing %placeholders from layout, reset, & style util modules (files)

```
(styles/component_library.scss)

@use './utils_layouts';
@use './utils_resets';
@use './utils_styles';

// ex. of extended utils to create a horizontal nav (applied to <ul>)
%nav-x {
  @extend %flex_row-between;
  @extend %reset_ul;
  @extend %nav-link__color
}
```

`utils_layout.scss` handles layout rule groups to be used by library components
`utils_resets.scss` handles 'resetting' default styles on elements to be used by library components
`utils_styles.scss` handles style rule groups to be used by library components

```
(utils_styles.scss)

@use './variables';

%btn_border {
  border: 2px solid variables.$color-primary;
}
```

`baseline.scss` styles are site-wide defaults that don't get `@use`d by any other CSS modules (files)

```
(style./defaults.scss)

@use './variables';

* {
  box-sizing: border-box;
}
body {
	background-color: variables.$color_bg-dk;
	color: variables.$color_text-lt;
	font-family: variables.$font-primary;
}
```

jacking BEM's approach of 'resetting' at the block level, `utils_resets.scss` handles inherited %placeholders that reset layout & style properties when building library components

</details>

<!-- #endregion /INITIAL FRAMEWORK NOTES -->
