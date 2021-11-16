"use strict";
// https://www.terraform.io/docs/providers/aws/d/arn.html
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
exports.DataAwsArn = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn}
*/
var DataAwsArn = /** @class */ (function (_super) {
    __extends(DataAwsArn, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsArnConfig
    */
    function DataAwsArn(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_arn',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        return _this;
    }
    Object.defineProperty(DataAwsArn.prototype, "account", {
        // ==========
        // ATTRIBUTES
        // ==========
        // account - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('account');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "partition", {
        // partition - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('partition');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "region", {
        // region - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('region');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "resource", {
        // resource - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsArn.prototype, "service", {
        // service - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsArn.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsArn.tfResourceType = "aws_arn";
    return DataAwsArn;
}(cdktf.TerraformDataSource));
exports.DataAwsArn = DataAwsArn;
