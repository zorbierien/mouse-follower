# Mouse Follower
This is a small JavaScript file for generate a MouseFollower on a webpage.
## Quick Start
~~~javascript
<script src="path/to/js/file/mouse-follower.js"></script>
<script>
    let follower = new MouseFollower();
</script>
~~~

## Configuration
| Property        | type             | Description                                                                                      |
|-----------------|------------------|--------------------------------------------------------------------------------------------------|
| container       | string           | The container element which is used for appending the Cursor div-Element.                        |
| borderColor     | string           | Color for the border of the cursor follower circle.                                              |
| borderThickness | integer or false | The thickness of the circle border or 0 or false for deactivation of the border.                 |
| fillColor       | string           | The color which is used as a background-color for the circle. Every valid css color is possible. |
| blurRadius      | integer or false | Spread Radius of the box-shadow of the circle.                                                   |
| blurColor       | string           | Color of the box-shadow for the circle                                                           |
| size            | integer          | Diameter of the circle.                                                                          |
| timeout         | integer          | Time in ms for the lag of the following circle.                                                  |

Please use the configuration as follows:
~~~javascript
let follower = new MouseFollower({
    ...config
});
~~~

Change the Configuration:
~~~javascript
let follower = new MouseFollower({
    ...config
});
follower.conf.<conf_value> = <new_value>;
~~~