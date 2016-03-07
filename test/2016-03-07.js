/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-03-07 10:03:41
 * @version $Id$
 */
function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}
is('String', 'test'); // true
is('String', new String('test')); // true
