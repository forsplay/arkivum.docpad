// Generated by CoffeeScript 1.6.3
(function() {
  var MenuItem, data, item, json, printItem, reIndex, rootItem, _, _i, _j, _len, _len1, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ = require('underscore');

  reIndex = /^index\.\w+$/i;

  MenuItem = (function() {
    function MenuItem(slug, document, parent) {
      var _ref;
      this.slug = slug != null ? slug : '';
      this.document = document;
      this.parent = parent;
      this.children = [];
      this.sortOrder = 0;
      if (this.parent != null) {
        parent.children.push(this);
      }
      if (((_ref = this.document) != null ? _ref.menuOrder : void 0) != null) {
        this.sortOrder = parseFloat(this.document.menuOrder);
      }
    }

    MenuItem.prototype.add = function(document) {
      var child, ctx, dupe, item, m, parts, slug;
      parts = document.url.replace(/^\//, '').split('/');
      slug = parts.pop();
      ctx = this;
      while (m = parts.shift()) {
        item = ctx.childBySlug(m);
        if (!item) {
          item = new MenuItem(m, null, ctx);
        }
        ctx = item;
      }
      if (dupe = ctx.childBySlug(slug)) {
        if (dupe.document) {
          throw "Item duplicate: " + document.url;
        }
        dupe.document = document;
        if (document.menuOrder != null) {
          return dupe.sortOrder = parseFloat(document.menuOrder);
        }
      } else {
        return child = new MenuItem(slug, document, ctx);
      }
    };

    MenuItem.prototype.childBySlug = function(slug) {
      return _.find(this.children, function(item) {
        return item.slug === slug;
      });
    };

    MenuItem.prototype.title = function() {
      var _ref, _ref1;
      return ((_ref = this.document) != null ? _ref.menuTitle : void 0) || ((_ref1 = this.document) != null ? _ref1.title : void 0) || null;
    };

    MenuItem.prototype.url = function() {
      var item, url;
      url = this.slug;
      item = this;
      while (item = item.parent) {
        url = item.slug + '/' + url;
      }
      if (url.charAt(0) !== '/') {
        url = '/' + url;
      }
      if (!this.isLeaf() && !/\/$/.test(url)) {
        url += '/';
      }
      return url;
    };

    MenuItem.prototype.isLeaf = function() {
      return !this.children.length;
    };

    MenuItem.prototype.activeState = function(url) {
      var curUrl, _ref;
      if (url == null) {
        url = '';
      }
      curUrl = this.url();
      if (curUrl === url || ((_ref = this.document) != null ? _ref.url : void 0) === url) {
        return 'current';
      }
      if (url && url.indexOf(curUrl) === 0) {
        return 'parent';
      }
      return false;
    };

    MenuItem.prototype.submenu = function(options) {
      var filterItems, item;
      filterItems = function(items) {
        var filtered, item, subitems, _i, _len, _ref;
        filtered = [];
        for (_i = 0, _len = items.length; _i < _len; _i++) {
          item = items[_i];
          if (item.meta.hidden || (options.optimize && reIndex.test(item.slug || ''))) {
            continue;
          }
          if ((_ref = options.skipFiles) != null ? _ref.test(item.slug) : void 0) {
            continue;
          }
          if (options.skipEmpty && !item.hasDocument) {
            if (item.children != null) {
              subitems = filterItems(item.children);
              subitems.sort(function(a, b) {
                return a.order - b.order;
              });
              subitems.forEach(function(si, ix) {
                return si.order = item.order + ix / 1000;
              });
              filtered = filtered.concat(subitems);
            }
          } else {
            filtered.push(item);
            if (item.children != null) {
              item.children = filterItems(item.children);
            }
          }
        }
        return _.compact(filtered).sort(function(a, b) {
          return a.order - b.order;
        });
      };
      return filterItems((function() {
        var _i, _len, _ref, _results;
        _ref = this.children;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          item = _ref[_i];
          _results.push(item.toJSON(options));
        }
        return _results;
      }).call(this));
    };

    MenuItem.prototype.getMeta = function() {
      var k, meta, metaKey, reItem, v, _ref;
      meta = {};
      if (this.document != null) {
        reItem = /^menu(\w+)$/;
        _ref = this.document.meta;
        for (k in _ref) {
          v = _ref[k];
          if (reItem.test(k)) {
            metaKey = RegExp.$1[0].toLowerCase() + RegExp.$1.substr(1);
            meta[metaKey] = v;
          }
        }
      }
      return meta;
    };

    MenuItem.prototype.toJSON = function(options) {
      var children, item, output;
      if (options == null) {
        options = {};
      }
      output = {
        title: this.title(),
        url: this.url(),
        slug: this.slug,
        hasDocument: this.document != null,
        state: this.activeState(options.url),
        order: this.sortOrder,
        meta: this.getMeta()
      };
      children = _.clone(this.children);
      if (options.optimize) {
        children = _.reject(children, function(item) {
          if (item.isLeaf() && reIndex.test(item.slug)) {
            output.title = item.title();
            output.hasDocument = item.document != null;
            output.order = item.sortOrder;
            output.meta = item.getMeta();
            return true;
          }
          return false;
        });
      }
      if (children.length) {
        output.children = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = children.length; _i < _len; _i++) {
            item = children[_i];
            _results.push(item.toJSON(options));
          }
          return _results;
        })();
      }
      return output;
    };

    MenuItem.prototype.toString = function(indent) {
      var child;
      if (indent == null) {
        indent = '';
      }
      return indent + this.url() + '\n' + ((function() {
        var _i, _len, _ref, _results;
        _ref = this.children;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          _results.push(child.toString(indent + '\t'));
        }
        return _results;
      }).call(this)).join('');
    };

    return MenuItem;

  })();

  module.exports = function(BasePlugin) {
    var MenuPlugin, _ref;
    return MenuPlugin = (function(_super) {
      __extends(MenuPlugin, _super);

      function MenuPlugin() {
        _ref = MenuPlugin.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MenuPlugin.prototype.name = 'menu';

      MenuPlugin.prototype.config = {
        menuOptions: {
          optimize: true,
          skipEmpty: true,
          skipFiles: /index\-debug\./i
        }
      };

      MenuPlugin.prototype.extendTemplateData = function(_arg) {
        var config, docpad, templateData;
        templateData = _arg.templateData;
        docpad = this.docpad;
        config = this.config;
        return templateData.generateMenu = function(url, collectionName) {
          var doc, rootItem, _i, _len, _ref1;
          if (collectionName == null) {
            collectionName = "documents";
          }
          if (config.menuOptions.optimize) {
            url = url.replace(/\/index\.\w+$/i, '/');
          }
          rootItem = new MenuItem;
          _ref1 = docpad.getCollection(collectionName).toJSON();
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            doc = _ref1[_i];
            rootItem.add(doc);
          }
          return rootItem.submenu(_.extend({
            url: url
          }, config.menuOptions));
        };
      };

      return MenuPlugin;

    })(BasePlugin);
  };

  if (!module.parent) {
    console.log("Testing");
    data = [
      {
        title: 'Main',
        url: '/index.html'
      }, {
        title: 'About',
        url: '/about/index.html'
      }, {
        title: 'About 3',
        url: '/about/index3.html'
      }, {
        title: 'Company',
        url: '/about/company/index.html'
      }, {
        title: 'Contacts',
        url: '/about/company/contacts.html'
      }, {
        title: 'deep 1',
        url: '/very/deeply/nested/item/index.html'
      }
    ];
    rootItem = new MenuItem;
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      item = data[_i];
      rootItem.add(item);
    }
    json = rootItem.toJSON({});
    printItem = function(item, indent) {
      var mark, si;
      if (indent == null) {
        indent = '';
      }
      mark = '';
      if (item.state === 'current') {
        mark = '*';
      } else if (item.state) {
        mark = '^';
      }
      return indent + item.url + mark + (" (" + item.order + ")") + '\n' + ((function() {
        var _j, _len1, _ref, _results;
        _ref = item.children || [];
        _results = [];
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          si = _ref[_j];
          _results.push(printItem(si, indent + '\t'));
        }
        return _results;
      })()).join('');
    };
    _ref = rootItem.submenu({
      skipEmpty: true,
      optimize: true,
      url: '/about/company/'
    });
    for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
      item = _ref[_j];
      console.log(printItem(item));
    }
  }

}).call(this);
