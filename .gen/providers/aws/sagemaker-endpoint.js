"use strict";
// https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html
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
exports.SagemakerEndpoint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint}
*/
var SagemakerEndpoint = /** @class */ (function (_super) {
    __extends(SagemakerEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfig
    */
    function SagemakerEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_sagemaker_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._endpointConfigName = config.endpointConfigName;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(SagemakerEndpoint.prototype, "arn", {
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
    Object.defineProperty(SagemakerEndpoint.prototype, "endpointConfigName", {
        get: function () {
            return this.getStringAttribute('endpoint_config_name');
        },
        set: function (value) {
            this._endpointConfigName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpoint.prototype, "endpointConfigNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointConfigName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpoint.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpoint.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SagemakerEndpoint.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SagemakerEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SagemakerEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SagemakerEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SagemakerEndpoint.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SagemakerEndpoint.prototype.synthesizeAttributes = function () {
        return {
            endpoint_config_name: cdktf.stringToTerraform(this._endpointConfigName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SagemakerEndpoint.tfResourceType = "aws_sagemaker_endpoint";
    return SagemakerEndpoint;
}(cdktf.TerraformResource));
exports.SagemakerEndpoint = SagemakerEndpoint;