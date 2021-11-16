"use strict";
// https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html
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
exports.DataAwsSsmParameter = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter}
*/
var DataAwsSsmParameter = /** @class */ (function (_super) {
    __extends(DataAwsSsmParameter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameter.html aws_ssm_parameter} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParameterConfig
    */
    function DataAwsSsmParameter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_parameter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._withDecryption = config.withDecryption;
        return _this;
    }
    Object.defineProperty(DataAwsSsmParameter.prototype, "arn", {
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
    Object.defineProperty(DataAwsSsmParameter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParameter.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParameter.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParameter.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParameter.prototype, "value", {
        // value - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('value');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParameter.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParameter.prototype, "withDecryption", {
        get: function () {
            return this.getBooleanAttribute('with_decryption');
        },
        set: function (value) {
            this._withDecryption = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmParameter.prototype.resetWithDecryption = function () {
        this._withDecryption = undefined;
    };
    Object.defineProperty(DataAwsSsmParameter.prototype, "withDecryptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._withDecryption;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSsmParameter.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            with_decryption: cdktf.booleanToTerraform(this._withDecryption)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSsmParameter.tfResourceType = "aws_ssm_parameter";
    return DataAwsSsmParameter;
}(cdktf.TerraformDataSource));
exports.DataAwsSsmParameter = DataAwsSsmParameter;
