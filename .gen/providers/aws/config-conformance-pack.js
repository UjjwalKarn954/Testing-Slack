"use strict";
// https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html
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
exports.ConfigConformancePack = void 0;
var cdktf = require("cdktf");
function configConformancePackInputParameterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack}
*/
var ConfigConformancePack = /** @class */ (function (_super) {
    __extends(ConfigConformancePack, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConformancePackConfig
    */
    function ConfigConformancePack(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_config_conformance_pack',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deliveryS3Bucket = config.deliveryS3Bucket;
        _this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
        _this._name = config.name;
        _this._templateBody = config.templateBody;
        _this._templateS3Uri = config.templateS3Uri;
        _this._inputParameter = config.inputParameter;
        return _this;
    }
    Object.defineProperty(ConfigConformancePack.prototype, "arn", {
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
    Object.defineProperty(ConfigConformancePack.prototype, "deliveryS3Bucket", {
        get: function () {
            return this.getStringAttribute('delivery_s3_bucket');
        },
        set: function (value) {
            this._deliveryS3Bucket = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConformancePack.prototype.resetDeliveryS3Bucket = function () {
        this._deliveryS3Bucket = undefined;
    };
    Object.defineProperty(ConfigConformancePack.prototype, "deliveryS3BucketInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryS3Bucket;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "deliveryS3KeyPrefix", {
        get: function () {
            return this.getStringAttribute('delivery_s3_key_prefix');
        },
        set: function (value) {
            this._deliveryS3KeyPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConformancePack.prototype.resetDeliveryS3KeyPrefix = function () {
        this._deliveryS3KeyPrefix = undefined;
    };
    Object.defineProperty(ConfigConformancePack.prototype, "deliveryS3KeyPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deliveryS3KeyPrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "templateBody", {
        get: function () {
            return this.getStringAttribute('template_body');
        },
        set: function (value) {
            this._templateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConformancePack.prototype.resetTemplateBody = function () {
        this._templateBody = undefined;
    };
    Object.defineProperty(ConfigConformancePack.prototype, "templateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "templateS3Uri", {
        get: function () {
            return this.getStringAttribute('template_s3_uri');
        },
        set: function (value) {
            this._templateS3Uri = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConformancePack.prototype.resetTemplateS3Uri = function () {
        this._templateS3Uri = undefined;
    };
    Object.defineProperty(ConfigConformancePack.prototype, "templateS3UriInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateS3Uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigConformancePack.prototype, "inputParameter", {
        get: function () {
            return this.interpolationForAttribute('input_parameter');
        },
        set: function (value) {
            this._inputParameter = value;
        },
        enumerable: false,
        configurable: true
    });
    ConfigConformancePack.prototype.resetInputParameter = function () {
        this._inputParameter = undefined;
    };
    Object.defineProperty(ConfigConformancePack.prototype, "inputParameterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._inputParameter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    ConfigConformancePack.prototype.synthesizeAttributes = function () {
        return {
            delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
            delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
            name: cdktf.stringToTerraform(this._name),
            template_body: cdktf.stringToTerraform(this._templateBody),
            template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
            input_parameter: cdktf.listMapper(configConformancePackInputParameterToTerraform)(this._inputParameter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ConfigConformancePack.tfResourceType = "aws_config_conformance_pack";
    return ConfigConformancePack;
}(cdktf.TerraformResource));
exports.ConfigConformancePack = ConfigConformancePack;
