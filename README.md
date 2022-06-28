## My micro Css framework

I used Sass to generate a bunch of classes for :

- Padding and margin
- Text alignment
- Different color grades
- Responsive grid system

### Tools used

- Npm as a package manager
- Gulp js as a task runner for compiling , prefixing and minifying distribution code
- Pug js as a template enginge to facilitate generating a number of html elements by writing small piece of code

### How to use

If you want to start using classes directly , you can just include `./dist/css/main.css` in your html file .
If you want to tweak code for your needs you can follow the following steps :

- Clone repository with `git clone "https://github.com/Ahmedhamdy96/Micro-Css"`
- Install the gulp command line utility with `npm install --global gulp-cli`
- Install all project dependencies with `npm install`
- Run the default task using `gulp`
- Edit `/src/scss/*` to customize colors , font sizes and etc.

### Generated classes

- Color classes
  Note : x is a number from [ 0 to 10 ]
  - `text-blue`
  - `text-blue-light-[x]`
  - `text-blue-dark-[x]`
- Background-color classes
  - `bg-blue`
  - `bg-blue-light-[x]`
  - `bg-blue-dark-[x]`
- Text alignment classes
  - `text-left`
  - `text-center`
  - `text-right`
    Responive
  - `text-left-[br]`
  - `text-center-[br]`
  - `text-right-[br]`
- Padding classes
  Note : y is a number from [ 1 to 10 ]
  - padding `p-[y]`
  - padding-top `pt-[y]`
  - padding-bottom `pb-[y]`
  - padding-right `pr-[y]`
  - padding-left `pl-[y]`
  - padding top and bottom `py-[y]`
  - padding left and right `px-[y]`
- Margin classes
  Note : y is a number from [ 1 to 10 ]
  - margin `m-[y]`
  - margin-top `mt-[y]`
  - margin-bottom `mb-[y]`
  - margin-right `mr-[y]`
  - margin-left `ml-[y]`
  - margin top and bottom `my-[y]`
  - margin left and right `mx-[y]`
- Border radius classes
  Note : y is a number from [ 1 to 10 ]
  - border-radius `br-[y]`
  - border-top-left-radius `br-tl-[y]`
  - border-top-right-radius `br-tr-[y]`
  - border-bottom-left-radius `br-bl-[y]`
  - border-bottom-right-radius `br-br-[y]`
- Layout classes
  - `container` a wrapper for content
  - Grid classes
    Note : y is a number from [ 1 to number of columns ]
    - `row`
    - `col`
    - `col-[y]`
      Responsive
      Note : br is the breakpoint name such as [ xs , sm , md ...] - `col-[br]-[y]`
      Gap  
       - `gap-[y]`
      Justifiy content classes - `just-center` - `just-space-between` - `just-space-evenly` - `just-start` - `just-end`
      Align items classes - `align-items-center` - `align-items-space-between` - `align-items-space-evenly` - `align-items-start` - `align-items-end`
      Responsive - `align-items-center-[br]` - `align-items-space-between-[br]` - `align-items-space-evenly-[br]` - `align-items-start-[br]` - `align-items-end-[br]`

[Show case](https://ahmedhamdy96.github.io/Micro-Css/)
