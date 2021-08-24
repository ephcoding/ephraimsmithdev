[ 21AUG24 ]

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
(styles/baseline.scss)

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
