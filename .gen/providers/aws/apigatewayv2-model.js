"use strict";
// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html
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
exports.Apigatewayv2Model = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html aws_apigatewayv2_model}
*/
var Apigatewayv2Model = /** @class */ (function (_super) {
    __extends(Apigatewayv2Model, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html aws_apigatewayv2_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ModelConfig
    */
    function Apigatewayv2Model(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apigatewayv2_model',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._apiId = config.apiId;
        _this._contentType = config.contentType;
        _this._description = config.description;
        _this._name = config.name;
        _this._schema = config.schema;
        return _this;
    }
    Object.defineProperty(Apigatewayv2Model.prototype, "apiId", {
        get: function () {
            return this.getStringAttribute('api_id');
        },
        set: function (value) {
            this._apiId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "apiIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._apiId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "contentType", {
        get: function () {
            return this.getStringAttribute('content_type');
        },
        set: function (value) {
            this._contentType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "contentTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._contentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Apigatewayv2Model.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Apigatewayv2Model.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "schema", {
        get: function () {
            return this.getStringAttribute('schema');
        },
        set: function (value) {
            this._schema = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Apigatewayv2Model.prototype, "schemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Apigatewayv2Model.prototype.synthesizeAttributes = function () {
        return {
            api_id: cdktf.stringToTerraform(this._apiId),
            content_type: cdktf.stringToTerraform(this._contentType),
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            schema: cdktf.stringToTerraform(this._schema)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Apigatewayv2Model.tfResourceType = "aws_apigatewayv2_model";
    return Apigatewayv2Model;
}(cdktf.TerraformResource));
exports.Apigatewayv2Model = Apigatewayv2Model;
