"use strict";
// https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html
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
exports.DataAwsWafv2IpSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html aws_wafv2_ip_set}
*/
var DataAwsWafv2IpSet = /** @class */ (function (_super) {
    __extends(DataAwsWafv2IpSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_ip_set.html aws_wafv2_ip_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafv2IpSetConfig
    */
    function DataAwsWafv2IpSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_ip_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._scope = config.scope;
        return _this;
    }
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "addresses", {
        // ==========
        // ATTRIBUTES
        // ==========
        // addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "ipAddressVersion", {
        // ip_address_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ip_address_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2IpSet.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsWafv2IpSet.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWafv2IpSet.tfResourceType = "aws_wafv2_ip_set";
    return DataAwsWafv2IpSet;
}(cdktf.TerraformDataSource));
exports.DataAwsWafv2IpSet = DataAwsWafv2IpSet;
