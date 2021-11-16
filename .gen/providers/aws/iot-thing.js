"use strict";
// https://www.terraform.io/docs/providers/aws/r/iot_thing.html
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
exports.IotThing = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html aws_iot_thing}
*/
var IotThing = /** @class */ (function (_super) {
    __extends(IotThing, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html aws_iot_thing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingConfig
    */
    function IotThing(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_iot_thing',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._attributes = config.attributes;
        _this._name = config.name;
        _this._thingTypeName = config.thingTypeName;
        return _this;
    }
    Object.defineProperty(IotThing.prototype, "arn", {
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
    Object.defineProperty(IotThing.prototype, "attributes", {
        get: function () {
            return this.interpolationForAttribute('attributes');
        },
        set: function (value) {
            this._attributes = value;
        },
        enumerable: false,
        configurable: true
    });
    IotThing.prototype.resetAttributes = function () {
        this._attributes = undefined;
    };
    Object.defineProperty(IotThing.prototype, "attributesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThing.prototype, "defaultClientId", {
        // default_client_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('default_client_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThing.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThing.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThing.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThing.prototype, "thingTypeName", {
        get: function () {
            return this.getStringAttribute('thing_type_name');
        },
        set: function (value) {
            this._thingTypeName = value;
        },
        enumerable: false,
        configurable: true
    });
    IotThing.prototype.resetThingTypeName = function () {
        this._thingTypeName = undefined;
    };
    Object.defineProperty(IotThing.prototype, "thingTypeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._thingTypeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(IotThing.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    IotThing.prototype.synthesizeAttributes = function () {
        return {
            attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
            name: cdktf.stringToTerraform(this._name),
            thing_type_name: cdktf.stringToTerraform(this._thingTypeName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    IotThing.tfResourceType = "aws_iot_thing";
    return IotThing;
}(cdktf.TerraformResource));
exports.IotThing = IotThing;
