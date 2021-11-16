"use strict";
// https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html
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
exports.DataAwsSsmParametersByPath = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html aws_ssm_parameters_by_path}
*/
var DataAwsSsmParametersByPath = /** @class */ (function (_super) {
    __extends(DataAwsSsmParametersByPath, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssm_parameters_by_path.html aws_ssm_parameters_by_path} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmParametersByPathConfig
    */
    function DataAwsSsmParametersByPath(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssm_parameters_by_path',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._path = config.path;
        _this._withDecryption = config.withDecryption;
        return _this;
    }
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "arns", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arns - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('arns');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "names", {
        // names - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('names');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "path", {
        get: function () {
            return this.getStringAttribute('path');
        },
        set: function (value) {
            this._path = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "pathInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._path;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "types", {
        // types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "values", {
        // values - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('values');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "withDecryption", {
        get: function () {
            return this.getBooleanAttribute('with_decryption');
        },
        set: function (value) {
            this._withDecryption = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsmParametersByPath.prototype.resetWithDecryption = function () {
        this._withDecryption = undefined;
    };
    Object.defineProperty(DataAwsSsmParametersByPath.prototype, "withDecryptionInput", {
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
    DataAwsSsmParametersByPath.prototype.synthesizeAttributes = function () {
        return {
            path: cdktf.stringToTerraform(this._path),
            with_decryption: cdktf.booleanToTerraform(this._withDecryption)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSsmParametersByPath.tfResourceType = "aws_ssm_parameters_by_path";
    return DataAwsSsmParametersByPath;
}(cdktf.TerraformDataSource));
exports.DataAwsSsmParametersByPath = DataAwsSsmParametersByPath;
