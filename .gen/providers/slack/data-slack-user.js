"use strict";
// https://www.terraform.io/docs/providers/slack/d/user.html
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
exports.DataSlackUser = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/slack/d/user.html slack_user}
*/
var DataSlackUser = /** @class */ (function (_super) {
    __extends(DataSlackUser, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/slack/d/user.html slack_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataSlackUserConfig
    */
    function DataSlackUser(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'slack_user',
            terraformGeneratorMetadata: {
                providerName: 'slack'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._queryType = config.queryType;
        _this._queryValue = config.queryValue;
        return _this;
    }
    Object.defineProperty(DataSlackUser.prototype, "has2Fa", {
        // ==========
        // ATTRIBUTES
        // ==========
        // has_2fa - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('has_2fa');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "isAdmin", {
        // is_admin - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_admin');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "isBot", {
        // is_bot - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_bot');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "isOwner", {
        // is_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "queryType", {
        get: function () {
            return this.getStringAttribute('query_type');
        },
        set: function (value) {
            this._queryType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "queryTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "queryValue", {
        get: function () {
            return this.getStringAttribute('query_value');
        },
        set: function (value) {
            this._queryValue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "queryValueInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._queryValue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataSlackUser.prototype, "realName", {
        // real_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('real_name');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataSlackUser.prototype.synthesizeAttributes = function () {
        return {
            query_type: cdktf.stringToTerraform(this._queryType),
            query_value: cdktf.stringToTerraform(this._queryValue)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataSlackUser.tfResourceType = "slack_user";
    return DataSlackUser;
}(cdktf.TerraformDataSource));
exports.DataSlackUser = DataSlackUser;
