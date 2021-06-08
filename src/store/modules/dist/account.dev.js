"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  actions: {
    login: function login(_ref, _user) {
      var commit, response, token, user;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref.commit;
              commit('authRequest');
              _context.prev = 2;
              _context.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                url: 'http://localhost:5555/login',
                data: _user,
                method: 'POST'
              }));

            case 5:
              response = _context.sent;

              if (!response.data.auth) {
                _context.next = 13;
                break;
              }

              token = response.data.token;
              user = response.data.user;
              localStorage.setItem('token', token);
              _axios["default"].defaults.headers.common['Authorization'] = token;
              commit('authSuccess', {
                token: token,
                user: user
              });
              return _context.abrupt("return", response);

            case 13:
              commit('authError');
              localStorage.removeItem('token');
              throw response.data.message;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](2);
              commit('authError');
              localStorage.removeItem('token');
              throw _context.t0;

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[2, 18]]);
    },
    registration: function registration(_ref2, _user) {
      var commit, response, token, user;
      return regeneratorRuntime.async(function registration$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              commit = _ref2.commit;
              commit('authRequest');
              _context2.prev = 2;
              _context2.next = 5;
              return regeneratorRuntime.awrap((0, _axios["default"])({
                url: 'http://localhost:5555/registration',
                data: _user,
                method: 'POST'
              }));

            case 5:
              response = _context2.sent;

              if (!response.data.auth) {
                _context2.next = 13;
                break;
              }

              token = response.data.token;
              user = response.data.user;
              localStorage.setItem('token', token);
              _axios["default"].defaults.headers.common['Authorization'] = token;
              commit('authSuccess', {
                token: token,
                user: user
              });
              return _context2.abrupt("return", response);

            case 13:
              commit('authError');
              localStorage.removeItem('token');
              throw response.data.message;

            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](2);
              commit('authError');
              localStorage.removeItem('token');
              throw _context2.t0;

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[2, 18]]);
    },
    logout: function logout(_ref3) {
      var commit;
      return regeneratorRuntime.async(function logout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              commit = _ref3.commit;
              commit('logout');
              localStorage.removeItem('token');
              delete _axios["default"].defaults.headers.common['Authorization'];

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  },
  mutations: {
    authRequest: function authRequest(state) {
      state.status = 'loading';
    },
    authSuccess: function authSuccess(state, payload) {
      state.status = 'success';
      state.token = payload.token;
      state.user = payload.user;
    },
    authError: function authError(state) {
      state.status = 'error';
    },
    logout: function logout(state) {
      state.status = '';
      state.token = '';
    }
  },
  getters: {
    isLoggedIn: function isLoggedIn(state) {
      return !!state.token;
    },
    authStatus: function authStatus(state) {
      return state.status;
    },
    user: function user(state) {
      return state.user;
    }
  }
};
exports["default"] = _default;