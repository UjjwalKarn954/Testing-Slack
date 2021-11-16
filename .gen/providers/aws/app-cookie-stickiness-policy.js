"use strict";
// https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html
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
exports.AppCookieStickinessPolicy = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy}
*/
var AppCookieStickinessPolicy = /** @class */ (function (_super) {
    __extends(AppCookieStickinessPolicy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppCookieStickinessPolicyConfig
    */
    function AppCookieStickinessPolicy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_app_cookie_stickiness_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._cookieName = config.cookieName;
        _this._lbPort = config.lbPort;
        _this._loadBalancer = config.loadBalancer;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "cookieName", {
        get: function () {
            return this.getStringAttribute('cookie_name');
        },
        set: function (value) {
            this._cookieName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "cookieNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._cookieName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "lbPort", {
        get: function () {
            return this.getNumberAttribute('lb_port');
        },
        set: function (value) {
            this._lbPort = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "lbPortInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._lbPort;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "loadBalancer", {
        get: function () {
            return this.getStringAttribute('load_balancer');
        },
        set: function (value) {
            this._loadBalancer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "loadBalancerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._loadBalancer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppCookieStickinessPolicy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppCookieStickinessPolicy.prototype.synthesizeAttributes = function () {
        return {
            cookie_name: cdktf.stringToTerraform(this._cookieName),
            lb_port: cdktf.numberToTerraform(this._lbPort),
            load_balancer: cdktf.stringToTerraform(this._loadBalancer),
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppCookieStickinessPolicy.tfResourceType = "aws_app_cookie_stickiness_policy";
    return AppCookieStickinessPolicy;
}(cdktf.TerraformResource));
exports.AppCookieStickinessPolicy = AppCookieStickinessPolicy;
