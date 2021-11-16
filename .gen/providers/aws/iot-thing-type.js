"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html
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
exports.IotThingType = void 0;
var cdktf = require("cdktf");
function iotThingTypePropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        description: cdktf.stringToTerraform(struct.description),
        searchable_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct.searchableAttributes)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type}
*/
var IotThingType = /** @class */ (function (_super) {
    __extends(IotThingType, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingTypeConfig
    */
    function IotThingType(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_thing_type',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._deprecated = config.deprecated;
        _this._name = config.name;
        _this._properties = config.properties;
        return _this;
    }
    Object.defineProperty(IotThingType.prototype, "arn", {
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
    Object.defineProperty(IotThingType.prototype, "deprecated", {
        get: function () {
            return this.getBooleanAttribute('deprecated');
        },
        set: function (value) {
            this._deprecated = value;
        },
        enumerable: false,
        configurable: true
    });
    IotThingType.prototype.resetDeprecated = function () {
        this._deprecated = undefined;
    };
    Object.defineProperty(IotThingType.prototype, "deprecatedInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deprecated;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingType.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingType.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingType.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThingType.prototype, "properties", {
        get: function () {
            return this.interpolationForAttribute('properties');
        },
        set: function (value) {
            this._properties = value;
        },
        enumerable: false,
        configurable: true
    });
    IotThingType.prototype.resetProperties = function () {
        this._properties = undefined;
    };
    Object.defineProperty(IotThingType.prototype, "propertiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._properties;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotThingType.prototype.synthesizeAttributes = function () {
        return {
            deprecated: cdktf.booleanToTerraform(this._deprecated),
            name: cdktf.stringToTerraform(this._name),
            properties: cdktf.listMapper(iotThingTypePropertiesToTerraform)(this._properties)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotThingType.tfResourceType = "aws_iot_thing_type";
    return IotThingType;
}(cdktf.TerraformResource));
exports.IotThingType = IotThingType;
