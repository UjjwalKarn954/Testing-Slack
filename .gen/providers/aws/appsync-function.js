"use strict";
// https://www.terraform.io/docs/providers/aws/r/appsync_function.html
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
exports.AppsyncFunction = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html aws_appsync_function}
*/
var AppsyncFunction = /** @class */ (function (_super) {
    __extends(AppsyncFunction, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_function.html aws_appsync_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppsyncFunctionConfig
    */
    function AppsyncFunction(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appsync_function',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._dataSource = config.dataSource;
        _this._description = config.description;
        _this._functionVersion = config.functionVersion;
        _this._name = config.name;
        _this._requestMappingTemplate = config.requestMappingTemplate;
        _this._responseMappingTemplate = config.responseMappingTemplate;
        return _this;
    }
    Object.defineProperty(AppsyncFunction.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "dataSource", {
        get: function () {
            return this.getStringAttribute('data_source');
        },
        set: function (value) {
            this._dataSource = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "dataSourceInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dataSource;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncFunction.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(AppsyncFunction.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "functionId", {
        // function_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('function_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "functionVersion", {
        get: function () {
            return this.getStringAttribute('function_version');
        },
        set: function (value) {
            this._functionVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    AppsyncFunction.prototype.resetFunctionVersion = function () {
        this._functionVersion = undefined;
    };
    Object.defineProperty(AppsyncFunction.prototype, "functionVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "requestMappingTemplate", {
        get: function () {
            return this.getStringAttribute('request_mapping_template');
        },
        set: function (value) {
            this._requestMappingTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "requestMappingTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._requestMappingTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "responseMappingTemplate", {
        get: function () {
            return this.getStringAttribute('response_mapping_template');
        },
        set: function (value) {
            this._responseMappingTemplate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppsyncFunction.prototype, "responseMappingTemplateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._responseMappingTemplate;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppsyncFunction.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            data_source: cdktf.stringToTerraform(this._dataSource),
            description: cdktf.stringToTerraform(this._description),
            function_version: cdktf.stringToTerraform(this._functionVersion),
            name: cdktf.stringToTerraform(this._name),
            request_mapping_template: cdktf.stringToTerraform(this._requestMappingTemplate),
            response_mapping_template: cdktf.stringToTerraform(this._responseMappingTemplate)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppsyncFunction.tfResourceType = "aws_appsync_function";
    return AppsyncFunction;
}(cdktf.TerraformResource));
exports.AppsyncFunction = AppsyncFunction;
