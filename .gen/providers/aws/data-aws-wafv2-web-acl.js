"use strict";
// https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html
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
exports.DataAwsWafv2WebAcl = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html aws_wafv2_web_acl}
*/
var DataAwsWafv2WebAcl = /** @class */ (function (_super) {
    __extends(DataAwsWafv2WebAcl, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafv2_web_acl.html aws_wafv2_web_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafv2WebAclConfig
    */
    function DataAwsWafv2WebAcl(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_web_acl',
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
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsWafv2WebAcl.prototype, "scopeInput", {
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
    DataAwsWafv2WebAcl.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsWafv2WebAcl.tfResourceType = "aws_wafv2_web_acl";
    return DataAwsWafv2WebAcl;
}(cdktf.TerraformDataSource));
exports.DataAwsWafv2WebAcl = DataAwsWafv2WebAcl;
