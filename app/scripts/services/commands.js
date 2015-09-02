'use strict';

/**
 * @ngdoc service
 * @name zorkgularApp.commands
 * @description
 * # commands
 * Factory in the zorkgularApp.
 */
angular.module('zorkgularApp')
  .factory('commands', function() {

    var commands = {};
    // states
    var me = {};

    String.prototype.capitalizeFirstLetter = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    }

    commands.orders = function(cmd) {
      if (!me.won) {
        var arrayCmd = cmd.split(' ');
        var _cmd = cmd;
        switch (cmd) {
          case 'look at room':
            if (me.state == 'at corridor' || me.state == 'at exit') {
              cmd = langEn.corridor;
            } else {
              cmd = langEn.myRoom;
            }
            break;
          case 'look at me':
            cmd = langEn.me;
            break;
          case 'say':
            cmd = langEn.say;
            break;
          case 'go':
            cmd = langEn.go;
            break;
          case 'open':
            cmd = langEn.open;
            break;
          case 'do':
            cmd = langEn.do;
            break;
          case 'read':
            cmd = langEn.read;
            break;
          default:
            cmd = langEn.iCant;
        }
        if (cmd == langEn.iCant) {
          switch (arrayCmd[0]) {
            case 'say':
              _cmd = _cmd.replace('say ', '');
              if (me.state == 'at window') {
                cmd = '"' + _cmd.capitalizeFirstLetter() + '". <br> ' + langEn.sayJohn;
              } else {
                cmd = '"' + _cmd.capitalizeFirstLetter() + '". <br> ' + langEn.sayNothing;
              }
              break;
            case 'go':
              switch (arrayCmd[1]) {
                case 'table':
                  cmd = langEn.goTable;
                  me.state = 'at table';
                  break;
                case 'bed':
                  cmd = langEn.goBed;
                  me.state = 'at bed';
                  break;
                case 'window':
                  cmd = langEn.goWindow;
                  me.state = 'at window';
                  break;
                case 'door':
                  if (me.state == 'at corridor' || me.state == 'at exit') {
                    me.state = 'at corridor';
                  } else {
                    me.state = 'at door';
                  }
                  cmd = langEn.goDoor;
                  break;
                case 'exit':
                  if (me.state == 'at corridor') {
                    cmd = langEn.goExit;
                    me.state = 'at exit';
                  } else {
                    cmd = langEn.goNoWhere;
                  }
                  break;
                default:
                  cmd = langEn.goNoWhere;
              }
              break;
            case 'open':
              switch (arrayCmd[1]) {
                case 'door':
                  if (me.state == 'at door') {
                    cmd = langEn.openDoorCorridor + ' ' + langEn.corridor;
                    me.state = 'at corridor';
                  } else {
                    if (me.state == 'at corridor') {
                      cmd = langEn.openDoorRoom;
                      me.state = 'at door';
                    } else {
                      cmd = langEn.openNothing;
                    }
                  }
                  break;
                case 'exit':
                  if (me.state == 'at exit') {
                    if (me.homework == 'finish') {
                      cmd = langEn.finish;
                      me.won = true;
                    } else {
                      cmd = langEn.forget;
                    }
                  } else {
                    cmd = langEn.openNothing;
                  }
                  break;
                case 'window':
                  if (me.state == 'at window') {
                    cmd = langEn.openWindow;
                  } else {
                    cmd = langEn.openNothing;
                  }
                  break;
                default:
                  cmd = langEn.openNothing;
              }
              break;
            case 'do':
              switch (arrayCmd[1]) {
                case 'homework':
                  if (me.state == 'at table') {
                    if (me.homework !== 'finish') {
                      cmd = langEn.doHomework;
                      me.homework = 'finish';
                    } else {
                      cmd = langEn.doFinish;
                    }
                  } else {
                    cmd = langEn.doNothing;
                  }
                  break;
                default:
                  cmd = langEn.doNothing;
              }
              break;
            case 'read':
              switch (arrayCmd[1]) {
                case 'note':
                  if (me.state == 'at table') {
                    cmd = langEn.readNote;
                  } else {
                    cmd = langEn.readNothing;
                  }
                  break;
                default:
                  cmd = langEn.readNothing;
              }
              break;
            default:
              cmd = langEn.iCant;
          }
        }
      } else {
        cmd = langEn.won;
      }
      return cmd;
    };

    return commands;
  });