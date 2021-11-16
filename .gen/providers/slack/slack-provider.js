"use strict";
// https://www.terraform.io/docs/providers/slack
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SlackProvider = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack slack}
*/
var SlackProvider = /** @class */ (function (_super) {
    __extends(SlackProvider, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack slack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SlackProviderConfig
    */
    function SlackProvider(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack',
            terraformGeneratorMetadata: {
                providerName: 'slack',
                providerVersionConstraint: '~> 0.8'
            },
            terraformProviderSource: 'jmatsu/slack'
        }) || this;
        _this._token = config.token;
        _this._alias = config.alias;
        return _this;
    }
    Object.defineProperty(SlackProvider.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlackProvider.prototype, "tokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._token;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SlackProvider.prototype, "alias", {
        get: function () {
            return this._alias;
        },
        set: function (value) {
            this._alias = value;
        },
        enumerable: false,
        configurable: true
    });
    SlackProvider.prototype.resetAlias = function () {
        this._alias = undefined;
    };
    Object.defineProperty(SlackProvider.prototype, "aliasInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._alias;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SlackProvider.prototype.synthesizeAttributes = function () {
        return {
            token: cdktf.stringToTerraform(this._token),
            alias: cdktf.stringToTerraform(this._alias)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SlackProvider.tfResourceType = "slack";
    return SlackProvider;
}(cdktf.TerraformProvider));
exports.SlackProvider = SlackProvider;
