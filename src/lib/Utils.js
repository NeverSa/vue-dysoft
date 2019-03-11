//通用工具类
let utils = {
    /**
     * 
     * @param {*} msg 
     * @param {*} options 'danger|info'
     */
    info: function (msg="", options={}) {
        let type = "danger"
        if (options.type) {
            type = options.type;
        }
        var defaultOption = {
            type: type,
            icon: 'pli-exclamation icon-2x',
            message: msg,
            container: 'floating',
            timer: 3000,
            floating: {
                position: 'bottom-right',
                animationIn: 'jellyIn',
                animationOut: 'fadeOut'
            }
        };
        var opts = $.extend({}, defaultOption, options);
        $.niftyNoty(opts);
    },

}
export default utils;