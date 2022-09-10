# myLibrary

my personal css / js library
unlike bootstrap or tailwind, you can use CSS variables to customize the style so that your code stays clean and simple and does not get overloaded with classes.

## Installation

```html
<link rel="stylesheet" href="https://saracenrhue.github.io/myLibrary/src/style.css"/>
<script defer src="https://saracenrhue.github.io/myLibrary/src/script.js"></script>
```

## CSS variables

```css
:root {
  --background-body: rgb(65, 65, 65);
  --background: rgb(23, 31, 38);
  --background-alt: #1a242f;
  --selection: #1c76c5;
  --text-main: #dbdbdb;
  --text-bright: #fff;
  --text-muted: #a9b1ba;
  --links: #41adff;
  --focus: rgba(0, 150, 191, 0.67);
  --border: #526980;
  --code: #ffbe85;
  --animation-duration: 0.1s;
  --button-base: #0c151c;
  --button-hover: #040a0f;
  --scrollbar-color: #040a0f #202b38;
  --scrollbar-thumb: var(--button-hover);
  --scrollbar-thumb-hover: rgb(121, 121, 121);
  --scrollbar-width: 'thin';
  --form-placeholder: #a9a9a9;
  --form-text: #fff;
  --variable: #d941e2;
  --highlight: #efdb43;
  --select-arrow: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='63' width='117' fill='%23efefef'%3E%3Cpath d='M115 2c-1-2-4-2-5 0L59 53 7 2a4 4 0 00-5 5l54 54 2 2 3-2 54-54c2-1 2-4 0-5z'/%3E%3C/svg%3E");
  --nav-background: #0c151c;
  --navlink-hover: #040a0f;
  --gallery-image-width: 20rem;
  --light-box-shodow:0 4px 8px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
  --dark-box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  --footer-background: #0c151c;
  --footer-text: #a9a9a9;
}
```

## Features

### Responsiv navbar

```html
    <nav>
        <ul>
            <li><a href="#item 0">item 0</a></li>
            <li><a href="#item 1">item 1</a></li>
            <li><a href="#item 2">item 2</a></li>
            <li><a href="#item 3">item 3</a></li>
        </ul>
        <img src="https://raw.githubusercontent.com/SaracenRhue/myLibrary/main/src/icons/burger.svg" alt="#" />
    </nav>
```

### Dynamic footer

automaticly displays the current year

```html
    <footer>
        <p>Saracen Rhue <span id="year"></span></p>
    </footer>
```

### flex-container class

makes contents responsive

```css
.flex-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
@media screen and (max-width: 400px) {
  .flex-container {
    flex-direction: column;
  }
}
```
