/**
 * @author Steve Polifka
 * @version: 1.0
 *
 */

class MouseFollower {
    /**
     * @type {boolean}
     * @description Check if Div Element is Created and Appended to Container
     */
    initialized = false;

    /**
     * @type HTMLDivElement
     * @description The Mouse Follower Element
     */
    cursorEl;

    /**
     * @constructor
     * @param conf Provided config Object
     */
    constructor(conf) {
        this.config(conf);
        window.addEventListener('load', this.init.bind(this));
        window.addEventListener('mousemove', this.move.bind(this));
    }

    /**
     * Set Default Values for Config and merge with provided Config Object via Constructor
     * @param conf Provided Configuration Object
     */
    config(conf) {
        let defaultConf = {
            container: 'body',
            borderColor: 'black',
            borderThickness: 1,
            fillColor: false,
            blurRadius: false,
            blurColor: 'black',
            size: 30,
            timeout: 100
        }
        this.conf = Object.assign(defaultConf, conf ? conf : {});
    }

    /**
     * Sets all necessary Stylings to cursor-follower and appends the element to the DOM
     */
    init() {
        let el = document.createElement('div');
        el.setAttribute('id', 'mouse_cursor');
        el.style.position = 'fixed';
        el.style.zIndex = '10000';
        el.style.pointerEvents = 'none';
        el.style.borderRadius = '10000px';
        el.style.width = this.conf.size.toString() + 'px';
        el.style.height = this.conf.size.toString() + 'px';
        el.style.backgroundColor = this.conf.fillColor ? this.conf.fillColor : 'none';

        if (this.conf.borderThickness)
            el.style.border = this.conf.borderThickness.toString() + 'px' + ' solid ' + this.conf.borderColor;
        if (this.conf.blurRadius)
            el.style.boxShadow = '0px 0px 5px ' + this.conf.blurRadius.toString() + 'px ' + this.conf.blurColor;

        document.querySelector(this.conf.container).appendChild(el);
        this.cursorEl = el;
        this.initialized = true;
    }

    /**
     * Handles Mouse Move Event
     * Used as a Callback for mousemove Event
     * @param event
     * @returns {Promise<void>}
     */
    move(event) {
        if (!this.initialized) return;
        let mouse = {
            x: event.clientX - ~~(this.conf.size / 2),
            y: event.clientY - ~~(this.conf.size / 2)
        };
        if (this.conf.timeout > 0) {
            this.sleep(this.conf.timeout)
                .then(() => {
                    let el = this.cursorEl;
                    el.style.left = mouse.x.toString() + 'px';
                    el.style.top = mouse.y.toString() + 'px';
                })
        }
        else {
            let el = this.cursorEl;
            el.style.left = mouse.x.toString() + 'px';
            el.style.top = mouse.y.toString() + 'px';
        }
    }

    /**
     * Await the returned promise or user a callback function to generate a sleep within the script
     * @param ms Sleeptime in ms
     * @returns {Promise<void>}
     */
    sleep(ms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, ms);
        })
    }
}