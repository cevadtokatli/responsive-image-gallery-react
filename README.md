# Responsive Image Gallery React
React integration for [Responsive Image Gallery.](https://github.com/cevadtokatli/responsive-image-gallery)

## NPM
``` 
npm install --save-dev responsive-image-gallery-react
```

## Yarn
```
yarn add responsive-image-gallery-react --dev
```

## Installation
```
import React from 'react';
import * as RIG from 'responsive-image-gallery-react';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <ul id="bar">
                    <li category="*" className="rig-active">All</li>
                    <li category="a">A</li>
                    <li category="b">B</li>
                    <li category="c">C</li>
                </ul>
                <RIG.Gallery bar="#bar">
                    <RIG.Element category="A">
                        <img src="img1.jpg" />
                    </RIG.Element>
                    <RIG.Element category="B">
                        <img src="img2.jpg" />
                    </RIG.Element>
                    <RIG.Element category="C">
                        <img src="img3.jpg" />
                    </RIG.Element>
                    <RIG.Element category="A">
                        <img src="img4.jpg" />
                    </RIG.Element>
                    <RIG.Element category="B">
                        <img src="img5.jpg" />
                    </RIG.Element>
                </RIG.Gallery>
            </div>
        )
    }
}
```

## Configuration
### Options
Option | Type | Default | Description
------ | ---- | ------- | -----------
bar | string \| HTMLElement* | null | Bar element.
active | string | “*” | Specifies the initial active category.
timing | string | “ease” | Specifies the speed curve of an animation. Takes all the values CSS3 can take. *(like ease, linear, cubic-bezier, step)*
duration | number | 500 | Defines how long an animation should take to complete one cycle. *(as milliseconds)*
minWidth | number | 250 | Specifies the minimum width of a gallery element.
maxWidth | number |500 | Specifies the maximum width of a gallery element.
height | number | 80 | Sets the height according to the width. *(as percent)*
horizontalSpace | number | 10 | Specifies the horizontal space between gallery elements.
verticalSpace | number | 10 | Specifies the vertical space between gallery elements.
overflow | boolean | false | Allows elements to overflow if the container element's width is smaller than `minWidth`.
grid | boolean | true | Enables grid view.

<span style="font-size:.9rem;">*: You can give an HTML element or a CSS selector (like `#gallery`, `.container > div:first-child`)</span>

### Methods
Method | Params | Return | Description
------ | ------ | ------ | -----------
get | | string | Returns the active category.
set  | category: string, animate: boolean | void | Sets the active category.
getTiming | | string | Returns timing value.
setTiming | timing:string | void | Sets timing value.
getDuration | | number | Returns duration.
setDuration | duration:number | void | Sets duration.
destroy | | void | Destroys the gallery.

## IE Support
IE 10 is not supported and patches to fix problems will not be accepted.

## License
Responsive Image Gallery React is provided under the [MIT License](https://opensource.org/licenses/MIT).