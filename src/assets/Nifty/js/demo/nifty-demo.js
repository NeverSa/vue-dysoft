// Nifty-demo.js
// ====================================================================
// Set user options for current page.
// This file is only used for demonstration purposes.
// ====================================================================
// - ThemeOn.net -
setTimeout(function () {
        // SETTINGS WINDOW
        // =================================================================
        var demoSetBody = $('#demo-set'),
            demoSetIcon = $('#demo-set-icon'),
            demoSetBtnGo = $('#demo-set-btngo'),
            niftyContainer = $('#container'),
            niftyMainNav = $('#mainnav-container'),
            niftyAside = $('#aside-container');

        if (demoSetBody.length) {
            function InitializeSettingWindow() {
                // BOXED LAYOUT
                // =================================================================
                var boxedLayoutCheckbox = document.getElementById('demo-box-lay'),
                    boxedLayoutImgBtn = document.getElementById('demo-box-img'),
                    boxedLayoutImgBox = $('#demo-bg-boxed'),
                    boxedLayoutBtnClose = document.getElementById('demo-close-boxed-img'),
                    blurredBgList = $('#demo-blurred-bg'),
                    polygonBgList = $('#demo-polygon-bg'),
                    abstractBgList = $('#demo-abstract-bg');


                // Initialize
                // =================================================================
                if (niftyContainer.hasClass('boxed-layout')) {
                    boxedLayoutCheckbox.checked = true;
                    boxedLayoutImgBtn.disabled = false;
                } else {
                    boxedLayoutCheckbox.checked = false;
                    boxedLayoutImgBtn.disabled = true;
                }

                function bg_thumb_template(cat) {
                    var list = '';
                    for (var i = 1; i < 17; i++) {
                        list += '<a href="#" class="thumbnail box-inline" thumbnail="' + cat + '-' + i + '">\
                                    <img class="img-responsive" src="/Dysoft/Nifty/premium/boxed-bg/' + cat + '/thumbs/' + i + '.jpg" alt="Background Image">\
                                 </a>';
                    }
                    return list;
                }
                function add_bg_thumbs() {
                    blurredBgList.append(bg_thumb_template('blurred'));
                    polygonBgList.append(bg_thumb_template('polygon'));
                    abstractBgList.append(bg_thumb_template('abstract'));

                    var boxedBgthumb = boxedLayoutImgBox.find('.thumbnail');
                    boxedBgthumb.on('click', function () {
                        boxedBgthumb.removeClass('selected');
                        var url = $(this).children('img').prop('src').replace('thumbs', 'bg');
                        $(this).addClass('selected');
                        niftyContainer.css({
                            'background-image': 'url(' + url + ')',
                            'background-repeat': 'no-repeat',
                            'background-size': 'cover'
                        })
                    });
                }

                // Boxed Layout Checkbox
                // =================================================================
                boxedLayoutCheckbox.onchange = function () {
                    if (boxedLayoutCheckbox.checked) {
                        niftyContainer.addClass('boxed-layout');
                        boxedLayoutImgBtn.disabled = false;
                    } else {
                        niftyContainer.removeClass('boxed-layout').removeAttr('style');;
                        boxedLayoutImgBtn.disabled = true;
                        boxedLayoutImgBox.removeClass('open').find('.thumbnail').removeClass('selected');
                    }
                    $(window).trigger('resize');
                };

                // Image Buttons
                // =================================================================
                boxedLayoutImgBtn.onclick = function () {
                    if (!boxedLayoutImgBox.hasClass('open')) {
                        boxedLayoutImgBox.addClass('open');
                        if (!demoSetBody.hasClass('hasbgthumbs')) {
                            add_bg_thumbs();
                            demoSetBody.addClass('hasbgthumbs')
                        }
                    } else {
                        boxedLayoutImgBox.removeClass('open');
                    }
                };
                add_bg_thumbs();
                demoSetBody.addClass('hasbgthumbs')

                // Close Button
                // =================================================================
                boxedLayoutBtnClose.onclick = function () {
                    boxedLayoutImgBox.removeClass('open');
                }

                // TRANSITION EFFECTS
                // =================================================================
                // =================================================================
                var effectList = 'easeInQuart easeOutQuart easeInBack easeOutBack easeInOutBack steps jumping rubber',
                    animCheckbox = document.getElementById('demo-anim'),
                    transitionVal = document.getElementById('demo-ease');

                // Initialize
                // =================================================================
                if (niftyContainer.hasClass('effect')) {
                    animCheckbox.checked = true;
                    transitionVal.disabled = false;
                } else {
                    animCheckbox.checked = false;
                    transitionVal.disabled = true;
                }

                // Animations checkbox
                animCheckbox.onchange = function () {
                    if (animCheckbox.checked) {
                        niftyContainer.addClass('effect');
                        transitionVal.disabled = false;
                        transitionVal.value = 'effect';
                    } else {
                        niftyContainer.removeClass('effect ' + effectList);
                        transitionVal.disabled = true;
                    }
                };

                // Transition selectbox
                var effectArray = effectList.split(" ");
                for (i = 0; i < effectArray.length; i++) {
                    if (niftyContainer.hasClass(effectArray[i])) {
                        transitionVal.value = effectArray[i];
                        break;
                    }
                }
                transitionVal.onchange = function () {
                    var optionSelected = $("option:selected", this);
                    var valueSelected = this.options[this.selectedIndex].value;
                    if (valueSelected) {
                        niftyContainer.removeClass(effectList).addClass(valueSelected);
                    }
                };

                // NAVBAR
                // =================================================================
                // =================================================================
                var navbarFixedCheckbox = document.getElementById('demo-navbar-fixed');

                // Initialize
                // =================================================================
                if (niftyContainer.hasClass('navbar-fixed')) {
                    navbarFixedCheckbox.checked = true;
                } else {
                    navbarFixedCheckbox.checked = false;
                }

                // Fixed Position
                // =================================================================
                navbarFixedCheckbox.onchange = function () {
                    if (navbarFixedCheckbox.checked) {
                        niftyContainer.addClass('navbar-fixed');
                    } else {
                        niftyContainer.removeClass('navbar-fixed');
                    }

                    // Refresh the aside, to enable or disable the "Bootstrap Affix" when the navbar in a "static position".
                    niftyMainNav.niftyAffix('update');
                    niftyAside.niftyAffix('update');
                };

                // FOOTER
                // =================================================================
                // =================================================================
                var footerFixedCheckbox = document.getElementById('demo-footer-fixed');

                // Initialize
                // =================================================================
                if (niftyContainer.hasClass('footer-fixed')) {
                    footerFixedCheckbox.checked = true;
                } else {
                    footerFixedCheckbox.checked = false;
                }

                // Fixed Position
                // =================================================================
                footerFixedCheckbox.onchange = function () {
                    if (footerFixedCheckbox.checked) {
                        niftyContainer.addClass('footer-fixed');
                    } else {
                        niftyContainer.removeClass('footer-fixed');
                    }
                };

                // NAVIGATION
                // =================================================================
                // =================================================================
                var collapsedCheckbox = document.getElementById('demo-nav-coll'),
                    navFixedCheckbox = document.getElementById('demo-nav-fixed'),
                    navProfileCheckbox = document.getElementById('demo-nav-profile'),
                    navShortcutCheckbox = document.getElementById('demo-nav-shortcut'),
                    navOffcanvasSB = document.getElementById('demo-nav-offcanvas'),
                    navProfile = $('#mainnav-profile'),
                    navShortcut = $('#mainnav-shortcut');

                // Initialize
                // =================================================================
                if (niftyContainer.hasClass('mainnav-fixed')) {
                    navFixedCheckbox.checked = true;
                } else {
                    navFixedCheckbox.checked = false;
                }

                // Fixed Position
                // =================================================================
                if (niftyContainer.hasClass('mainnav-fixed')) {
                    navFixedCheckbox.checked = true;
                } else {
                    navFixedCheckbox.checked = false;
                }
                navFixedCheckbox.onchange = function () {
                    if (navFixedCheckbox.checked) {
                        $.niftyNav('fixedPosition');
                    } else {
                        $.niftyNav('staticPosition');
                    }
                };

                // Profile
                // =================================================================
                if (navProfile.hasClass('hidden')) {
                    navProfileCheckbox.checked = false;
                } else {
                    navProfileCheckbox.checked = true;
                }
                navProfileCheckbox.onchange = function () {
                    navProfile.toggleClass('hidden');
                };

                // Shortcut Buttons
                // =================================================================
                if (navShortcut.hasClass('hidden')) {
                    navShortcutCheckbox.checked = false;
                } else {
                    navShortcutCheckbox.checked = true;
                }
                navShortcutCheckbox.onchange = function () {
                    navShortcut.toggleClass('hidden');
                };

                // Collapsing/Expanding Navigation
                // =================================================================
                if (niftyContainer.hasClass('mainnav-sm')) {
                    collapsedCheckbox.checked = true;
                } else {
                    collapsedCheckbox.checked = false;
                }
                collapsedCheckbox.onchange = function () {
                    if (collapsedCheckbox.checked) {
                        if (navOffcanvasSB.value != 'none') {
                            navOffcanvasSB.value = 'none';
                            //location.href = location.protocol + '//' + location.host + location.pathname;
                        }
                        $.niftyNav('collapse');
                    } else {
                        $.niftyNav('expand');
                    }
                };

                // Offcanvas Navigation
                // =================================================================
                navOffcanvasSB.onchange = function () {
                    if (collapsedCheckbox.checked) {
                        collapsedCheckbox.checked = false;
                    }
                    demoSetBody.removeClass('open');
                    //location.href = location.protocol + '//' + location.host + location.pathname + '?&offcanvas=' + this.options[this.selectedIndex].value;

                    var nav_mode = $(this).val();
                    if (nav_mode == "push" || nav_mode == "slide" || nav_mode == "reveal") {
                        $('.mainnav-toggle').removeClass('push slide reveal').addClass(nav_mode);
                    } else {
                        if (niftyContainer.hasClass('mainnav-sm')) {
                            collapsedCheckbox.checked = true;
                        } else {
                            collapsedCheckbox.checked = false;
                        }
                    }
                };

                var nav_mode = function () {
                    var query = window.location.search.substring(1);
                    var vars = query.split("&");
                    for (var i = 0; i < vars.length; i++) {
                        var pair = vars[i].split("=");
                        if (pair[0] == "offcanvas") { return pair[1]; }
                    }
                    return (false);
                }();
                //if(nav_mode == "push" || nav_mode == "slide" ||nav_mode == "reveal"){
                //    $('.mainnav-toggle').removeClass('push slide reveal').addClass(nav_mode);

                //    navOffcanvasSB.value = nav_mode;
                //}else{
                //    if(niftyContainer.hasClass('mainnav-sm')){
                //        collapsedCheckbox.checked = true;
                //    }else{
                //        collapsedCheckbox.checked = false;
                //    }
                //}

                // ASIDE
                // =================================================================
                // =================================================================
                var asdVisCheckbox = document.getElementById('demo-asd-vis'),
                    asdFixedCheckbox = document.getElementById('demo-asd-fixed'),
                    asdFloatCheckbox = document.getElementById('demo-asd-float'),
                    asdPosCheckbox = document.getElementById('demo-asd-align'),
                    asdThemeCheckbox = document.getElementById('demo-asd-themes');

                // Visible
                // =================================================================
                if (niftyContainer.hasClass('aside-in')) {
                    asdVisCheckbox.checked = true;
                } else {
                    asdVisCheckbox.checked = false;
                }
                asdVisCheckbox.onchange = function () {
                    if (asdVisCheckbox.checked) {
                        $.niftyAside('show');
                    } else {
                        $.niftyAside('hide');
                    }
                };

                // Fixed Position
                // =================================================================
                if (niftyContainer.hasClass('aside-fixed')) {
                    asdFixedCheckbox.checked = true;
                } else {
                    asdFixedCheckbox.checked = false;
                }
                asdFixedCheckbox.onchange = function () {
                    if (asdFixedCheckbox.checked) {
                        $.niftyAside('fixedPosition');
                    } else {
                        $.niftyAside('staticPosition');
                    };
                };

                // Floating Aside
                // =================================================================
                if (niftyContainer.hasClass('aside-float')) {
                    asdFloatCheckbox.checked = true;
                } else {
                    asdFloatCheckbox.checked = false;
                }
                asdFloatCheckbox.onchange = function () {
                    if (asdFloatCheckbox.checked) {
                        niftyContainer.addClass('aside-float');
                    } else {
                        niftyContainer.removeClass('aside-float');
                    };
                    $(window).trigger('resize');
                };

                // Align
                // =================================================================
                if (niftyContainer.hasClass('aside-left')) {
                    asdPosCheckbox.checked = true;
                } else {
                    asdPosCheckbox.checked = false;
                }
                asdPosCheckbox.onchange = function () {
                    if (asdPosCheckbox.checked) {
                        $.niftyAside('alignLeft');
                    } else {
                        $.niftyAside('alignRight');
                    };
                };

                // Themes
                // =================================================================
                if (niftyContainer.hasClass('aside-bright')) {
                    asdThemeCheckbox.checked = false;
                } else {
                    asdThemeCheckbox.checked = true;
                }
                asdThemeCheckbox.onchange = function () {
                    if (asdThemeCheckbox.checked) {
                        $.niftyAside('darkTheme');
                    } else {
                        $.niftyAside('brightTheme');
                    };
                };

                // COLOR SCHEMES
                // =================================================================
                var themeBtn = $('.demo-theme'),
                    changeTheme = function (themeName, type) {
                        var themeCSS = $('#theme'),
                            fileext = '.min.css',
                            //2017-3-31 陈双宇 微调目录
                            filename = '/Dysoft/Nifty/css/themes/type-' + type + '/' + themeName + fileext;

                        if (themeCSS.length) {
                            themeCSS.prop('href', filename);
                        } else {
                            themeCSS = '<link id="theme" href="' + filename + '" rel="stylesheet">';
                            $('head').append(themeCSS);
                        }
                    };

                $('#demo-theme').on('click', '.demo-theme', function (e) {
                    e.preventDefault();
                    var el = $(this);
                    if (el.hasClass('disabled')) {
                        return false;
                    }
                    changeTheme(el.attr('data-theme'), el.attr('data-type'));
                    themeBtn.removeClass('disabled');
                    el.addClass('disabled');

                    $('#demo-theme .demo-theme').removeClass('demo-theme-select');
                    el.addClass('demo-theme-select');
                    return false;
                });
            }

            var nav_mode = function () {
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] == "offcanvas") { return pair[1]; }
                }
                return (false);
            }();
            if (nav_mode == "push" || nav_mode == "slide" || nav_mode == "reveal") {
                $('.mainnav-toggle').removeClass('push slide reveal').addClass(nav_mode);
                niftyContainer.removeClass('mainnav-lg mainnav-sm').addClass('mainnav-out ' + nav_mode);
            }
            var demoSetBody = $('#demo-set-body'), demoSetBtn = $('#demo-set-btn');
            $('html').on('click', function (e) {
                if (demoSetBody.hasClass('in')) {
                    if (!$(e.target).closest('#demo-set').length) {
                        demoSetBtn.trigger('click')
                    }
                }
            });

            //demoSetBtn.one('click', InitializeSettingWindow);
            $('#demo-btn-close-settings').on('click', function () {
                demoSetBtn.trigger('click')
            });
        };

        // InitializeSettingWindow();

        //var switchSettingDefault = {
        //    "demo-box-lay": false,
        //    "demo-anim": true,
        //    "demo-navbar-fixed": false,
        //    "demo-footer-fixed": false,
        //    "demo-nav-fixed": false,
        //    "demo-nav-profile": true,
        //    "demo-nav-shortcut": true,
        //    "demo-nav-coll": false,
        //    "demo-asd-vis": false,
        //    "demo-asd-fixed": true,
        //    "demo-asd-float": true,
        //    "demo-asd-align": false,
        //    "demo-asd-themes": false
        //};

        //var dropDownSettingDefault = { "demo-ease": "effect", "demo-nav-offcanvas": null };

        //var themeSettingDefault = { "theme": "theme-dark", "type": "c" };

        //var backgroundSettingDefault = { "thumbnail": null };

        var userUIConfigDefault = {
            switchSetting: {
                "demo-box-lay": false,
                "demo-anim": true,
                "demo-navbar-fixed": false,
                "demo-footer-fixed": false,
                "demo-nav-fixed": false,
                "demo-nav-profile": true,
                "demo-nav-shortcut": true,
                "demo-nav-coll": false,
                "demo-asd-vis": false,
                "demo-asd-fixed": true,
                "demo-asd-float": true,
                "demo-asd-align": false,
                "demo-asd-themes": false
            },
            dropDownSetting: { "demo-ease": "effect", "demo-nav-offcanvas": null },
            themeSetting: { "theme": "theme-dark", "type": "c" },
            backgroundSetting: { "thumbnail": null }
        };
        var userUIConfigNow = $.extend(true, {}, userUIConfigDefault);


        //#region asdas 
        //#endregion 
        //2017-3-31 陈双宇 保存界面配置
        //开关类配置 保存
        demoSetBody.on('change', 'input[type="checkbox"].toggle-switch', function (e) {
            var id = $(this).attr('id');
            var isCheck = $(this).prop('checked');
            userUIConfigNow.switchSetting[id] = isCheck;
        });

        //下拉框类配置 保存
        demoSetBody.on('change', 'select', function () {
            var id = $(this).attr('id');
            var val = $(this).val();
            userUIConfigNow.dropDownSetting[id] = val;
        });

        //界面风格 保存
        $('#demo-theme').on('click', '.demo-theme', function (e) {
            e.preventDefault();
            var el = $(this);

            var theme = el.attr('data-theme');
            var type = el.attr('data-type');
            userUIConfigNow.themeSetting.theme = theme;
            userUIConfigNow.themeSetting.type = type;
            return false;
        });

        //背景图片 保存
        $('#demo-bg-boxed').on('click', '.thumbnail', function () {
            var backgroundType = $(this).attr('thumbnail');
            userUIConfigNow.backgroundSetting.thumbnail = backgroundType;
        });

        $("#btnDemoSetSave").click(function () {
            var jsonStr = JSON.stringify(userUIConfigNow);
            localStorage.setItem("userUISetting", jsonStr);
            return false;
        });
        //保存下拉选择配置

        //2017-3-31 陈双宇 绑定界面配置

        function GetUserUISetting(callback) {
            var jsonStr = localStorage.getItem("userUISetting");
            if (jsonStr) {
                var json = JSON.parse(jsonStr);
                callback(json);
            }
        }

        var uiConfigProvide = GetUserUISetting;

        uiConfigProvide(function (config) {
            $.each(config.switchSetting, function (key, val) {
                $("#" + key).prop("checked", val).change();
            });

            $.each(config.dropDownSetting, function (key, val) {
                $("#" + key).val(val).change();
            });

            if (config.themeSetting && config.themeSetting.theme && config.themeSetting.type) {
                var $checkTheme = $("#demo-theme [data-theme='" + config.themeSetting.theme + "'][data-type='" + config.themeSetting.type + "']");
                $checkTheme.click();
            }

            if (config.switchSetting["demo-box-lay"] && config.backgroundSetting && config.backgroundSetting.thumbnail) {
                var $background = $("#demo-bg-boxed [thumbnail='" + config.backgroundSetting.thumbnail + "']");
                $background.click();
            }
        });

}, 2000)
