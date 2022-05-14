# Truecaller Blog

## Sections

- [Description](#description)
- [Project Worflow](#project-workflow)
- [Local Installation](#local-installtion)
- [Misc](#misc)

## Description

This is blog website built on vue 3 which supports unit+e2e testing.
It incorporates usage of both options API and Composition API[Vue SFC has also been incorporated]

JEST has been used for unit test cases.

Cypress has been used for end to end test cases.

## Project workflow

This Projects consists of 2 routes:

- Blog List/ Home page
- Blog Detail View

The Home page incorporates pagination and gives user ability to select categories of blogs user wants to view.

### Project Folders

```
tests : Test cases
src/components : Vue Components
src/layouts : Vue Layouts
src/plugins : Vue Plugin
src/router : Vue Router
src/services : Services
src/store : Vue Store
src/styles : Basic Styles
src/utils : Basic Utils
src/views : Views shown under router
```

### Test cases

Cypress Coverage can be checked under coverage folder

Test cases are written in "tests" folder under e2e and unit section

### Styling

SCSS is used for styling the application

```
\_variables.scss : Contains all the color variables for the project
\_media.scss : Contains the media query mixins
\_mixins.scss : Contains the column grid mixin
\_helpers.scss : Contains helper misins like mt-50[margin-top:50px], pr-30[Padding-right:50px]
```

Helpers:

For margin use the following

```
mt-x: margin-top: xpx
mb-x: margin-bottom: xpx
mr-x: margin-right: xpx
ml-x: margin-left: xpx
```

For Padding use the following

```
pt-x: padding-top: xpx
pb-x: padding-bottom: xpx
pr-x: padding-right: xpx
pl-x: padding-left: xpx
```

For media queries:

```
$max_width: 4096px;
$desktop_width: 1200px;
$small_desktop_width: 1024px;
$tablet_width: 600px;
$mobile_width: 380px;

media_desktop: <max_width >desktop_width
small_media_desktop: <desktop_width >small_desktop_width
media_tablet: <small_desktop_width >tablet_width
media_mobile: <tablet_width >mobile_width
```

For custom column grid use the following classes

12 grid column is currently being followed in the project this can be modified in the \_mixin.scss

```
_col-\*_ :media_desktop
col-lg-\* :small_media_desktop
col-sm-\* :media_tablet
col-xs-\* :media_mobile
```

## Local Installtion

The project is built on vue 3 and using niode version 14.

Clone this repository and follow the steps mentioned below.

If using NVM[ to shift to node 14 ]

```
nvm use 14
```

To Install the dependencies

```
npm install
```

To compile and hot-reload for development

```
npm run serve
```

To compile and minify for production

```
npm run build
```

To run e2e test cases

```
npm run test:e2e
```

To run unit test cases

```
npm run test:unit
```

### Environment Variables

Create a .env file in the root folder

List of required _environment variables_ :

```
VUE_APP_BLOG_COUNT_PER_PAGE=20
VUE_APP_BLOG_BASE_URL=https://public-api.wordpress.com/rest/v1.1/sites/
VUE_APP_BLOG_SITE_ID=107403796
VUE_APP_BLOG_LIST_FIELDS=slug,categories,post_thumbnail,title,date
VUE_APP_BLOG_FIELDS=featured_image,title,author,content,date
```

## Misc

- Multiple categories are being returned by the API so only the first category is being used.
- Colors for all categories were not provided so base color is being used.
- Few slugs are returning 404.
- Have added a github workflow which eases deployment to github pages.

### Tools and Libraries used

- Vue 3
- Cypress
- Prettier
- Jest
- FontAwesome
-

### License

MIT
