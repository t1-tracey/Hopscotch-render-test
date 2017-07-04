var HOPSCOTCH_SECTION_REGEX = /\[hopscotch\]((?:(?!\[hopscotch\]|\[\/hopscotch\])[\S\s])*)\[\/hopscotch\]/ig

// var HOPSCOTCH_BLOCKS_REGEX = \[hopscotch\]\n+(.+(\(\d*\))*\n)*\n*\[\/hopscotch\]

// TODO: expression regex
// for now it is \d // \d+\s*[\+\-\*\/\^\%]\s*\d one-liners
// for now try replacing with .*
// separate variables, but identify sin(), square_root() etc first

var MOVE_FORWARD_REGEX = /move_forward\(\d*\)/ig // move_forward(\d)
var TURN_REGEX = /turn\(\d*\)/ig
var SET_POSITION_REGEX = /set_position\(x\s*:\s*\d*,\s*y\s*:\s*\d*\)/ig // set_position(x: \d, y: \d)
var FLIP_REGEX = /flip/ig
var CHANGE_X_REGEX = /change_x\(\d*\)/ig
var CHANGE_Y_REGEX = /change_y\(\d*\)/ig
var SET_SPEED_REGEX = /set_speed\(\d*\)/ig
var SET_ANGLE_REGEX = /set_angle\(\d*\)/ig



var REPEAT_TIMES_REGEX = /repeat_times\(\d*\)/ig
var REPEAT_FOREVER_REGEX = /repeat_forever/ig
var CLONE_REGEX = /clone_times\(\d*\)/ig
var WAIT_REGEX = /wait\(\d*\)/ig
var END_CONTROL_FLOW_REGEX = /end_control_flow/ig

var WHENS_REGEX = /when\(.*\)/ig
