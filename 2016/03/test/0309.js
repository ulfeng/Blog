/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-09 10:02:21
 * @version $Id$
 */

(function(window, undefined) {
    function test(options) {
        log('testing!')
            (options.list || []).forEach(function(i) {

            })

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        )

        return 
        {
            foo: function() {}
        }
    }
    window.test = test
})(window)
(function(window) {
    window.someLibrary = {}
})(window)

(function(window, undefined) {
    function test(options) {

    	// 没有插入分号，两行被合并为一行
        log('testing!')(options.list || []).forEach(function(i) {

        }); // 插入分号

        options.value.test(
            'long string to pass here',
            'and another long string to pass'
        )； // 插入分号

        return; // 插入分号，改变了return表达式的行为
        { // 作为一个代码段处理
            foo: function() {}
        }; // 插入分号
    }
    window.test = test; // 插入分号

// 两行又被合并了
})(window)(function(window) {
    window.someLibrary = {};  // 插入分号
})(window); // 插入分号