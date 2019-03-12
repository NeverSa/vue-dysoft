import bootbox from "bootbox";//弹框库
console.log(bootbox)
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
    confirm : function (msg, callback, options) {
        var defaultOption = {
            size: "small",
            title: "确认操作",
            message: msg,
            callback: callback,
            buttons: {
                cancel: {
                    label: '取消',
                    className: 'btn-danger'
                },
                confirm: {
                    label: '确认',
                    className: 'btn-success'
                }
            },
            animate: false,
            closeButton: false
        }
        var opts = $.extend({}, defaultOption, options)
        bootbox.confirm(opts);
    }

}
export default utils;